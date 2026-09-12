// Five-Phase archetype content for the quiz result screen and the
// /archetypes overview + detail pages.
//
// Written fresh for this site — structured after Joyce's own outline (which
// was itself adapted from Beinfield & Korngold's "Between Heaven and Earth,"
// Ch. 7-12) but none of the book's or the outline's phrasing reused, since
// both drew close enough to the source to risk reproducing it. The organ
// correspondences and excess/deficiency symptom patterns are standard
// Five-Phase clinical content (facts, not the book's expression of them),
// restated here in original sentences. Source is credited on the
// archetype pages rather than quoted from.
export type PhaseId = "wood" | "fire" | "earth" | "metal" | "water";

export interface PhaseInfo {
  id: PhaseId;
  phaseName: string;
  archetype: string;
  slug: string;
  season: string;
  organ: string;
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
    organ: "Liver",
    teaser: "Moves first and adjusts as it goes — thrives on challenge and momentum.",
    description: [
      "Wood breaks new ground. The Pioneer is the type that takes the path nobody's cleared yet — curious about what's on the other side, energized rather than intimidated by not knowing. Independence isn't a preference for this archetype, it's closer to a requirement: movement, autonomy, and a clear target are what let it do its best work. In Five-Phase terms, Wood is governed by the Liver, the organ network responsible for keeping Qi moving smoothly through the whole system — which tracks with how central motion is to this type's whole temperament.",
      "When Liver Qi runs into excess, it doesn't just intensify the Pioneer's drive, it turns it volatile. Momentum that's been blocked builds like pressure with nowhere to go, until it releases sideways — a short temper, a tension headache, a muscle spasm that seems to come out of nowhere. Left unaddressed, this rising pattern can show up as elevated blood pressure, inflamed nerves, or pain that migrates from one part of the body to another: the physical signature of energy that built up faster than it could be spent.",
      "Push a Pioneer past what even Wood can sustain, and the pattern flips — Liver Qi collapses instead of surging. What looks from the outside like the same restlessness is now running on empty: scattered focus, a wired-but-depleted quality, irritability without the usual fuel behind it. The body tends to run hot and dry at this stage even as the person feels drained, which is part of why pushing harder — this type's default response to almost everything — tends to make an exhausted pattern worse rather than better.",
      "What helps isn't less movement, it's better-shaped movement: stretching and exercise that loosens rather than just burns, so Qi actually circulates instead of building pressure in one direction. A real purpose to push toward matters more for Wood than for most types — this archetype does its best work engaged, not idle — but it needs genuine recovery between efforts, or the engine that makes it a Pioneer runs itself down.",
    ],
    keyCharacteristics: [
      "Seeks challenge and performs well under pressure",
      "Drawn to novelty, skill, and a good adventure",
      "Energized by action and quick decisions",
    ],
    typicalProblems: [
      "Explosive frustration when blocked or delayed",
      "Tension headaches, muscle spasms, migratory pain",
      "Exhausted, wired-but-depleted irritability under prolonged pressure",
    ],
    powerLine: "Wood's strength is how fast it can grow. The work is learning when to bend instead of push.",
  },
  fire: {
    id: "fire",
    phaseName: "Fire",
    archetype: "The Wizard",
    slug: "fire",
    season: "Summer",
    organ: "Heart",
    teaser: "Brings the room to life — warm, magnetic, fully in the moment.",
    description: [
      "Fire lights up a room without trying to. The Wizard is expressive, quick to connect, and genuinely delighted by other people — the type that finds the interesting thing in an ordinary moment and makes everyone else see it too. In Five-Phase terms, Fire is governed by the Heart, which in Chinese medicine is said to house shen — often translated as spirit, or the part of the mind that stays clear and present. That's part of why this type is so easy to read: whatever's happening internally tends to surface almost immediately.",
      "When Heart Qi runs too strong, the Wizard's openness tips into being unguarded in a more literal sense — the body's usual boundaries seem to loosen. This can show up as night sweats, a persistent thirst, restlessness that doesn't respond to reassurance, or soreness and inflammation that settles into the joints, eyes, or tongue. Because the Heart is said to house shen, too much fire here can also blur mental clarity: racing thoughts, a mind that won't settle, perception that feels faintly unreliable.",
      "Enough overstimulation, and Fire burns through its own reserves. What follows isn't calm, it's exhaustion wearing the costume of overwhelm — sleep that won't come even though the body is tired, a nervous system too keyed up to recharge, hyperactivity that can't hold focus on any one thing. Underneath it, this framework would say, is something closer to fear: a depleted Wizard looks less magnetic and more genuinely rattled, doubting things it would normally take for granted.",
      "Fire needs real quiet, not just less stimulation — solitude this type doesn't feel obligated to fill with anyone else. Plenty of water, fewer stimulants like caffeine or alcohol, and evenings with nothing scheduled do more for this archetype than anything aimed at calming down in the moment. The brightness isn't the problem; it's making sure there's enough fuel behind it to keep burning.",
    ],
    keyCharacteristics: [
      "Expressive, warm, quick to connect",
      "Thrives on stimulation, intimacy, and company",
      "Reads people and rooms intuitively",
    ],
    typicalProblems: [
      "Night sweats, thirst, restlessness, joint or eye inflammation",
      "Racing thoughts and difficulty holding mental focus",
      "Insomnia and a keyed-up exhaustion that resists winding down",
    ],
    powerLine: "Fire's strength is how brightly it burns. The work is not burning out the source.",
  },
  earth: {
    id: "earth",
    phaseName: "Earth",
    archetype: "The Peacemaker",
    slug: "earth",
    season: "Late Summer",
    organ: "Spleen",
    teaser: "Holds the room together — notices what people need before they ask.",
    description: [
      "Earth is the type a group runs through without realizing it. The Peacemaker reads a room's mood before anyone says a word and reflexively smooths whatever's rough. In Five-Phase terms, Earth is governed by the Spleen, the organ network responsible for transforming food — and, by extension, experience — into usable energy, which fits a type whose whole orientation is toward taking things in and turning them into something the people around it can use.",
      "When the Spleen is overtaxed, its work of transformation stalls, and what doesn't get processed accumulates as what Chinese medicine calls dampness — a heaviness that shows up as bloating, water retention, or swelling, especially through the lower body. Qi and blood move sluggishly under this pattern, which can leave a Peacemaker feeling foggy or stuck even while, outwardly, it's still holding everything together for everyone else.",
      "A Spleen pushed past its capacity doesn't stall so much as give out: digestion turns unpredictable, energy arrives in short bursts instead of a steady supply, and the Peacemaker starts cycling between overdoing it and crashing — overcommitting, running dry, reaching for something quick and starchy to get back up to speed. Skipping meals or over-restricting to compensate tends to deepen this cycle rather than fix it, since it adds depletion to a system that's already running short.",
      "This type does better with rhythm than with willpower — meals and rest on a real schedule, rather than whatever's left over after everyone else has been taken care of. Earth's gift is holding things together; it holds up longer on steady input than on bursts of giving followed by collapse.",
    ],
    keyCharacteristics: [
      "Reads group dynamics instinctively",
      "Agreeable, accommodating, dependable",
      "Values harmony, loyalty, and steady ground",
    ],
    typicalProblems: [
      "Bloating, water retention, and lower-body swelling",
      "Foggy, sluggish energy despite outward composure",
      "Feast-and-crash cycles of overcommitment and depletion",
    ],
    powerLine: "Earth's strength is how much it can hold together. The work is not holding it alone.",
  },
  metal: {
    id: "metal",
    phaseName: "Metal",
    archetype: "The Alchemist",
    slug: "metal",
    season: "Autumn",
    organ: "Lung",
    teaser: "Refines everything it touches — precise, principled, private.",
    description: [
      "Metal takes the raw and makes it exact. The Alchemist is drawn to doing things correctly over doing them quickly, to craftsmanship over convenience, and holds a standard — for itself most of all — that isn't always spoken out loud. In Five-Phase terms, Metal is governed by the Lung, responsible for the rhythm of breath and, by extension, the body's basic rhythm of taking in and letting go.",
      "When Lung Qi tightens too far, the Alchemist's discipline turns into a kind of bracing — the body holds instead of releasing. This can show up as shallow breathing, dry skin or sinuses, constipation, or an oversensitivity to shifts in temperature and humidity: the physical version of an inability to exhale and let something go. Left unaddressed, an overly restrained Lung pattern can also cool the systems it normally supports, leaving the Alchemist more emotionally closed off than usual.",
      "When Lung Qi runs out instead of tightening, the body loses its steadiness rather than its openness — alternating hot and cold, dry mucous membranes, clammy skin, a heartbeat that feels irregular, breath that's short. Underneath it, the Alchemist tends to carry a sadness with no obvious cause, or a giddiness that doesn't quite land as joy — both signs that the system's rhythm has come loose rather than simply run down.",
      "What helps is deliberate release: aerobic movement, a diet with enough fiber to keep things actually moving, and — harder for this type than it sounds — spontaneity that isn't scheduled in advance. The Alchemist's precision is real and valuable; it just needs somewhere it's allowed to exhale.",
    ],
    keyCharacteristics: [
      "Precise, principled, high personal standards",
      "Values order, quality, and craftsmanship",
      "Self-contained and private",
    ],
    typicalProblems: [
      "Shallow breathing, dry skin or sinuses, constipation",
      "Emotional withdrawal under prolonged self-restraint",
      "Unexplained sadness or brittle, unlanded giddiness when depleted",
    ],
    powerLine: "Metal's strength is how finely it refines. The work is knowing when something is already good enough.",
  },
  water: {
    id: "water",
    phaseName: "Water",
    archetype: "The Philosopher",
    slug: "water",
    season: "Winter",
    organ: "Kidney",
    teaser: "Goes deep before it goes wide — thinks first, speaks later.",
    description: [
      "Water runs deep and mostly out of sight. The Philosopher is the type most at home alone with a real question — not small talk, but the kind of thinking that takes hours and doesn't mind being interrupted by nothing. In Five-Phase terms, Water is governed by the Kidney, considered in this framework to be the body's deepest reserve, the source everything else eventually draws from.",
      "When that reserve isn't moving the way it should, water in the more literal sense can back up — fluid retention, a metabolism that runs slower than it should, a coldness that settles into the body and doesn't easily lift. Because Water is said to hold Fire in check, too much of this pattern can leave a person more sensitive to cold than usual, and more emotionally withdrawn — pulling further inward exactly when connection would help most.",
      "Draw on that reserve for too long without refilling it, and the depletion shows up as more than tiredness: diminished libido, an ache that settles into the low back or joints, a kind of hardening — physical and emotional both — that makes the Philosopher harder to reach and slower to trust. This is Water's version of running on empty: not agitated like an exhausted Fire type, just increasingly sealed off.",
      "Warmth, on purpose, is what counteracts this — movement, physical contact, staying in the loop with people even when solitude feels easier. The Philosopher's depth is a real asset, but it only pays off if it eventually reaches someone; staying reachable isn't a compromise of it, it's what lets the depth go somewhere.",
    ],
    keyCharacteristics: [
      "Introspective and self-sufficient",
      "Drawn to understanding over being told",
      "Comfortable working alone for long stretches",
    ],
    typicalProblems: [
      "Fluid retention, low metabolism, persistent coldness",
      "Low back or joint aches, diminished libido",
      "Emotional withdrawal that hardens into isolation",
    ],
    powerLine: "Water's strength is how much it can hold without spilling. The work is letting some of it out.",
  },
};

export const PHASE_ORDER: PhaseId[] = ["wood", "fire", "earth", "metal", "water"];
