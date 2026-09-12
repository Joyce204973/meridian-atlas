// Five-Phase archetype content for the quiz result screen and the
// /archetypes overview + detail pages.
//
// Written fresh for this site — structured after Joyce's own outline (which
// was itself adapted from Beinfield & Korngold's "Between Heaven and Earth,"
// Ch. 7-12) but none of the book's or the outline's phrasing reused, since
// both drew close enough to the source to risk reproducing it. Source is
// credited on the archetype pages rather than quoted from.
export type PhaseId = "wood" | "fire" | "earth" | "metal" | "water";

export interface PhaseInfo {
  id: PhaseId;
  phaseName: string;
  archetype: string;
  slug: string;
  season: string;
  teaser: string;
  description: string[];
  keyCharacteristics: string[];
  typicalProblems: string[];
  powerLine: string;
}

export const PHASES: Record<PhaseId, PhaseInfo> = {
  wood: {
    id: "wood",
    phaseName: "Wood",
    archetype: "The Pioneer",
    slug: "wood",
    season: "Spring",
    teaser: "Moves first and adjusts as it goes — thrives on challenge and momentum.",
    description: [
      "Wood breaks new ground. The Pioneer is the one who takes the path nobody's cleared yet — curious about what's on the other side, energized rather than intimidated by not knowing. Independence isn't a preference for the Pioneer, it's a requirement: movement, autonomy, and a clear target are what let this type do its best work. Spring is Wood's season for a reason — everything about this archetype leans toward growth, forward motion, and starting over.",
      "That same drive has an edge. When Wood is pushed too hard or blocked too long, the charge doesn't dissipate — it compounds, until it comes out sideways: a short fuse, tight shoulders, a headache that shows up right when the pressure does. Left unchecked, the Pioneer can tip into restlessness that never resolves — jumping to the next thing before the current one is finished, mistaking motion for progress.",
      "What helps: movement that isn't just intensity — stretching, not just sprinting. The Pioneer needs a clear reason to push, not just a habit of pushing. Engagement with a real purpose, paired with room to actually rest between efforts, keeps this archetype's best quality — momentum — from turning into burnout.",
    ],
    keyCharacteristics: [
      "Seeks challenge and performs well under pressure",
      "Drawn to novelty, skill, and a good adventure",
      "Energized by action and quick decisions",
    ],
    typicalProblems: [
      "Impatience and low tolerance for delay",
      "Emotional swings between extremes",
      "Tension headaches, tight muscles, restlessness",
    ],
    powerLine: "Wood's strength is how fast it can grow. The work is learning when to bend instead of push.",
  },
  fire: {
    id: "fire",
    phaseName: "Fire",
    archetype: "The Wizard",
    slug: "fire",
    season: "Summer",
    teaser: "Brings the room to life — warm, magnetic, fully in the moment.",
    description: [
      "Fire lights up a room without trying to. The Wizard finds the interesting thing in an ordinary moment and makes everyone else see it too — expressive, quick to connect, genuinely delighted by other people. This archetype reads a crowd like weather and moves with it, which is what makes it such a natural at bringing people together.",
      "The same openness that makes Fire magnetic also makes it easy to overload. Too much stimulation and the Wizard runs hot in every sense — wound up, unable to wind down, sleep getting harder exactly when it's needed most. What looks like boundless energy from the outside can, underneath, be running on empty: agitation standing in for exhaustion.",
      "What helps: real quiet, not just less noise — solitude the Wizard doesn't feel obligated to fill. Fewer stimulants, more water, more evenings with nothing scheduled. Fire doesn't dim by being contained; it lasts longer when it's given room to actually rest between burns.",
    ],
    keyCharacteristics: [
      "Expressive, warm, quick to connect",
      "Thrives on stimulation, intimacy, and company",
      "Reads people and rooms intuitively",
    ],
    typicalProblems: [
      "Overstimulation and racing thoughts",
      "Trouble winding down or sleeping",
      "Restlessness, palpitations, running hot",
    ],
    powerLine: "Fire's strength is how brightly it burns. The work is not burning out the source.",
  },
  earth: {
    id: "earth",
    phaseName: "Earth",
    archetype: "The Peacemaker",
    slug: "earth",
    season: "Late Summer",
    teaser: "Holds the room together — notices what people need before they ask.",
    description: [
      "Earth is the type a group runs through without realizing it. The Peacemaker reads a room's mood before anyone says a word, and reflexively smooths whatever's rough — a disagreement, an awkward silence, someone's bad day. Stability isn't just preferred here, it's the point: this archetype is steadiest when the people around it are steady too.",
      "The trouble is that all that giving has to come from somewhere. The Peacemaker is quick to set its own needs aside to keep the peace, and slow to ask for anything back — until there's nothing left to give from. That gap tends to show up as reaching for something quick and starchy to refill the tank, a stomach that's the first to react to stress, or a heaviness that settles in and doesn't lift.",
      "What helps: structure that doesn't depend on constant self-sacrifice — regular rhythms, food and rest on a real schedule, and permission to be the one who's taken care of sometimes. The Peacemaker's gift is holding things together; it works better when it isn't holding everything alone.",
    ],
    keyCharacteristics: [
      "Reads group dynamics instinctively",
      "Agreeable, accommodating, dependable",
      "Values harmony, loyalty, and steady ground",
    ],
    typicalProblems: [
      "Difficulty saying no",
      "Overcommitment that leaves little left over",
      "Sluggish digestion, water retention, low energy",
    ],
    powerLine: "Earth's strength is how much it can hold together. The work is not holding it alone.",
  },
  metal: {
    id: "metal",
    phaseName: "Metal",
    archetype: "The Alchemist",
    slug: "metal",
    season: "Autumn",
    teaser: "Refines everything it touches — precise, principled, private.",
    description: [
      "Metal takes the raw and makes it exact. The Alchemist is drawn to doing things correctly rather than quickly, to craftsmanship over convenience, and holds a standard — for itself most of all — that isn't always spoken out loud. There's real discipline here, and real taste: this archetype notices quality and detail that most people walk past.",
      "The same precision can turn inward and tighten. Held too rigidly, Metal's high bar becomes a source of quiet disappointment — in itself and in everyone else who doesn't meet it. Feelings get processed alone, sometimes for longer than they need to be, and the body tends to mirror that holding pattern: dry skin, tight breath, a system that doesn't loosen easily even when it's safe to.",
      "What helps: letting go on purpose — movement that isn't about performance, a little spontaneity that isn't scheduled in advance, contact with people that doesn't have to be perfectly composed. The Alchemist's gift is refinement; it needs somewhere to exhale.",
    ],
    keyCharacteristics: [
      "Precise, principled, high personal standards",
      "Values order, quality, and craftsmanship",
      "Self-contained and private",
    ],
    typicalProblems: [
      "Rigid self-criticism",
      "Difficulty relaxing standards",
      "Dry skin or sinuses, shallow breathing, tension",
    ],
    powerLine: "Metal's strength is how finely it refines. The work is knowing when something is already good enough.",
  },
  water: {
    id: "water",
    phaseName: "Water",
    archetype: "The Philosopher",
    slug: "water",
    season: "Winter",
    teaser: "Goes deep before it goes wide — thinks first, speaks later.",
    description: [
      "Water runs deep and mostly out of sight. The Philosopher is the type most at home alone with a real question — not small talk, but the kind of thinking that takes hours and doesn't mind being interrupted by nothing. This archetype trusts understanding over being told, and would rather sit with uncertainty a while longer than accept an answer that doesn't hold up.",
      "The cost of all that depth is distance. Left too long in its own head, Water can drift from the present moment entirely — mornings get harder to start, small aches get harder to ignore, and warmth, literal and otherwise, becomes something this type has to seek out rather than something that comes naturally. Withdrawal that starts as focus can slide into isolation.",
      "What helps: warmth on purpose — movement, contact, being around people even when solitude feels easier. The Philosopher's ideas are only as useful as the world that eventually hears them; staying reachable isn't a compromise of depth, it's what lets the depth go somewhere.",
    ],
    keyCharacteristics: [
      "Introspective and self-sufficient",
      "Drawn to understanding over being told",
      "Comfortable working alone for long stretches",
    ],
    typicalProblems: [
      "Emotional distance",
      "Isolation that goes unnoticed until it's severe",
      "Low energy, cold hands and feet, low back discomfort",
    ],
    powerLine: "Water's strength is how much it can hold without spilling. The work is letting some of it out.",
  },
};

export const PHASE_ORDER: PhaseId[] = ["wood", "fire", "earth", "metal", "water"];
