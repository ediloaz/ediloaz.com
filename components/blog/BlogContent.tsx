"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts, blogCategories, type BlogPost } from "@/lib/blog-data";
import AdSenseInFeed from "@/components/adsense/AdSenseInFeed";

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export default function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState<BlogPost["category"] | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(q) ||
      post.description.toLowerCase().includes(q) ||
      post.tags.some((tag) => tag.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-CR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const slotList = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_LIST;
  const showListAd = Boolean(clientId && slotList);

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/80">
          <input
            type="search"
            placeholder="Buscar artículos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={cx(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              selectedCategory === "all"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700",
            )}
          >
            Todos
          </button>
          {Object.entries(blogCategories).map(([key, label]) => (
            <button
              type="button"
              key={key}
              onClick={() => setSelectedCategory(key as BlogPost["category"])}
              className={cx(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                selectedCategory === key
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {showListAd && (
        <AdSenseInFeed clientId={clientId!} slot={slotList!} className="my-8" />
      )}

      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-700 dark:bg-zinc-800/80">
            <p className="text-zinc-600 dark:text-zinc-400">No se encontraron artículos que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-blue-400/40 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:border-blue-500/30"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                    {blogCategories[post.category]}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{formatDate(post.publishDate)}</span>
                  <span className="text-sm text-zinc-400">•</span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{post.readingTime} min de lectura</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                  {post.title}
                </h3>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">{post.description}</p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="border-t border-zinc-200 pt-3 dark:border-zinc-600">
                  <span className="text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-800 dark:text-blue-400">
                    Leer más →
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="rounded-3xl border border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-700 dark:bg-zinc-900/40">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          Mostrando <span className="font-semibold text-zinc-900 dark:text-zinc-200">{filteredPosts.length}</span> de{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-200">{blogPosts.length}</span> artículos
        </p>
        <p className="mt-4 border-t border-zinc-200 pt-4 text-center text-sm text-zinc-600 dark:text-zinc-400 dark:border-zinc-700">
          ¿Proyectos? Explora el{" "}
          <Link href="/projects" className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400">
            portafolio
          </Link>{" "}
          o{" "}
          <Link href="/contact" className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400">
            contacto
          </Link>
          .
        </p>
      </div>
    </>
  );
}
