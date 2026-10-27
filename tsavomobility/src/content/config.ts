import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/services" }), // Changed path
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().url(),
    category: z.enum(['residential', 'office', 'hospitality', 'commercial']),
  }),
});

const works = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/works" }), // Changed path
  schema: z.object({
    title: z.string(),
    category: z.enum(['residential', 'office', 'hospitality', 'commercial']),
    image: z.string().url(),
    link: z.string().default('#'),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/settings" }), // Changed path
  schema: z.object({
    phone: z.string(),
    email: z.string().email(),
    hours: z.string(),
    navigation: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })),
  }),
});

export const collections = { services, works, settings };
