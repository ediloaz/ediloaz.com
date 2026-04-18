import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import BlogContent from "@/components/blog/BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre arquitectura de software, legal-tech, cloud AWS, mobile-first, documentación técnica, carrera y cultura de ingeniería — por Edisson López (Costa Rica).",
  keywords: [
    "blog desarrollo software",
    "arquitectura software español",
    "Next.js Costa Rica",
    "AWS legal tech",
    "ingeniería de software LATAM",
  ],
  openGraph: {
    title: "Blog · ediloaz",
    description:
      "Guías y reflexiones sobre código, producto, nube y trabajo en equipo — optimizadas para desarrolladores y líderes técnicos.",
    url: "https://www.ediloaz.com/blog",
    type: "website",
    siteName: "ediloaz",
  },
  alternates: {
    canonical: "https://www.ediloaz.com/blog",
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
