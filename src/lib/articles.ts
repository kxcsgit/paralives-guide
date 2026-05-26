export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
}

export const categories = [
  { id: "getting-started", label: "Getting Started", icon: "🚀" },
  { id: "build-mode", label: "Build Mode", icon: "🏠" },
  { id: "characters", label: "Characters & Life", icon: "👤" },
  { id: "careers", label: "Careers & Skills", icon: "💼" },
  { id: "mods", label: "Mods", icon: "🔌" },
  { id: "achievements-secrets", label: "Achievements, Secrets & Easter Eggs", icon: "🏆" },
];

export const articles: Article[] = [
  // Getting Started
  {
    slug: "paralives-early-access-complete-guide-2026",
    title: "Early Access Complete Guide",
    description: "Release date, price, day-one content, and roadmap.",
    category: "getting-started",
    icon: "📋",
    readTime: "8 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "paralives-mod-installation-guide-2026",
    title: "Mod Installation Guide (Steam & Manual)",
    description: "Step-by-step for Workshop and third-party mods.",
    category: "getting-started",
    icon: "🔧",
    readTime: "6 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "free-early-access-keys-scam-prevention",
    title: "Free Early Access Keys & Scam Prevention",
    description: "Official giveaways + stay safe from scams.",
    category: "getting-started",
    icon: "🎁",
    readTime: "5 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "best-paralives-house-blueprints",
    title: "Best House Blueprints (Workshop)",
    description: "Top 10 player-made homes you can download now.",
    category: "getting-started",
    icon: "🏠",
    readTime: "7 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  // Build Mode
  {
    slug: "paralives-build-mode-basics-tools-guide",
    title: "Build Mode Tools (2026 Beginner Guide)",
    description: "Step-by-step from empty lot to furnished home.",
    category: "build-mode",
    icon: "🔨",
    readTime: "8 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "paralives-build-mode-tutorial-box-to-mansion",
    title: "Build Mode Tutorial: From Box to Mansion",
    description: "Tools, gridless, curved walls, scaling, layout tips.",
    category: "build-mode",
    icon: "🏗️",
    readTime: "10 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "paralives-build-mode-advanced-tips",
    title: "Build Mode Advanced Tips",
    description: "Gridless building, scaling, color wheel, lighting.",
    category: "build-mode",
    icon: "🌟",
    readTime: "9 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "paralives-build-style-guide",
    title: "Build Style Guide: Modern, Nordic, Japanese, Vintage",
    description: "Color palettes & furniture for 4 trending styles.",
    category: "build-mode",
    icon: "🎨",
    readTime: "8 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  // Characters & Life
  {
    slug: "paralives-needs-system-guide",
    title: "Needs System & Trait Effects",
    description: "Hunger, energy, social — how personality changes decay.",
    category: "characters",
    icon: "💖",
    readTime: "7 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "paralives-emotions-guide",
    title: "Emotions Explained",
    description: "How moodlets stack and keep your Para happy.",
    category: "characters",
    icon: "😊",
    readTime: "6 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "paralives-genetics-guide",
    title: "Genetics & Breeding Guide",
    description: "Create beautiful, talented children.",
    category: "characters",
    icon: "🧬",
    readTime: "8 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "paralives-paramaker-face-creation-guide",
    title: "Paramaker: Master Face Creation",
    description: "Sliders, makeup, hair — create a gorgeous Para.",
    category: "characters",
    icon: "🧬",
    readTime: "7 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "paralives-personality-traits-combos-guide",
    title: "Personality & Traits Combo Guide",
    description: "Attributes, vibes, talents — 4 starter builds.",
    category: "characters",
    icon: "🧠",
    readTime: "8 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  // Careers
  {
    slug: "paralives-career-guide-which-job-most-money-2026",
    title: "Career Guide: Which Job Makes the Most Money?",
    description: "All 8 careers with levels, pay, and skill requirements.",
    category: "careers",
    icon: "💰",
    readTime: "8 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "career-paths-skill-trees",
    title: "Career Paths & Skill Trees Overview",
    description: "Salary, requirements, promotions for every job.",
    category: "careers",
    icon: "📊",
    readTime: "9 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  // Mods
  {
    slug: "top-10-paralives-mods-week3-may2026",
    title: "Top 10 Must-Have Mods (Week 3)",
    description: "Performance, UI, traits, and more — all tested.",
    category: "mods",
    icon: "🔟",
    readTime: "8 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "paralives-mod-category-guide-2026",
    title: "Mod Category Guide: Functional, Visual, Build, CAS",
    description: "Find the perfect mods for your playstyle.",
    category: "mods",
    icon: "📚",
    readTime: "7 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  // Achievements & Secrets
  {
    slug: "paralives-achievements-unlock-conditions",
    title: "Achievements & Unlock Conditions",
    description: "All known Steam achievements with difficulty ratings.",
    category: "achievements-secrets",
    icon: "🏅",
    readTime: "6 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
  {
    slug: "paralives-hidden-content-easter-eggs",
    title: "Hidden Content & Easter Eggs",
    description: "Secrets 90% of players miss — developer cameos, mysterious NPCs.",
    category: "achievements-secrets",
    icon: "🥚",
    readTime: "7 min read",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
  },
];

export function getArticlesByCategory(categoryId: string): Article[] {
  return articles.filter((a) => a.category === categoryId);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
