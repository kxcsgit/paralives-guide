import Link from "next/link";
import { articles, categories } from "@/lib/articles";

export default function GuidesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
        📖 All Guides
      </h1>
      <p className="text-muted mb-10">
        Everything you need to master Paralives — from beginner tips to advanced
        techniques.
      </p>

      {categories.map((category) => {
        const categoryArticles = articles.filter(
          (a) => a.category === category.id
        );
        if (categoryArticles.length === 0) return null;

        return (
          <section key={category.id} id={category.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100/60 hover:border-terracotta/30 block"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{article.icon}</span>
                    <span className="text-xs font-semibold text-muted">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-terracotta transition">
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
            </div>
          </section>
        );
      })}
    </section>
  );
}
