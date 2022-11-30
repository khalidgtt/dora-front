import { getStructure } from "$lib/structures";
import { error } from "@sveltejs/kit";

export async function load({ url, parent }) {
  await parent();

  const structure = await getStructure(url.searchParams.get("structure"));
  let structureParent = null;
  if (!structure) {
    throw error(404, "Page Not Found");
  }

  if (structure.parent) {
    structureParent = await getStructure(structure.parent);
  }

  return { structure, parent: structureParent };
}