import { blogPosts } from "@/lib/blog-data";

const baseUrl = "https://www.ediloaz.com";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = [...blogPosts]
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    .map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`;
      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <description>${escapeXml(post.seoDescription)}</description>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
        </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>ediloaz — Blog</title>
    <description>Artículos técnicos sobre arquitectura, frontend, cloud, carrera y producto.</description>
    <link>${baseUrl}/blog</link>
    <language>es-CR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
