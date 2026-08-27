export const SITE_TITLE = "The Meridian Atlas";
export const SITE_TAGLINE = "A Different Map of the Body";
export const SITE_DESCRIPTION =
  "Essays that hold Western medicine and Traditional Chinese Medicine side by side — written by a biology student who has studied both, across six cities and four continents.";

// Placeholder until the site has a real domain (see setup-runbook.md Step 6).
export const SITE_URL = "https://meridian-atlas.vercel.app";

export type SeriesSlug =
  | "foundations"
  | "kitchen-culture"
  | "biohacking"
  | "two-maps"
  | "womens-health"
  | "seasons"
  | "field-notes"
  | "glossary";

export const SERIES: { slug: SeriesSlug; name: string; blurb: string }[] = [
  {
    slug: "foundations",
    name: "Foundations",
    blurb: "The core ideas — Qi, Yin and Yang, the logic of the TCM map — explained from scratch.",
  },
  {
    slug: "kitchen-culture",
    name: "Kitchen & Culture",
    blurb: "Food through a TCM lens: what you eat, when, and why it matters more than what's in it.",
  },
  {
    slug: "biohacking",
    name: "Biohacking & Wellness Trends",
    blurb: "Smoothies, cold plunges, fasting — the trends of the moment, read against a three-thousand-year-old map.",
  },
  {
    slug: "two-maps",
    name: "Two Maps, One Body",
    blurb: "Common symptoms, explained through both the Western and TCM lens, side by side.",
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    blurb: "Cycles, fertility, and the body's rhythms — where TCM asks questions Western medicine often skips.",
  },
  {
    slug: "seasons",
    name: "Living with the Seasons",
    blurb: "Daily habits and Chinese wisdom for moving with the year instead of against it.",
  },
  {
    slug: "field-notes",
    name: "Field Notes",
    blurb: "Dispatches from clinics and markets in Taipei, Shanghai, Seoul, Tokyo, Buenos Aires, and San Francisco.",
  },
  {
    slug: "glossary",
    name: "Glossary & Concepts",
    blurb: "Short reference posts defining the terms used throughout the Atlas.",
  },
];

export const NAV_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
];
