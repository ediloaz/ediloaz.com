import Image from "next/image";

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
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4">
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
            <a
              href="#contacto"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contáctame
            </a>
            <a
              href="#proyectos"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Ver Proyectos
            </a>
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:ediloaz@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">📧</span>
              Email
            </a>
            <a
              href="https://linkedin.com/in/ediloaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <span className="text-xl">💼</span>
              LinkedIn
            </a>
            <a
              href="https://github.com/ediloaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border-2 border-zinc-600 text-zinc-600 dark:text-zinc-400 rounded-full hover:bg-zinc-600 hover:text-white transition-all duration-300"
            >
              <span className="text-xl">🐙</span>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-200 dark:border-zinc-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            © 2025 Edisson López. Desarrollado con Next.js y Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
