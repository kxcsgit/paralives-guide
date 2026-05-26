import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white/50 border-t border-amber-100/60 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-xl font-extrabold">
              <span className="text-terracotta">Paralives</span>
              <span className="text-warm-brown">Guide</span>
              <span className="text-muted text-xs">.wiki</span>
            </span>
            <p className="text-muted text-sm mt-2 leading-relaxed">
              A fan-made guide wiki by players, for players. Not affiliated with
              Paralives Studio.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-terracotta transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-terracotta transition">
                  All Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-terracotta transition">
                  About This Site
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-terracotta transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-terracotta transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Disclaimer</h4>
            <p className="text-muted text-sm leading-relaxed">
              Paralives is developed by Paralives Studio. This wiki is an
              independent fan project. All game-related trademarks belong to
              their respective owners.
            </p>
          </div>
        </div>
        <div className="border-t border-amber-100/60 pt-6 text-center text-xs text-muted/70">
          <p>
            © {new Date().getFullYear()} ParalivesGuide.wiki — Built with ❤️ for
            the Paralives community.
          </p>
        </div>
      </div>
    </footer>
  );
}
