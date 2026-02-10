import { Link } from "react-router-dom";
import { categories, posts } from "@/data/posts";

const categoryColors: Record<string, string> = {
  "Celebrity Drama": "from-pink-500 to-rose-500",
  "Life Hacks": "from-amber-500 to-orange-500",
  "Shocking Stories": "from-red-500 to-pink-600",
  "Tech": "from-blue-500 to-cyan-500",
  "Entertainment": "from-purple-500 to-violet-500",
  "Health & Wellness": "from-green-500 to-emerald-500",
  "Travel": "from-teal-500 to-sky-500",
};

const Categories = () => {
  const cats = categories.filter((c) => c !== "All");

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-black text-foreground">Browse Categories</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cats.map((cat) => {
          const count = posts.filter((p) => p.category === cat).length;
          const gradient = categoryColors[cat] || "from-primary to-accent";
          return (
            <Link
              key={cat}
              to={`/?category=${encodeURIComponent(cat)}`}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${gradient} p-8 text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <h2 className="text-xl font-bold">{cat}</h2>
              <p className="mt-1 text-sm text-white/80">{count} {count === 1 ? "post" : "posts"}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Categories;
