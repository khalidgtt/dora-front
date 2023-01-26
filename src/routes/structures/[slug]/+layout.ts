import { getStructure } from "$lib/requests/structures";
import { userInfo, type UserInfo } from "$lib/utils/auth";
import { trackStructure } from "$lib/utils/plausible";
import { userPreferences, type UserPreferences } from "$lib/utils/preferences";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";
import { structure } from "./store";

export const load: LayoutLoad = async ({ params, parent }) => {
  await parent();

  const currentStructure = await getStructure(params.slug);
  let preferences: UserPreferences;
  let info: UserInfo;

  userPreferences.subscribe((pref) => {
    preferences = pref;
  });

  userInfo.subscribe((newUserInfo: UserInfo) => {
    info = newUserInfo;
  });

  if (info && preferences) {
    const userStructuresSlugs = [
      ...info.pendingStructures,
      ...info.structures,
    ].map((struct) => struct.slug);

    if (userStructuresSlugs.includes(currentStructure.slug)) {
      const slugIndex = preferences.visitedStructures.indexOf(
        currentStructure.slug
      );

      if (slugIndex > 0) {
        preferences.visitedStructures.splice(slugIndex, 1);
      }

      preferences.visitedStructures.unshift(currentStructure.slug);

      localStorage.setItem(
        "visitedStructures",
        JSON.stringify(preferences.visitedStructures)
      );

      userPreferences.set(preferences);
    }
  }

  if (!currentStructure) {
    throw error(404, "Page Not Found");
  }

  // TODO: can we get rid of this store, and just cascade the structure?
  structure.set(currentStructure);
  trackStructure(currentStructure);

  return {
    structure: currentStructure,
  };
};
