import qs from "qs";

const BASE = process.env.STRAPI_URL!;
const TOKEN = process.env.STRAPI_API_TOKEN;

export async function strapiFetch<T>(path: string, query?: Record<string, any>, init?: RequestInit): Promise<T> {
  const q = query ? `?${qs.stringify(query, { encodeValuesOnly: true })}` : "";
  const res = await fetch(`${BASE}/api/${path}${q}`, {
    headers: { ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}) },
    cache: "no-store",
    ...init,
  });
  if (!res.ok) throw new Error(`Strapi ${path} ${res.status}`);
  return res.json() as Promise<T>;
}

/** Example usage (once you create these in Strapi):
 * const projects = await strapiFetch<StrapiResponse<Project>>("projects", { populate: ["cover"], sort: ["rank:asc"] });
 */
