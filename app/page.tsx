import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "TypeScript", icon: "🔷", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "C#", icon: "🔵", category: "Backend" },
    { name: ".NET", icon: "🟣", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "SQL Server", icon: "🗄️", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "HTML5", icon: "🌐", category: "Frontend" },
    { name: "CSS3", icon: "🎨", category: "Frontend" },
  ];

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
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Edisson López
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Inicio
              </Link>
              <Link href="/about-me" className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Sobre Mí
              </Link>
              <Link href="/projects" className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Proyectos
              </Link>
              <Link href="/contact" className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Contacto
              </Link>
              <Link href="/cv" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium">
                Ver CV
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Link href="/projects" className="text-blue-600 dark:text-blue-400 font-medium">
                Menú
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contáctame
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/cv"
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Ver Mi CV
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 bg-white dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-800 dark:text-zinc-200">
            Sobre Mí
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                Soy un desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras. 
                Con experiencia en múltiples lenguajes y frameworks, me especializo en desarrollar 
                aplicaciones web completas desde el frontend hasta el backend.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Mi enfoque se centra en escribir código limpio, mantenible y escalable, siempre 
                buscando las mejores prácticas y las tecnologías más actuales del mercado.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
                Especialidades:
              </h4>
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-zinc-600 dark:text-zinc-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-800 dark:text-zinc-200">
            Tecnologías
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-zinc-200 dark:border-zinc-700"
              >
                <div className="text-3xl mb-3 text-center">{tech.icon}</div>
                <h4 className="font-semibold text-center text-zinc-800 dark:text-zinc-200 mb-2">
                  {tech.name}
                </h4>
                <p className="text-sm text-center text-zinc-500 dark:text-zinc-400">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-800 dark:text-zinc-200">
            Descubre Más
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about-me" className="group">
              <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-500">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👨‍💻</div>
                <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">Sobre Mí</h4>
                <p className="text-zinc-600 dark:text-zinc-400">Conoce más sobre mi trayectoria y experiencia profesional</p>
              </div>
            </Link>

            <Link href="/projects" className="group">
              <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-500">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">Proyectos</h4>
                <p className="text-zinc-600 dark:text-zinc-400">Explora mi portafolio de proyectos y aplicaciones</p>
              </div>
            </Link>

            <Link href="/cv" className="group">
              <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-500">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📄</div>
                <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">Mi CV</h4>
                <p className="text-zinc-600 dark:text-zinc-400">Revisa mi currículum completo y experiencia</p>
              </div>
            </Link>

            <Link href="/contact" className="group">
              <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💬</div>
                <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">Contacto</h4>
                <p className="text-zinc-600 dark:text-zinc-400">¿Tienes una idea? ¡Hablemos!</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-white dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-zinc-800 dark:text-zinc-200">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-12 max-w-2xl mx-auto">
            Estoy siempre interesado en nuevos desafíos y oportunidades de colaboración. 
            ¡Hablemos sobre cómo puedo ayudarte a hacer realidad tu próximo proyecto!
          </p>
          
          <div className="mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span className="text-2xl">💬</span>
              Ir a Página de Contacto
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center max-w-3xl mx-auto">
            <a
              href="mailto:ediloaz@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="text-xl">📧</span>
              Email
            </a>
            <a
              href="https://linkedin.com/in/ediloaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">💼</span>
              LinkedIn
            </a>
            <a
              href="https://github.com/ediloaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border-2 border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full hover:bg-zinc-700 hover:text-white dark:hover:bg-zinc-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">🐙</span>
              GitHub
            </a>
            <a
              href="https://medium.com/@ediloaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">✍️</span>
              Medium
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-zinc-200 dark:border-zinc-700 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-4">Edisson López</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Desarrollador Full Stack especializado en crear soluciones web modernas y escalables.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-4">Navegación</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Inicio
                </Link>
                <Link href="/about-me" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Sobre Mí
                </Link>
                <Link href="/projects" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Proyectos
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-4">Conéctate</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Página de Contacto
                </Link>
                <Link href="/cv" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Ver Mi CV
                </Link>
                <a href="mailto:ediloaz@gmail.com" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Email
                </a>
                <a href="https://linkedin.com/in/ediloaz" target="_blank" rel="noopener noreferrer" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/ediloaz" target="_blank" rel="noopener noreferrer" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  GitHub
                </a>
                <a href="https://medium.com/@ediloaz" target="_blank" rel="noopener noreferrer" className="block text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors">
                  Medium
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              © 2025 Edisson López. Desarrollado con Next.js y Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
