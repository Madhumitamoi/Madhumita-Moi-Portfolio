import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    year: z.string(),
    status: z.string().default('In progress'),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    company: z.string().optional(),
    outcome: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readTime: z.string(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    order: z.number(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string().optional(),
    summary: z.string(),
    technologies: z.array(z.string()),
    selectedWork: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/about' }),
  schema: z.object({
    intro: z.string(),
    story: z.array(z.string()),
    values: z.array(z.string()),
    outsideWork: z.string(),
  }),
});

export const collections = { projects, notes, experience, about };
