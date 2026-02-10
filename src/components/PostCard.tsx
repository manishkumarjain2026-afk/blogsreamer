import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/data/posts";

const PostCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link to={`/post/${post.slug}`} className="group block">
      <article className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">{post.category}</Badge>
          <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-card-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{post.description}</p>
          <div className="flex items-center gap-3">
            <img src={post.authorAvatar} alt={post.author} className="h-8 w-8 rounded-full object-cover" />
            <div>
              <p className="text-xs font-semibold text-card-foreground">{post.author}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
