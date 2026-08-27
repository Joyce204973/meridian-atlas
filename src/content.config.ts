import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const SERIES = [
  "foundations",
  "kitchen-culture",
  "biohacking",
  "two-maps",
  "womens-health",
  "seasons",
  "field-notes",
  "glossary",
] as const;

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      series: z.enum(SERIES),
      description: z.string().max(160),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      pullQuote: z.string(),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      heroCredit: z.string().optional(),
      draft: z.boolean().default(true),
      related: z.array(z.string()).default([]),
    }),
});

export const collections = { posts };
