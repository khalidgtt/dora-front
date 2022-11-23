import { getServicesOptions } from "$lib/services";

export async function load({ url }) {
  const query = url.searchParams;
  const source = query.get("utm_source");

  return {
    servicesOptions: await getServicesOptions(),
    source,
  };
}
