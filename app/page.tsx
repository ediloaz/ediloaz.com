"use client";

import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PROJECTS } from "./projects/projects-data";
import ProjectCard from "./projects/project-card";
import { technologies } from "@/constants/technologies";
import TechnologiesSection from "@/components/technologies-section";

export default function Home() {
  const yearsOfExperience = new Date().getFullYear() - 2018;

  const skills = [
    "Desarrollo de aplicaciones web completas",
    "APIs RESTful y GraphQL",
    "Bases de datos relacionales y NoSQL",
    "Arquitectura de software",
    "DevOps y despliegue en la nube",
    "Testing y calidad de código"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-gradient">
                Edisson López
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
                Desarrollador Full Stack
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Especializado en crear soluciones web robustas y escalables utilizando tecnologías modernas. 
                Transformo ideas en aplicaciones funcionales y experiencias digitales excepcionales.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Ir a la página de contacto"
              >
                Contáctame
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Ver todos los proyectos"
              >
                Ver Proyectos
              </Link>
              <Link
                href="/cv"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Ver mi currículum vitae"
              >
                Ver Mi CV
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {PROJECTS.length}+
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 font-medium">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {technologies.length}+
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 font-medium">Tecnologías</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {yearsOfExperience}+
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 font-medium">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Full
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 font-medium">Stack</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-800">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800 dark:text-zinc-200">
                Proyectos Destacados
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Proyectos hechos en mi tiempo libre para demostrar habilidades y aprender nuevas tecnologías
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {PROJECTS.slice(0, 3).map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 100}>
                <ProjectCard project={project} index={index} />
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={300}>
            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Ver todos los proyectos"
              >
                Ver Todos los Proyectos
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-800 dark:text-zinc-200">
              Sobre Mí
            </h3>
          </ScrollReveal>
          
          {/* Photo and Introduction */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <ScrollReveal>
              <div className="relative">
                {/* Photo Professional */}
                <div className="relative w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 p-4">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-transparent">
                      <img
                        src="/images/profile-photo.png"
                        alt="Edisson López - Desarrollador Full Stack"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback si la imagen no existe
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center">
                                <div class="text-6xl">👨‍💻</div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div>
                <h4 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
                  ¿Quién soy?
                </h4>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                  Soy Edisson López, un desarrollador Full Stack apasionado por crear soluciones 
                  tecnológicas innovadoras. Con experiencia en múltiples lenguajes y frameworks, 
                  me especializo en desarrollar aplicaciones web completas.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                  Mi enfoque se centra en escribir{" "}
                  <span className="bg-amber-200/80 dark:bg-amber-400/40 px-1 py-0.5 rounded-sm">
                    código limpio</span>
                    , mantenible y escalable, siempre buscando las mejores prácticas.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                  <span className="bg-amber-200/80 dark:bg-amber-400/40 px-1 py-0.5 rounded-sm">
                    &quot;Done is better than perfect&quot;
                  </span>
                  : equilibro tiempos para entregar funcionalidad sólida en plazos razonables para favorecer el avance del proyecto.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Specialties Section */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h4 className="text-2xl md:text-3xl font-bold text-center mb-8 text-zinc-800 dark:text-zinc-200">
                Especialidades
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  // Íconos para cada especialidad
                  const icons = [
                    <svg key="web" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>,
                    <svg key="api" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>,
                    <svg key="db" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>,
                    <svg key="arch" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>,
                    <svg key="devops" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>,
                    <svg key="test" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ];
                  
                  const colors = [
                    "from-blue-500 to-blue-600",
                    "from-purple-500 to-purple-600",
                    "from-green-500 to-green-600",
                    "from-orange-500 to-orange-600",
                    "from-pink-500 to-pink-600",
                    "from-cyan-500 to-cyan-600"
                  ];
                  
                  return (
                    <div
                      key={index}
                      className="group bg-white dark:bg-zinc-800 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          {icons[index % icons.length]}
                        </div>
                        <div className="flex-1">
                          <p className="text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {skill}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Experience and Education */}
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                    Experiencia Profesional
                  </h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  He liderado iniciativas full stack para empresas como Ibylit, Advision Development y Data GIS, 
                  entregando plataformas B2B seguras, experiencias digitales de alto tráfico y herramientas para 
                  valuadores inmobiliarios, además de colaborar en Workana y el TEC.
                </p>
                <Link
                  href="/cv#experiencia-profesional"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Ver en detalle
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                    Educación
                  </h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Soy egresado del Tecnológico de Costa Rica, donde desarrollé el Sistema de Movilidad Internacional 
                  en ASP.NET, apoyé cursos de Administración de Proyectos y cursé electivas avanzadas de recuperación 
                  de información, desarrollo web e interfaces gráficas.
                </p>
                <Link
                  href="/cv#educacion"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                >
                  Ver en detalle
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <TechnologiesSection />

      {/* Quick Navigation Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-800 dark:text-zinc-200">
              Descubre Más
            </h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <Link href="/about-me" className="group block" aria-label="Ir a la página sobre mí">
                <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-500">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👨‍💻</div>
                  <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">Sobre Mí</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Conoce más sobre mi trayectoria y experiencia profesional</p>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Link href="/projects" className="group block" aria-label="Ver todos los proyectos">
                <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-500">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">Proyectos</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Explora mi portafolio de proyectos y aplicaciones</p>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Link href="/cv" className="group block" aria-label="Ver mi currículum vitae">
                <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-500">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📄</div>
                  <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">Mi CV</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Revisa mi currículum completo y experiencia</p>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Link href="/contact" className="group block" aria-label="Ir a la página de contacto">
                <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💬</div>
                  <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">Contacto</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">¿Tienes una idea? ¡Hablemos!</p>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-white dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-zinc-800 dark:text-zinc-200">
              Disponible para freelance y contratación
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-12 max-w-2xl mx-auto">
              Trabajo en remoto para empresas y equipos que necesitan desarrollo web. 
              Si tienes un proyecto con alcance definido o buscas sumar a alguien 
              de forma estable, escríbeme y vemos si hacemos match.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                aria-label="Ir a la página de contacto"
              >
                <span className="text-2xl">💬</span>
                Ir a Página de Contacto
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center max-w-3xl mx-auto">
              <a
                href="mailto:ediloaz@gmail.com"
                className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Enviar un correo electrónico"
              >
                <span className="text-xl">📧</span>
                Email
              </a>
              <a
                href="https://linkedin.com/in/ediloaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Visitar mi perfil de LinkedIn"
              >
                <span className="text-xl">💼</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/ediloaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border-2 border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full hover:bg-zinc-700 hover:text-white dark:hover:bg-zinc-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Visitar mi perfil de GitHub"
              >
                <span className="text-xl">🐙</span>
                GitHub
              </a>
              <a
                href="https://medium.com/@ediloaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Visitar mi perfil de Medium"
              >
                <span className="text-xl">✍️</span>
                Medium
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
