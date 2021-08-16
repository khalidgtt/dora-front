import { get } from "svelte/store";

import { getApiURL, htmlToMarkdown } from "$lib/utils";
import { token } from "$lib/auth";

export async function submit(structure, modify = false) {
  structure.fullDesc = htmlToMarkdown(structure.fullDesc);
  const url = modify
    ? `${getApiURL()}/structures/${structure.slug}/`
    : `${getApiURL()}/structures/`;
  const method = modify ? "PATCH" : "POST";
  const res = await fetch(url, {
    method: method,
    headers: {
      Accept: "application/json; version=1.0",
      "Content-Type": "application/json",

      Authorization: `Token ${get(token)}`,
    },
    body: JSON.stringify(structure),
  });

  const result = {
    ok: res.ok,
    status: res.status,
  };
  if (res.ok) {
    result.result = await res.json();
  } else {
    try {
      result.error = await res.json();
    } catch (err) {
      console.error(err);
    }
  }
  return result;
}