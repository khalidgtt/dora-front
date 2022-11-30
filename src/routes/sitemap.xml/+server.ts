import { CANONICAL_URL, ENVIRONMENT } from "$lib/env";
import { SERVICE_STATUSES } from "$lib/schemas/service";
import { getPublishedServices } from "$lib/services";
import { getActiveStructures } from "$lib/structures";
import { error } from "@sveltejs/kit";

function toISODate(apiDate) {
  const date = new Date(apiDate).toISOString();
  return date.slice(0, date.indexOf("T"));
}

async function getServicesEntries() {
  const response = await getPublishedServices();

  return response
    .filter((s) => (s.status = SERVICE_STATUSES.published)) // Pas indispensable, mais c'est une sécurité supplémentaire
    .map((s) =>
      `<url>
      <loc>${CANONICAL_URL}/services/${s.slug}</loc>
      <lastmod>${toISODate(s.modificationDate)}</lastmod>
      <priority>0.5</priority>
    </url>`.trim()
    )
    .join("\n");
}

async function getStructuresEntries() {
  const response = await getActiveStructures();
  return response
    .map((s) =>
      `<url>
      <loc>${CANONICAL_URL}/structures/${s.slug}</loc>
      <lastmod>${toISODate(s.modificationDate)}</lastmod>
      <priority>0.7</priority>
    </url>`.trim()
    )
    .join("\n");
}

async function getContent() {
  const services = await getServicesEntries();
  const structures = await getStructuresEntries();
  const content = `
  <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${CANONICAL_URL}/</loc>
        <priority>1</priority>
      </url>
      ${structures}
      ${services}
    </urlset>`.trim();

  return content;
}

export async function GET() {
  const content = await getContent();
  if (ENVIRONMENT === "production" || ENVIRONMENT === "local") {
    return new Response(content, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } else {
    throw error(404, "Page Not Found");
  }
}