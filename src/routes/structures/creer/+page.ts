import { getStructuresOptions } from "$lib/structures";

// pages authentifiées sur lesquelles la première requête non authentifiée n'a pas de sens
export const ssr = false;

export async function load({ parent }) {
  await parent();

  return { structuresOptions: await getStructuresOptions() };
}
