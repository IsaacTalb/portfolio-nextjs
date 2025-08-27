export type StrapiImage = { url: string; width: number; height: number; alternativeText?: string };
export type StrapiFile = { url: string; name: string; };
export type StrapiItem<T> = { id: number; attributes: T & { createdAt: string; updatedAt: string; publishedAt?: string } };
export type StrapiResponse<T> = { data: StrapiItem<T>[] };
