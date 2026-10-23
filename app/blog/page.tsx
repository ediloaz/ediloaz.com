import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import BlogContent from "@/components/blog/BlogContent";
import { OG_IMAGE } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Blog de React, Next.js y arquitectura",
  description:
    "Guías prácticas de React, Next.js y TypeScript, más arquitectura de software, cloud AWS y carrera técnica — por Edisson López, desarrollador Full Stack Senior en Costa Rica.",
  keywords: [
    "blog react español",
    "next.js en español",
    "react 19",
    "next.js 16",
    "blog desarrollo software",
    "arquitectura software español",
    "ingeniería de software LATAM",
  ],
  openGraph: {
    title: "Blog de React, Next.js y arquitectura · ediloaz",
    description:
      "Guías prácticas de React y Next.js, arquitectura de software y carrera técnica, escritas por un desarrollador Full Stack Senior.",
    url: "https://www.ediloaz.com/blog",
    type: "website",
    siteName: "ediloaz",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "https://www.ediloaz.com/blog",
    types: {
      "application/rss+xml": "https://www.ediloaz.com/blog/rss.xml",
    },
  },
};

export default function BlogPage() {
  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Blog</p>
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Programación, producto y experiencia de desarrollo
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 md:mx-0">
              Notas sobre arquitectura, UI coherente y cómo los equipos construyen software sostenible — sin perder
              de vista el negocio.
            </p>
          </header>
          <BlogContent />
        </div>
      </section>
    </PageLayout>
  );
}
