import Link from "next/link";
import { articles, categories } from "@/lib/articles";

export default function Home() {
  // Get the latest 5 articles for the homepage
  const latestArticles = articles.slice(0, 5);

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-8 md:pt-28 md:pb-12 text-center">
        <span className="inline-flex items-center gap-2 bg-golden/30 text-warm-brown/80 px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-golden/40">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Launched May 25, 2026
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          Your Cozy Corner for
          <br className="hidden sm:block" />
          <span className="text-terracotta"> Paralives</span> Guides
        </h1>
        <p className="text-base md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Character creation deep-dives, build mode masterclasses, career path
          breakdowns, and relationship guides — everything a new Para needs,
          wrapped up in one warm, community-driven wiki.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guides"
            className="inline-flex items-center justify-center gap-2 bg-terracotta text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-[#c07455] transition shadow-lg shadow-terracotta/25"
          >
            📖 Browse All Guides
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 bg-white text-warm-brown px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-md border border-amber-100"
          >
            ℹ️ What is Paralives?
          </Link>
        </div>
      </section>

      {/* Latest Guides Section */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">📝 Latest Guides</h2>
          <Link
            href="/guides"
            className="text-terracotta font-semibold text-sm hover:underline hidden sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100/60 hover:border-terracotta/30 block"
            >
              <div className="text-5xl mb-4">{article.icon}</div>
              <span className="text-xs font-semibold text-soft-teal bg-soft-teal/10 px-3 py-1 rounded-full">
                {categories.find((c) => c.id === article.category)?.label ||
                  article.category}
              </span>
              <h3 className="font-bold text-lg mt-3 mb-2 group-hover:text-terracotta transition">
                {article.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {article.description}
              </p>
              <span className="inline-block mt-4 text-xs text-soft-teal font-semibold">
                Read guide →
              </span>
            </Link>
          ))}

          {/* Rotating Card */}
          <article className="bg-gradient-to-br from-terracotta/10 to-golden/10 rounded-2xl p-6 shadow-md border border-terracotta/20 flex flex-col justify-center items-center text-center">
            <div className="text-5xl mb-4">📚</div>
            <span className="text-xs font-semibold bg-terracotta/10 text-terracotta px-3 py-1 rounded-full mb-3">
              Browse All
            </span>
            <h3 className="font-bold text-lg mb-2">
              20+ Guides and Counting
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Explore our full library of tips, tricks, and in-depth tutorials.
            </p>
            <Link
              href="/guides"
              className="inline-block mt-4 text-xs text-terracotta font-semibold hover:underline"
            >
              Read guide →
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
