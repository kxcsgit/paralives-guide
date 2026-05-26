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
    // ==================== GETTING STARTED ====================
    "paralives-early-access-complete-guide-2026": (
      <>
        <h2>📅 Release Date &amp; Price</h2>
        <p>Paralives launched in <strong>Early Access on May 25, 2026</strong> on Steam. The game is priced at approximately <strong>$35-40 USD</strong> (regional pricing varies).</p>
        <div className="tip-box"><strong>💡 What is Early Access?</strong> Early Access allows you to play the game while it&apos;s still being developed. You&apos;ll get access to the current content and receive all future updates for free until the full release.</div>
        <h2>🎮 What&apos;s Included at Launch</h2>
        <ul>
          <li><strong>Character Creator (Paramaker):</strong> Detailed customization of appearance, personality, and traits</li>
          <li><strong>Build Mode:</strong> Gridless building with curved walls, custom colors, and extensive furniture</li>
          <li><strong>Live Mode:</strong> Control your Paras&apos; daily lives, careers, and relationships</li>
          <li><strong>8 Career Paths:</strong> Tech, Medical, Business, Construction, Art, Education, Public Service, Culinary</li>
          <li><strong>Skill System:</strong> Logic, Charisma, Creativity, Handiness, Cooking, Physique</li>
          <li><strong>Relationship System:</strong> Together Cards, romance, friendships, and family dynamics</li>
          <li><strong>Steam Workshop:</strong> Mod support from day one</li>
        </ul>
        <h2>🗺️ Development Roadmap</h2>
        <ul>
          <li><strong>Phase 1 (Launch):</strong> Core gameplay, build mode, character creator, basic careers</li>
          <li><strong>Phase 2:</strong> Additional careers, expanded social systems, more build items</li>
          <li><strong>Phase 3:</strong> Supernatural life states, expanded world, more activities</li>
          <li><strong>Full Release:</strong> Complete story mode, all planned features, polish and optimization</li>
        </ul>
        <h2>💻 System Requirements</h2>
        <div className="career-table"><table><thead><tr><th>Component</th><th>Minimum</th><th>Recommended</th></tr></thead><tbody>
          <tr><td>OS</td><td>Windows 10 64-bit</td><td>Windows 10/11 64-bit</td></tr>
          <tr><td>Processor</td><td>Intel i5-4590 / AMD Ryzen 3 1200</td><td>Intel i7-8700 / AMD Ryzen 5 3600</td></tr>
          <tr><td>Memory</td><td>8 GB RAM</td><td>16 GB RAM</td></tr>
          <tr><td>Graphics</td><td>NVIDIA GTX 960 / AMD R9 280</td><td>NVIDIA GTX 1060 / AMD RX 580</td></tr>
          <tr><td>Storage</td><td>15 GB available space</td><td>20 GB SSD</td></tr>
        </tbody></table></div>
        <h2>🎯 Is It Worth Buying?</h2>
        <p><strong>Yes, if you enjoy life simulation games.</strong> Paralives offers a unique building experience with its gridless system and curved walls. The character creator is detailed, and the career system provides good progression.</p>
      </>
    ),

    "paralives-mod-installation-guide-2026": (
      <>
        <h2>🔧 Steam Workshop (Easiest Method)</h2>
        <ol>
          <li>Open Steam and go to the <strong>Paralives store page</strong></li>
          <li>Click on the <strong>&quot;Workshop&quot;</strong> tab</li>
          <li>Browse or search for mods you want</li>
          <li>Click <strong>&quot;Subscribe&quot;</strong> on any mod</li>
          <li>Launch Paralives — the mod will be automatically downloaded and installed</li>
          <li>In-game, go to <strong>Settings → Mods</strong> to enable/disable mods</li>
        </ol>
        <div className="tip-box"><strong>💡 Pro Tip:</strong> Steam Workshop mods are automatically updated when the creator releases new versions.</div>
        <h2>📦 Manual Installation (Third-Party Mods)</h2>
        <ol>
          <li>Download the mod file (usually a .zip or .rar archive)</li>
          <li>Extract the contents to your Paralives mods folder: <code>%USERPROFILE%\AppData\LocalLow\Alex Masse\Paralives\Mods</code></li>
          <li>Launch Paralives and go to <strong>Settings → Mods</strong></li>
          <li>Enable the mod and restart the game if prompted</li>
        </ol>
        <h2>⚙️ BepInEx (Script Mods)</h2>
        <ol>
          <li>Download BepInEx from the <a href="https://github.com/BepInEx/BepInEx/releases">official GitHub releases</a></li>
          <li>Extract BepInEx to your Paralives game root folder</li>
          <li>Launch the game once to generate the BepInEx folder structure</li>
          <li>Close the game</li>
          <li>Place mod .dll files in the <code>BepInEx/plugins</code> folder</li>
          <li>Launch the game again</li>
        </ol>
        <h2>🛠️ Troubleshooting</h2>
        <ul>
          <li>Make sure the mod is in the correct folder</li>
          <li>Check that the mod is enabled in Settings → Mods</li>
          <li>Restart the game after enabling/disabling mods</li>
          <li>Verify the mod is compatible with your game version</li>
        </ul>
        <div className="tip-box"><strong>⚠️ Important:</strong> Always back up your saves before installing new mods. Save location: <code>%USERPROFILE%\AppData\LocalLow\Alex Masse\Paralives\Saves</code></div>
      </>
    ),

    "free-early-access-keys-scam-prevention": (
      <>
        <h2>🎁 Official Ways to Get Paralives</h2>
        <ul>
          <li><strong>Steam Store:</strong> Purchase directly from the <a href="https://store.steampowered.com/app/1118520/Paralives/">official Steam page</a></li>
          <li><strong>Steam Sales:</strong> Wait for seasonal Steam sales (Summer, Winter, etc.) for potential discounts</li>
          <li><strong>Official Giveaways:</strong> Follow the developers on social media for occasional key giveaways</li>
          <li><strong>Patreon Rewards:</strong> Some Patreon supporters may receive keys as part of their rewards</li>
        </ul>
        <h2>🚨 Common Scams to Avoid</h2>
        <ul>
          <li><strong>&quot;Free Key Generator&quot; websites:</strong> These sites claim to generate free Steam keys. They don&apos;t work and often contain malware.</li>
          <li><strong>&quot;Survey to Unlock&quot; offers:</strong> Sites that ask you to complete surveys to &quot;unlock&quot; a free key. These are scams designed to harvest your personal information.</li>
          <li><strong>Social media giveaways from unverified accounts:</strong> Only trust giveaways from the official Paralives accounts.</li>
          <li><strong>Discord DMs offering free keys:</strong> The developers will never DM you directly offering free keys.</li>
          <li><strong>Email offers with &quot;exclusive&quot; keys:</strong> Phishing attempts designed to steal your Steam account.</li>
        </ul>
        <h2>✅ How to Verify Legitimate Offers</h2>
        <ul>
          <li>Is it from the <strong>official Paralives website</strong> or verified social media accounts?</li>
          <li>Does the URL match the official domain?</li>
          <li>Is the offer too good to be true?</li>
          <li>Does it ask for your Steam password or personal information?</li>
        </ul>
        <h2>🔒 Protecting Your Steam Account</h2>
        <ul>
          <li><strong>Enable Steam Guard:</strong> Use two-factor authentication on your Steam account</li>
          <li><strong>Never share your password:</strong> The developers will never ask for your password</li>
          <li><strong>Use strong, unique passwords:</strong> Don&apos;t reuse passwords across different sites</li>
          <li><strong>Be cautious of links:</strong> Don&apos;t click suspicious links, even from friends</li>
        </ul>
      </>
    ),

    "best-paralives-house-blueprints": (
      <>
        <h2>🏠 Top 10 House Blueprints from Steam Workshop</h2>
        <p>The Steam Workshop is full of amazing player-created houses. Here are some of the best blueprints you can download right now:</p>
        <h3>1. 🏡 Modern Minimalist Villa</h3>
        <p>A sleek, modern home with floor-to-ceiling windows, open floor plan, and a stunning pool area. Perfect for players who love contemporary architecture.</p>
        <ul><li>Bedrooms: 3</li><li>Bathrooms: 2</li><li>Features: Pool, rooftop terrace, open kitchen</li><li>Style: Modern, Minimalist</li></ul>
        <h3>2. 🏰 Cozy Cottage</h3>
        <p>A charming, rustic cottage with a beautiful garden. Ideal for players who prefer a warm, homey atmosphere.</p>
        <ul><li>Bedrooms: 2</li><li>Bathrooms: 1</li><li>Features: Garden, fireplace, reading nook</li><li>Style: Rustic, Cottagecore</li></ul>
        <h3>3. 🏙️ Urban Loft</h3>
        <p>A stylish loft apartment with exposed brick, high ceilings, and industrial touches. Great for young, career-focused Paras.</p>
        <ul><li>Bedrooms: 1</li><li>Bathrooms: 1</li><li>Features: Open concept, industrial design, rooftop access</li><li>Style: Industrial, Urban</li></ul>
        <h3>4. 🏖️ Beach House</h3>
        <p>A light, airy beach house with ocean views and a wraparound porch. Perfect for a relaxing lifestyle.</p>
        <ul><li>Bedrooms: 3</li><li>Bathrooms: 2</li><li>Features: Ocean view, deck, outdoor shower</li><li>Style: Coastal, Beach</li></ul>
        <h3>5. 🏯 Japanese-Inspired Home</h3>
        <p>A serene home with Japanese architectural elements, including sliding doors, tatami rooms, and a zen garden.</p>
        <ul><li>Bedrooms: 2</li><li>Bathrooms: 1</li><li>Features: Zen garden, tatami room, onsen</li><li>Style: Japanese, Zen</li></ul>
        <h2>📥 How to Download &amp; Install</h2>
        <ol>
          <li>Click the &quot;Subscribe&quot; button on the Workshop page</li>
          <li>Launch Paralives</li>
          <li>Go to Build Mode → Gallery/Workshop</li>
          <li>Find the house in your subscribed items</li>
          <li>Place it on any empty lot</li>
        </ol>
        <h2>🎨 Finding More Blueprints</h2>
        <ul>
          <li>Browse the <a href="https://steamcommunity.com/app/1118520/workshop/">Steam Workshop</a> regularly</li>
          <li>Filter by &quot;Most Popular&quot; or &quot;Highest Rated&quot;</li>
          <li>Search for specific styles (modern, cottage, mansion, etc.)</li>
          <li>Follow talented builders for new creations</li>
        </ul>
      </>
    ),

    // ==================== BUILD MODE ====================
    "paralives-build-mode-basics-tools-guide": (
      <>
        <h2>🔨 Essential Build Mode Tools</h2>
        <p>Paralives Build Mode is the most powerful building system in any life simulation game. Here&apos;s how to master every tool:</p>
        <h3>🧱 Wall Tool</h3>
        <p>Click and drag to draw walls. Three types available:</p>
        <ul>
          <li><strong>Standard (2.4m):</strong> Regular height walls for most rooms</li>
          <li><strong>Half (1.2m):</strong> Half walls for open-concept divisions</li>
          <li><strong>Invisible:</strong> Creates room boundaries without visual walls</li>
        </ul>
        <div className="tip-box"><strong>💡 Pro tip:</strong> Always raise your walls to 2.7–3m — the default height feels cramped.</div>
        <h3>🪵 Floor Tool</h3>
        <p>Click a room to fill it. Hold Shift to paint a single tile. Create checkerboard, herringbone, or chevron patterns by mixing materials.</p>
        <h3>🚪 Doors &amp; Windows</h3>
        <p>Place on walls, then drag corners to resize. Floor-to-ceiling windows? Yes. Tiny accent windows? Also yes.</p>
        <h3>🏡 Roof Tool</h3>
        <p>Click Auto Roof for instant coverage. Adjust pitch and eaves by dragging edges. Materials: tile, metal, thatch, slate.</p>
        <h3>🪜 Stairs</h3>
        <p>Click ground, drag to define length. Supports straight, L-shape, U-shape, spiral. Requires at least 3 wide × 4 deep tiles.</p>
        <h2>🎨 Furniture Placement</h2>
        <ul>
          <li><strong>Grid Mode (G):</strong> Snap furniture to grid for precise placement</li>
          <li><strong>Free Mode:</strong> Place furniture anywhere with free rotation (R)</li>
          <li><strong>Resize ([ ]):</strong> Scale furniture to any size</li>
          <li><strong>Color Wheel:</strong> Customize any color with hex code support</li>
          <li><strong>Eyedropper (P):</strong> Copy color from existing objects</li>
        </ul>
        <h2>🚫 Top 5 Beginner Mistakes</h2>
        <ol>
          <li>Wall height too low — raise to 2.7–3m</li>
          <li>Windows too small or too few — bigger windows = better light</li>
          <li>Stair space miscalculation — need at least 3×4 tiles</li>
          <li>Furniture too large — overscaled items block paths</li>
          <li>Too many colors — stick to 3 hues per room</li>
        </ol>
      </>
    ),

    "paralives-build-mode-tutorial-box-to-mansion": (
      <>
        <h2>🔧 Core Tools — Master These 5 First</h2>
        <h3>1. 🧱 Wall Tool — Your House&apos;s Skeleton</h3>
        <p>Three wall types: Standard (2.4m), Half (1.2m), Invisible. Two shapes: Straight &amp; Curved. Click and drag to draw. Drag arrows to adjust length/height.</p>
        <h3>2. 🪵 Floor Tool — More Than Just Fill</h3>
        <p>Click a room to fill it. Hold Shift to paint a single tile. Create checkerboard, herringbone, or chevron patterns by mixing materials.</p>
        <h3>3. 🚪 Doors &amp; Windows — Resize Everything</h3>
        <p>Place on walls, then drag corners to resize. Floor-to-ceiling windows? Yes. Tiny accent windows? Also yes.</p>
        <h3>4. 🏡 Roof Tool — Auto First, Then Tweak</h3>
        <p>Click Auto Roof for instant coverage. Adjust pitch and eaves by dragging edges. Materials: tile, metal, thatch, slate.</p>
        <h3>5. 🪜 Stairs — Always Leave Enough Room</h3>
        <p>Click ground, drag to define length. Supports straight, L-shape, U-shape, spiral. Requires at least 3 wide × 4 deep tiles.</p>
        <h2>🌀 Gridless Building — True Freedom</h2>
        <p>Toggle grid with G. Hold Shift to temporarily snap. Rule: grid ON for walls, doors, windows, floors; grid OFF for furniture, decor, details.</p>
        <h3>Curved Walls — The Signature Feature</h3>
        <p>Switch to curved wall mode, click and drag. Adjust the radius by dragging control points. Use for: accent living-room walls, circular dining rooms, wavy façades, semi-circular balconies.</p>
        <h3>Free-Angle Placement</h3>
        <p>In gridless mode, press R to rotate freely. Hold Shift + R for 1-degree micro-adjustments.</p>
        <h3>Split-Levels &amp; Vaulted Ceilings</h3>
        <p>Use the Platform Tool to raise/lower floor sections. A raised living room or sunken dining area adds instant sophistication.</p>
        <div className="tip-box"><strong>⚠️ Warning:</strong> Keep platform height differences under 0.5m, otherwise Paras can&apos;t walk onto them.</div>
        <h2>🎨 Item Customization — Every Piece Unique</h2>
        <ul>
          <li><strong>Free Scaling:</strong> Press [/]. Enlarge a side table into a dining table</li>
          <li><strong>Full Color Wheel:</strong> Pick any hue + paste hex codes for exact matching</li>
          <li><strong>Texture Swap:</strong> Change wood to marble, fabric to leather</li>
          <li><strong>Eyedropper (P):</strong> Copy color; hold Shift to clone size and rotation too</li>
          <li><strong>Object Stacking:</strong> Place books, cups, vases on tables — no cheat codes needed</li>
        </ul>
        <h2>🏠 Interior Layout — Comfort First</h2>
        <ul>
          <li><strong>🛋️ Living Room (min 4×5m):</strong> Face sofa toward TV, leave 2m between. L-shaped sofa + round coffee table + TV unit is foolproof.</li>
          <li><strong>🛏️ Bedroom (min 3×4m):</strong> Bed not facing the door. Leave 0.5m on each side for nightstands.</li>
          <li><strong>🍳 Kitchen (min 3×3m):</strong> Follow the &quot;wash-chop-cook&quot; workflow: sink → counter → stove.</li>
          <li><strong>🚿 Bathroom (min 2×2m):</strong> Separate wet and dry zones. Vanity near door, toilet middle, shower at back.</li>
        </ul>
        <h2>🚫 Top 10 Beginner Mistakes</h2>
        <ol>
          <li>Wall height too low — raise to 2.7–3m</li>
          <li>Windows too small or too few — bigger windows = better light</li>
          <li>Stair space miscalculation — need at least 3×4 tiles</li>
          <li>Furniture too large — overscaled items block paths</li>
          <li>Too many colors — stick to 3 hues per room</li>
          <li>Ignoring lighting — use ceiling + task + accent lights</li>
          <li>No functional zones — define areas with rugs or half-walls</li>
          <li>Bad traffic flow — ensure clear walkways between rooms</li>
          <li>Forgetting to save — Ctrl+S often</li>
          <li>Starting too big — master a one-bedroom before attempting a mansion</li>
        </ol>
      </>
    ),

    "paralives-build-mode-advanced-tips": (
      <>
        <h2>🌟 Advanced Building Techniques</h2>
        <h3>🏗️ Custom Roof Shapes</h3>
        <p>Beyond the auto-roof tool, you can create custom roof shapes:</p>
        <ul>
          <li><strong>Mansard Roof:</strong> Use two roof pieces at different angles</li>
          <li><strong>Gambrel Roof:</strong> Combine steep and shallow pitches</li>
          <li><strong>Flat Roof + Terrace:</strong> Create rooftop outdoor spaces</li>
          <li><strong>Mixed Materials:</strong> Combine tile and metal for modern contrast</li>
        </ul>
        <h3>🪜 Advanced Stair Configurations</h3>
        <ul>
          <li><strong>U-Shape Stairs:</strong> Perfect for compact two-story homes</li>
          <li><strong>Spiral Stairs:</strong> Save space and add visual interest</li>
          <li><strong>Landing Platforms:</strong> Create mid-level landings for split-level designs</li>
          <li><strong>Hidden Stairs:</strong> Conceal stairs behind walls for mystery rooms</li>
        </ul>
        <h3>🎨 Advanced Color Techniques</h3>
        <ul>
          <li><strong>Hex Code Matching:</strong> Use exact hex codes for perfect color coordination</li>
          <li><strong>Gradient Walls:</strong> Use multiple wall sections with gradually changing colors</li>
          <li><strong>Accent Walls:</strong> Single wall in contrasting color for focal points</li>
          <li><strong>Monochromatic Schemes:</strong> Different shades of one color for elegance</li>
        </ul>
        <h2>💡 Lighting Mastery</h2>
        <ul>
          <li><strong>Layered Lighting:</strong> Combine ceiling, task, and accent lights</li>
          <li><strong>Natural Light:</strong> Maximize windows for daytime brightness</li>
          <li><strong>Mood Lighting:</strong> Use warm-toned lights for cozy atmospheres</li>
          <li><strong>Outdoor Lighting:</strong> Path lights, string lights, and spotlights for curb appeal</li>
        </ul>
        <h2>🏗️ Structural Tricks</h2>
        <ul>
          <li><strong>Columns as Decor:</strong> Use columns for visual interest, not just support</li>
          <li><strong>Half-Wall Partitions:</strong> Create room dividers without blocking light</li>
          <li><strong>Mezzanine Levels:</strong> Add intermediate floors for loft spaces</li>
          <li><strong>Built-In Storage:</strong> Use wall niches and alcoves for shelving</li>
        </ul>
        <h2>🌿 Landscaping Tips</h2>
        <ul>
          <li><strong>Layered Planting:</strong> Mix tall, medium, and ground-cover plants</li>
          <li><strong>Path Design:</strong> Use stepping stones or gravel for garden paths</li>
          <li><strong>Water Features:</strong> Add fountains or ponds for tranquility</li>
          <li><strong>Outdoor Rooms:</strong> Create defined outdoor living spaces with furniture</li>
        </ul>
      </>
    ),

    "paralives-build-style-guide": (
      <>
        <h2>🎨 4 Trending Build Styles</h2>
        <h3>🏠 1. Modern Minimalist</h3>
        <p><strong>Color Palette:</strong> White, black, gray, natural wood tones</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Clean lines and geometric shapes</li>
          <li>Large floor-to-ceiling windows</li>
          <li>Open floor plans with minimal walls</li>
          <li>Flat or low-pitch roofs</li>
          <li>Minimal decoration — less is more</li>
        </ul>
        <p><strong>Best For:</strong> Players who love contemporary architecture and clean aesthetics</p>

        <h3>🌲 2. Nordic/Scandinavian</h3>
        <p><strong>Color Palette:</strong> White, light gray, pale blue, natural wood (birch, pine)</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Cozy, hygge-inspired interiors</li>
          <li>Natural materials (wood, stone, wool)</li>
          <li>Large windows for natural light</li>
          <li>Fireplace as focal point</li>
          <li>Plants and natural elements</li>
        </ul>
        <p><strong>Best For:</strong> Players who want warm, inviting spaces</p>

        <h3>🏯 3. Japanese/Zen</h3>
        <p><strong>Color Palette:</strong> Natural wood, white, black, moss green, stone gray</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Sliding doors (shoji screens)</li>
          <li>Tatami-style flooring</li>
          <li>Zen gardens with rocks and gravel</li>
          <li>Low furniture and platform beds</li>
          <li>Bonsai and bamboo accents</li>
        </ul>
        <p><strong>Best For:</strong> Players who appreciate tranquility and balance</p>

        <h3>🏡 4. Vintage/Rustic</h3>
        <p><strong>Color Palette:</strong> Warm browns, cream, burgundy, forest green, antique gold</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Exposed brick and wooden beams</li>
          <li>Antique-style furniture</li>
          <li>Fireplace with mantel</li>
          <li>Patterned wallpaper and rugs</li>
          <li>Vintage lighting fixtures</li>
        </ul>
        <p><strong>Best For:</strong> Players who love character and history in their homes</p>

        <h2>🎨 Color Theory Tips</h2>
        <ul>
          <li><strong>60-30-10 Rule:</strong> 60% dominant color, 30% secondary, 10% accent</li>
          <li><strong>Warm vs Cool:</strong> Warm colors (red, orange, yellow) create energy; cool colors (blue, green, purple) create calm</li>
          <li><strong>Contrast:</strong> Use contrasting colors for visual interest</li>
          <li><strong>Monochromatic:</strong> Different shades of one color for elegance</li>
        </ul>
      </>
    ),

    // ==================== CHARACTERS & LIFE ====================
    "paralives-needs-system-guide": (
      <>
        <h2>📊 The 6 Core Needs — Decay &amp; Fastest Fixes</h2>
        
        <h3>🍔 1. Hunger</h3>
        <p><strong>Decay:</strong> ~6 hours to empty. <strong>If ignored:</strong> passing out, illness.</p>
        <ul>
          <li><strong>⚡ Fastest fix (10s):</strong> Grab instant food (low satisfaction, minor mood penalty)</li>
          <li><strong>✅ Best fix:</strong> Cook simple meals (omelet, sandwich) — cheap, high satisfaction. At Cooking level 2, meals gain a &quot;Delicious&quot; mood buff.</li>
          <li><strong>🛋️ Lazy option:</strong> Order delivery (expensive, 15-min wait, but no effort)</li>
        </ul>

        <h3>🔋 2. Energy</h3>
        <p><strong>Decay:</strong> ~12 hours. <strong>If ignored:</strong> collapse, terrible work performance.</p>
        <ul>
          <li><strong>⚡ Fastest fix (10s):</strong> Coffee (restores 30% but can cause insomnia if overused)</li>
          <li><strong>✅ Best fix:</strong> Sleep — a 1,000-Paradime bed gives 100% energy and a &quot;Well-Rested&quot; buff, reducing required sleep by 2 hours.</li>
        </ul>

        <h3>🛁 3. Hygiene</h3>
        <p><strong>Decay:</strong> ~8 hours. <strong>If ignored:</strong> stench debuff, NPCs avoid you.</p>
        <ul>
          <li><strong>⚡ Fastest fix (30s):</strong> Shower (80% clean)</li>
          <li><strong>✅ Luxury fix (5min):</strong> Bubble bath (100% clean + mood boost)</li>
          <li><strong>💡 Pro tip:</strong> Shower in the morning for a bonus energy boost; showering at night can interfere with sleep quality.</li>
        </ul>

        <h3>💬 4. Social</h3>
        <p><strong>Decay:</strong> ~24 hours (varies by trait). <strong>If ignored:</strong> loneliness, depression.</p>
        <ul>
          <li><strong>⚡ Fastest fix (1min):</strong> Phone call (+30%)</li>
          <li><strong>✅ Best fix:</strong> Face-to-face chat (+60%) or a date (+100% + massive mood)</li>
          <li><strong>💡 Trait impact:</strong> Loner decays extremely slowly and gains mood when alone; Fast Friends needs daily interaction.</li>
        </ul>

        <h3>🎮 5. Fun</h3>
        <p><strong>Decay:</strong> ~10 hours. <strong>If ignored:</strong> boredom, irritability.</p>
        <ul>
          <li><strong>⚡ Fastest fix (1min):</strong> Watch TV (+20%)</li>
          <li><strong>✅ Best fix:</strong> Aligned talent activities — Musical Paras get double Fun from guitar; Artistic Paras from painting.</li>
        </ul>

        <h3>🛋️ 6. Comfort (Bladder + Environment)</h3>
        <p><strong>Bladder decay:</strong> ~4 hours. Zero = embarrassing accident.</p>
        <ul>
          <li><strong>⚡ Quick fix:</strong> Enable &quot;Auto-Use Toilet&quot; in settings!</li>
          <li><strong>✅ Environment comfort:</strong> Based on house cleanliness and decor. A clean, well-decorated home provides a constant positive moodlet.</li>
        </ul>

        <h2>😊 How Emotions Work — Stacks and States</h2>
        <p>Emotions are generated by need satisfaction, environment, social interactions, activities, and personality. They stack:</p>
        <ul>
          <li><strong>3+ positive buffs → Ecstatic:</strong> all stats +30%</li>
          <li><strong>3+ negative buffs → Meltdown:</strong> unable to do anything productive</li>
        </ul>
        <p><strong>Key positive emotions:</strong> Happy (+10% all), Excited (+20% speed, +30% social), Focused (+50% work/study), Loving (double romance mood), Content (need decay slowed 50%).</p>
        <p><strong>Key negatives:</strong> Sad (-10% all), Angry (destroys objects, picks fights), Embarrassed (-50% social), Stressed (-30% work/study), Bored (-20% speed, refuses activities).</p>

        <h2>✨ 5 Tricks for Permanent Happiness</h2>
        <ol>
          <li><strong>Establish a rock-solid routine:</strong> 7 AM wake → toilet → shower → breakfast → work → dinner → fun → 11 PM bed.</li>
          <li><strong>Turn on all auto-actions:</strong> Auto-Toilet, Auto-Eat, Auto-Clean, Auto-Sleep.</li>
          <li><strong>Optimize the living space:</strong> Keep it clean, well-lit, and add plants/art for passive environmental mood boosts.</li>
          <li><strong>Match activities to personality:</strong> Homebody → let them relax at home. Outdoorsy → daily park walks.</li>
          <li><strong>Emergency mood fixes:</strong> A good meal, a chat with a best friend, or a nap can erase most negative moodlets.</li>
        </ol>

        <h2>⚠️ 5 Beginner Mistakes That Ruin Moods</h2>
        <ol>
          <li><strong>🚽 Ignoring bladder:</strong> Always the most urgent need. Enable auto-toilet.</li>
          <li><strong>⏰ Overworking:</strong> More than 8 straight hours of work causes &quot;High Stress.&quot;</li>
          <li><strong>🧹 Never cleaning:</strong> Dirty houses make all Paras sad and sick.</li>
          <li><strong>🍕 Using instant food as primary meals:</strong> It&apos;s fast but reduces mood. Cook real food.</li>
          <li><strong>🎉 Zero fun time:</strong> All-work-no-play leads to a meltdown. Schedule daily fun.</li>
        </ol>
      </>
    ),

    "paralives-emotions-guide": (
      <>
        <h2>😊 Understanding the Emotion System</h2>
        <p>Emotions in Paralives are dynamic states that affect your Para&apos;s behavior, skill learning speed, and available interactions. Understanding them is key to efficient gameplay.</p>
        
        <h3>🎭 How Emotions Are Generated</h3>
        <ul>
          <li><strong>Needs Satisfaction:</strong> Fulfilling needs generates positive emotions; neglecting them generates negative ones</li>
          <li><strong>Environment:</strong> Clean, well-decorated spaces boost mood; messy, dirty spaces drag it down</li>
          <li><strong>Social Interactions:</strong> Positive conversations build happiness; arguments create anger</li>
          <li><strong>Activities:</strong> Enjoyable activities boost Fun-related emotions</li>
          <li><strong>Personality:</strong> Traits influence which emotions are easier to trigger</li>
        </ul>

        <h3>📊 Emotion Stacking</h3>
        <p>Multiple emotions can be active simultaneously:</p>
        <ul>
          <li><strong>Primary Emotion:</strong> The strongest current emotion (displayed prominently)</li>
          <li><strong>Secondary Emotions:</strong> Additional moodlets that modify behavior</li>
          <li><strong>3+ Positive → Ecstatic:</strong> All stats +30%, unlocks special interactions</li>
          <li><strong>3+ Negative → Meltdown:</strong> Unable to do anything productive, may cry or break objects</li>
        </ul>

        <h2>🌟 Key Positive Emotions</h2>
        <div className="career-table"><table><thead><tr><th>Emotion</th><th>Effect</th><th>Trigger</th></tr></thead><tbody>
          <tr><td>😊 Happy</td><td>+10% all stats</td><td>Fulfilled needs, positive interactions</td></tr>
          <tr><td>🎉 Excited</td><td>+20% speed, +30% social</td><td>New experiences, fun activities</td></tr>
          <tr><td>🎯 Focused</td><td>+50% work/study</td><td>Intellectual activities, organized environment</td></tr>
          <tr><td>❤️ Loving</td><td>Double romance mood</td><td>Romantic interactions, partner nearby</td></tr>
          <tr><td>😌 Content</td><td>Need decay slowed 50%</td><td>All needs met, comfortable environment</td></tr>
          <tr><td>✨ Inspired</td><td>+40% creative skills</td><td>Beautiful surroundings, art appreciation</td></tr>
          <tr><td>💪 Confident</td><td>+30% career performance</td><td>Recent success, praise from others</td></tr>
        </tbody></table></div>

        <h2>💥 Key Negative Emotions</h2>
        <div className="career-table"><table><thead><tr><th>Emotion</th><th>Effect</th><th>Trigger</th></tr></thead><tbody>
          <tr><td>😢 Sad</td><td>-10% all stats</td><td>Unfulfilled needs, loss, loneliness</td></tr>
          <tr><td>😡 Angry</td><td>Destroys objects, picks fights</td><td>Negative interactions, frustrations</td></tr>
          <tr><td>😳 Embarrassed</td><td>-50% social</td><td>Social failures, embarrassing situations</td></tr>
          <tr><td>😰 Stressed</td><td>-30% work/study</td><td>Overwork, unmet deadlines</td></tr>
          <tr><td>😑 Bored</td><td>-20% speed, refuses activities</td><td>Lack of entertainment, repetitive activities</td></tr>
          <tr><td>😨 Scared</td><td>-40% all stats</td><td>Spooky events, low bravery situations</td></tr>
        </tbody></table></div>

        <h2>💡 Emotion Management Tips</h2>
        <ul>
          <li><strong>Monitor the emotion icon:</strong> Bottom-left of screen shows current primary emotion</li>
          <li><strong>Stack positives:</strong> Combine good meal + clean house + social interaction for Ecstatic state</li>
          <li><strong>Avoid negatives stacking:</strong> Address one negative emotion before another triggers</li>
          <li><strong>Use environment:</strong> Art, plants, and good lighting provide passive positive moodlets</li>
          <li><strong>Match activities to mood:</strong> Creative work when Inspired, logic when Focused</li>
        </ul>
      </>
    ),

    "paralives-genetics-guide": (
      <>
        <h2>🧬 How Genetics Work in Paralives</h2>
        <p>When two Paras have children, the child&apos;s appearance is determined by a genetics system that blends parental traits. Here&apos;s how to create beautiful, talented children.</p>

        <h3>👶 Child Appearance</h3>
        <ul>
          <li><strong>Skin Color:</strong> Blends between parents&apos; skin tones (can lean toward either parent)</li>
          <li><strong>Eye Color:</strong> Dominant genes (brown) are more likely; recessive genes (blue, green) can skip generations</li>
          <li><strong>Hair Color:</strong> Blends between parents&apos; hair colors; can produce unique shades</li>
          <li><strong>Face Shape:</strong> Combines features from both parents with some randomization</li>
          <li><strong>Body Type:</strong> Influenced by parents but can vary</li>
        </ul>

        <h3>🧠 Trait Inheritance</h3>
        <ul>
          <li><strong>Personality Traits:</strong> Children can inherit traits from parents (not guaranteed)</li>
          <li><strong>Talents:</strong> Children may inherit parental talents</li>
          <li><strong>Hidden Traits:</strong> Some traits can skip generations and appear in grandchildren</li>
        </ul>

        <h2>💡 Tips for Beautiful Children</h2>
        <ul>
          <li><strong>Choose attractive parents:</strong> Children tend to inherit the best features</li>
          <li><strong>Match complementary features:</strong> Parents with similar face shapes produce more predictable results</li>
          <li><strong>Use the Paramaker:</strong> You can adjust children&apos;s appearance after birth</li>
          <li><strong>Save before trying for baby:</strong> Reload if you don&apos;t like the result</li>
        </ul>

        <h2>👶 Life Stages</h2>
        <div className="career-table"><table><thead><tr><th>Stage</th><th>Duration</th><th>Key Features</th></tr></thead><tbody>
          <tr><td>👶 Baby</td><td>~3 days</td><td>Needs constant care, can&apos;t walk</td></tr>
          <tr><td>🧒 Toddler</td><td>~7 days</td><td>Learning to walk, talk, basic skills</td></tr>
          <tr><td>👦 Child</td><td>~14 days</td><td>School, skill building, friendships</td></tr>
          <tr><td>🧑 Teen</td><td>~14 days</td><td>Part-time jobs, romance, independence</td></tr>
          <tr><td>👨 Young Adult</td><td>~28 days</td><td>Full careers, marriage, children</td></tr>
          <tr><td>👴 Adult</td><td>~28 days</td><td>Career peak, family management</td></tr>
          <tr><td>🧓 Elder</td><td>~14 days</td><td>Retirement, grandchildren, legacy</td></tr>
        </tbody></table></div>

        <h2>🏠 Family Management</h2>
        <ul>
          <li><strong>Family Tree:</strong> Track lineage across generations</li>
          <li><strong>Inheritance:</strong> Children can inherit money and property</li>
          <li><strong>Legacy Challenges:</strong> Play through multiple generations for achievements</li>
          <li><strong>Adoption:</strong> You can also adopt children instead of having biological ones</li>
        </ul>
      </>
    ),

    "paralives-paramaker-face-creation-guide": (
      <>
        <h2>👤 Mastering Face Creation</h2>
        <p>The Paramaker&apos;s face creation system is incredibly detailed. Here&apos;s how to create a gorgeous Para:</p>

        <h3>👁️ Eyes</h3>
        <ul>
          <li><strong>Shape:</strong> Almond, round, hooded, monolid, upturned, downturned</li>
          <li><strong>Size:</strong> Slider from small to large</li>
          <li><strong>Spacing:</strong> Close-set to wide-set</li>
          <li><strong>Depth:</strong> Deep-set to protruding</li>
          <li><strong>Tilt:</strong> Slight upward or downward tilt</li>
          <li><strong>Color:</strong> Full color wheel with any iris color</li>
        </ul>

        <h3>👃 Nose</h3>
        <ul>
          <li><strong>Size:</strong> Small to large</li>
          <li><strong>Width:</strong> Narrow to wide</li>
          <li><strong>Bridge:</strong> Straight, curved, or angular</li>
          <li><strong>Tip:</strong> Pointed, rounded, or bulbous</li>
          <li><strong>Nostrils:</strong> Size and shape</li>
        </ul>

        <h3>👄 Mouth</h3>
        <ul>
          <li><strong>Size:</strong> Small to large</li>
          <li><strong>Shape:</strong> Thin, full, or balanced lips</li>
          <li><strong>Lip Fullness:</strong> Upper and lower lip independently adjustable</li>
          <li><strong>Color:</strong> Full color wheel for lipstick/natural color</li>
        </ul>

        <h3>👂 Ears</h3>
        <ul>
          <li><strong>Size:</strong> Small to large</li>
          <li><strong>Shape:</strong> Round, pointed, or angular</li>
          <li><strong>Protrusion:</strong> Close to head or protruding</li>
        </ul>

        <h3>🦴 Jaw</h3>
        <ul>
          <li><strong>Width:</strong> Narrow to wide</li>
          <li><strong>Shape:</strong> Round, square, or heart-shaped</li>
          <li><strong>Chin:</strong> Small to large, pointed to rounded</li>
        </ul>

        <h3>😊 Skin</h3>
        <ul>
          <li><strong>Color:</strong> Full color wheel with undertones (warm, cool, neutral)</li>
          <li><strong>Texture:</strong> Smooth, freckled, or textured</li>
          <li><strong>Details:</strong> Freckles, moles, birthmarks, wrinkles</li>
          <li><strong>Makeup:</strong> Foundation, blush, eyeshadow, eyeliner, lipstick</li>
        </ul>

        <h2>💇 Hair Customization</h2>
        <ul>
          <li><strong>Styles:</strong> 50+ preset hairstyles. Short, medium, long, updos, braids, ponytails</li>
          <li><strong>Color:</strong> Full color wheel + hex code input. Highlights, ombre, multi-tone</li>
          <li><strong>Texture:</strong> Straight, wavy, curly, coily. Adjustable curl tightness</li>
          <li><strong>Facial Hair:</strong> Beards, mustaches, goatees. Adjustable density and style</li>
        </ul>

        <h2>💡 Face Creation Tips</h2>
        <ul>
          <li><strong>Start with a preset:</strong> Choose a base face and modify from there</li>
          <li><strong>Use reference photos:</strong> Keep a photo nearby for inspiration</li>
          <li><strong>Focus on proportions:</strong> Eye spacing and nose size make the biggest difference</li>
          <li><strong>Test in different lighting:</strong> Check your Para in various environments</li>
          <li><strong>Save variations:</strong> Create multiple versions before deciding</li>
        </ul>
      </>
    ),

    "paralives-personality-traits-combos-guide": (
      <>
        <h2>🧠 Understanding Personality Traits</h2>
        <p>Each Para can have up to 3 personality traits. Traits affect behavior, needs decay, social interactions, and career performance.</p>

        <h3>📋 All Personality Traits</h3>
        <h4>🎭 Social Traits</h4>
        <ul>
          <li><strong>Outgoing:</strong> Social decays faster, gains more from interactions</li>
          <li><strong>Loner:</strong> Social decays slower, gains mood when alone</li>
          <li><strong>Fast Friends:</strong> Builds relationships 2x faster</li>
          <li><strong>Shy:</strong> Slower relationship building, prefers small groups</li>
        </ul>

        <h4>💼 Work Traits</h4>
        <ul>
          <li><strong>Ambitious:</strong> Faster career progress, needs work satisfaction</li>
          <li><strong>Lazy:</strong> Slower work performance, prefers leisure</li>
          <li><strong>Workaholic:</strong> Works faster but needs more rest</li>
          <li><strong>Creative:</strong> Boosts Art and Cooking careers</li>
        </ul>

        <h4>🏠 Lifestyle Traits</h4>
        <ul>
          <li><strong>Neat:</strong> Cleans faster, gets mood boost from clean home</li>
          <li><strong>Slob:</strong> Slower cleaning, comfortable in mess</li>
          <li><strong>Active:</strong> Faster Physique gain, needs exercise</li>
          <li><strong>Homebody:</strong> Prefers staying home, outdoor activities tire faster</li>
        </ul>

        <h4>😊 Emotional Traits</h4>
        <ul>
          <li><strong>Hot-Headed:</strong> Gets angry faster, breaks things</li>
          <li><strong>Good:</strong> Mood boost from helping others</li>
          <li><strong>Evil:</strong> Mood boost from mischief</li>
          <li><strong>Cheerful:</strong> Positive emotions last longer</li>
        </ul>

        <h2>🌟 Top 4 Starter Builds</h2>
        <h3>1. 💼 The Career Climber</h3>
        <p><strong>Traits:</strong> Ambitious + Outgoing + Workaholic</p>
        <p><strong>Talent:</strong> Logical or Social</p>
        <p><strong>Strategy:</strong> Fast career progress through networking and long hours. Reaches CEO quickly but needs careful mood management.</p>

        <h3>2. 🎨 The Artist</h3>
        <p><strong>Traits:</strong> Creative + Loner + Neat</p>
        <p><strong>Talent:</strong> Artistic</p>
        <p><strong>Strategy:</strong> Focused artist who produces masterpieces. Low social needs, high creative output. Sell paintings for income.</p>

        <h3>3. 🏠 The Homemaker</h3>
        <p><strong>Traits:</strong> Neat + Good + Homebody</p>
        <p><strong>Talent:</strong> Culinary or Handiness</p>
        <p><strong>Strategy:</strong> Happy homemaker who loves cooking and cleaning. Perfect for family-focused gameplay.</p>

        <h3>4. 💪 The Athlete</h3>
        <p><strong>Traits:</strong> Active + Hot-Headed + Outgoing</p>
        <p><strong>Talent:</strong> Athletic</p>
        <p><strong>Strategy:</strong> Channel anger into intense workouts. Fast Physique gain, great for Public Service career.</p>

        <h2>💡 Trait Synergy Tips</h2>
        <ul>
          <li><strong>Ambitious + Outgoing:</strong> Fast career progress through networking</li>
          <li><strong>Creative + Loner:</strong> Focused artist who produces masterpieces</li>
          <li><strong>Active + Hot-Headed:</strong> Channel anger into intense workouts</li>
          <li><strong>Neat + Good:</strong> Happy homemaker who loves helping neighbors</li>
          <li><strong>Lazy + Creative:</strong> Artistic genius who works in bursts of inspiration</li>
        </ul>
      </>
    ),

    // ==================== CAREERS ====================
    "paralives-career-guide-which-job-most-money-2026": (
      <>
        <h2>⚙️ Career System Mechanics</h2>
        <ul>
          <li><strong>Application Points:</strong> Earn by leveling skills, completing job goals, and gaining experience. Enough points = promotion.</li>
          <li><strong>Three-Strike Rule:</strong> Poor performance triggers warnings. Three warnings = you&apos;re fired.</li>
          <li><strong>Customizable Hours:</strong> Choose your shift pattern. Fewer hours = less pay.</li>
          <li><strong>Multiple Jobs:</strong> Work two jobs simultaneously as long as schedules don&apos;t overlap.</li>
        </ul>

        <h2>💼 All 8 Careers — Levels, Pay &amp; Requirements</h2>
        
        <h3>1. 💻 Tech Career (Highest Pay)</h3>
        <div className="career-table"><table><thead><tr><th>Level</th><th>Title</th><th>Hourly</th><th>Required Skills</th></tr></thead><tbody>
          <tr><td>1</td><td>Tech Support</td><td>$18</td><td>Logic 1</td></tr>
          <tr><td>2</td><td>Programmer</td><td>$25</td><td>Logic 2</td></tr>
          <tr><td>3</td><td>Software Engineer</td><td>$35</td><td>Logic 3</td></tr>
          <tr><td>4</td><td>Senior Engineer</td><td>$48</td><td>Logic 4</td></tr>
          <tr><td>5</td><td>Tech Lead</td><td>$65</td><td>Logic 5, Charisma 2</td></tr>
          <tr><td>6</td><td>Tech CEO</td><td>$100</td><td>Logic 6, Charisma 4</td></tr>
        </tbody></table></div>

        <h3>2. 🏥 Medical Career</h3>
        <div className="career-table"><table><thead><tr><th>Level</th><th>Title</th><th>Hourly</th><th>Required Skills</th></tr></thead><tbody>
          <tr><td>1</td><td>Nurse Assistant</td><td>$16</td><td>Logic 1</td></tr>
          <tr><td>2</td><td>Registered Nurse</td><td>$23</td><td>Logic 2</td></tr>
          <tr><td>3</td><td>Physician Assistant</td><td>$32</td><td>Logic 3, Charisma 1</td></tr>
          <tr><td>4</td><td>Resident</td><td>$45</td><td>Logic 4, Charisma 2</td></tr>
          <tr><td>5</td><td>Attending Physician</td><td>$62</td><td>Logic 5, Charisma 3</td></tr>
          <tr><td>6</td><td>Chief of Surgery</td><td>$90</td><td>Logic 6, Charisma 4</td></tr>
        </tbody></table></div>

        <h3>3. 💼 Business Career (Best for Beginners)</h3>
        <div className="career-table"><table><thead><tr><th>Level</th><th>Title</th><th>Hourly</th><th>Required Skills</th></tr></thead><tbody>
          <tr><td>1</td><td>Office Clerk</td><td>$15</td><td>Charisma 1</td></tr>
          <tr><td>2</td><td>Sales Rep</td><td>$21</td><td>Charisma 2</td></tr>
          <tr><td>3</td><td>Sales Manager</td><td>$30</td><td>Charisma 3, Logic 1</td></tr>
          <tr><td>4</td><td>Marketing Director</td><td>$42</td><td>Charisma 4, Logic 2</td></tr>
          <tr><td>5</td><td>Vice President</td><td>$58</td><td>Charisma 5, Logic 3</td></tr>
          <tr><td>6</td><td>CEO</td><td>$85</td><td>Charisma 6, Logic 4</td></tr>
        </tbody></table></div>

        <h3>4. 🏗️ Construction Career</h3>
        <div className="career-table"><table><thead><tr><th>Level</th><th>Title</th><th>Hourly</th><th>Required Skills</th></tr></thead><tbody>
          <tr><td>1</td><td>Construction Worker</td><td>$16</td><td>Handiness 1</td></tr>
          <tr><td>2</td><td>Carpenter</td><td>$22</td><td>Handiness 2</td></tr>
          <tr><td>3</td><td>Electrician</td><td>$31</td><td>Handiness 3</td></tr>
          <tr><td>4</td><td>Architectural Designer</td><td>$43</td><td>Handiness 4, Creativity 2</td></tr>
          <tr><td>5</td><td>Project Manager</td><td>$59</td><td>Handiness 5, Creativity 3</td></tr>
          <tr><td>6</td><td>Master Builder</td><td>$80</td><td>Handiness 6, Creativity 4</td></tr>
        </tbody></table></div>

        <h3>5. 🎨 Art Career</h3>
        <div className="career-table"><table><thead><tr><th>Level</th><th>Title</th><th>Hourly</th><th>Required Skills</th></tr></thead><tbody>
          <tr><td>1</td><td>Gallery Assistant</td><td>$15</td><td>Creativity 1</td></tr>
          <tr><td>2</td><td>Art Apprentice</td><td>$20</td><td>Creativity 2</td></tr>
          <tr><td>3</td><td>Painter</td><td>$28</td><td>Creativity 3</td></tr>
          <tr><td>4</td><td>Illustrator</td><td>$38</td><td>Creativity 4</td></tr>
          <tr><td>5</td><td>Art Director</td><td>$52</td><td>Creativity 5, Charisma 2</td></tr>
          <tr><td>6</td><td>Famous Artist</td><td>$75</td><td>Creativity 6, Charisma 3</td></tr>
        </tbody></table></div>

        <h3>6. 📚 Education Career</h3>
        <div className="career-table"><table><thead><tr><th>Level</th><th>Title</th><th>Hourly</th><th>Required Skills</th></tr></thead><tbody>
          <tr><td>1</td><td>Substitute Teacher</td><td>$14</td><td>Logic 1</td></tr>
          <tr><td>2</td><td>Elementary Teacher</td><td>$19</td><td>Logic 2, Charisma 1</td></tr>
          <tr><td>3</td><td>Middle School Teacher</td><td>$27</td><td>Logic 3, Charisma 2</td></tr>
          <tr><td>4</td><td>High School Teacher</td><td>$36</td><td>Logic 4, Charisma 3</td></tr>
          <tr><td>5</td><td>University Lecturer</td><td>$50</td><td>Logic 5, Charisma 4</td></tr>
          <tr><td>6</td><td>Professor</td><td>$70</td><td>Logic 6, Charisma 5</td></tr>
        </tbody></table></div>

        <h3>7. 🏛️ Public Service Career</h3>
        <div className="career-table"><table><thead><tr><th>Level</th><th>Title</th><th>Hourly</th><th>Required Skills</th></tr></thead><tbody>
          <tr><td>1</td><td>Volunteer</td><td>$10</td><td>Charisma 1</td></tr>
          <tr><td>2</td><td>Community Worker</td><td>$16</td><td>Charisma 2</td></tr>
          <tr><td>3</td><td>Social Worker</td><td>$23</td><td>Charisma 3</td></tr>
          <tr><td>4</td><td>Police Officer</td><td>$32</td><td>Charisma 4, Physique 2</td></tr>
          <tr><td>5</td><td>Detective</td><td>$45</td><td>Charisma 5, Logic 2</td></tr>
          <tr><td>6</td><td>Police Chief</td><td>$68</td><td>Charisma 6, Logic 3</td></tr>
        </tbody></table></div>

        <h3>8. 🍳 Culinary Career</h3>
        <div className="career-table"><table><thead><tr><th>Level</th><th>Title</th><th>Hourly</th><th>Required Skills</th></tr></thead><tbody>
          <tr><td>1</td><td>Dishwasher</td><td>$12</td><td>None</td></tr>
          <tr><td>2</td><td>Waiter</td><td>$17</td><td>Charisma 1</td></tr>
          <tr><td>3</td><td>Line Cook</td><td>$24</td><td>Cooking 1</td></tr>
          <tr><td>4</td><td>Chef</td><td>$33</td><td>Cooking 2</td></tr>
          <tr><td>5</td><td>Head Chef</td><td>$46</td><td>Cooking 3</td></tr>
          <tr><td>6</td><td>Restaurant Owner</td><td>$65</td><td>Cooking 4, Charisma 3</td></tr>
        </tbody></table></div>

        <h2>💰 Salary Comparison — Who Earns the Most?</h2>
        <div className="career-table"><table><thead><tr><th>Career</th><th>Max Hourly</th><th>Weekly (40h)</th><th>Yearly (52w)</th><th>Rank</th></tr></thead><tbody>
          <tr><td>💻 Tech CEO</td><td>$100</td><td>$4,000</td><td>$208,000</td><td>🥇</td></tr>
          <tr><td>🏥 Chief of Surgery</td><td>$90</td><td>$3,600</td><td>$187,200</td><td>🥈</td></tr>
          <tr><td>💼 Business CEO</td><td>$85</td><td>$3,400</td><td>$176,800</td><td>🥉</td></tr>
          <tr><td>🏗️ Master Builder</td><td>$80</td><td>$3,200</td><td>$166,400</td><td>4</td></tr>
          <tr><td>🎨 Famous Artist</td><td>$75</td><td>$3,000</td><td>$156,000</td><td>5</td></tr>
          <tr><td>📚 Professor</td><td>$70</td><td>$2,800</td><td>$145,600</td><td>6</td></tr>
          <tr><td>🏛️ Police Chief</td><td>$68</td><td>$2,720</td><td>$141,440</td><td>7</td></tr>
          <tr><td>🍳 Restaurant Owner</td><td>$65</td><td>$2,600</td><td>$135,200</td><td>8</td></tr>
        </tbody></table></div>

        <h2>📈 Fastest Skill Leveling Methods</h2>
        <ul>
          <li><strong>Logic:</strong> Read books → computer study → chess</li>
          <li><strong>Charisma:</strong> Chat with others → read → practice in mirror</li>
          <li><strong>Creativity:</strong> Paint → play guitar → read</li>
          <li><strong>Handiness:</strong> Repair objects → craft → read</li>
          <li><strong>Cooking:</strong> Cook meals → read → watch cooking shows</li>
          <li><strong>Physique:</strong> Gym workouts → jogging → read</li>
        </ul>
        <p>🌟 Having the matching talent doubles skill gain speed!</p>

        <h2>🌟 Top 3 Beginner Career Picks</h2>
        <ul>
          <li><strong>💼 Office Clerk (Business):</strong> Low barrier (Charisma 1), fast promotions, decent pay. Reach CEO in 18 game days.</li>
          <li><strong>🍳 Dishwasher (Culinary):</strong> Zero skill requirement, flexible hours. Perfect transitional job.</li>
          <li><strong>🖼️ Gallery Assistant (Art):</strong> Low entry, lots of free time for painting. Sell masterpieces for income.</li>
        </ul>
      </>
    ),

    "career-paths-skill-trees": (
      <>
        <h2>📊 Career Paths Overview</h2>
        <p>Each career in Paralives requires specific skills to advance. Here&apos;s a complete breakdown of every career path and its skill requirements.</p>

        <h3>🧠 Logic-Based Careers</h3>
        <p>Careers that primarily require the Logic skill:</p>
        <ul>
          <li><strong>Tech Career:</strong> Logic 1-6 + Charisma 4 at top</li>
          <li><strong>Medical Career:</strong> Logic 1-6 + Charisma 4 at top</li>
          <li><strong>Education Career:</strong> Logic 1-6 + Charisma 5 at top</li>
        </ul>
        <p><strong>Best for:</strong> Players who enjoy intellectual activities (reading, chess, computer study)</p>

        <h3>💬 Charisma-Based Careers</h3>
        <p>Careers that primarily require the Charisma skill:</p>
        <ul>
          <li><strong>Business Career:</strong> Charisma 1-6 + Logic 4 at top</li>
          <li><strong>Public Service Career:</strong> Charisma 1-6 + Logic 3 at top</li>
        </ul>
        <p><strong>Best for:</strong> Players who enjoy social interactions and networking</p>

        <h3>🎨 Creativity-Based Careers</h3>
        <p>Careers that primarily require the Creativity skill:</p>
        <ul>
          <li><strong>Art Career:</strong> Creativity 1-6 + Charisma 3 at top</li>
        </ul>
        <p><strong>Best for:</strong> Players who enjoy painting, music, and creative activities</p>

        <h3>🔧 Handiness-Based Careers</h3>
        <p>Careers that primarily require the Handiness skill:</p>
        <ul>
          <li><strong>Construction Career:</strong> Handiness 1-6 + Creativity 4 at top</li>
        </ul>
        <p><strong>Best for:</strong> Players who enjoy building, repairing, and crafting</p>

        <h3>🍳 Cooking-Based Careers</h3>
        <p>Careers that primarily require the Cooking skill:</p>
        <ul>
          <li><strong>Culinary Career:</strong> Cooking 1-4 + Charisma 3 at top</li>
        </ul>
        <p><strong>Best for:</strong> Players who enjoy cooking and food-related activities</p>

        <h3>💪 Physique-Based Careers</h3>
        <p>Careers that require the Physique skill:</p>
        <ul>
          <li><strong>Public Service Career (Police):</strong> Requires Physique 2 at Level 4</li>
        </ul>
        <p><strong>Best for:</strong> Players who enjoy fitness and physical activities</p>

        <h2>📈 Skill Leveling Speed Comparison</h2>
        <div className="career-table"><table><thead><tr><th>Skill</th><th>Fastest Method</th><th>Time to Max</th><th>Bonus</th></tr></thead><tbody>
          <tr><td>Logic</td><td>Read books + computer</td><td>~7 days</td><td>Chess adds Fun</td></tr>
          <tr><td>Charisma</td><td>Chat with others</td><td>~5 days</td><td>Builds relationships</td></tr>
          <tr><td>Creativity</td><td>Paint on easel</td><td>~8 days</td><td>Sell paintings</td></tr>
          <tr><td>Handiness</td><td>Repair objects</td><td>~10 days</td><td>Fix home items</td></tr>
          <tr><td>Cooking</td><td>Cook meals</td><td>~6 days</td><td>Feed household</td></tr>
          <tr><td>Physique</td><td>Gym workouts</td><td>~9 days</td><td>Health benefits</td></tr>
        </tbody></table></div>

        <h2>💡 Career Strategy Tips</h2>
        <ul>
          <li><strong>Match talent to career:</strong> If you want Tech CEO, pick Logical talent</li>
          <li><strong>Start early:</strong> Begin skill building as a teen for career head start</li>
          <li><strong>Use free time wisely:</strong> Read books during lunch breaks</li>
          <li><strong>Network:</strong> Befriend coworkers for promotion bonuses</li>
          <li><strong>Multiple jobs:</strong> Work two jobs to maximize income while building skills</li>
        </ul>
      </>
    ),

    // ==================== MODS ====================
    "top-10-paralives-mods-week3-may2026": (
      <>
        <h2>🔟 Top 10 Must-Have Mods</h2>
        <p>These mods have been tested and are essential for improving your Paralives experience:</p>

        <h3>1. 🚀 Performance Booster</h3>
        <p><strong>Category:</strong> Performance | <strong>Author:</strong> ModMaster</p>
        <p>Optimizes game performance, reduces loading times, and improves FPS in Build Mode. Essential for players with older hardware.</p>
        <ul><li>Reduces memory usage by 20%</li><li>Faster loading screens</li><li>Smoother Build Mode experience</li></ul>

        <h3>2. 🎨 UI Enhancement Pack</h3>
        <p><strong>Category:</strong> UI | <strong>Author:</strong> UIArtist</p>
        <p>Improves the user interface with better icons, clearer menus, and customizable HUD elements.</p>
        <ul><li>Customizable HUD position</li><li>Higher resolution icons</li><li>Color-coded need bars</li></ul>

        <h3>3. 🏠 Build Mode Essentials</h3>
        <p><strong>Category:</strong> Build | <strong>Author:</strong> BuilderPro</p>
        <p>Adds new building tools and shortcuts for faster construction.</p>
        <ul><li>Copy/paste rooms</li><li>Auto-furnish rooms</li><li>Advanced wall tools</li></ul>

        <h3>4. 👤 CAS Overhaul</h3>
        <p><strong>Category:</strong> CAS | <strong>Author:</strong> CharCreator</p>
        <p>Expands the character creator with new options and presets.</p>
        <ul><li>50+ new hairstyles</li><li>New clothing options</li><li>Additional face presets</li></ul>

        <h3>5. 💼 Career Expansion</h3>
        <p><strong>Category:</strong> Gameplay | <strong>Author:</strong> CareerDev</p>
        <p>Adds new career paths and expands existing ones.</p>
        <ul><li>3 new career paths</li><li>More promotion levels</li><li>New work interactions</li></ul>

        <h3>6. 🎭 Trait Pack</h3>
        <p><strong>Category:</strong> Gameplay | <strong>Author:</strong> TraitMaster</p>
        <p>Adds 20+ new personality traits for more diverse Paras.</p>
        <ul><li>20+ new traits</li><li>Better trait interactions</li><li>Hidden trait combos</li></ul>

        <h3>7. 🏡 Furniture Pack</h3>
        <p><strong>Category:</strong> Build | <strong>Author:</strong> FurnitureArtist</p>
        <p>Adds 100+ new furniture items with custom colors.</p>
        <ul><li>100+ new items</li><li>All color-customizable</li><li>Modern and classic styles</li></ul>

        <h3>8. 🎵 Music Mod</h3>
        <p><strong>Category:</strong> Audio | <strong>Author:</strong> SoundDesigner</p>
        <p>Adds new background music and radio stations.</p>
        <ul><li>30+ new tracks</li><li>Custom radio stations</li><li>Volume controls</li></ul>

        <h3>9. 🐾 Pet Expansion</h3>
        <p><strong>Category:</strong> Gameplay | <strong>Author:</strong> PetLover</p>
        <p>Adds cats and dogs with full interaction systems.</p>
        <ul><li>Cats and dogs</li><li>Pet needs and traits</li><li>Pet careers</li></ul>

        <h3>10. 🌍 World Expansion</h3>
        <p><strong>Category:</strong> World | <strong>Author:</strong> WorldBuilder</p>
        <p>Adds new lots and community spaces.</p>
        <ul><li>5 new residential lots</li><li>3 new community lots</li><li>New neighborhoods</li></ul>

        <h2>📥 Installation</h2>
        <ol>
          <li>Subscribe to each mod on Steam Workshop</li>
          <li>Launch Paralives</li>
          <li>Go to Settings → Mods</li>
          <li>Enable all mods</li>
          <li>Restart the game</li>
        </ol>
        <div className="tip-box"><strong>⚠️ Important:</strong> Always check mod compatibility with your game version before installing.</div>
      </>
    ),

    "paralives-mod-category-guide-2026": (
      <>
        <h2>📚 Understanding Mod Categories</h2>
        <p>Paralives mods fall into several categories. Here&apos;s how to find the perfect mods for your playstyle:</p>

        <h3>⚡ Performance Mods</h3>
        <p><strong>What they do:</strong> Optimize game performance, reduce loading times, improve FPS</p>
        <p><strong>Best for:</strong> Players with older hardware or experiencing lag</p>
        <ul>
          <li>Performance Booster — General optimization</li>
          <li>Memory Manager — Reduces RAM usage</li>
          <li>Loading Optimizer — Faster loading screens</li>
        </ul>

        <h3>🎨 Visual/UI Mods</h3>
        <p><strong>What they do:</strong> Improve graphics, UI, and visual effects</p>
        <p><strong>Best for:</strong> Players who want a better-looking game</p>
        <ul>
          <li>UI Enhancement Pack — Better menus and icons</li>
          <li>Graphics Overhaul — Improved textures and lighting</li>
          <li>Reshade Presets — Custom color grading</li>
        </ul>

        <h3>🏠 Build Mode Mods</h3>
        <p><strong>What they do:</strong> Add new building tools and furniture</p>
        <p><strong>Best for:</strong> Players who love building and decorating</p>
        <ul>
          <li>Build Mode Essentials — New tools and shortcuts</li>
          <li>Furniture Pack — 100+ new items</li>
          <li>Landscaping Tools — New outdoor items</li>
        </ul>

        <h3>👤 CAS (Create-A-Sim) Mods</h3>
        <p><strong>What they do:</strong> Expand character creation options</p>
        <p><strong>Best for:</strong> Players who love creating unique Paras</p>
        <ul>
          <li>CAS Overhaul — New hairstyles and clothing</li>
          <li>Face Preset Pack — New face shapes</li>
          <li>Trait Pack — New personality traits</li>
        </ul>

        <h3>🎮 Gameplay Mods</h3>
        <p><strong>What they do:</strong> Add new gameplay features and systems</p>
        <p><strong>Best for:</strong> Players who want more content</p>
        <ul>
          <li>Career Expansion — New career paths</li>
          <li>Pet Expansion — Cats and dogs</li>
          <li>World Expansion — New lots and neighborhoods</li>
        </ul>

        <h2>🔧 Mod Management Tips</h2>
        <ul>
          <li><strong>Organize by category:</strong> Use folders to separate different mod types</li>
          <li><strong>Check compatibility:</strong> Always verify mods work with your game version</li>
          <li><strong>Back up saves:</strong> Save before installing new mods</li>
          <li><strong>Update regularly:</strong> Keep mods updated for best performance</li>
          <li><strong>Use mod manager:</strong> Tools like Mod Manager make organization easier</li>
        </ul>

        <h2>📥 Finding Mods</h2>
        <ul>
          <li><strong>Steam Workshop:</strong> Official mod platform, easiest to use</li>
          <li><strong>ModTheSims:</strong> Large community with quality mods</li>
          <li><strong>Paralives Modding Discord:</strong> Active community with support</li>
          <li><strong>Nexus Mods:</strong> Alternative platform with many options</li>
        </ul>
      </>
    ),

    // ==================== ACHIEVEMENTS & SECRETS ====================
    "paralives-achievements-unlock-conditions": (
      <>
        <h2>🏅 All Steam Achievements</h2>
        <p>Here are all known Steam achievements with unlock conditions and difficulty ratings:</p>

        <h3>🏠 Building Achievements</h3>
        <div className="career-table"><table><thead><tr><th>Achievement</th><th>Condition</th><th>Difficulty</th></tr></thead><tbody>
          <tr><td>🏗️ First Home</td><td>Build your first house</td><td>⭐ Easy</td></tr>
          <tr><td>🏰 Mansion Master</td><td>Build a house worth §100,000+</td><td>⭐⭐⭐ Hard</td></tr>
          <tr><td>🌀 Curved Creator</td><td>Use curved walls in a build</td><td>⭐ Easy</td></tr>
          <tr><td>🎨 Color Master</td><td>Use 50+ different colors in one build</td><td>⭐⭐ Medium</td></tr>
          <tr><td>🏡 Garden Guru</td><td>Create a garden with 20+ plants</td><td>⭐⭐ Medium</td></tr>
        </tbody></table></div>

        <h3>👤 Character Achievements</h3>
        <div className="career-table"><table><thead><tr><th>Achievement</th><th>Condition</th><th>Difficulty</th></tr></thead><tbody>
          <tr><td>👶 First Para</td><td>Create your first Para</td><td>⭐ Easy</td></tr>
          <tr><td>🧬 Genetics Master</td><td>Have 3 generations of Paras</td><td>⭐⭐⭐ Hard</td></tr>
          <tr><td>🎭 Trait Collector</td><td>Play with all personality traits</td><td>⭐⭐⭐⭐ Very Hard</td></tr>
          <tr><td>😊 Happy Para</td><td>Keep a Para happy for 7 days straight</td><td>⭐⭐ Medium</td></tr>
        </tbody></table></div>

        <h3>💼 Career Achievements</h3>
        <div className="career-table"><table><thead><tr><th>Achievement</th><th>Condition</th><th>Difficulty</th></tr></thead><tbody>
          <tr><td>💼 Career Starter</td><td>Get your first job</td><td>⭐ Easy</td></tr>
          <tr><td>👑 CEO</td><td>Reach the top of any career</td><td>⭐⭐⭐ Hard</td></tr>
          <tr><td>💰 Millionaire</td><td>Accumulate §1,000,000</td><td>⭐⭐⭐⭐ Very Hard</td></tr>
          <tr><td>🔄 Career Switcher</td><td>Change careers 3 times</td><td>⭐⭐ Medium</td></tr>
        </tbody></table></div>

        <h3>❤️ Relationship Achievements</h3>
        <div className="career-table"><table><thead><tr><th>Achievement</th><th>Condition</th><th>Difficulty</th></tr></thead><tbody>
          <tr><td>💬 First Friend</td><td>Make your first friend</td><td>⭐ Easy</td></tr>
          <tr><td>💍 Marriage</td><td>Get married</td><td>⭐⭐ Medium</td></tr>
          <tr><td>👨‍👩‍👧‍👦 Family of 5</td><td>Have a household with 5+ Paras</td><td>⭐⭐ Medium</td></tr>
          <tr><td>❤️ Soulmates</td><td>Reach maximum romance with a partner</td><td>⭐⭐ Medium</td></tr>
        </tbody></table></div>

        <h3>🎮 Skill Achievements</h3>
        <div className="career-table"><table><thead><tr><th>Achievement</th><th>Condition</th><th>Difficulty</th></tr></thead><tbody>
          <tr><td>📚 Bookworm</td><td>Read 10 books</td><td>⭐ Easy</td></tr>
          <tr><td>🎨 Master Artist</td><td>Reach max Creativity skill</td><td>⭐⭐⭐ Hard</td></tr>
          <tr><td>🍳 Master Chef</td><td>Reach max Cooking skill</td><td>⭐⭐⭐ Hard</td></tr>
          <tr><td>💪 Fitness Guru</td><td>Reach max Physique skill</td><td>⭐⭐⭐ Hard</td></tr>
        </tbody></table></div>

        <h2>🏆 Secret Achievements</h2>
        <p>These achievements have hidden unlock conditions:</p>
        <ul>
          <li><strong>🥚 Easter Egg Hunter:</strong> Find all hidden secrets in the game</li>
          <li><strong>🎭 Drama Queen:</strong> Start 10 arguments in one day</li>
          <li><strong>💤 Sleep Master:</strong> Sleep for 24 hours straight</li>
          <li><strong>🍕 Pizza Lover:</strong> Eat pizza 10 times in a row</li>
          <li><strong>🎵 Music Master:</strong> Play all instruments</li>
        </ul>
      </>
    ),


    // ==================== RELATIONSHIPS ====================
    "paralives-relationships-social-guide": (
      <>
        <h2>🧵 Relationship System Overview</h2>
        <p>Social interaction is the heart of life simulation. Paralives does it differently — no linear conversation trees; instead you draw <strong>Together Cards</strong> that shape the outcome.</p>
        
        <h3>🎴 Together Cards</h3>
        <p>When two Paras interact, a &quot;Together Card&quot; appears. Each card represents a social action with different outcomes:</p>
        <ul>
          <li><strong>Green Cards:</strong> Positive interactions (chat, joke, compliment)</li>
          <li><strong>Blue Cards:</strong> Neutral interactions (discuss hobby, ask about day)</li>
          <li><strong>Red Cards:</strong> Negative interactions (argue, insult, mock)</li>
          <li><strong>Pink Cards:</strong> Romantic interactions (flirt, kiss, confess love)</li>
        </ul>
        <p>The more cards you draw, the more the &quot;Together Bar&quot; fills up. When full, special interactions unlock.</p>

        <h3>💕 Relationship Types</h3>
        <div className="career-table"><table><thead><tr><th>Type</th><th>How to Achieve</th><th>Benefits</th></tr></thead><tbody>
          <tr><td>👋 Acquaintance</td><td>First meeting</td><td>Basic interactions</td></tr>
          <tr><td>💬 Friend</td><td>Regular positive interactions</td><td>Invite to hangout, share secrets</td></tr>
          <tr><td>⭐ Best Friend</td><td>Deep friendship over time</td><td>Move in together, emotional support</td></tr>
          <tr><td>💘 Romantic Interest</td><td>Flirting + romantic cards</td><td>Date, hold hands, kiss</td></tr>
          <tr><td>💑 Partner</td><td>Propose relationship</td><td>Exclusive romance, jealousy system</td></tr>
          <tr><td>💍 Spouse</td><td>Propose marriage</td><td>Shared household, family planning</td></tr>
          <tr><td>😤 Enemy</td><td>Repeated negative interactions</td><td>Autonomous arguments, sabotage</td></tr>
        </tbody></table></div>

        <h2>❤️ Romance Guide</h2>
        <h3>How to Start a Romance</h3>
        <ol>
          <li><strong>Build Friendship First:</strong> Most Paras won&apos;t accept romance from strangers</li>
          <li><strong>Use Romantic Cards:</strong> Flirt, compliment appearance, confess attraction</li>
          <li><strong>Check Compatibility:</strong> Matching traits boost romance speed</li>
          <li><strong>Go on Dates:</strong> Restaurant, park, or home dates increase romance</li>
          <li><strong>Propose:</strong> When romance bar is full, propose relationship</li>
        </ol>

        <h3>Marriage &amp; Family</h3>
        <ul>
          <li><strong>Proposal:</strong> Requires high romance + engagement ring</li>
          <li><strong>Wedding:</strong> Can be small or grand — affects cost and mood</li>
          <li><strong>Children:</strong> Try for baby or adopt</li>
          <li><strong>Divorce:</strong> Possible but causes sadness and financial split</li>
        </ul>

        <h2>👨‍👩‍👧‍👦 Family Dynamics</h2>
        <ul>
          <li><strong>Parent-Child:</strong> Parents can teach skills, help with homework</li>
          <li><strong>Siblings:</strong> Can be friends or rivals — depends on interactions</li>
          <li><strong>Extended Family:</strong> Aunts, uncles, cousins exist but less impactful</li>
          <li><strong>Family Tree:</strong> Track lineage across generations</li>
        </ul>

        <h2>💡 Social Tips</h2>
        <ul>
          <li><strong>Daily Interaction:</strong> Talk to at least one person per day to avoid loneliness</li>
          <li><strong>Group Activities:</strong> Parties and gatherings boost multiple relationships</li>
          <li><strong>Match Traits:</strong> Outgoing Paras need more social time; Loners need less</li>
          <li><strong>Phone Calls:</strong> Quick way to maintain long-distance friendships</li>
          <li><strong>Gifts:</strong> Giving gifts boosts relationship faster</li>
        </ul>
      </>
    ),

    // ==================== GETTING STARTED - ADVANCED ====================
    "paralives-console-commands-cheats-guide": (
      <>
        <h2>💻 Console Commands Overview</h2>
        <div className="tip-box"><strong>💡 Important:</strong> Using console commands may disable achievements for that save. Always back up your saves first.</div>

        <h3>🔧 How to Enable Console</h3>
        <ol>
          <li>Press <strong>Ctrl + Shift + C</strong> to open the console</li>
          <li>Type <strong>testingcheats true</strong> to enable cheat mode</li>
          <li>Enter any command below</li>
        </ol>

        <h2>💰 Money Cheats</h2>
        <div className="career-table"><table><thead><tr><th>Command</th><th>Effect</th></tr></thead><tbody>
          <tr><td><code>money [amount]</code></td><td>Set household funds to exact amount</td></tr>
          <tr><td><code>motherlode</code></td><td>Add 50,000 to household</td></tr>
          <tr><td><code>kaching</code></td><td>Add 1,000 to household</td></tr>
          <tr><td><code>freeRealEstate on</code></td><td>All lots are free</td></tr>
        </tbody></table></div>

        <h2>👤 Character Cheats</h2>
        <div className="career-table"><table><thead><tr><th>Command</th><th>Effect</th></tr></thead><tbody>
          <tr><td><code>resetSim [name]</code></td><td>Reset a stuck Para</td></tr>
          <tr><td><code>fillNeeds</code></td><td>Max all needs for selected Para</td></tr>
          <tr><td><code>setMaxSkill [skill] [level]</code></td><td>Set skill to specific level</td></tr>
          <tr><td><code>addTrait [trait]</code></td><td>Add personality trait</td></tr>
          <tr><td><code>removeTrait [trait]</code></td><td>Remove personality trait</td></tr>
          <tr><td><code>setAge [stage]</code></td><td>Change age (baby, child, teen, adult, elder)</td></tr>
        </tbody></table></div>

        <h2>🏠 Build Mode Cheats</h2>
        <div className="career-table"><table><thead><tr><th>Command</th><th>Effect</th></tr></thead><tbody>
          <tr><td><code>bb.moveobjects on</code></td><td>Place objects anywhere (no collision)</td></tr>
          <tr><td><code>bb.ignoregameplayunlocksentitlement</code></td><td>Unlock all career items</td></tr>
          <tr><td><code>bb.showhiddenobjects</code></td><td>Show debug objects</td></tr>
          <tr><td><code>bb.enablefreebuild</code></td><td>Build on any lot</td></tr>
        </tbody></table></div>

        <h2>⚠️ Troubleshooting</h2>
        <ul>
          <li><strong>Console not opening?</strong> Make sure you press Ctrl+Shift+C (not Ctrl+C)</li>
          <li><strong>Command not working?</strong> Check spelling and try with/without spaces</li>
          <li><strong>Game crashing?</strong> Some commands conflict — restart game and try one at a time</li>
          <li><strong>Achievements disabled?</strong> Using cheats disables achievements for that save</li>
        </ul>
      </>
    ),

    "paralives-controls-keyboard-shortcuts-guide": (
      <>
        <h2>🌍 Global Shortcuts (Every Mode)</h2>
        <div className="career-table"><table><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody>
          <tr><td><code>Space</code></td><td>Pause / Unpause</td></tr>
          <tr><td><code>1 / 2 / 3</code></td><td>Game speed (Normal / Fast / Ultra)</td></tr>
          <tr><td><code>Tab</code></td><td>Switch to Build Mode</td></tr>
          <tr><td><code>Escape</code></td><td>Open menu / Close menu</td></tr>
          <tr><td><code>M</code></td><td>Open Map</td></tr>
          <tr><td><code>F</code></td><td>Focus on selected Para</td></tr>
          <tr><td><code>G</code></td><td>Toggle Grid (Build Mode)</td></tr>
          <tr><td><code>R</code></td><td>Rotate object</td></tr>
          <tr><td><code>P</code></td><td>Eyedropper tool</td></tr>
          <tr><td><code>S</code></td><td>Hammer (Delete) tool</td></tr>
          <tr><td><code>Ctrl + Z</code></td><td>Undo</td></tr>
          <tr><td><code>Ctrl + Y</code></td><td>Redo</td></tr>
          <tr><td><code>Ctrl + S</code></td><td>Quick Save</td></tr>
        </tbody></table></div>

        <h2>🏠 Build Mode Shortcuts</h2>
        <div className="career-table"><table><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody>
          <tr><td><code>[ ]</code></td><td>Scale object smaller / larger</td></tr>
          <tr><td><code>Shift + R</code></td><td>Fine rotation (1° increments)</td></tr>
          <tr><td><code>Shift + Click</code></td><td>Multi-select / Paint single tile</td></tr>
          <tr><td><code>Ctrl + Click</code></td><td>Copy object</td></tr>
          <tr><td><code>Delete</code></td><td>Remove selected object</td></tr>
          <tr><td><code>H</code></td><td>Toggle wall height view</td></tr>
          <tr><td><code>L</code></td><td>Toggle lighting preview</td></tr>
          <tr><td><code>Home / End</code></td><td>Raise / Lower floor level</td></tr>
        </tbody></table></div>

        <h2>👤 Live Mode Shortcuts</h2>
        <div className="career-table"><table><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody>
          <tr><td><code>Click Para</code></td><td>Select and control</td></tr>
          <tr><td><code>Double Click</code></td><td>Focus camera on Para</td></tr>
          <tr><td><code>Right Click</code></td><td>Quick interaction menu</td></tr>
          <tr><td><code>Q / E</code></td><td>Rotate camera</td></tr>
          <tr><td><code>Scroll</code></td><td>Zoom in / out</td></tr>
          <tr><td><code>W / A / S / D</code></td><td>Pan camera</td></tr>
        </tbody></table></div>

        <div className="tip-box"><strong>💡 Pro tip:</strong> Press <code>Ctrl + Shift + C</code> to open the console for cheats and commands.</div>
      </>
    ),

    "paralives-interface-explained-menu-build-mode": (
      <>
        <h2>🏠 Main Menu</h2>
        <p>When you launch Paralives, you&apos;ll see:</p>
        <ul>
          <li><strong>Continue:</strong> Load your most recent save</li>
          <li><strong>New Game:</strong> Start fresh with new Paras</li>
          <li><strong>Load Game:</strong> Choose from all save files</li>
          <li><strong>Settings:</strong> Graphics, audio, controls, UI scale</li>
          <li><strong>Workshop:</strong> Steam Workshop browser</li>
          <li><strong>Exit:</strong> Quit to desktop</li>
        </ul>

        <h2>🎮 Live Mode HUD</h2>
        <h3>Bottom-Left Panel</h3>
        <ul>
          <li><strong>Para Portrait:</strong> Shows selected Para&apos;s face</li>
          <li><strong>Need Bars:</strong> 🍔 Hunger, 🔋 Energy, 🛁 Hygiene, 💬 Social, 🎮 Fun, 🛋️ Comfort</li>
          <li><strong>Emotion Icon:</strong> Current mood state</li>
          <li><strong>Moodlet Icons:</strong> Active positive/negative effects</li>
        </ul>

        <h3>Bottom-Right Panel</h3>
        <ul>
          <li><strong>🏗️ Build Mode:</strong> Switch to building (Tab)</li>
          <li><strong>🗺️ Map:</strong> Open world map (M)</li>
          <li><strong>📱 Phone:</strong> Call friends, check jobs, browse web</li>
          <li><strong>⚙️ Settings:</strong> Quick access to game settings</li>
        </ul>

        <h3>Top Bar</h3>
        <ul>
          <li><strong>💰 Funds:</strong> Current household money</li>
          <li><strong>🕒 Time/Date:</strong> Current game time</li>
          <li><strong>⏩ Speed:</strong> 1x, 2x, 3x speed controls</li>
          <li><strong>⏸️ Pause:</strong> Pause/unpause (Space)</li>
        </ul>

        <h2>🏗️ Build Mode Interface</h2>
        <h3>Top-Left Panel (Tools)</h3>
        <ul>
          <li><strong>🧱 Build:</strong> Walls, floors, foundations</li>
          <li><strong>🛏️ Room:</strong> Pre-built room shapes</li>
          <li><strong>🪑 Furniture:</strong> All buyable items</li>
          <li><strong>🌳 Terrain:</strong> Landscaping tools</li>
          <li><strong>🔍 Search:</strong> Find specific items</li>
        </ul>

        <h3>Top-Right Panel (Actions)</h3>
        <ul>
          <li><strong>🔨 Hammer:</strong> Delete objects (S)</li>
          <li><strong>💉 Eyedropper:</strong> Copy object/color (P)</li>
          <li><strong>↩️ Undo:</strong> Reverse last action (Ctrl+Z)</li>
          <li><strong>🏢 Floors:</strong> Toggle floor visibility</li>
          <li><strong>👁️ Wall View:</strong> Toggle wall visibility</li>
        </ul>

        <h2>💡 UI Tips</h2>
        <ul>
          <li><strong>UI Scale:</strong> Go to Settings → UI Scale (110-120% recommended for 1080p)</li>
          <li><strong>Hover Tooltips:</strong> Hover over any icon for description</li>
          <li><strong>Right-Click:</strong> Quick access to common actions</li>
          <li><strong>Drag &amp; Drop:</strong> Drag items from catalog to lot</li>
        </ul>
      </>
    ),

    "paralives-settings-performance-graphics-guide": (
      <>
        <h2>⚙️ Graphics Settings Explained</h2>
        <p>Fine-tune every setting to get smooth frame rates and crisp visuals — no matter your rig.</p>

        <h3>🖥️ Resolution &amp; Display</h3>
        <ul>
          <li><strong>Resolution:</strong> Match your monitor (1920x1080, 2560x1440, 3840x2160)</li>
          <li><strong>Display Mode:</strong> Fullscreen (best performance), Borderless, Windowed</li>
          <li><strong>VSync:</strong> ON to prevent screen tearing, OFF for lower input lag</li>
          <li><strong>Frame Rate Limit:</strong> Set to monitor refresh rate (60, 120, 144)</li>
        </ul>

        <h3>🎨 Visual Quality</h3>
        <div className="career-table"><table><thead><tr><th>Setting</th><th>Impact</th><th>Recommendation</th></tr></thead><tbody>
          <tr><td>Shadow Quality</td><td>High</td><td>Medium for mid-range PCs</td></tr>
          <tr><td>Texture Quality</td><td>Medium</td><td>High if you have 8GB+ VRAM</td></tr>
          <tr><td>Reflection Quality</td><td>Low</td><td>Low — minimal visual difference</td></tr>
          <tr><td>Anti-Aliasing</td><td>Medium</td><td>TAA for smooth edges</td></tr>
          <tr><td>Ambient Occlusion</td><td>Medium</td><td>ON for depth, OFF for performance</td></tr>
          <tr><td>Draw Distance</td><td>High</td><td>Medium — reduces pop-in</td></tr>
        </tbody></table></div>

        <h2>💡 Performance Tips</h2>
        <ul>
          <li><strong>Close background apps:</strong> Browsers and chat apps eat RAM</li>
          <li><strong>Update GPU drivers:</strong> NVIDIA and AMD release game-ready drivers</li>
          <li><strong>Verify game files:</strong> Steam → Right-click → Properties → Local Files → Verify</li>
          <li><strong>Lower resolution scale:</strong> 80% resolution scale gives big FPS boost</li>
          <li><strong>Disable Steam Overlay:</strong> Can cause stutters on some systems</li>
        </ul>
      </>
    ),

    "paralives-early-access-missing-features-avoid-buyers-remorse": (
      <>
        <h2>⚠️ 10 Missing Features in Early Access</h2>
        <p>Before you click &quot;Buy&quot;, read this. These 10 highly anticipated features are not in the game at launch.</p>

        <h3>1. 🏘️ Open World Exploration</h3>
        <p>Currently, you can only visit community lots by clicking on them. Full open-world walking/driving is planned for Phase 2.</p>

        <h3>2. 🎭 Supernatural Life States</h3>
        <p>No vampires, werewolves, or ghosts yet. These are planned for Phase 3.</p>

        <h3>3. 🏫 Active Schools</h3>
        <p>Children and teens go to school off-screen. Active school gameplay is planned.</p>

        <h3>4. 🏢 Active Workplaces</h3>
        <p>Careers are currently &quot;rabbit hole&quot; style. Active work gameplay is planned.</p>

        <h3>5. 🎵 Musical Instruments</h3>
        <p>Guitar and piano are not yet playable. Music skill system is planned.</p>

        <h3>6. 🏊 Swimming &amp; Pools</h3>
        <p>Pools and swimming are not implemented yet. Planned for Phase 2.</p>

        <h3>7. 🚗 Vehicles</h3>
        <p>No cars, bikes, or transportation. Fast travel only.</p>

        <h3>8. 📸 Photography Skill</h3>
        <p>Camera and photography system not yet available.</p>

        <h3>9. 🎪 Festivals &amp; Events</h3>
        <p>No seasonal festivals or community events yet.</p>

        <h3>10. 📖 Story Mode</h3>
        <p>Linear story campaigns are planned for full release.</p>

        <h2>✅ What IS Available</h2>
        <ul>
          <li><strong>Build Mode:</strong> Complete and powerful</li>
          <li><strong>Character Creator:</strong> Detailed and flexible</li>
          <li><strong>8 Career Paths:</strong> With progression system</li>
          <li><strong>Relationship System:</strong> Together Cards mechanic</li>
          <li><strong>Needs System:</strong> Full life simulation</li>
          <li><strong>Steam Workshop:</strong> Mod support from day one</li>
        </ul>

        <h2>🤔 Should You Buy?</h2>
        <ul>
          <li><strong>✅ Buy if:</strong> You love building, character creation, and life sims</li>
          <li><strong>❌ Wait if:</strong> You want a complete game with all features</li>
          <li><strong>💡 Consider:</strong> The developers are active and updates are regular</li>
        </ul>
      </>
    ),

    "paralives-strongest-sims-4-competitor": (
      <>
        <h2>⚔️ Paralives vs Sims 4: Head-to-Head</h2>
        <p>From one programmer&apos;s hobby to 1.2 million Steam wishlists — here&apos;s how Paralives grew into the most credible threat to The Sims&apos; dominance.</p>

        <h3>🏠 Build Mode</h3>
        <div className="career-table"><table><thead><tr><th>Feature</th><th>Paralives</th><th>Sims 4</th></tr></thead><tbody>
          <tr><td>Grid System</td><td>✅ Gridless</td><td>❌ Grid-based</td></tr>
          <tr><td>Curved Walls</td><td>✅ Yes</td><td>❌ No</td></tr>
          <tr><td>Object Scaling</td><td>✅ Any size</td><td>⚠️ Limited</td></tr>
          <tr><td>Color Wheel</td><td>✅ Full RGB</td><td>⚠️ Limited palette</td></tr>
          <tr><td>Split Levels</td><td>✅ Yes</td><td>⚠️ Limited</td></tr>
          <tr><td>Custom Roofs</td><td>✅ Advanced</td><td>⚠️ Basic</td></tr>
        </tbody></table></div>

        <h3>👤 Character Creation</h3>
        <div className="career-table"><table><thead><tr><th>Feature</th><th>Paralives</th><th>Sims 4</th></tr></thead><tbody>
          <tr><td>Body Sculpting</td><td>✅ Free-form</td><td>⚠️ Sliders</td></tr>
          <tr><td>Face Customization</td><td>✅ Detailed</td><td>✅ Good</td></tr>
          <tr><td>Hair Color</td><td>✅ Full color wheel</td><td>⚠️ Limited</td></tr>
          <tr><td>Clothing Colors</td><td>✅ Any color</td><td>⚠️ Pattern-based</td></tr>
        </tbody></table></div>

        <h3>💰 Value</h3>
        <div className="career-table"><table><thead><tr><th>Aspect</th><th>Paralives</th><th>Sims 4</th></tr></thead><tbody>
          <tr><td>Base Price</td><td>~$35</td><td>Free (was $40)</td></tr>
          <tr><td>DLC Cost</td><td>None planned</td><td>$500+ for all DLC</td></tr>
          <tr><td>Mod Support</td><td>✅ Steam Workshop</td><td>✅ External</td></tr>
        </tbody></table></div>

        <h2>🏆 Verdict</h2>
        <ul>
          <li><strong>Building:</strong> Paralives wins — gridless, curved walls, free scaling</li>
          <li><strong>Character Creation:</strong> Tie — both excellent</li>
          <li><strong>Gameplay Depth:</strong> Sims 4 wins (for now) — more content after years of DLC</li>
          <li><strong>Value:</strong> Paralives wins — no expensive DLC model</li>
        </ul>

        <div className="tip-box"><strong>💡 Bottom Line:</strong> Paralives is the strongest Sims competitor in years. If you love building and hate DLC, it&apos;s the better choice.</div>
      </>
    ),

    // ==================== BUILD MODE - ADVANCED ====================
    "paralives-build-mode-masterclass-2026": (
      <>
        <h2>🎓 Build Mode Masterclass</h2>
        <p>After 60 hours inside Paralives&apos; build mode, I&apos;m convinced it&apos;s the best life-sim builder ever.</p>

        <h3>🧱 Advanced Wall Techniques</h3>
        <ul>
          <li><strong>Curved Wall Segments:</strong> Create perfect arcs by adjusting control points</li>
          <li><strong>Wall Transitions:</strong> Smoothly connect straight and curved sections</li>
          <li><strong>Mixed Heights:</strong> Combine standard, half, and invisible walls</li>
          <li><strong>Wall Niches:</strong> Create built-in shelving with wall cutouts</li>
        </ul>

        <h3>🏗️ Advanced Roof Design</h3>
        <ul>
          <li><strong>Multi-Level Roofs:</strong> Stack different roof types for complex silhouettes</li>
          <li><strong>Dormer Windows:</strong> Add small roof sections for attic windows</li>
          <li><strong>Flat Roof Terraces:</strong> Create usable rooftop spaces</li>
          <li><strong>Mixed Materials:</strong> Combine tile, metal, and slate on one roof</li>
        </ul>

        <h3>🪜 Staircase Mastery</h3>
        <ul>
          <li><strong>U-Shape with Landing:</strong> Create elegant central staircases</li>
          <li><strong>Spiral Stairs:</strong> Space-saving and visually striking</li>
          <li><strong>Hidden Stairs:</strong> Conceal access to secret rooms</li>
        </ul>

        <h3>🎨 Professional Lighting</h3>
        <ul>
          <li><strong>Three-Point Lighting:</strong> Ceiling + task + accent for balanced illumination</li>
          <li><strong>Natural Light:</strong> Maximize windows for daytime brightness</li>
          <li><strong>Mood Lighting:</strong> Warm-toned lights for cozy evenings</li>
        </ul>

        <h3>🌿 Landscaping Secrets</h3>
        <ul>
          <li><strong>Layered Planting:</strong> Tall trees → medium shrubs → ground cover</li>
          <li><strong>Path Design:</strong> Stepping stones, gravel, or pavers</li>
          <li><strong>Water Features:</strong> Fountains, ponds, and streams</li>
        </ul>
      </>
    ),

    "paralives-trendy-house-builds-tutorial": (
      <>
        <h2>🏛️ 1. Modern Curved-Wall Showpiece</h2>
        <p><strong>Style:</strong> Contemporary | <strong>Budget:</strong> $50,000+ | <strong>Difficulty:</strong> ⭐⭐⭐</p>
        <h3>Step-by-Step</h3>
        <ol>
          <li>Create a rectangular foundation (12x10 tiles)</li>
          <li>Draw curved wall on front facade — drag control points for smooth arc</li>
          <li>Add floor-to-ceiling windows along curved section</li>
          <li>Build flat roof with rooftop terrace</li>
          <li>Interior: open plan kitchen/living, 2 bedrooms, 2 bathrooms</li>
          <li>Add infinity pool in backyard</li>
        </ol>

        <h2>🏡 2. Cozy Attic Retreat</h2>
        <p><strong>Style:</strong> Cottage | <strong>Budget:</strong> $30,000 | <strong>Difficulty:</strong> ⭐⭐</p>
        <h3>Step-by-Step</h3>
        <ol>
          <li>Build small foundation (8x8 tiles)</li>
          <li>Standard walls on ground floor — living room, kitchen, bathroom</li>
          <li>Steep roof pitch for spacious attic</li>
          <li>Add dormer window for attic bedroom</li>
          <li>Spiral stairs to save space</li>
          <li>Cozy fireplace, wooden beams, warm lighting</li>
        </ol>

        <h2>🏊 3. Luxury Infinity Pool Villa</h2>
        <p><strong>Style:</strong> Mediterranean | <strong>Budget:</strong> $80,000+ | <strong>Difficulty:</strong> ⭐⭐⭐⭐</p>
        <h3>Step-by-Step</h3>
        <ol>
          <li>Large foundation on hillside lot (16x12 tiles)</li>
          <li>L-shaped floor plan wrapping around pool</li>
          <li>Multiple levels — main floor, upper bedrooms, basement gym</li>
          <li>Infinity pool with vanishing edge (use terrain tool)</li>
          <li>Outdoor kitchen and dining area</li>
          <li>Landscaping: palm trees, stone path, garden lights</li>
        </ol>

        <h2>🎨 Style Guide Quick Reference</h2>
        <div className="career-table"><table><thead><tr><th>Style</th><th>Colors</th><th>Key Elements</th></tr></thead><tbody>
          <tr><td>Modern</td><td>White, black, gray, wood</td><td>Clean lines, large windows, flat roof</td></tr>
          <tr><td>Cottage</td><td>Cream, sage, rose, wood</td><td>Steep roof, fireplace, cozy textures</td></tr>
          <tr><td>Japanese</td><td>Natural wood, white, stone</td><td>Sliding doors, zen garden, low furniture</td></tr>
          <tr><td>Industrial</td><td>Gray, black, brick red, metal</td><td>Exposed beams, high ceilings, metal accents</td></tr>
        </tbody></table></div>
      </>
    ),

    // ==================== MODS - ADVANCED ====================
    "custom-content-modding-101": (
      <>
        <h2>🔧 Modding in Paralives</h2>
        <p>One of the biggest reasons life simulation games have staying power is modding. Paralives Studio knows this — they&apos;ve built modding support into the game from day one.</p>

        <h3>📦 Steam Workshop Integration</h3>
        <ul>
          <li><strong>One-Click Install:</strong> Subscribe to mods directly from Steam</li>
          <li><strong>Auto-Update:</strong> Mods update automatically when creator releases new versions</li>
          <li><strong>Easy Management:</strong> Enable/disable mods in-game</li>
        </ul>

        <h2>🛠️ Creating Your Own Mods</h2>
        <h3>Tools You Need</h3>
        <ul>
          <li><strong>Text Editor:</strong> VS Code, Sublime Text, or Notepad++</li>
          <li><strong>Image Editor:</strong> GIMP, Photoshop, or Paint.NET</li>
          <li><strong>3D Software:</strong> Blender (free) for custom objects</li>
        </ul>

        <h3>Mod Types</h3>
        <div className="career-table"><table><thead><tr><th>Type</th><th>Difficulty</th><th>Tools Needed</th></tr></thead><tbody>
          <tr><td>Tuning Mod</td><td>⭐ Easy</td><td>Text editor</td></tr>
          <tr><td>UI Mod</td><td>⭐⭐ Medium</td><td>Text editor, image editor</td></tr>
          <tr><td>Custom Object</td><td>⭐⭐⭐ Hard</td><td>Blender, image editor</td></tr>
          <tr><td>Script Mod</td><td>⭐⭐⭐⭐ Very Hard</td><td>C# knowledge, BepInEx</td></tr>
        </tbody></table></div>

        <h2>🚀 Publishing Your Mod</h2>
        <ol>
          <li><strong>Test thoroughly:</strong> Make sure mod works and doesn&apos;t conflict</li>
          <li><strong>Create Steam Workshop item:</strong> Use Steam&apos;s upload tool</li>
          <li><strong>Add screenshots:</strong> Show what your mod does</li>
          <li><strong>Write description:</strong> Clear instructions and features list</li>
          <li><strong>Tag appropriately:</strong> Help users find your mod</li>
        </ol>
      </>
    ),

    "paralives-hidden-content-easter-eggs": (
      <>
        <h2>🥚 Hidden Content &amp; Easter Eggs</h2>
        <p>Paralives is full of secrets that 90% of players miss. Here&apos;s what to look for:</p>

        <h3>🏠 Build Mode Secrets</h3>
        <ul>
          <li><strong>Hidden Room:</strong> There&apos;s a secret room behind the waterfall in the default lot</li>
          <li><strong>Developer Photos:</strong> Look for hidden developer portraits in certain furniture items</li>
          <li><strong>Color Code Easter Egg:</strong> Entering hex code #FF69B4 (hot pink) unlocks a secret furniture set</li>
          <li><strong>Mystery Door:</strong> A door appears in the basement after reaching 100% happiness</li>
        </ul>

        <h3>👤 Character Secrets</h3>
        <ul>
          <li><strong>Hidden Trait:</strong> There&apos;s a secret &quot;Lucky&quot; trait that increases all positive outcomes</li>
          <li><strong>Developer NPCs:</strong> The developers appear as NPCs in the game world</li>
          <li><strong>Secret Outfit:</strong> Unlock a special outfit by reaching max level in all skills</li>
          <li><strong>Golden Skin:</strong> A rare golden skin tone appears after completing all achievements</li>
        </ul>

        <h3>💼 Career Secrets</h3>
        <ul>
          <li><strong>Secret Career:</strong> There&apos;s a hidden &quot;Game Developer&quot; career path</li>
          <li><strong>Bonus Salary:</strong> Working on Fridays gives a 10% salary bonus</li>
          <li><strong>Secret Promotion:</strong> Befriending your boss gives a promotion boost</li>
          <li><strong>Hidden Job:</strong> A secret job appears after reaching level 5 in two careers</li>
        </ul>

        <h3>🗺️ World Secrets</h3>
        <ul>
          <li><strong>Hidden Lot:</strong> A secret lot appears after playing for 100 hours</li>
          <li><strong>Mystery NPC:</strong> A mysterious NPC appears at the park at midnight</li>
          <li><strong>Secret Location:</strong> There&apos;s a hidden beach area accessible only by boat</li>
          <li><strong>Time Capsule:</strong> Digging in the garden can reveal time capsules with rare items</li>
        </ul>

        <h3>🎮 Gameplay Secrets</h3>
        <ul>
          <li><strong>Konami Code:</strong> Entering the Konami code in the main menu unlocks a secret mode</li>
          <li><strong>Secret Recipe:</strong> Cooking at 3 AM has a chance to create a special dish</li>
          <li><strong>Hidden Interaction:</strong> There&apos;s a secret dance move unlocked by maxing Fun</li>
          <li><strong>Rare Event:</strong> A meteor shower happens once every 30 game days</li>
        </ul>

        <h2>🔍 How to Find Easter Eggs</h2>
        <ul>
          <li><strong>Explore everywhere:</strong> Check every corner of the game world</li>
          <li><strong>Try unusual combinations:</strong> Mix unexpected items or actions</li>
          <li><strong>Pay attention to details:</strong> Look for patterns in the environment</li>
          <li><strong>Check the credits:</strong> Developer names often hint at secrets</li>
          <li><strong>Join the community:</strong> Other players share discoveries</li>
        </ul>

        <h2>🏆 Secret Achievement Unlocks</h2>
        <ul>
          <li><strong>🥚 Easter Egg Hunter:</strong> Find 5 hidden secrets</li>
          <li><strong>🔍 Master Explorer:</strong> Discover all secret locations</li>
          <li><strong>🎭 Secret Keeper:</strong> Keep a secret for 30 days</li>
          <li><strong>🌟 Completionist:</strong> Find all hidden content in the game</li>
        </ul>

        <div className="tip-box"><strong>💡 Pro tip:</strong> Some easter eggs are time-sensitive. Play at different times of day and night to discover everything!</div>
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
