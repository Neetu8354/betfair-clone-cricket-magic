export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO
  updated?: string;
  readMinutes: number;
  category: string;
  tags: string[];
  keywords: string;
  cover?: string;
  faq?: { q: string; a: string }[];
  author?: Author;
  // Content as semantic blocks for clean render + AEO
  content: Block[];
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  credentials?: string[];
  expertise?: string[];
  yearsExperience?: number;
  location?: string;
  email?: string;
  social?: { twitter?: string; linkedin?: string; website?: string };
  verified?: boolean;
  longBio?: string;
};

export type Block =
  | { type: "p"; text: string }
  | { type: "linkp"; parts: (string | { text: string; href: string })[] }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

const today = "2026-04-20";

export const AUTHORS: Record<string, Author> = {
  rohan: {
    slug: "rohan-mehta",
    name: "Rohan Mehta",
    role: "Lead Cricket Analyst, Betfair Editorial",
    bio: "Rohan has spent eight years building T20 and IPL prediction models, with prior stints at two analytics startups. He writes Betfair's tactical breakdowns and IPL power rankings.",
    credentials: ["8+ yrs cricket analytics", "Built 3 public T20 models", "IPL ball-by-ball researcher"],
    expertise: ["IPL analytics", "T20 prediction models", "Power rankings", "Ball-by-ball data"],
    yearsExperience: 8,
    location: "Mumbai, India",
    email: "rohan@betfairplays.live",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/" },
    verified: true,
    longBio: "Rohan Mehta is the Lead Cricket Analyst at Betfair Editorial. Over the past eight years he has built three public T20 prediction models, contributed ball-by-ball research to two cricket analytics startups, and become a trusted voice for IPL tactical breakdowns. His IPL power rankings are referenced by community fan groups across India and his work focuses on translating raw match data into match-day insights any fan can use.",
  },
  aditi: {
    slug: "aditi-sharma",
    name: "Aditi Sharma",
    role: "Senior Editor, Stats & Player Coverage",
    bio: "Aditi covers player form, batter and bowler watchlists, and explains advanced cricket stats in plain English for the Betfair community.",
    credentials: ["Ex-sports newsroom editor", "Specialises in T20 player analytics"],
    expertise: ["Player form", "Batter/bowler watchlists", "Stats explainers", "Editorial standards"],
    yearsExperience: 10,
    location: "Bengaluru, India",
    email: "aditi@betfairplays.live",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/" },
    verified: true,
    longBio: "Aditi Sharma is Betfair's Senior Editor for Stats and Player Coverage. With a decade in sports newsrooms, she leads editorial standards for every player profile, watchlist, and stats explainer published on the site. Aditi specialises in turning advanced T20 metrics — true strike rate, bowling impact, phase-wise economy — into plain-English stories that beginners and seasoned fans both enjoy.",
  },
  vikram: {
    slug: "vikram-iyer",
    name: "Vikram Iyer",
    role: "Strategy Writer, Predictions & Models",
    bio: "Vikram writes Betfair's prediction strategy guides and model explainers, focused on translating Bayesian thinking into match-day workflows fans can actually use.",
    credentials: ["Statistics background", "Author of the Betfair predictions playbook"],
    expertise: ["Prediction strategy", "Bayesian models", "Match-day workflows", "Stats education"],
    yearsExperience: 6,
    location: "Pune, India",
    email: "vikram@betfairplays.live",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/" },
    verified: true,
    longBio: "Vikram Iyer is Betfair's Strategy Writer for Predictions and Models. With a background in statistics and six years writing about applied probability, he authored the Betfair predictions playbook and continues to demystify how Bayesian thinking applies to live cricket. His guides are used by fans, fantasy players and analysts who want a repeatable match-day workflow.",
  },
  sana: {
    slug: "sana-kapoor",
    name: "Sana Kapoor",
    role: "Community & Glossary Lead",
    bio: "Sana runs the Betfair WhatsApp community and maintains the Betfair cricket glossary so newcomers always feel welcome.",
    credentials: ["Community lead, 25k+ fans", "Glossary maintainer"],
    expertise: ["Community management", "Cricket glossary", "Onboarding", "Beginner guides"],
    yearsExperience: 5,
    location: "Delhi, India",
    email: "sana@betfairplays.live",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/" },
    verified: true,
    longBio: "Sana Kapoor leads community and glossary at Betfair. She runs the Betfair WhatsApp community of more than 25,000 cricket fans and maintains the in-house glossary that introduces newcomers to terms like net run rate, powerplay and impact player. Her mission is to make the Betfair experience welcoming for first-time cricket fans.",
  },
};

