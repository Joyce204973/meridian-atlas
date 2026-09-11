// Five-Phase archetype metadata for the "Find Your TCM Archetype" quiz.
// Teasers below are short placeholders — replace once the full archetype
// writing (characteristics, significance, etc.) is ready, and this file
// becomes the source the /archetypes overview + detail pages read from.
export type PhaseId = "wood" | "fire" | "earth" | "metal" | "water";

export interface PhaseInfo {
  id: PhaseId;
  phaseName: string;
  archetype: string;
  slug: string;
  teaser: string;
}

export const PHASES: Record<PhaseId, PhaseInfo> = {
  wood: {
    id: "wood",
    phaseName: "Wood",
    archetype: "The Pioneer",
    slug: "wood",
    teaser: "You move first and adjust as you go.",
  },
  fire: {
    id: "fire",
    phaseName: "Fire",
    archetype: "The Wizard",
    slug: "fire",
    teaser: "You bring warmth, momentum, and connection into a room.",
  },
  earth: {
    id: "earth",
    phaseName: "Earth",
    archetype: "The Peacemaker",
    slug: "earth",
    teaser: "You hold people and plans together.",
  },
  metal: {
    id: "metal",
    phaseName: "Metal",
    archetype: "The Alchemist",
    slug: "metal",
    teaser: "You refine things until they're right.",
  },
  water: {
    id: "water",
    phaseName: "Water",
    archetype: "The Philosopher",
    slug: "water",
    teaser: "You go deep before you go wide.",
  },
};

export const PHASE_ORDER: PhaseId[] = ["wood", "fire", "earth", "metal", "water"];
