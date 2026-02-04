// app/city/cities.ts

export type CitySlug =
  | "london"
  | "paris"
  | "barcelona"
  | "madrid"
  | "amsterdam"
  | "rome";

export type CityGuide = {
  slug: CitySlug;
  name: string;
  kicker: string; // short line under title
  seoTitle: string;
  seoDescription: string;

  links: {
    gyg: string;
    tiqets: string;
  };

  highlights: Array<{ title: string; body: string }>;

  sections: {
    gettingThere: string[];
    whereToStay: Array<{ title: string; body: string }>;
    gettingAround: string[];
    matchday: string[];
    topThings: Array<{ title: string; body: string }>;
    itinerary48h: Array<{ day: string; body: string }>;
    faq: Array<{ q: string; a: string }>;
  };
};

const TIQETS_URL = "https://tiqets.tpm.lv/GTLRfZIU";

export const CITY_GUIDES: Record<CitySlug, CityGuide> = {
  london: {
    slug: "london",
    name: "London",
    kicker:
      "The easiest football city break in Europe for UK travellers: fast connections, endless neighbourhood choices, and enough to do even if kickoff times move.",
    seoTitle: "London Football City Break Guide (2026) | YourNextAway",
    seoDescription:
      "Plan a London football weekend: best areas to stay, airport/rail transfers, getting around, what to do, and a realistic 48-hour itinerary built around match timings.",
    links: {
      gyg: "https://www.getyourguide.com/en-gb/london-l57/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_london",
      tiqets: TIQETS_URL,
    },
    highlights: [
      {
        title: "Best Base for a First Visit",
        body: "West End / Soho / Covent Garden — walkable, central, and perfect for a weekend that mixes football + sightseeing.",
      },
      {
        title: "Best Value Areas",
        body: "Paddington / King’s Cross / Stratford — great transport, lots of hotels, and easier pricing than prime central.",
      },
      {
        title: "Biggest Planning Risk",
        body: "London is large. Don’t book a “cheap” hotel that turns every journey into 45–60 minutes. Central transport access matters more than the room.",
      },
    ],
    sections: {
      gettingThere: [
        "Train: If you’re already in the UK, rail is usually the simplest. Aim to arrive with buffer if you’ve got a tight match schedule.",
        "Flying In: Heathrow and Gatwick are the most common for international arrivals. City access is strong, but allow time for transfers.",
        "Time Buffers: If the match time isn’t fully confirmed, avoid arriving on the day with a tight margin. London travel is reliable overall — but it’s still a big city.",
      ],
      whereToStay: [
        {
          title: "West End / Soho / Covent Garden (Best All-Round)",
          body: "Best for first-timers and short stays. You’ll be close to dining, theatre, and key transport. Expect higher prices but the city-break experience is effortless.",
        },
        {
          title: "South Bank / Waterloo (Walkable, Central)",
          body: "Strong for sightseeing and simple transport. Great for a weekend plan that includes museums, riverside walks, and quick connections across the city.",
        },
        {
          title: "Paddington (Transport + Hotel Density)",
          body: "Practical base with loads of hotels and quick rail/Underground links. Great if you prioritise convenience over nightlife on your doorstep.",
        },
        {
          title: "King’s Cross / St Pancras (Connections)",
          body: "Ideal if you want a “plug in and move” base: national rail, Eurostar, Underground, and easy access to multiple zones.",
        },
        {
          title: "Shoreditch / Spitalfields (Food + Vibe)",
          body: "Strong nightlife/food scene. Great for groups who want evenings sorted and don’t mind a short ride into the West End.",
        },
        {
          title: "Stratford (Value + Links)",
          body: "Often better value with solid transport. A good option if central is priced out — just check your specific matchday journey time.",
        },
      ],
      gettingAround: [
        "Pay-As-You-Go: Using contactless or an Oyster card is usually the easiest option.",
        "Matchday Timing: Aim to arrive in the stadium area early. London travel is good, but crowd peaks are real.",
        "Late Return: If you’re finishing late, make sure your route back isn’t multiple changes. Direct lines reduce stress.",
      ],
      matchday: [
        "Buffer Everything: In London you can make almost any plan work — if you leave time. Don’t schedule attractions right up to kickoff.",
        "Food Plan: Eat earlier than you think. Matchday crowds make “quick bites” slower.",
        "Kickoff Changes: If the fixture time isn’t confirmed, keep hotels and travel flexible.",
      ],
      topThings: [
        { title: "British Museum", body: "A top rainy-day win. Easy to fit around almost any itinerary." },
        { title: "Tower of London + Tower Bridge", body: "Classic first-visit pairing." },
        { title: "Westminster (Big Ben + Abbey)", body: "Best done early to avoid crowds." },
        { title: "South Bank Walk", body: "Low effort, high payoff. Great at sunset." },
        { title: "National Gallery (Trafalgar Square)", body: "Central and easy to drop in." },
        { title: "Camden", body: "Markets + food + people-watching." },
        { title: "Borough Market", body: "Perfect for a flexible meal stop (go early)." },
        { title: "Hyde Park / Kensington Gardens", body: "Best if you need breathing space." },
        { title: "A West End Show", body: "Solid evening anchor for a weekend break." },
        { title: "A Guided Walking Tour", body: "The fastest way to “understand” London in 2–3 hours." },
      ],
      itinerary48h: [
        { day: "Day 1 (Arrival)", body: "Check in → easy walk (South Bank / West End) → dinner → optional show / nightlife." },
        { day: "Day 2 (Match Day)", body: "Morning museum or market → early lunch → travel to match area with buffer → match → late dinner near your base." },
        { day: "Day 3 (Departure)", body: "Quick highlight (Trafalgar Square / Westminster) → airport/rail transfer with time to spare." },
      ],
      faq: [
        {
          q: "Is London expensive for a weekend?",
          a: "It can be — but smart area selection (Paddington, King’s Cross, Stratford) can cut costs without wrecking the trip.",
        },
        {
          q: "Where should I stay if I want the easiest weekend?",
          a: "West End / Covent Garden / South Bank. You’ll be central and transport won’t dominate your schedule.",
        },
        {
          q: "What’s the most common mistake?",
          a: "Choosing a cheap hotel far out, then losing 2–3 hours a day to travel. In London, location beats room quality.",
        },
      ],
    },
  },

  // These can be expanded later; keep them present so routing works now.
  paris: {
    slug: "paris",
    name: "Paris",
    kicker: "Landmarks + museums with simple metro navigation. Great weekend pacing if you prebook the essentials.",
    seoTitle: "Paris Football City Break Guide (2026) | YourNextAway",
    seoDescription:
      "Plan a Paris football weekend: where to stay, airport/rail transfers, getting around, what to do, and a match-friendly 48-hour plan.",
    links: {
      gyg: "https://www.getyourguide.com/en-gb/paris-l16/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_paris",
      tiqets: TIQETS_URL,
    },
    highlights: [
      { title: "Best Base", body: "Central + well-connected neighbourhoods beat bargain outer zones every time." },
      { title: "Biggest Risk", body: "Underestimating queues. Prebook major attractions if dates are fixed." },
      { title: "Easy Win", body: "Keep matchday light; do the heavy sightseeing the day before." },
    ],
    sections: {
      gettingThere: ["Use the airport/rail option that keeps transfers simplest for your schedule."],
      whereToStay: [{ title: "Central & Connected", body: "Prioritise metro/RER access over a slightly cheaper room." }],
      gettingAround: ["Metro + walking covers most weekend plans."],
      matchday: ["Leave buffers; don’t schedule timed-entry right up to kickoff."],
      topThings: [{ title: "Top Things to Do", body: "Use GetYourGuide for the highest-converting categories." }],
      itinerary48h: [{ day: "48 Hours", body: "Day-before sightseeing → matchday lighter plan → departure highlight." }],
      faq: [{ q: "Should I prebook?", a: "Yes for peak weekends and big hitters." }],
    },
  },

  barcelona: {
    slug: "barcelona",
    name: "Barcelona",
    kicker: "Architecture, beaches, food. A perfect Friday–Sunday if you keep matchday logistics simple.",
    seoTitle: "Barcelona Football City Break Guide (2026) | YourNextAway",
    seoDescription:
      "Plan a Barcelona football weekend: best areas to stay, airport transfers, getting around, what to do, and a match-friendly itinerary.",
    links: {
      gyg: "https://www.getyourguide.com/en-gb/barcelona-l145/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_barcelona",
      tiqets: TIQETS_URL,
    },
    highlights: [
      { title: "Best Base", body: "Central neighbourhoods keep the weekend smooth." },
      { title: "Biggest Risk", body: "Overpacking the schedule. Pick 1–2 anchors only." },
      { title: "Easy Win", body: "Do Gaudí early; keep matchday flexible." },
    ],
    sections: {
      gettingThere: ["Keep airport transfers predictable; don’t cut buffers tight."],
      whereToStay: [{ title: "Central & Walkable", body: "Choose convenience over marginal savings." }],
      gettingAround: ["Metro + walking is the default."],
      matchday: ["Plan your food earlier; crowds slow everything down."],
      topThings: [{ title: "Top Things to Do", body: "Book one anchor experience, then keep slack." }],
      itinerary48h: [{ day: "48 Hours", body: "Arrival + evening → sightseeing → match → departure." }],
      faq: [{ q: "What should I book first?", a: "Your anchor attraction (timed-entry) if dates are fixed." }],
    },
  },

  madrid: {
    slug: "madrid",
    name: "Madrid",
    kicker: "Art triangle + tapas culture. Easy weekend flow with late dining and walkable central areas.",
    seoTitle: "Madrid Football City Break Guide (2026) | YourNextAway",
    seoDescription:
      "Plan a Madrid football weekend: where to stay, transfers, transport, what to do, and a practical 48-hour plan built around kickoff timing.",
    links: {
      gyg: "https://www.getyourguide.com/en-gb/madrid-l146/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_madrid",
      tiqets: TIQETS_URL,
    },
    highlights: [
      { title: "Best Base", body: "Central neighbourhoods keep matchday stress low." },
      { title: "Biggest Risk", body: "Assuming everything is close. Madrid is big—choose transport access." },
      { title: "Easy Win", body: "Museum day before; matchday lighter." },
    ],
    sections: {
      gettingThere: ["Choose transfers that protect time on the ground."],
      whereToStay: [{ title: "Central & Connected", body: "Prioritise metro access." }],
      gettingAround: ["Walking + metro covers most weekends."],
      matchday: ["Buffer travel to the stadium area."],
      topThings: [{ title: "Top Things to Do", body: "Art + food + one guided experience." }],
      itinerary48h: [{ day: "48 Hours", body: "Arrival → museums/food → match → departure." }],
      faq: [{ q: "Is Madrid walkable?", a: "Yes in central zones; use metro for everything else." }],
    },
  },

  amsterdam: {
    slug: "amsterdam",
    name: "Amsterdam",
    kicker: "Compact and walkable: canals, museums, food. Easy Friday–Sunday without overplanning.",
    seoTitle: "Amsterdam Football City Break Guide (2026) | YourNextAway",
    seoDescription:
      "Plan an Amsterdam football weekend: where to stay, airport transfers, getting around, what to do, and a match-friendly 48-hour itinerary.",
    links: {
      gyg: "https://www.getyourguide.com/en-gb/amsterdam-l136/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_amsterdam",
      tiqets: TIQETS_URL,
    },
    highlights: [
      { title: "Best Base", body: "Centrum/Jordaan keeps everything simple." },
      { title: "Biggest Risk", body: "Museums sell out—book early." },
      { title: "Easy Win", body: "Canal cruise earlier in the day; keep evenings flexible." },
    ],
    sections: {
      gettingThere: ["Schiphol access is strong; still keep buffers."],
      whereToStay: [{ title: "Centrum/Jordaan", body: "Central, walkable, best for short breaks." }],
      gettingAround: ["Walking is easiest; trams fill the gaps."],
      matchday: ["Plan extra time for crowds on weekend afternoons."],
      topThings: [{ title: "Top Things to Do", body: "Museums + canal cruise + one guided walk." }],
      itinerary48h: [{ day: "48 Hours", body: "Arrival → canals → museums → match → departure." }],
      faq: [{ q: "Do I need to prebook?", a: "Yes for big museums and popular time slots." }],
    },
  },

  rome: {
    slug: "rome",
    name: "Rome",
    kicker: "Ancient sites + Vatican. Big hitters: prebook essentials or queues will eat your weekend.",
    seoTitle: "Rome Football City Break Guide (2026) | YourNextAway",
    seoDescription:
      "Plan a Rome football weekend: where to stay, transfers, transport, what to do, and a realistic 48-hour plan around kickoff timing.",
    links: {
      gyg: "https://www.getyourguide.com/en-gb/rome-l33/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_rome",
      tiqets: TIQETS_URL,
    },
    highlights: [
      { title: "Best Base", body: "Central, walkable areas reduce wasted time." },
      { title: "Biggest Risk", body: "Queues. Prebook the big stuff if dates are fixed." },
      { title: "Easy Win", body: "Do the heavy sightseeing the day before the match." },
    ],
    sections: {
      gettingThere: ["Pick the simplest transfer route; protect your time."],
      whereToStay: [{ title: "Central & Walkable", body: "A slightly pricier base often saves hours." }],
      gettingAround: ["Walking + short rides. Don’t assume you can do it all in one day."],
      matchday: ["Keep matchday light and flexible."],
      topThings: [{ title: "Top Things to Do", body: "One anchor site + one guided walk + leave slack." }],
      itinerary48h: [{ day: "48 Hours", body: "Arrival → anchor site → matchday light plan → departure." }],
      faq: [{ q: "Should I prebook the essentials?", a: "Yes. It’s the difference between a smooth weekend and queues." }],
    },
  },
};

export const CITY_LIST: Array<{ slug: CitySlug; name: string; note: string }> = [
  { slug: "london", name: "London", note: "Easy transport, endless options" },
  { slug: "paris", name: "Paris", note: "Landmarks + simple metro navigation" },
  { slug: "barcelona", name: "Barcelona", note: "Architecture, beaches, food" },
  { slug: "madrid", name: "Madrid", note: "Art triangle + tapas culture" },
  { slug: "amsterdam", name: "Amsterdam", note: "Walkable, canals, museums" },
  { slug: "rome", name: "Rome", note: "Big hitters — prebook the essentials" },
];
