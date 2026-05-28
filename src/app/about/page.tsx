import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
        ℹ️ About ParalivesGuide.wiki
      </h1>

      {/* Steam Info Box */}
      <div className="bg-gradient-to-br from-terracotta/5 to-golden/5 rounded-2xl p-6 border border-terracotta/20 mb-8">
        <h2 className="text-xl font-bold mb-4">🎮 Paralives — Steam Quick Facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-muted font-semibold">Release Date</div>
            <div className="font-bold">May 25, 2026</div>
          </div>
          <div>
            <div className="text-muted font-semibold">Price</div>
            <div className="font-bold">$39.99 <span className="text-green-600">(-10% = $35.99)</span></div>
          </div>
          <div>
            <div className="text-muted font-semibold">Reviews</div>
            <div className="font-bold text-green-700">⭐ Very Positive (88%)</div>
          </div>
          <div>
            <div className="text-muted font-semibold">Day 1 Sales</div>
            <div className="font-bold text-blue-700">🚀 250,000+ copies</div>
          </div>
          <div>
            <div className="text-muted font-semibold">Platforms</div>
            <div className="font-bold">Windows + macOS</div>
          </div>
          <div>
            <div className="text-muted font-semibold">Status</div>
            <div className="font-bold">Early Access</div>
          </div>
          <div>
            <div className="text-muted font-semibold">Developer</div>
            <div className="font-bold">Paralives Studio</div>
          </div>
          <div>
            <div className="text-muted font-semibold">Steam</div>
            <a href="https://store.steampowered.com/app/1118520/Paralives/" target="_blank" rel="noopener noreferrer" className="font-bold text-terracotta hover:underline">
              View on Steam →
            </a>
          </div>
        </div>
      </div>

      <div className="prose">
        <p>
          Welcome to <strong>ParalivesGuide.wiki</strong> — your ultimate
          fan-made resource for everything Paralives! We&apos;re a community-driven
          wiki dedicated to helping players master every aspect of this exciting
          life simulation game.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our goal is to create the most comprehensive, accurate, and
          user-friendly guide wiki for Paralives. We believe that every player
          deserves access to high-quality guides and tutorials, whether
          they&apos;re just starting out or looking to master advanced techniques.
        </p>

        <h2>What We Cover</h2>
        <ul>
          <li>
            <strong>Character Creation:</strong> From the Paramaker to genetics
            and personality traits
          </li>
          <li>
            <strong>Build Mode:</strong> Tools, techniques, and style guides for
            creating amazing homes
          </li>
          <li>
            <strong>Careers & Skills:</strong> Complete career paths, salary
            rankings, and skill leveling guides
          </li>
          <li>
            <strong>Relationships:</strong> Social systems, romance, family
            dynamics, and more
          </li>
          <li>
            <strong>Mods & Custom Content:</strong> Installation guides,
            recommendations, and troubleshooting
          </li>
          <li>
            <strong>Achievements & Secrets:</strong> Unlock conditions, hidden
            content, and Easter eggs
          </li>
        </ul>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Up-to-Date:</strong> We regularly update our guides with the
            latest information and game updates
          </li>
          <li>
            <strong>Community-Driven:</strong> Our content is created by players,
            for players
          </li>
          <li>
            <strong>Comprehensive:</strong> We cover everything from beginner
            basics to advanced techniques
          </li>
          <li>
            <strong>User-Friendly:</strong> Our guides are easy to follow and
            well-organized
          </li>
        </ul>

        <h2>Disclaimer</h2>
        <p>
          ParalivesGuide.wiki is an independent fan project and is not
          affiliated with, endorsed by, or connected to Paralives Studio. All
          game-related trademarks, logos, and content are the property of their
          respective owners.
        </p>

        <h2>Get Involved</h2>
        <p>
          We&apos;re always looking for contributors to help improve our guides! If
          you have tips, corrections, or new content to share, please{" "}
          <Link href="/contact" className="text-terracotta hover:underline">
            get in touch
          </Link>
          .
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions, suggestions, or spotted an error? We&apos;d love to hear
          from you! Visit our{" "}
          <Link href="/contact" className="text-terracotta hover:underline">
            Contact page
          </Link>{" "}
          to reach out.
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 bg-terracotta text-white px-6 py-3 rounded-full font-bold hover:bg-[#c07455] transition shadow-lg shadow-terracotta/25"
        >
          📖 Browse All Guides
        </Link>
      </div>
    </section>
  );
}
