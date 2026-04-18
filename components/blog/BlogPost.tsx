import Link from "next/link";
import { blogCategories, getRelatedBlogPosts, type BlogPost } from "@/lib/blog-data";
import AdSenseBanner from "@/components/adsense/AdSenseBanner";

type BlogPostProps = {
  post: BlogPost;
};

export default function BlogPost({ post }: BlogPostProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-CR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const relatedPosts = getRelatedBlogPosts(post.slug, 3);

  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const slotPost = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_POST;
  const showAds = Boolean(clientId && slotPost);

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
            {blogCategories[post.category]}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">{formatDate(post.publishDate)}</span>
          <span className="text-sm text-zinc-400">•</span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">{post.readingTime} min de lectura</span>
        </div>
        <h1 className="text-3xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 md:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">{post.description}</p>
      </div>

      {showAds && (
        <AdSenseBanner clientId={clientId!} slot={slotPost!} className="my-2" />
      )}

      <div className="max-w-none text-zinc-800 dark:text-zinc-200">{post.content}</div>

      {showAds && (
        <AdSenseBanner clientId={clientId!} slot={slotPost!} className="my-2" />
      )}

      {post.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 border-t border-zinc-200 pt-6 dark:border-zinc-700">
          <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Etiquetas:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="cursor-default rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {relatedPosts.length > 0 && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/80">
          <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Artículos relacionados</h3>
          <div className="space-y-4">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group block rounded-xl border border-zinc-200 p-4 transition-all hover:border-blue-400/50 hover:shadow-md dark:border-zinc-600 dark:hover:border-blue-500/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold uppercase text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                        {blogCategories[relatedPost.category]}
                      </span>
                      <span className="text-xs text-zinc-500">{formatDate(relatedPost.publishDate)}</span>
                    </div>
                    <h4 className="mb-1 text-lg font-bold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100">
                      {relatedPost.title}
                    </h4>
                    <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{relatedPost.description}</p>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <nav className="flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400" aria-label="Migas de pan">
        <Link href="/" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
          Inicio
        </Link>
        <span>•</span>
        <Link href="/blog" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
          Blog
        </Link>
        <span>•</span>
        <span className="text-zinc-700 dark:text-zinc-300">{post.title}</span>
      </nav>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Volver al blog
        </Link>
      </div>
    </article>
  );
}
