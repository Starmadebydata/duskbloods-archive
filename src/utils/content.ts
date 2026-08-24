import { getCollection, type CollectionEntry } from 'astro:content';

export async function getGuideBySlug(slug: string): Promise<CollectionEntry<'guides'>> {
  const all = await getCollection('guides', ({ data }) => !data.draft);
  const entry = all.find((item) => item.data.slug === slug);
  if (!entry) throw new Error(`Missing guide: ${slug}`);
  return entry;
}

export async function getPolicyBySlug(slug: string): Promise<CollectionEntry<'policies'>> {
  const all = await getCollection('policies', ({ data }) => !data.draft);
  const entry = all.find((item) => item.data.slug === slug);
  if (!entry) throw new Error(`Missing policy: ${slug}`);
  return entry;
}
