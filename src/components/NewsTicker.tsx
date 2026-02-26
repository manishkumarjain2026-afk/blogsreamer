import { Link } from "react-router-dom";
import { posts } from "@/data/posts";

const NewsTicker = () => {
  const latestPosts = posts.slice(-10).reverse();
  const tickerText = latestPosts.map((p) => p.title).join("  •  ");
  const doubled = `${tickerText}  •  ${tickerText}`;

  return (
    <div className="overflow-hidden border-b border-border bg-primary/10 py-2">
      <div className="flex items-center gap-3 px-4">
        <span className="shrink-0 rounded bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
          LATEST
        </span>
        <div className="relative overflow-hidden">
          <div className="animate-ticker whitespace-nowrap text-sm font-medium text-foreground">
            {latestPosts.map((post, i) => (
              <span key={post.id}>
                <Link
                  to={`/post/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
                {i < latestPosts.length * 2 - 1 && (
                  <span className="mx-3 text-muted-foreground">•</span>
                )}
              </span>
            ))}
            {latestPosts.map((post, i) => (
              <span key={`dup-${post.id}`}>
                <Link
                  to={`/post/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
                {i < latestPosts.length - 1 && (
                  <span className="mx-3 text-muted-foreground">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
