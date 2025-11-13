import PageLayout from "@/components/page-layout";

export default function Contact() {
  return (
    <PageLayout>
      <section className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Contacto
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-12">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy siempre interesado en nuevos desafíos y oportunidades de colaboración.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Información de Contacto */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-4">
                <a 
                  href="mailto:ediloaz@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <span className="text-3xl">📧</span>
                  <div>
                    <p className="font-semibold text-zinc-800 dark:text-zinc-200">Email</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">ediloaz@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/ediloaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <span className="text-3xl">💼</span>
                  <div>
                    <p className="font-semibold text-zinc-800 dark:text-zinc-200">LinkedIn</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">linkedin.com/in/ediloaz</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/ediloaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <span className="text-3xl">🐙</span>
                  <div>
                    <p className="font-semibold text-zinc-800 dark:text-zinc-200">GitHub</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">github.com/ediloaz</p>
                  </div>
                </a>

                <a 
                  href="https://medium.com/@ediloaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <span className="text-3xl">✍️</span>
                  <div>
                    <p className="font-semibold text-zinc-800 dark:text-zinc-200">Medium</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">medium.com/@ediloaz</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6">
                Envíame un Mensaje
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
