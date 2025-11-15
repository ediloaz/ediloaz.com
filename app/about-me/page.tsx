import PageLayout from "@/components/page-layout";
import Link from "next/link";

export default function AboutMe() {
  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Sobre Mí
          </h1>
          
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
              ¿Quién soy?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
              Soy Edisson López, un desarrollador Full Stack apasionado por crear soluciones 
              tecnológicas innovadoras que mejoren la vida de las personas. Con experiencia 
              en múltiples lenguajes y frameworks, me especializo en desarrollar aplicaciones 
              web completas desde el frontend hasta el backend.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Mi enfoque se centra en escribir código limpio, mantenible y escalable, siempre 
              buscando las mejores prácticas y las tecnologías más actuales del mercado.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6">
              Mi Trayectoria
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                  Experiencia Profesional
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  He liderado iniciativas full stack para empresas como Ibylit, Advision Development y Data GIS, entregando plataformas B2B seguras, experiencias digitales de alto tráfico y herramientas para valuadores inmobiliarios, además de colaborar en Workana y el TEC.{" "}
                  <Link href="/cv#experiencia-profesional" className="text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4">
                    Ver en detalle
                  </Link>
                </p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                  Educación
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Soy egresado del Tecnológico de Costa Rica, donde desarrollé el Sistema de Movilidad Internacional en ASP.NET, apoyé cursos de Administración de Proyectos y cursé electivas avanzadas de recuperación de información, desarrollo web e interfaces gráficas.{" "}
                  <Link href="/cv#educacion" className="text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4">
                    Ver en detalle
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
