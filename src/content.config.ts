import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const source = z.object({
  name: z.string(),
  url: z.string().url(),
  publisher: z.string(),
  type: z.enum(['official', 'support', 'official-media', 'reporting', 'community']),
  publishedAt: z.string(),
  accessedAt: z.string(),
  supports: z.string()
});

const change = z.object({
  date: z.string(),
  summary: z.string()
});

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  pageType: z.enum(['home', 'status', 'guide', 'reference', 'policy']),
  primaryIntent: z.string(),
  status: z.enum(['confirmed', 'test-build', 'player-reported', 'unconfirmed']),
  publishedAt: z.string(),
  updatedAt: z.string(),
  lastCheckedAt: z.string(),
  primarySource: z.string(),
  primarySourceUrl: z.string().url(),
  sources: z.array(source).min(1),
  directAnswer: z.string(),
  relatedSlugs: z.array(z.string()),
  changeLog: z.array(change).default([]),
  draft: z.boolean().default(false),
  noindex: z.boolean().default(false),
  still: z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string()
  }).optional(),
  stills: z.array(z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string()
  })).optional()
});

export const collections = {
  guides: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
    schema: pageSchema
  }),
  policies: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/policies' }),
    schema: pageSchema
  })
};
