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
      "Metal takes the raw and makes it exact. The Alchemist pursues form done right — order extracted from chaos, standards upheld whether or not anyone's checking, a private code for what counts as good work and good conduct. This archetype can be hard to get emotionally close to, composed almost by default, fair in its judgment of others but often harsher toward itself — when the standard isn't met, the Alchemist's first instinct is disappointment, not excuses. In Five-Phase terms, Metal is governed by the Lung, responsible for the body's basic rhythm of taking in and letting go, breath in and breath out — a fitting anchor for a type whose deepest tension is between holding on and releasing.",
      "Held too tightly, Metal's discipline stops serving the Alchemist and starts constraining it instead. Physically, that constraint tends to travel straight to the Lung's own rhythm: asthma, a chest that won't fully release a breath, constipation, skin and sinuses gone dry, a new sensitivity to shifts in temperature or humidity. All of it reads as the same inability — to exhale, to let something go, to stop holding a position after it's stopped being useful. The same rigidity narrows the Alchemist's inner life: feelings get suppressed rather than expressed, personal order can tip into rigid control over everyone nearby, and a need for correctness that starts as a strength can crowd out anyone who isn't equally precise, or push this type to lean on outside rules and experts when its own instincts start to feel unreliable.",
      "Run the Lung down instead of tightening it, and the body loses its rhythm altogether — hot spells alternating with cold, mucous membranes drying out, skin gone clammy, an itching or numbness with no clear cause, breath short, heartbeat uneven, digestion swinging between constipation and diarrhea. Underneath it, the Alchemist's famous self-control starts to look more like scaffolding than structure: the order this type usually maintains can slide into real disarray, replaced by an impulsiveness that's out of character, while a private self-doubt that perfectionism was papering over gets harder to keep hidden.",
      "What helps is deliberate release, aimed specifically at the skin and breath this type tends to hold rigid: aerobic movement, a high-fiber diet, steady rather than excessive fluid intake, and something as simple as dry brushing or massage to remind the skin it's allowed to feel something. Spontaneity that isn't scheduled in advance is harder for the Alchemist than it sounds, but it's exactly the release this archetype's precision needs to stay a strength instead of a cage.",
    ],
    keyCharacteristics: [
      "Disciplined, precise, and self-composed",
      "Holds itself — and often others — to a high standard",
      "Drawn to order, refinement, and getting the form right",
    ],
    typicalProblems: [
      "Asthma, constipation, dry skin or sinuses, shallow breathing",
      "Itching, numbness, or clammy skin when depleted",
      "Rigid self-control that tips into disarray or out-of-character impulsiveness",
    ],
    powerLine: "Metal's strength is how finely it refines. The work is remembering that release is part of the craft, not a failure of it.",
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
      "Water runs deep and mostly out of sight. The Philosopher is an imaginative mind with a serious, sometimes playful curiosity — the type that would rather spend an evening turning over a real question than make small talk about the weather. This archetype plans further ahead than most people bother to, which comes at a cost: a Philosopher lost in thought can struggle to actually land in the present moment, and mornings in particular can feel like surfacing from somewhere deep. In Five-Phase terms, Water is governed by the Kidney, considered in this framework to be the body's deepest reserve, the source everything else eventually draws from — which tracks with how much of this type's life happens below the surface.",
      "When that reserve stops moving the way it should, water in the literal sense can back up: retained fluid, a metabolism running slower than it should, a coldness that settles in and doesn't easily lift, blood vessels that stiffen and constrict under sustained cold rather than staying supple. Because Water is said to hold Fire in check, too much of this pattern leaves a person more sensitive to cold than usual and more emotionally withdrawn — pulling inward exactly when warmth or connection would help most. Grouchiness and a running list of minor aches tend to follow, along with a general dimming of enthusiasm for things that would normally interest this type.",
      "Draw on that reserve for too long without refilling it, and the depletion goes past tiredness. The Kidney is also linked, in this framework, to bones and teeth, so a long-depleted Water type may notice teeth and gums wearing down faster than expected, alongside a low-back ache, diminished libido, and a kind of hardening — in the arteries, and in temperament — that makes the Philosopher more guarded, more suspicious of other people's motives, and harder to reach than usual.",
      "Warmth, on purpose, counteracts most of this: regular exercise to keep blood moving and muscle tone up, real physical contact, and staying socially engaged even when solitude is the easier option — strong relationships are often what turns this type's ideas into anything the world actually gets to see. It also helps to go easy on the foods and habits that encourage the body to hold onto cold and fluid rather than move them along. The Philosopher's depth is a real asset; it only pays off once it reaches someone.",
    ],
    keyCharacteristics: [
      "Imaginative, introspective, and self-sufficient",
      "A planner who thinks several steps ahead",
      "Seeks understanding over being told",
    ],
    typicalProblems: [
      "Fluid retention, sluggish metabolism, persistent coldness",
      "Low-back ache, diminished libido, teeth and gum wear over time",
      "Withdrawal, suspicion, and grouchiness when depleted",
    ],
    powerLine: "Water's strength is how much it can hold without spilling. The work is remembering that some of it needs to move.",
  },
};

export const PHASE_ORDER: PhaseId[] = ["wood", "fire", "earth", "metal", "water"];
