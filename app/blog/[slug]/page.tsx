import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/page-layout";
import BlogPost from "@/components/blog/BlogPost";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  const keywords = post.keywords?.length ? post.keywords : post.tags;

  return {
    title: post.title,
    description: post.seoDescription,
    keywords,
    authors: [{ name: "Edisson López", url: "https://www.ediloaz.com" }],
    openGraph: {
      title: `${post.title} · ediloaz`,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.publishDate,
      url: `https://www.ediloaz.com/blog/${post.slug}`,
      siteName: "ediloaz",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} · ediloaz`,
      description: post.seoDescription,
      creator: "@ediloaz",
    },
    alternates: {
      canonical: `https://www.ediloaz.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    inLanguage: "es-CR",
    author: {
      "@type": "Person",
      name: "Edisson López",
      url: "https://www.ediloaz.com",
      sameAs: ["https://www.linkedin.com/in/ediloaz", "https://github.com/ediloaz"],
    },
    publisher: {
      "@type": "Organization",
      name: "ediloaz",
      url: "https://www.ediloaz.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.ediloaz.com/blog/${post.slug}`,
    },
    keywords: (post.keywords?.length ? post.keywords : post.tags).join(", "),
    articleSection: post.tags.slice(0, 3).join(", "),
  };

  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <BlogPost post={post} />
        </div>
      </div>
    </PageLayout>
  );
}
