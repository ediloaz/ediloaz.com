import PageLayout from "@/components/page-layout";
import Link from "next/link";

export default function CV() {
  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Edisson López
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-300">
                Desarrollador Full Stack
              </p>
            </div>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Descargar CV
            </button>
          </div>

          {/* Información Personal */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center gap-3">
              <span>👨‍💻</span>
              Perfil Profesional
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Desarrollador Full Stack con experiencia en crear aplicaciones web robustas y escalables. 
              Especializado en React, Next.js, Node.js, C#, .NET y bases de datos tanto relacionales como NoSQL. 
              Apasionado por la calidad del código, las mejores prácticas y el aprendizaje continuo.
            </p>
          </div>

          {/* Experiencia Laboral */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
              <span>💼</span>
              Experiencia Laboral
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  Desarrollador Full Stack
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-2">
                  Empresa • 2020 - Presente
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1">
                  <li>Desarrollo de aplicaciones web con React y Next.js</li>
                  <li>Implementación de APIs RESTful con Node.js y .NET</li>
                  <li>Gestión de bases de datos SQL Server y MongoDB</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  Desarrollador Frontend
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-2">
                  Otra Empresa • 2018 - 2020
                </p>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1">
                  <li>Desarrollo de interfaces de usuario responsivas</li>
                  <li>Implementación de mejores prácticas de UI/UX</li>
                  <li>Colaboración con equipos de diseño y backend</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Educación */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mb-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
              <span>🎓</span>
              Educación
            </h2>
            
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                Ingeniería en Sistemas
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 mb-2">
                Universidad • 2014 - 2018
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                Especialización en Desarrollo de Software y Arquitectura de Sistemas
              </p>
            </div>
          </div>

          {/* Habilidades Técnicas */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
              <span>🛠️</span>
              Habilidades Técnicas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">HTML/CSS</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">C#</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">.NET</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">Python</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Bases de Datos</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">SQL Server</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">MongoDB</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm">AWS</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span className="text-2xl">💬</span>
              ¿Hablamos sobre tu proyecto?
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
