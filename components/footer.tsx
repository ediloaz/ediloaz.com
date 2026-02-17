import Link from "next/link";

export default function Footer() {
  return (
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
              <Link 
                href="/" 
                className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                Inicio
              </Link>
              <Link 
                href="/about-me" 
                className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                Sobre Mí
              </Link>
              <Link 
                href="/projects" 
                className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                Proyectos
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-4">Conéctate</h4>
            <div className="space-y-2">
              <Link 
                href="/contact" 
                className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                Página de Contacto
              </Link>
              <Link 
                href="/cv" 
                className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                Ver Mi CV
              </Link>
              <a 
                href="mailto:ediloaz@gmail.com" 
                className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/ediloaz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/ediloaz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://medium.com/@ediloaz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            © {new Date().getFullYear()} Ingeniero Edisson López
          </p>
        </div>
      </div>
    </footer>
  );
}

