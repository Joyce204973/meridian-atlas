export const SITE_TITLE = "The Meridian Atlas";
export const SITE_TAGLINE = "A Different Map of the Body";
export const HERO_HEADLINE = "Know why before you try.";
export const HERO_SUBHEAD =
  "Wellness trends and everyday health problems, checked against peer-reviewed evidence and read through two medical systems: biomedicine and Chinese medicine. The Meridian Atlas holds the two maps of human health side by side, showing where they agree and where they disagree.";
export const SITE_DESCRIPTION =
  "Wellness trends and everyday health problems, checked against peer-reviewed evidence and read through two medical systems: biomedicine and Chinese medicine.";

// Placeholder until the site has a real domain (see setup-runbook.md Step 6).
export const SITE_URL = "https://meridian-atlas.vercel.app";

export type SeriesSlug =
  | "foundations"
  | "tcm-kitchen"
  | "uncover-why"
  | "womens-health"
  | "life-hacks";

export const SERIES: { slug: SeriesSlug; name: string; blurb: string }[] = [
  {
    slug: "foundations",
    name: "Foundations",
    blurb: "The map behind everything else: how each system defines the body, illness, and health, and what the evidence says about its tools.",
  },
  {
    slug: "tcm-kitchen",
    name: "TCM Kitchen",
    blurb: "Food and eating habits read twice: what the nutrition research says, and what Chinese medicine asks about the person eating.",
  },
  {
    slug: "uncover-why",
    name: "Uncover Why",
    blurb: "Wellness trends and health problems, checked against the evidence and then explained: should you do it, and why?",
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    blurb: "Cycles, hormones, and contraception: what Western medicine measures and what Chinese medicine notices.",
  },
  {
    slug: "life-hacks",
    name: "Chinese Medicine Life Hacks",
    blurb: "Everyday habits from Chinese medicine, put up against the evidence.",
  },
];

export const NAV_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/archetype-quiz", label: "Quiz" },
  { href: "/about", label: "About" },
];
