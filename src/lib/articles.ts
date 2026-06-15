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

  // Relationships & Social
  {
    slug: "paralives-relationships-social-guide",
    title: "Relationships Guide: From Strangers to Soulmates",
    description: "Together Cards, romance, friendships, family dynamics — complete social system breakdown.",
    category: "characters",
    icon: "💕",
    readTime: "8 min read",
    publishedAt: "2026-05-26",
    updatedAt: "2026-05-26",
  },
  // Getting Started - Advanced
  {
    slug: "paralives-console-commands-cheats-guide",
    title: "Console Commands & Cheats Guide",
    description: "Every cheat and console command in Early Access — enable console, use safely, fix issues.",
    category: "getting-started",
    icon: "💻",
    readTime: "5 min read",
    publishedAt: "2026-05-26",
    updatedAt: "2026-05-26",
  },
  {
    slug: "paralives-controls-keyboard-shortcuts-guide",
    title: "Controls & Keyboard Shortcuts",
    description: "Essential hotkeys for building, socializing, and exploring efficiently.",
    category: "getting-started",
    icon: "⌨️",
    readTime: "4 min read",
    publishedAt: "2026-05-26",
    updatedAt: "2026-05-26",
  },
  {
    slug: "paralives-interface-explained-menu-build-mode",
    title: "Interface Explained: Menu & Build Mode",
    description: "Complete UI walkthrough — every button, menu, and shortcut explained.",
    category: "getting-started",
    icon: "🖥️",
    readTime: "6 min read",
    publishedAt: "2026-05-26",
    updatedAt: "2026-05-26",
  },
  {
    slug: "paralives-settings-performance-graphics-guide",
    title: "Settings & Performance Guide",
    description: "Best graphics settings for smooth performance on any PC.",
    category: "getting-started",
    icon: "⚙️",
    readTime: "7 min read",
    publishedAt: "2026-05-26",
    updatedAt: "2026-05-26",
  },
  {
    slug: "paralives-early-access-missing-features-avoid-buyers-remorse",
    title: "Early Access: Missing Features & Buyer's Guide",
    description: "What's not in the game yet — avoid buyer's remorse with honest assessment.",
    category: "getting-started",
    icon: "⚠️",
    readTime: "6 min read",
    publishedAt: "2026-05-26",
    updatedAt: "2026-05-26",
  },
  {
    slug: "paralives-strongest-sims-4-competitor",
    title: "Paralives vs Sims 4: Which is Better?",
    description: "Head-to-head comparison — building, CAS, gameplay, and value.",
    category: "getting-started",
    icon: "⚔️",
    readTime: "8 min read",
    publishedAt: "2026-05-26",
    updatedAt: "2026-05-26",
  },
  // Build Mode - Advanced
  {
    slug: "paralives-build-mode-masterclass-2026",
    title: "Build Mode Masterclass 2026",
    description: "Advanced techniques — curved walls, split levels, custom roofs, landscaping.",
    category: "build-mode",
    icon: "🎓",
    readTime: "10 min read",
    publishedAt: "2026-05-26",
    updatedAt: "2026-05-26",
  },
  {
    slug: "paralives-trendy-house-builds-tutorial",
    title: "Trendy House Builds Tutorial",
    description: "Step-by-step guides for modern, cottage, Japanese, and industrial styles.",
    category: "build-mode",
    icon: "🏡",
    readTime: "9 min read",
    publishedAt: "2026-05-26",
    updatedAt: "2026-05-26",
  },
  // Mods - Advanced
  {
    slug: "custom-content-modding-101",
    title: "Custom Content & Modding 101",
    description: "How modding works, Steam Workshop support, creating your own CC.",
    category: "mods",
    icon: "🔧",
    readTime: "9 min read",
    publishedAt: "2026-05-26",
    updatedAt: "2026-05-26",
  },

  // Getting Started - More
  {
    slug: "getting-started-your-first-para",
    title: "Creating Your First Para",
    description: "Complete character creation guide — traits, appearance, backstories, and starter tips.",
    category: "getting-started",
    icon: "👤",
    readTime: "8 min read",
    publishedAt: "2026-05-27",
    updatedAt: "2026-05-27",
  },
  {
    slug: "paralives-best-graphics-settings-2026",
    title: "Best Graphics Settings 2026",
    description: "Optimize performance without sacrificing visual quality — tested on low to high-end PCs.",
    category: "getting-started",
    icon: "🎮",
    readTime: "5 min read",
    publishedAt: "2026-05-27",
    updatedAt: "2026-05-27",
  },
  // Build Mode - More
  {
    slug: "build-mode-complete-basics",
    title: "Build Mode Complete Basics",
    description: "Everything you need to know about building — walls, floors, roofs, and foundations.",
    category: "build-mode",
    icon: "🧱",
    readTime: "10 min read",
    publishedAt: "2026-05-27",
    updatedAt: "2026-05-27",
  },
  // Characters - More
  {
    slug: "paralives-needs-system-explained-happy-para",
    title: "Needs System: Keep Your Para Happy",
    description: "Deep dive into hunger, energy, social, fun, hygiene, and bladder needs.",
    category: "characters",
    icon: "😊",
    readTime: "7 min read",
    publishedAt: "2026-05-27",
    updatedAt: "2026-05-27",
  },
  // Careers - More
  {
    slug: "paralives-careers-guide",
    title: "All Careers Guide",
    description: "Every career path, salary, promotion requirements, and work schedule.",
    category: "careers",
    icon: "💼",
    readTime: "9 min read",
    publishedAt: "2026-05-27",
    updatedAt: "2026-05-27",
  },

  // Getting Started - Final
  {
    slug: "paralives-beginner-guide-10min-2026",
    title: "Beginner's Guide: 10 Minutes to Master",
    description: "Quick start guide for new players — learn the basics fast.",
    category: "getting-started",
    icon: "⚡",
    readTime: "5 min read",
    publishedAt: "2026-05-27",
    updatedAt: "2026-05-27",
  },
  // Characters - Final
  {
    slug: "paralives-social-relationships-guide-friends-romance-family",
    title: "Social Relationships: Friends, Romance & Family",
    description: "Complete guide to building relationships — from first meeting to family life.",
    category: "characters",
    icon: "👨‍👩‍👧‍👦",
    readTime: "9 min read",
    publishedAt: "2026-05-27",
    updatedAt: "2026-05-27",
  },
  {
    slug: "relationships-social-system",
    title: "Relationships & Social System Deep-Dive",
    description: "Advanced social mechanics — Together Cards, reputation, and social dynamics.",
    category: "characters",
    icon: "🎭",
    readTime: "8 min read",
    publishedAt: "2026-05-27",
    updatedAt: "2026-05-27",
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
  // YouTube-sourced articles
  {
    slug: "15-mistakes-to-avoid-paralives-2026",
    title: "15 Mistakes to Avoid in Paralives",
    description: "Beginner traps that waste your time — learn from others' failures.",
    category: "getting-started",
    icon: "🚫",
    readTime: "9 min read",
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
  },
  {
    slug: "10-tips-building-better-homes-paralives",
    title: "10 Tips for Building Better Homes",
    description: "Pro building techniques that make your houses look incredible.",
    category: "build-mode",
    icon: "🏡",
    readTime: "10 min read",
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
  },
  {
    slug: "10-paralives-build-features-change-everything",
    title: "10 Build Features That Change Everything",
    description: "Game-changing tools you didn't know existed in Paralives.",
    category: "build-mode",
    icon: "⚡",
    readTime: "8 min read",
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
  },

  // News & Updates
  {
    slug: "paralives-known-issues-bugs-workarounds-2026",
    title: "Known Issues & Bug Workarounds",
    description: "Official bug list, workarounds, and what the devs are fixing next.",
    category: "getting-started",
    icon: "🐛",
    readTime: "6 min read",
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
  },
  {
    slug: "paralives-among-us-collab-guide",
    title: "Among Us Collaboration: Emergency Meeting!",
    description: "How to find the Among Us Easter eggs and crossover content.",
    category: "achievements-secrets",
    icon: "📮",
    readTime: "5 min read",
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
  },
  {
    slug: "paralives-early-access-roadmap-2026",
    title: "Early Access Roadmap: What's Coming Next",
    description: "Free updates planned: pets, cars, pools, weather, and more.",
    category: "getting-started",
    icon: "🗺️",
    readTime: "7 min read",
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
  },

  // YouTube Video Guides
  {
    slug: "paralives-first-gameplay-guide",
    title: "First Gameplay Guide: Everything You Need to Know",
    description: "Complete beginner's guide based on Ashley's first gameplay session — character creation, building, jobs, emotions, and more.",
    category: "getting-started",
    icon: "🎮",
    readTime: "12 min read",
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
  },

  // ===== 6月新增攻略 (对标竞争对手) =====
  
  // 补丁速报
  {
    slug: "paralives-v104-patch-notes",
    title: "v1.0.4 Patch Notes (12 Crash Fixes)",
    description: "Latest update fixes 12 crash bugs, improves stability, and more.",
    category: "getting-started",
    icon: "🔧",
    readTime: "4 min read",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
  },
  
  // 开发动态
  {
    slug: "paralives-basement-update-september-beta",
    title: "Basement Update & September Beta Plan",
    description: "Dev roadmap reveals basements coming in September beta — what to expect.",
    category: "getting-started",
    icon: "🗺️",
    readTime: "5 min read",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
  },
  
  // 彩蛋攻略
  {
    slug: "paralives-15-hidden-interactions-easter-eggs",
    title: "15 Hidden Interactions & Easter Eggs",
    description: "Secret interactions 90% of players miss — developer cameos, mysterious NPCs, and more.",
    category: "achievements-secrets",
    icon: "🥚",
    readTime: "8 min read",
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-02",
  },
  
  // 攻略 - 职业
  {
    slug: "paralives-career-tier-list-8-jobs-ranked",
    title: "Career Tier List: All 8 Jobs Ranked",
    description: "Best careers for money, skills, and work-life balance — complete tier ranking.",
    category: "careers",
    icon: "📊",
    readTime: "9 min read",
    publishedAt: "2026-06-03",
    updatedAt: "2026-06-03",
  },
  
  // 建造指南
  {
    slug: "paralives-kitchen-golden-triangle-layout",
    title: "Kitchen Layout: The Golden Triangle Guide",
    description: "Optimize your kitchen workflow with the golden triangle principle — stove, sink, fridge placement.",
    category: "build-mode",
    icon: "🍳",
    readTime: "7 min read",
    publishedAt: "2026-06-04",
    updatedAt: "2026-06-04",
  },
  
  // 机制攻略
  {
    slug: "paralives-permanent-euphoria-mood-buff-stacking",
    title: "Permanent Euphoria: Mood Buff Stacking Guide",
    description: "Stack mood buffs to achieve permanent euphoria state — maximize happiness.",
    category: "characters",
    icon: "😊",
    readTime: "8 min read",
    publishedAt: "2026-06-05",
    updatedAt: "2026-06-05",
  },
  
  // Mod 评测
  {
    slug: "paralives-autoclean-mod-review",
    title: "AutoClean Mod Review: Automatic Cleaning",
    description: "Is the AutoClean mod worth it? Full review with pros, cons, and installation guide.",
    category: "mods",
    icon: "🧹",
    readTime: "6 min read",
    publishedAt: "2026-06-06",
    updatedAt: "2026-06-06",
  },
  
  // Mod 警告
  {
    slug: "paralives-3-dangerous-mods-save-corruption",
    title: "3 Dangerous Mods That Can Corrupt Your Save",
    description: "WARNING: These popular mods can destroy your save file — how to protect yourself.",
    category: "mods",
    icon: "⚠️",
    readTime: "5 min read",
    publishedAt: "2026-06-07",
    updatedAt: "2026-06-07",
  },
  
  // 建造教程
  {
    slug: "paralives-build-mode-7-day-mastery-roadmap",
    title: "Build Mode: 7-Day Mastery Roadmap",
    description: "Learn build mode from zero to hero in 7 days — structured daily learning plan.",
    category: "build-mode",
    icon: "📅",
    readTime: "12 min read",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
  },
  
  // 进阶教程
  {
    slug: "paralives-copy-paste-entire-floor-trick",
    title: "Copy & Paste Entire Floors: Advanced Trick",
    description: "Time-saving trick to copy entire floor layouts — build faster than ever.",
    category: "build-mode",
    icon: "📋",
    readTime: "5 min read",
    publishedAt: "2026-06-09",
    updatedAt: "2026-06-09",
  },
  
  // 指南
  {
    slug: "paralives-how-to-rename-all-ages",
    title: "How to Rename Your Para (All Ages)",
    description: "Complete rename guide for babies, teens, adults, and elders — every method explained.",
    category: "characters",
    icon: "✏️",
    readTime: "4 min read",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
  },
  
  // 建造教程
  {
    slug: "paralives-industrial-loft-build-tutorial",
    title: "Industrial Loft Build Tutorial",
    description: "Step-by-step guide to building a trendy industrial loft — exposed brick, metal beams, open floor plan.",
    category: "build-mode",
    icon: "🏭",
    readTime: "10 min read",
    publishedAt: "2026-06-11",
    updatedAt: "2026-06-11",
  },
  
  // 建造教程
  {
    slug: "paralives-30sqm-micro-home-walk-in-closet",
    title: "30㎡ Micro Home with Walk-In Closet",
    description: "Tiny home, big style — build a functional 30㎡ micro home with a walk-in closet.",
    category: "build-mode",
    icon: "🏠",
    readTime: "9 min read",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
  },
];

export function getArticlesByCategory(categoryId: string): Article[] {
  return articles.filter((a) => a.category === categoryId);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}