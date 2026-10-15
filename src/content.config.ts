// Tells Astro what each kind of content looks like.
// - posts:    the log (Markdown files in src/content/posts/)
// - projects: the flagship work pages (Markdown files in src/content/projects/)
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),   // the one-line card text on the home page
    order: z.number(),     // 1 shows first
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
