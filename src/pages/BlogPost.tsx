import { useParams, Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import PostCard from "@/components/PostCard";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const related = posts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to stories
      </Link>

      <Badge className="mb-4 bg-primary/10 text-primary">{post.category}</Badge>
      <h1 className="mb-4 text-3xl font-black leading-tight text-foreground md:text-4xl">{post.title}</h1>

      <div className="mb-6 flex items-center gap-3">
        <img src={post.authorAvatar} alt={post.author} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold text-foreground">{post.author}</p>
          <p className="text-xs text-muted-foreground">{post.date}</p>
        </div>
      </div>

      <div className="mb-8 overflow-hidden rounded-xl">
        <img src={post.image} alt={post.title} className="w-full object-cover" />
      </div>

      <article
        className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {related.length > 0 && (
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Related Stories</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogPost;
