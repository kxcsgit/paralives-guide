import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, categories } from "@/lib/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = categories.find((c) => c.id === article.category);

  // Article content mapping
  const articleContent: Record<string, React.ReactNode> = {
    "paralives-early-access-complete-guide-2026": (
      <>
        <h2>📅 Release Date & Price</h2>
        <p>
          Paralives launched in <strong>Early Access on May 25, 2026</strong> on
          Steam. The game is priced at approximately <strong>$35-40 USD</strong>{" "}
          (regional pricing varies). Early Access means the game is still in
          development, but already offers a substantial amount of content.
        </p>

        <div className="tip-box">
          <strong>💡 What is Early Access?</strong> Early Access allows you to
          play the game while it&apos;s still being developed. You&apos;ll get
          access to the current content and receive all future updates for free
          until the full release.
        </div>

        <h2>🎮 What&apos;s Included at Launch</h2>
        <p>The Early Access version includes:</p>
        <ul>
          <li>
            <strong>Character Creator (Paramaker):</strong> Detailed
            customization of appearance, personality, and traits
          </li>
          <li>
            <strong>Build Mode:</strong> Gridless building with curved walls,
            custom colors, and extensive furniture
          </li>
          <li>
            <strong>Live Mode:</strong> Control your Paras&apos; daily lives,
            careers, and relationships
          </li>
          <li>
            <strong>8 Career Paths:</strong> Tech, Medical, Business,
            Construction, Art, Education, Public Service, Culinary
          </li>
          <li>
            <strong>Skill System:</strong> Logic, Charisma, Creativity,
            Handiness, Cooking, Physique
          </li>
          <li>
            <strong>Relationship System:</strong> Together Cards, romance,
            friendships, and family dynamics
          </li>
          <li>
            <strong>Steam Workshop:</strong> Mod support from day one
          </li>
        </ul>

        <h2>🗺️ Development Roadmap</h2>
        <p>The developers have shared their plans for future updates:</p>
        <ul>
          <li>
            <strong>Phase 1 (Launch):</strong> Core gameplay, build mode,
            character creator, basic careers
          </li>
          <li>
            <strong>Phase 2:</strong> Additional careers, expanded social
            systems, more build items
          </li>
          <li>
            <strong>Phase 3:</strong> Supernatural life states, expanded world,
            more activities
          </li>
          <li>
            <strong>Full Release:</strong> Complete story mode, all planned
            features, polish and optimization
          </li>
        </ul>

        <h2>💻 System Requirements</h2>
        <div className="career-table">
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Minimum</th>
                <th>Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OS</td>
                <td>Windows 10 64-bit</td>
                <td>Windows 10/11 64-bit</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>Intel i5-4590 / AMD Ryzen 3 1200</td>
                <td>Intel i7-8700 / AMD Ryzen 5 3600</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>8 GB RAM</td>
                <td>16 GB RAM</td>
              </tr>
              <tr>
                <td>Graphics</td>
                <td>NVIDIA GTX 960 / AMD R9 280</td>
                <td>NVIDIA GTX 1060 / AMD RX 580</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>15 GB available space</td>
                <td>20 GB SSD</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>🎯 Is It Worth Buying?</h2>
        <p>
          <strong>Yes, if you enjoy life simulation games.</strong> Paralives
          offers a unique building experience with its gridless system and curved
          walls. The character creator is detailed, and the career system
          provides good progression. While it&apos;s still in Early Access, the
          foundation is solid and the developers are actively updating.
        </p>

        <div className="tip-box">
          <strong>⚠️ Keep in mind:</strong> As an Early Access game, you may
          encounter bugs and missing features. If you prefer a complete
          experience, you may want to wait for the full release.
        </div>
      </>
    ),
    "paralives-mod-installation-guide-2026": (
      <>
        <h2>🔧 Steam Workshop (Easiest Method)</h2>
        <p>The Steam Workshop is the simplest way to install mods:</p>
        <ol>
          <li>
            Open Steam and go to the <strong>Paralives store page</strong>
          </li>
          <li>
            Click on the <strong>&quot;Workshop&quot;</strong> tab
          </li>
          <li>Browse or search for mods you want</li>
          <li>
            Click <strong>&quot;Subscribe&quot;</strong> on any mod you want to
            install
          </li>
          <li>
            Launch Paralives — the mod will be automatically downloaded and
            installed
          </li>
          <li>
            In-game, go to <strong>Settings → Mods</strong> to enable/disable
            mods
          </li>
        </ol>

        <div className="tip-box">
          <strong>💡 Pro Tip:</strong> Steam Workshop mods are automatically
          updated when the creator releases new versions. You don&apos;t need to
          manually update them.
        </div>

        <h2>📦 Manual Installation (Third-Party Mods)</h2>
        <p>For mods not available on the Steam Workshop:</p>
        <ol>
          <li>Download the mod file (usually a .zip or .rar archive)</li>
          <li>
            Extract the contents to your Paralives mods folder:
            <br />
            <code>
              %USERPROFILE%\AppData\LocalLow\Alex Masse\Paralives\Mods
            </code>
          </li>
          <li>
            Launch Paralives and go to <strong>Settings → Mods</strong>
          </li>
          <li>Enable the mod and restart the game if prompted</li>
        </ol>

        <h2>⚙️ BepInEx (Script Mods)</h2>
        <p>Some advanced mods require the BepInEx framework:</p>
        <ol>
          <li>
            Download BepInEx from the{" "}
            <a href="https://github.com/BepInEx/BepInEx/releases">
              official GitHub releases
            </a>
          </li>
          <li>
            Extract BepInEx to your Paralives game root folder (where
            Paralives.exe is located)
          </li>
          <li>Launch the game once to generate the BepInEx folder structure</li>
          <li>Close the game</li>
          <li>
            Place mod .dll files in the{" "}
            <code>BepInEx/plugins</code> folder
          </li>
          <li>Launch the game again</li>
        </ol>

        <h2>🛠️ Troubleshooting</h2>
        <p>
          <strong>Mod not showing up?</strong>
        </p>
        <ul>
          <li>Make sure the mod is in the correct folder</li>
          <li>Check that the mod is enabled in Settings → Mods</li>
          <li>Restart the game after enabling/disabling mods</li>
          <li>
            Verify the mod is compatible with your game version (check the mod
            description)
          </li>
        </ul>

        <p>
          <strong>Game crashing after installing a mod?</strong>
        </p>
        <ul>
          <li>Disable all mods and re-enable them one by one to find the
            culprit</li>
          <li>Check if the mod requires BepInEx or other dependencies</li>
          <li>Make sure you have the latest version of the mod</li>
          <li>Try deleting the mod and reinstalling it</li>
        </ul>

        <h2>📋 Recommended Mod Load Order</h2>
        <p>For best stability, install mods in this order:</p>
        <ol>
          <li>BepInEx (if needed)</li>
          <li>Core framework mods</li>
          <li>Gameplay mods</li>
          <li>Visual/UI mods</li>
          <li>Build mode mods</li>
          <li>CAS (Create-A-Sim) mods</li>
        </ol>

        <div className="tip-box">
          <strong>⚠️ Important:</strong> Always back up your saves before
          installing new mods. Save location:
          <br />
          <code>
            %USERPROFILE%\AppData\LocalLow\Alex Masse\Paralives\Saves
          </code>
        </div>
      </>
    ),
    "free-early-access-keys-scam-prevention": (
      <>
        <h2>🎁 Official Ways to Get Paralives</h2>
        <p>
          There are only a few legitimate ways to get Paralives:
        </p>
        <ul>
          <li>
            <strong>Steam Store:</strong> Purchase directly from the{" "}
            <a href="https://store.steampowered.com/app/1118520/Paralives/">
              official Steam page
            </a>
          </li>
          <li>
            <strong>Steam Sales:</strong> Wait for seasonal Steam sales
            (Summer, Winter, etc.) for potential discounts
          </li>
          <li>
            <strong>Official Giveaways:</strong> Follow the developers on
            social media for occasional key giveaways
          </li>
          <li>
            <strong>Patreon Rewards:</strong> Some Patreon supporters may
            receive keys as part of their rewards
          </li>
        </ul>

        <h2>🚨 Common Scams to Avoid</h2>
        <p>
          <strong>Warning:</strong> The following are all scams. Do NOT trust
          them:
        </p>
        <ul>
          <li>
            <strong>&quot;Free Key Generator&quot; websites:</strong> These sites
            claim to generate free Steam keys. They don&apos;t work and often
            contain malware.
          </li>
          <li>
            <strong>&quot;Survey to Unlock&quot; offers:</strong> Sites that ask
            you to complete surveys to &quot;unlock&quot; a free key. These are
            scams designed to harvest your personal information.
          </li>
          <li>
            <strong>Social media giveaways from unverified accounts:</strong>{" "}
            Only trust giveaways from the official Paralives accounts.
          </li>
          <li>
            <strong>Discord DMs offering free keys:</strong> The developers
            will never DM you directly offering free keys.
          </li>
          <li>
            <strong>Email offers with &quot;exclusive&quot; keys:</strong>{" "}
            Phishing attempts designed to steal your Steam account.
          </li>
        </ul>

        <h2>✅ How to Verify Legitimate Offers</h2>
        <p>Before trusting any offer, check:</p>
        <ul>
          <li>
            Is it from the <strong>official Paralives website</strong> or
            verified social media accounts?
          </li>
          <li>
            Does the URL match the official domain? (paralives.com,
            store.steampowered.com)
          </li>
          <li>
            Is the offer too good to be true? (e.g., &quot;100% free, no
            catch!&quot;)
          </li>
          <li>
            Does it ask for your Steam password or personal information?
          </li>
        </ul>

        <h2>🔒 Protecting Your Steam Account</h2>
        <ul>
          <li>
            <strong>Enable Steam Guard:</strong> Use two-factor authentication
            on your Steam account
          </li>
          <li>
            <strong>Never share your password:</strong> The developers will
            never ask for your password
          </li>
          <li>
            <strong>Use strong, unique passwords:</strong> Don&apos;t reuse
            passwords across different sites
          </li>
          <li>
            <strong>Be cautious of links:</strong> Don&apos;t click suspicious
            links, even from friends (their accounts may be compromised)
          </li>
        </ul>

        <h2>📞 Reporting Scams</h2>
        <p>
          If you encounter a scam claiming to offer free Paralives keys:
        </p>
        <ul>
          <li>
            Report it to <strong>Steam Support</strong> if it&apos;s on Steam
          </li>
          <li>
            Report it to the <strong>platform</strong> where you found it
            (Discord, Twitter, etc.)
          </li>
          <li>
            Warn others in the community (without sharing the scam link)
          </li>
        </ul>

        <div className="tip-box">
          <strong>💡 Remember:</strong> If something seems too good to be true,
          it probably is. The best way to support the developers and get the
          game is to purchase it directly from Steam.
        </div>
      </>
    ),
    "best-paralives-house-blueprints": (
      <>
        <h2>🏠 Top 10 House Blueprints from Steam Workshop</h2>
        <p>
          The Steam Workshop is full of amazing player-created houses. Here are
          some of the best blueprints you can download right now:
        </p>

        <h3>1. 🏡 Modern Minimalist Villa</h3>
        <p>
          A sleek, modern home with floor-to-ceiling windows, open floor plan,
          and a stunning pool area. Perfect for players who love contemporary
          architecture.
        </p>
        <ul>
          <li>Bedrooms: 3</li>
          <li>Bathrooms: 2</li>
          <li>Features: Pool, rooftop terrace, open kitchen</li>
          <li>Style: Modern, Minimalist</li>
        </ul>

        <h3>2. 🏰 Cozy Cottage</h3>
        <p>
          A charming, rustic cottage with a beautiful garden. Ideal for players
          who prefer a warm, homey atmosphere.
        </p>
        <ul>
          <li>Bedrooms: 2</li>
          <li>Bathrooms: 1</li>
          <li>Features: Garden, fireplace, reading nook</li>
          <li>Style: Rustic, Cottagecore</li>
        </ul>

        <h3>3. 🏙️ Urban Loft</h3>
        <p>
          A stylish loft apartment with exposed brick, high ceilings, and
          industrial touches. Great for young, career-focused Paras.
        </p>
        <ul>
          <li>Bedrooms: 1</li>
          <li>Bathrooms: 1</li>
          <li>Features: Open concept, industrial design, rooftop access</li>
          <li>Style: Industrial, Urban</li>
        </ul>

        <h3>4. 🏖️ Beach House</h3>
        <p>
          A light, airy beach house with ocean views and a wraparound porch.
          Perfect for a relaxing lifestyle.
        </p>
        <ul>
          <li>Bedrooms: 3</li>
          <li>Bathrooms: 2</li>
          <li>Features: Ocean view, deck, outdoor shower</li>
          <li>Style: Coastal, Beach</li>
        </ul>

        <h3>5. 🏯 Japanese-Inspired Home</h3>
        <p>
          A serene home with Japanese architectural elements, including sliding
          doors, tatami rooms, and a zen garden.
        </p>
        <ul>
          <li>Bedrooms: 2</li>
          <li>Bathrooms: 1</li>
          <li>Features: Zen garden, tatami room, onsen</li>
          <li>Style: Japanese, Zen</li>
        </ul>

        <h2>📥 How to Download & Install</h2>
        <ol>
          <li>Click the &quot;Subscribe&quot; button on the Workshop page</li>
          <li>Launch Paralives</li>
          <li>Go to Build Mode → Gallery/Workshop</li>
          <li>Find the house in your subscribed items</li>
          <li>Place it on any empty lot</li>
        </ol>

        <div className="tip-box">
          <strong>💡 Pro Tip:</strong> Some blueprints require specific packs or
          mods. Check the description before subscribing to ensure compatibility.
        </div>

        <h2>🎨 Finding More Blueprints</h2>
        <p>To discover more amazing houses:</p>
        <ul>
          <li>
            Browse the{" "}
            <a href="https://steamcommunity.com/app/1118520/workshop/">
              Steam Workshop
            </a>{" "}
            regularly
          </li>
          <li>Filter by &quot;Most Popular&quot; or &quot;Highest Rated&quot;</li>
          <li>Search for specific styles (modern, cottage, mansion, etc.)</li>
          <li>Follow talented builders for new creations</li>
        </ul>
      </>
    ),
  };

  const content = articleContent[slug] || (
    <div className="bg-golden/10 border border-golden/30 rounded-xl p-6 mb-8">
      <p className="text-warm-brown font-semibold">
        🚧 This article is currently being written. Check back soon for the
        complete guide!
      </p>
    </div>
  );

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-terracotta transition">
          Home
        </Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-terracotta transition">
          Guides
        </Link>
        <span>/</span>
        <span className="text-warm-brown">{article.title}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl">{article.icon}</span>
          {category && (
            <span className="text-xs font-semibold text-soft-teal bg-soft-teal/10 px-3 py-1 rounded-full">
              {category.label}
            </span>
          )}
          <span className="text-xs font-semibold text-muted">
            {article.readTime}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          {article.title}
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          {article.description}
        </p>
        <div className="flex items-center gap-4 mt-4 text-sm text-muted">
          <span>📅 Published: {article.publishedAt}</span>
          <span>🔄 Updated: {article.updatedAt}</span>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose">{content}</div>

      {/* Related Articles */}
      <div className="mt-12 pt-8 border-t border-amber-100/60">
        <h3 className="text-xl font-bold mb-4">Related Guides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(
            await import("@/lib/articles")
          ).articles
            .filter((a) => a.category === article.category && a.slug !== slug)
            .slice(0, 2)
            .map((related) => (
              <Link
                key={related.slug}
                href={`/articles/${related.slug}`}
                className="group bg-card rounded-xl p-4 shadow-sm hover:shadow-md transition border border-amber-100/60 hover:border-terracotta/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{related.icon}</span>
                  <h4 className="font-semibold group-hover:text-terracotta transition">
                    {related.title}
                  </h4>
                </div>
                <p className="text-muted text-sm">{related.description}</p>
              </Link>
            ))}
        </div>
      </div>

      {/* Back to Guides */}
      <div className="mt-8 text-center">
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 text-terracotta font-semibold hover:underline"
        >
          ← Browse all guides
        </Link>
      </div>
    </article>
  );
}
