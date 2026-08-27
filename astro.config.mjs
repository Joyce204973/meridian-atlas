// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkReadingTime from "remark-reading-time";

import { SITE_URL } from "./src/consts.ts";
import remarkExposeReadingTime from "./src/lib/remark-expose-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), mdx()],
  markdown: {
    // mdx() inherits this processor, so both .md and .mdx posts get reading time.
    processor: unified({
      remarkPlugins: [remarkReadingTime, remarkExposeReadingTime],
    }),
  },
});