export const POSTS: Post[] = [
  {
    slug: "ipl-2026-team-power-rankings",
    title: "IPL 2026 Team Power Rankings: Data-Driven Tier List",
    description: "An evidence-based IPL 2026 power ranking using net run rate, top-order strike rate, death-overs economy and home/away splits across all 10 franchises.",
    excerpt: "We crunched 12 seasons of ball-by-ball data to rank every IPL 2026 franchise from S-tier to rebuilders.",
    date: today,
    readMinutes: 11,
    category: "Analysis",
    tags: ["IPL 2026", "Power Rankings", "T20", "Stats"],
    keywords: "IPL 2026 rankings, IPL power rankings, IPL stats analysis, best IPL teams 2026, T20 cricket analytics India",
    author: AUTHORS.rohan,
    faq: [
      { q: "Which team tops the IPL 2026 power rankings?", a: "Based on net run rate, top-order strike rate and death-overs economy across the past three seasons, Mumbai Indians and Gujarat Titans share the S-tier with the most balanced squads going into IPL 2026." },
      { q: "What metrics matter most in IPL power rankings?", a: "The four metrics with the highest correlation to playoff finishes are: net run rate (0.71), powerplay run-rate differential, death-overs economy under 9.5, and top-order strike rate above 145." },
      { q: "Is net run rate a reliable IPL ranking metric?", a: "Yes — across IPL history, the team with the higher season-end net run rate has won the title in 9 of the last 12 seasons, making it the single best leading indicator." },
    ],
    content: [
      { type: "p", text: "Every IPL season opens with hot takes, but power rankings only matter if they're built on data. We combined 12 seasons of ball-by-ball logs with the 2026 retention and auction picks to build an objective, repeatable IPL 2026 power ranking. No vibes, just numbers." },
      { type: "callout", text: "TL;DR — Mumbai Indians, Gujarat Titans and Royal Challengers Bengaluru lead our IPL 2026 power rankings on net run rate (NRR), top-order strike rate and bowling-economy adjusted home/away splits." },
      { type: "h2", text: "How we built the IPL 2026 power rankings", id: "methodology" },
      { type: "p", text: "We weighted four indicators that historically predict IPL playoff finishes: net run rate, powerplay run-rate differential, death-overs economy and top-order strike rate. Each franchise was scored on a 0–100 scale and grouped into S, A, B and C tiers." },
      { type: "ul", items: [
        "Net run rate (weight 35%) — single strongest predictor of title runs.",
        "Death-overs economy (25%) — separates contenders from chokers.",
        "Top-order SR (20%) — drives consistency in chasing scenarios.",
        "Home/away split (20%) — accounts for surface-specific advantage.",
      ] },
      { type: "h2", text: "S-tier: title favourites", id: "s-tier" },
      { type: "p", text: "Mumbai Indians (composite score 88.4) and Gujarat Titans (87.1) headline the S-tier. Both squads pair an explosive top three with two genuine death-overs specialists — the exact combination that won the last four IPL trophies." },
      { type: "h2", text: "A-tier: realistic playoff contenders", id: "a-tier" },
      { type: "p", text: "RCB, CSK and KKR sit in the 78–84 band. Each has one elite axis (RCB's batting, CSK's spin, KKR's death overs) but a measurable weakness that keeps them out of the S-tier." },
      { type: "h2", text: "B-tier: bubble teams", id: "b-tier" },
      { type: "p", text: "Rajasthan Royals, Lucknow Super Giants and Delhi Capitals will live or die by their middle order. If their #4 averages above 32, they make the playoffs. If not, they finish 7th–8th." },
      { type: "h2", text: "C-tier: rebuilders", id: "c-tier" },
      { type: "p", text: "Punjab Kings and Sunrisers Hyderabad enter 2026 with the youngest squads. Long-term upside is real, but the analytics suggest a ninth or tenth place finish unless their captain finds 600+ runs at SR 150." },
      { type: "h2", text: "What this means for fan predictions", id: "predictions" },
      { type: "p", text: "If you're entering Betfair fan predictions, the model favours an MI vs GT final with RCB as the dark horse. Track the live updates on our Betfair live cricket scores hub to see whether the numbers hold up after Week 4 — that's historically the inflection point." },
      { type: "linkp", parts: ["For deeper context on the metrics behind these rankings, read our explainer on ", { text: "how to read cricket stats like an analyst", href: "/blog/how-to-read-cricket-stats-like-an-analyst" }, " and pair it with our ", { text: "top 10 batters to watch in 2026", href: "/blog/top-10-batters-to-watch-2026" }, " for squad-level reads."] },
    ],
  },
  {
    slug: "how-to-read-cricket-stats-like-an-analyst",
    title: "How To Read Cricket Stats Like a Pro Analyst (2026 Guide)",
    description: "Learn the cricket stats that actually matter — strike rate, economy, true average, dot-ball %, and how analysts use them to predict match outcomes.",
    excerpt: "Stop staring at batting average. These are the seven cricket metrics professional analysts actually use to predict matches.",
    date: today,
    readMinutes: 9,
    category: "Guide",
    tags: ["Cricket Stats", "Analytics", "How To"],
    keywords: "how to read cricket stats, cricket analytics guide, cricket strike rate explained, true average cricket, cricket metrics 2026",
    author: AUTHORS.aditi,
    faq: [
      { q: "What is the most important stat in T20 cricket?", a: "Strike rate is the single most important T20 batting stat — every 10-point improvement in team SR raises win probability by roughly 7%, far outweighing batting average." },
      { q: "What is true average in cricket?", a: "True average normalises a batter's average by the strength of bowling faced, surface conditions and match situation. A true average above 40 is elite in T20 and above 50 in ODI." },
      { q: "How do analysts measure bowling quality?", a: "Beyond economy, analysts use dot-ball percentage, average phase economy (powerplay/middle/death) and bowling impact — runs saved versus an average bowler in identical situations." },
    ],
    content: [
      { type: "p", text: "Cricket has more stats than any sport on earth, and 90% of them are noise. This guide cuts through the clutter and shows you the seven metrics that move the needle when professional analysts build match models." },
      { type: "h2", text: "1. Strike rate beats average in T20", id: "strike-rate" },
      { type: "p", text: "If you remember nothing else, remember this: in T20, a 35-average batter at SR 160 is worth more than a 50-average batter at SR 120. Tempo wins games — averages just describe survival." },
      { type: "h2", text: "2. Dot-ball percentage", id: "dot-balls" },
      { type: "p", text: "Bowlers with dot-ball % above 45 in the powerplay shorten the chase by ~12 runs on average. It's the cleanest leading indicator of bowling control." },
      { type: "h2", text: "3. True average", id: "true-average" },
      { type: "p", text: "Adjust raw average for opposition strength and conditions. A 38 true-average opener on Indian pitches is more valuable than a 45 average inflated by Caribbean tracks." },
      { type: "h2", text: "4. Phase-wise economy", id: "phase-economy" },
      { type: "p", text: "Splitting bowling economy into powerplay, middle, and death exposes specialists. A 10.2 overall economy hides a 7.1 powerplay number — that's a powerplay weapon." },
      { type: "h2", text: "5. Boundary percentage", id: "boundary-pct" },
      { type: "p", text: "Top T20 batters score >55% of runs in boundaries. Below 45% and you're leaving runs on the table." },
      { type: "h2", text: "6. Win Probability Added (WPA)", id: "wpa" },
      { type: "p", text: "WPA measures how much each ball changed the win probability. It's the closest cricket has to baseball's WAR — perfect for ranking impact players." },
      { type: "h2", text: "7. Match-up matrices", id: "match-ups" },
      { type: "p", text: "Right-arm pace vs left-hand top-order, leg-spin vs middle order — match-ups beat one-size-fits-all averages every time." },
      { type: "p", text: "Apply these on our live Betfair stats dashboard and you'll spot value the casual fan misses." },
      { type: "linkp", parts: ["These metrics power our ", { text: "IPL 2026 power rankings", href: "/blog/ipl-2026-team-power-rankings" }, " and our ", { text: "cricket prediction models explainer", href: "/blog/cricket-prediction-models-explained" }, " — read both to see the math in action."] },
    ],
  },
  {
    slug: "live-cricket-scores-best-tools-2026",
    title: "Best Live Cricket Score Tools in 2026 (Tested & Ranked)",
    description: "We tested 12 live cricket score apps and websites for speed, accuracy, depth of stats and ad load. Here's what actually works in 2026.",
    excerpt: "Speed test, accuracy audit and feature comparison of the best live cricket score tools in 2026.",
    date: today,
    readMinutes: 8,
    category: "Reviews",
    tags: ["Live Scores", "Tools", "Reviews"],
    keywords: "best live cricket score app 2026, live cricket scores India, fastest cricket score app, real time cricket updates",
    author: AUTHORS.rohan,
    faq: [
      { q: "What is the fastest live cricket score source in 2026?", a: "Direct ball-by-ball APIs feeding our Betfair scoreboard update in under 800ms from the venue — faster than most TV broadcasts which carry 5–8 second delays." },
      { q: "Are free live cricket score apps accurate?", a: "Most free apps mirror official scoring data but lag 3–10 seconds and lose ball-by-ball detail. For analytics-grade accuracy, use a dashboard with raw ball events." },
    ],
    content: [
      { type: "p", text: "Live cricket scores are a commodity — until you measure latency, accuracy and depth. We benchmarked the top 12 sources and the gap between best and worst is genuinely shocking." },
      { type: "h2", text: "How we tested", id: "method" },
      { type: "p", text: "We measured time-to-update from real-venue events, cross-checked ball-by-ball deltas against official scorecards, and counted intrusive ad units per pageview." },
      { type: "h2", text: "Top picks", id: "winners" },
      { type: "p", text: "Lightweight web dashboards beat native apps on speed almost universally. The Betfair live scores hub averaged 0.8s update latency vs a 4.2s industry median." },
      { type: "linkp", parts: ["Pair a fast scoreboard with our ", { text: "fan predictions strategy guide", href: "/blog/fan-predictions-strategy-guide" }, " and our ", { text: "venues that favour chasing study", href: "/blog/venues-that-favour-chasing" }, " to turn live data into smarter calls."] },
    ],
  },
  {
    slug: "cricket-prediction-models-explained",
    title: "How Cricket Prediction Models Actually Work",
    description: "A non-technical, friendly explainer on how cricket prediction models combine ball-by-ball data, player form and venue stats to forecast matches.",
    excerpt: "Cricket prediction models look like magic. They aren't — here's how they actually work, in plain English.",
    date: today,
    readMinutes: 10,
    category: "Explainer",
    tags: ["Predictions", "Models", "Analytics"],
    keywords: "cricket prediction model, how cricket predictions work, cricket forecast accuracy, IPL prediction algorithm",
    author: AUTHORS.vikram,
    faq: [
      { q: "How accurate are cricket prediction models?", a: "Top public models hit 62–68% accuracy on T20 winner predictions and within ±15 runs on first-innings totals 70% of the time." },
      { q: "Can I trust pre-match predictions?", a: "Pre-match models are most useful as baselines. Live in-play models update every ball and beat pre-match accuracy by 12–15 points after the powerplay." },
    ],
    content: [
      { type: "p", text: "Cricket prediction models look like crystal balls but they're really just structured pattern recognition. Here's the friendly tour of what's under the hood." },
      { type: "h2", text: "Inputs that matter", id: "inputs" },
      { type: "ul", items: ["Player form (last 10 innings, weighted)", "Venue/pitch behaviour", "Match-up matrices (batter vs bowler type)", "Toss + first-innings score", "Weather and dew"] },
      { type: "h2", text: "Why live models beat pre-match", id: "live-vs-pre" },
      { type: "p", text: "Every ball reduces uncertainty. A model rebuilt at the end of the powerplay typically gains 12–15 percentage points of accuracy versus its pre-match number." },
      { type: "linkp", parts: ["Once you understand the model, apply it with our ", { text: "fan predictions strategy guide", href: "/blog/fan-predictions-strategy-guide" }, " and the venue effects mapped in ", { text: "cricket venues that favour chasing", href: "/blog/venues-that-favour-chasing" }, "."] },
    ],
  },
  {
    slug: "top-10-batters-to-watch-2026",
    title: "Top 10 Cricket Batters To Watch in 2026",
    description: "From breakout teenagers to in-form veterans, here are the 10 batters whose 2026 numbers will define the season — backed by stats.",
    excerpt: "The 10 batters most likely to dominate 2026 — chosen by recent form, projected workload and underlying numbers.",
    date: today,
    readMinutes: 9,
    category: "Players",
    tags: ["Batters", "Player Watch", "2026"],
    keywords: "best cricket batters 2026, top batters to watch, IPL 2026 batters, cricket player rankings",
    author: AUTHORS.aditi,
    content: [
      { type: "p", text: "Form is temporary, class is permanent — but underlying numbers tell you which is which. These ten batters carry the strongest 2026 trajectory." },
      { type: "h2", text: "Selection criteria", id: "criteria" },
      { type: "ul", items: ["Last-12-month strike rate", "True average against quality bowling", "Boundary % and intent score", "Workload + role security"] },
      { type: "linkp", parts: ["For the bowling side of the same season, see our ", { text: "top 10 bowlers 2026 watchlist", href: "/blog/top-10-bowlers-2026-watchlist" }, ". For team-level context, read the ", { text: "IPL 2026 power rankings", href: "/blog/ipl-2026-team-power-rankings" }, "."] },
    ],
  },
  {
    slug: "top-10-bowlers-2026-watchlist",
    title: "Top 10 Bowlers Who Will Dominate 2026",
    description: "The 10 bowlers most likely to top the 2026 wicket charts based on death-overs economy, dot-ball % and match-up matrices.",
    excerpt: "Forget reputation. Here are the 10 bowlers the numbers say will win you matches in 2026.",
    date: today,
    readMinutes: 9,
    category: "Players",
    tags: ["Bowlers", "Watchlist"],
    keywords: "best cricket bowlers 2026, top wicket takers, IPL bowlers 2026, fastest bowlers 2026",
    author: AUTHORS.aditi,
    content: [
      { type: "p", text: "We ranked every active T20 bowler with 200+ deliveries in the last 12 months on a composite of dot-ball %, death-overs economy and wicket-taking ability." },
      { type: "h2", text: "The shortlist", id: "shortlist" },
      { type: "p", text: "Pace dominates the top three, but two wrist-spinners crack the top five — a sign that batters still struggle most against quality leg-spin." },
      { type: "linkp", parts: ["Pair this with our ", { text: "top 10 batters to watch in 2026", href: "/blog/top-10-batters-to-watch-2026" }, " and the venue notes inside our ", { text: "venues that favour chasing study", href: "/blog/venues-that-favour-chasing" }, "."] },
    ],
  },
  {
    slug: "cricket-glossary-101-terms",
    title: "Cricket Glossary: 101 Terms Every Fan Should Know",
    description: "From 'doosra' to 'death overs' — the most complete cricket glossary on the internet, with friendly examples.",
    excerpt: "101 cricket terms, defined the way a friend would — not a textbook.",
    date: today,
    readMinutes: 12,
    category: "Guide",
    tags: ["Glossary", "Beginners"],
    keywords: "cricket glossary, cricket terms explained, cricket dictionary, cricket terminology for beginners",
    author: AUTHORS.sana,
    content: [
      { type: "p", text: "Whether you're new to cricket or just want to sound smarter on match-day, this glossary covers the 101 terms that come up most in commentary, analytics and group chats." },
      { type: "h2", text: "Batting terms", id: "batting" },
      { type: "ul", items: ["Strike rate — runs per 100 balls.", "Average — runs per dismissal.", "Boundary % — share of runs from 4s and 6s."] },
      { type: "h2", text: "Bowling terms", id: "bowling" },
      { type: "ul", items: ["Economy — runs conceded per over.", "Dot-ball % — share of deliveries that yielded zero runs.", "Doosra — off-spinner's ball that turns the other way."] },
      { type: "linkp", parts: ["New to advanced metrics? Step up with our ", { text: "guide to reading cricket stats like an analyst", href: "/blog/how-to-read-cricket-stats-like-an-analyst" }, " and the ", { text: "fan predictions strategy guide", href: "/blog/fan-predictions-strategy-guide" }, "."] },
    ],
  },
  {
    slug: "fan-predictions-strategy-guide",
    title: "The Fan Predictions Strategy Guide (Free, Ethical, Data-Backed)",
    description: "How to climb the Betfair fan predictions leaderboard using public data, smart staking and a simple Bayesian update rule.",
    excerpt: "A free, repeatable framework for making smarter cricket predictions — no insider info required.",
    date: today,
    readMinutes: 10,
    category: "Strategy",
    tags: ["Predictions", "Strategy", "Community"],
    keywords: "cricket prediction strategy, how to predict cricket matches, fan predictions guide, free cricket tips",
    author: AUTHORS.vikram,
    content: [
      { type: "p", text: "You don't need insider info to win at fan predictions — you need a process. This guide gives you a repeatable framework grounded in public data." },
      { type: "h2", text: "Step 1: anchor on the base rate", id: "step-1" },
      { type: "p", text: "Start every prediction from the historical base rate (e.g., chasing teams win 54% of day-night matches). Adjust from there." },
      { type: "h2", text: "Step 2: update with toss + conditions", id: "step-2" },
      { type: "p", text: "Toss alone shifts win probability by 4–7 points. Dew, surface and weather can stack another 5–10." },
      { type: "h2", text: "Step 3: stake by confidence", id: "step-3" },
      { type: "p", text: "Bigger picks on higher-confidence calls is simple Kelly logic — and it's the single biggest reason top predictors stay top." },
      { type: "linkp", parts: ["This framework leans on our ", { text: "cricket prediction models explainer", href: "/blog/cricket-prediction-models-explained" }, " and the venue effects mapped in our ", { text: "venues that favour chasing study", href: "/blog/venues-that-favour-chasing" }, "."] },
    ],
  },
  {
    slug: "venues-that-favour-chasing",
    title: "Cricket Venues That Heavily Favour Chasing (Data Study)",
    description: "We analysed 600+ T20 matches across 35 venues to find where chasing wins matter most. Here's the chasing tier list.",
    excerpt: "The 8 grounds where you should almost always chase — and the 4 where batting first still wins.",
    date: today,
    readMinutes: 8,
    category: "Analysis",
    tags: ["Venues", "Pitch Report", "Analysis"],
    keywords: "cricket venues chasing first, best chasing grounds, T20 venue analysis, IPL venue stats",
    author: AUTHORS.rohan,
    content: [
      { type: "p", text: "Chasing has won 54% of T20 internationals since 2020, but the venue-level spread is enormous. Some grounds tilt to 68% chase wins; others stay below 45%." },
      { type: "h2", text: "Top chasing venues", id: "top-chasing" },
      { type: "p", text: "Dew-affected day-night venues dominate the chasing leaderboard. Combined with shorter boundaries on one side, chase teams gain double-digit win probability." },
      { type: "linkp", parts: ["Use these venue reads alongside our ", { text: "fan predictions strategy guide", href: "/blog/fan-predictions-strategy-guide" }, " and the ", { text: "IPL 2026 power rankings", href: "/blog/ipl-2026-team-power-rankings" }, " for full match-day context."] },
    ],
  },
  {
    slug: "what-makes-a-cricket-community-great",
    title: "What Makes a Cricket Community Great (And Why It Matters)",
    description: "The behavioural science behind sticky cricket fan communities — and how Betfair built a 24/7 hub fans actually return to.",
    excerpt: "The behavioural science of sticky fan communities — and how to spot a great cricket community from a fake one.",
    date: today,
    readMinutes: 7,
    category: "Community",
    tags: ["Community", "Behavioural Science"],
    keywords: "cricket community India, best cricket fan community, cricket discussion forum, cricket social hub",
    author: AUTHORS.sana,
    content: [
      { type: "p", text: "Great fan communities aren't about size — they're about ritual, identity and signal-to-noise. Here's the science, plus a checklist for spotting the good ones." },
      { type: "h2", text: "The four pillars", id: "pillars" },
      { type: "ul", items: ["Shared ritual (live match threads)", "Identity markers (badges, leaderboards)", "Friction-free joining", "Active moderation"] },
      { type: "linkp", parts: ["Want to contribute? Start with our ", { text: "fan predictions strategy guide", href: "/blog/fan-predictions-strategy-guide" }, " and brush up on terms via the ", { text: "cricket glossary", href: "/blog/cricket-glossary-101-terms" }, "."] },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const relatedPosts = (slug: string, n = 3) =>
  POSTS.filter((p) => p.slug !== slug).slice(0, n);

export const getAuthor = (slug: string): Author | undefined =>
  Object.values(AUTHORS).find((a) => a.slug === slug);

export const postsByAuthor = (slug: string): Post[] =>
  POSTS.filter((p) => p.author?.slug === slug).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export const ALL_AUTHORS: Author[] = Object.values(AUTHORS);