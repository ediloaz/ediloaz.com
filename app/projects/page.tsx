import PageLayout from "@/components/page-layout";

export default function Projects() {
  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Mis Proyectos
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-12">
            Aquí encontrarás una selección de mis proyectos más destacados.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder para proyectos futuros */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                Proyecto 1
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                Descripción del proyecto aquí.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
