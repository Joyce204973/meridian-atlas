import type { PhaseId } from "./archetypes";

export interface QuizStatement {
  id: string;
  phase: PhaseId;
  text: string;
}

// Original statements written for this site, structured after the
// psychological + physiological self-assessment method in Beinfield &
// Korngold's "Between Heaven and Earth" (Ch. 7) — same five-phase framework
// and scoring logic, none of the book's own wording reused.
export const QUIZ_STATEMENTS: QuizStatement[] = [
  { id: "w1", phase: "wood", text: "I'd rather move fast and adjust course than wait for certainty." },
  { id: "f1", phase: "fire", text: "I feel most myself in the middle of a lively room." },
  { id: "e1", phase: "earth", text: "I notice when a group's mood shifts before anyone says anything." },
  { id: "m1", phase: "metal", text: "I'd rather do something exactly right than do it quickly." },
  { id: "wa1", phase: "water", text: "I need real solitude to recharge, not just quiet company." },

  { id: "w2", phase: "wood", text: "Being blocked or delayed frustrates me more than it seems to bother most people." },
  { id: "f2", phase: "fire", text: "My mood shows on my face before I say a word." },
  { id: "e2", phase: "earth", text: "I'll set aside what I want to keep things comfortable for everyone." },
  { id: "m2", phase: "metal", text: "A cluttered or disordered space affects my mood more than I'd like to admit." },
  { id: "wa2", phase: "water", text: "I'd rather understand why something is true than be told that it is." },

  { id: "w3", phase: "wood", text: "I take the lead without waiting to be asked." },
  { id: "f3", phase: "fire", text: "I say yes to new experiences first and think it through after." },
  { id: "e3", phase: "earth", text: "People bring me their problems, and I don't mind holding them." },
  { id: "m3", phase: "metal", text: "I hold myself to a high standard, quietly, without announcing it." },
  { id: "wa3", phase: "water", text: "I keep my inner world mostly to myself, even with people I trust." },

  { id: "w4", phase: "wood", text: "Competition sharpens my focus rather than stressing me out." },
  { id: "f4", phase: "fire", text: "Losing closeness with someone hits me harder than most things do." },
  { id: "e4", phase: "earth", text: "I worry about people I care about even without a clear reason to." },
  { id: "m4", phase: "metal", text: "I sit with difficult feelings alone before I'm ready to talk about them." },
  { id: "wa4", phase: "water", text: "Uncertainty makes me want to gather more information before I'll act." },

  { id: "w5", phase: "wood", text: "Tension collects in my neck, jaw, or shoulders when I'm under pressure." },
  { id: "f5", phase: "fire", text: "I run warm — I'm often the one who's too hot when everyone else is fine." },
  { id: "e5", phase: "earth", text: "My energy dips in the afternoon and I crave something starchy or sweet." },
  { id: "m5", phase: "metal", text: "My skin, sinuses, or breathing act up when the season or the air changes." },
  { id: "wa5", phase: "water", text: "Fatigue settles into my lower back or knees before anywhere else." },

  { id: "w6", phase: "wood", text: "My eyes get tired, dry, or strained before the rest of me feels it." },
  { id: "f6", phase: "fire", text: "My mind races and sleep gets harder when I'm excited or wound up." },
  { id: "e6", phase: "earth", text: "My stomach or digestion is the first thing to react when I'm stressed." },
  { id: "m6", phase: "metal", text: "I notice dryness — skin, throat, or nose — before other symptoms show up." },
  { id: "wa6", phase: "water", text: "I run low on reserves quietly, without much warning, until I crash." },
];
