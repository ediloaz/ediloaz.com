import type { BlogPost } from "./blog-types";
import { blogPostsWave2Part1 } from "./blog-posts-wave-2-part1";
import { blogPostsWave2Part2 } from "./blog-posts-wave-2-part2";

export type { BlogPost, BlogCategory } from "./blog-types";
export { blogCategories } from "./blog-types";

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return [];
  return blogPosts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const sameCatA = a.category === current.category ? 1 : 0;
      const sameCatB = b.category === current.category ? 1 : 0;
      return sameCatB - sameCatA || b.publishDate.localeCompare(a.publishDate);
    })
    .slice(0, limit);
}

const card =
  "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/80";
const h2 = "text-2xl font-bold text-zinc-900 dark:text-zinc-100";
const h3 = "text-xl font-semibold text-zinc-800 dark:text-zinc-200";
const p = "text-zinc-600 dark:text-zinc-300 leading-relaxed";
const codeBlock =
  "overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-950 p-4 text-sm text-zinc-100 dark:border-zinc-600";

const blogPostsCore: BlogPost[] = [
  {
    slug: "la-trampa-del-ego-tecnico-de-senior-a-arquitecto-real",
    title: "La Trampa del Ego Técnico: De Senior a Arquitecto Real",
    description:
      "Del micro-foco en código perfecto al macro-foco en negocio: cómo un arquitecto evita la burocracia que paraliza equipos y gestiona la deuda técnica con criterio.",
    seoDescription:
      "Reflexión sobre la transición de senior a arquitecto: alineamiento de negocio, capas excesivas, velocidad de entrega y deuda técnica estratégica.",
    publishDate: "2026-03-12",
    category: "arquitectura",
    tags: ["arquitectura", "liderazgo técnico", "deuda técnica", "producto"],
    readingTime: 9,
    content: (
      <div className="space-y-8">
        <div className={card}>
          <p className={p}>
            Muchos seniors brillan optimizando detalles: abstracciones elegantes, patrones impecables,
            debates infinitos sobre “la forma correcta”. Eso es útil… hasta que el negocio necesita
            <strong> entregar valor</strong> y el equipo queda atrapado en ceremonias técnicas que no
            mejoran el resultado para el usuario ni para la empresa.
          </p>
        </div>

        <figure className={`${card} overflow-hidden`}>
          <figcaption className={`mb-4 ${h3}`}>Micro-foco vs macro-foco</figcaption>
          <svg viewBox="0 0 640 220" className="h-auto w-full" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#9333ea" stopOpacity="0.35" />
              </linearGradient>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#22c55e" />
              </marker>
            </defs>
            <rect x="20" y="24" width="280" height="170" rx="12" fill="url(#g1)" stroke="#64748b" strokeWidth="1.5" />
            <text x="160" y="55" textAnchor="middle" className="fill-zinc-700 text-[13px] font-bold dark:fill-zinc-200" style={{ fontFamily: "system-ui" }}>
              Micro-foco
            </text>
            <text x="160" y="85" textAnchor="middle" className="fill-zinc-600 text-[11px] dark:fill-zinc-400" style={{ fontFamily: "system-ui" }}>
              Perfección local
            </text>
            <text x="160" y="108" textAnchor="middle" className="fill-zinc-600 text-[11px] dark:fill-zinc-400" style={{ fontFamily: "system-ui" }}>
              Capas, patrones, debates
            </text>
            <circle cx="120" cy="150" r="8" fill="#3b82f6" />
            <circle cx="160" cy="150" r="8" fill="#6366f1" />
            <circle cx="200" cy="150" r="8" fill="#8b5cf6" />
            <rect x="340" y="24" width="280" height="170" rx="12" fill="rgba(34,197,94,0.12)" stroke="#22c55e" strokeWidth="1.5" />
            <text x="480" y="55" textAnchor="middle" className="fill-zinc-700 text-[13px] font-bold dark:fill-zinc-200" style={{ fontFamily: "system-ui" }}>
              Macro-foco
            </text>
            <text x="480" y="85" textAnchor="middle" className="fill-zinc-600 text-[11px] dark:fill-zinc-400" style={{ fontFamily: "system-ui" }}>
              Alineamiento con negocio
            </text>
            <text x="480" y="108" textAnchor="middle" className="fill-zinc-600 text-[11px] dark:fill-zinc-400" style={{ fontFamily: "system-ui" }}>
              Entrega, riesgo, supervivencia
            </text>
            <path d="M 400 150 L 440 150" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arr)" />
          </svg>
          <p className={`mt-4 text-sm ${p}`}>
            El arquitecto real no renuncia a la calidad: redistribuye la atención donde más importa.
          </p>
        </figure>

        <div className={card}>
          <h2 className={`${h2} mb-4`}>La burocracia disfrazada de “buenas prácticas”</h2>
          <p className={`${p} mb-4`}>
            Arquitecturas de capas excesivas, procesos de aprobación para cada cambio, o estándares que
            nadie cuestiona pueden <strong>paralizar al equipo</strong>. No es accidental: a veces
            protegen el ego (“así siempre lo hicimos”) más que el producto.
          </p>
          <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-300">
            <li>Cada capa nueva es costo cognitivo y tiempo de ciclo.</li>
            <li>Si “subir un cambio” tarda días, la innovación muere en el camino.</li>
            <li>La consistencia importa, pero no al precio de no poder reaccionar al mercado.</li>
          </ul>
        </div>

        <div className={card}>
          <h2 className={`${h2} mb-4`}>Deuda técnica como palanca, no como pecado</h2>
          <p className={`${p} mb-4`}>
            Toda organización tiene deuda técnica. La diferencia está en{" "}
            <strong>documentar decisiones</strong>, medir impacto y pagar la deuda cuando el riesgo
            supera el beneficio de posponerla.
          </p>
          <pre className={codeBlock}>
            <code>{`// Ejemplo: decisión explícita (ADR resumido)
// Contexto: lanzamiento de MVP en 4 semanas
// Decisión: persistir en JSON plano + validación manual
// Consecuencia: deuda CONOCIDA — migrar a DB relacional si > 1k usuarios activos
// Revisión: fecha X o métrica Y`}</code>
          </pre>
        </div>

        <div className={`${card} border-blue-200 bg-blue-50/80 dark:border-blue-900/50 dark:bg-blue-950/30`}>
          <h3 className={`${h3} mb-3`}>Checklist honesto</h3>
          <ol className="list-inside list-decimal space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>¿Este diseño acelera entregas en las próximas 2–4 semanas?</li>
            <li>¿El equipo entiende el “por qué” sin un diagrama de 40 cajas?</li>
            <li>¿Podemos revertir o iterar sin un proyecto de migración de 6 meses?</li>
          </ol>
        </div>

        <p className={p}>
          Ser arquitecto real es aceptar trade-offs en voz alta, empoderar al equipo y usar la
          tecnología al servicio del producto — no al revés.
        </p>
      </div>
    ),
  },
  {
    slug: "eliminando-el-frankenstein-visual-con-mobile-first",
    title: 'Eliminando el "Frankenstein Visual" con Mobile-First',
    description:
      "Design tokens y mobile-first para evitar interfaces inconsistentes: bordes, sombras y radios mezclados que fatigan al usuario y al equipo.",
    seoDescription:
      "Mobile-first, design tokens y sistema de diseño: cómo reducir carga cognitiva y evitar parches visuales desordenados en aplicaciones web.",
    publishDate: "2026-02-28",
    category: "frontend",
    tags: ["design tokens", "mobile-first", "UI", "sistemas de diseño"],
    readingTime: 8,
    content: (
      <div className="space-y-8">
        <div className={card}>
          <p className={p}>
            Cuando cada pantalla introduce un nuevo radio de borde, una sombra distinta o tipografías
            improvisadas, nace el <strong>Frankenstein visual</strong>: la app “funciona”, pero
            transmite desorden. Eso aumenta la carga cognitiva: el usuario no sabe qué es clickeable,
            qué es decorativo o qué es error.
          </p>
        </div>

        <figure className={card}>
          <figcaption className={`mb-4 ${h3}`}>De parches sueltos a escala coherente</figcaption>
          <svg viewBox="0 0 640 200" className="h-auto w-full" aria-hidden>
            <text x="80" y="28" className="fill-zinc-500 text-[11px]" textAnchor="middle">
              Antes
            </text>
            <rect x="20" y="40" width="120" height="56" rx="4" fill="#e2e8f0" stroke="#94a3b8" />
            <rect x="30" y="110" width="100" height="40" rx="16" fill="#cbd5e1" stroke="#64748b" />
            <rect x="45" y="160" width="70" height="28" rx="2" fill="#94a3b8" />
            <text x="320" y="28" className="fill-zinc-500 text-[11px]" textAnchor="middle">
              Con tokens
            </text>
            <rect x="260" y="40" width="120" height="56" rx="8" fill="#dbeafe" stroke="#3b82f6" />
            <rect x="400" y="40" width="120" height="56" rx="8" fill="#dbeafe" stroke="#3b82f6" />
            <rect x="260" y="110" width="120" height="40" rx="8" fill="#eff6ff" stroke="#60a5fa" />
            <rect x="400" y="110" width="120" height="40" rx="8" fill="#eff6ff" stroke="#60a5fa" />
            <text x="320" y="192" textAnchor="middle" className="fill-zinc-600 text-[11px]" style={{ fontFamily: "system-ui" }}>
              Misma familia: radius, color, sombra
            </text>
          </svg>
        </figure>

        <div className={card}>
          <h2 className={`${h2} mb-4`}>Mobile-first no es “solo móvil”</h2>
          <p className={`${p} mb-4`}>
            Es priorizar restricciones reales primero: viewport estrecho, interacción táctil, rendimiento.
            Luego se amplía con <strong>media queries</strong> y composición, no al revés (desktop-first
            suele dejar hacks en CSS para encoger lo que ya se infló).
          </p>
          <pre className={codeBlock}>
            <code>{`/* Base = móvil: una columna, espaciado compacto */
.card {
  padding: var(--space-3);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

@media (min-width: 768px) {
  .card {
    padding: var(--space-5);
    box-shadow: var(--shadow-md);
  }
}`}</code>
          </pre>
        </div>

        <div className={card}>
          <h2 className={`${h2} mb-4`}>Design tokens: el contrato visual</h2>
          <p className={`${p} mb-4`}>
            Los tokens son variables semánticas (<code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">color.border.subtle</code>
            , <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">radius.button</code>) que el equipo
            reutiliza en código y en Figma. Así se evita que cada desarrollador invente un gris nuevo.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-600">
              <p className="text-xs font-semibold uppercase text-zinc-500">radius.sm</p>
              <div className="mt-2 h-12 rounded-sm bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>
            <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-600">
              <p className="text-xs font-semibold uppercase text-zinc-500">radius.lg</p>
              <div className="mt-2 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>
          </div>
        </div>

        <blockquote className={`border-l-4 border-purple-500 pl-4 italic text-zinc-600 dark:text-zinc-400`}>
          La consistencia no es aburrimiento: es señal de que el producto fue pensado, no ensamblado con
          sobras.
        </blockquote>
      </div>
    ),
  },
  {
    slug: "developer-experience-dx-el-codigo-como-herramienta-de-onboarding",
    title: "Developer Experience (DX): El Código como Herramienta de Onboarding",
    description:
      "Arquitectura y code reviews como aceleradores: un sistema bueno hace productivo al nuevo en días, no en meses — automatizando lo trivial y quitando abstracciones innecesarias.",
    seoDescription:
      "DX y onboarding: repositorio claro, revisiones útiles, automatización y menos complejidad accidental para que el equipo resuelva problemas reales.",
    publishDate: "2026-01-18",
    category: "cultura",
    tags: ["DX", "onboarding", "code review", "automatización"],
    readingTime: 8,
    content: (
      <div className="space-y-8">
        <div className={card}>
          <p className={p}>
            La mejor arquitectura no es la más sofisticada: es la que permite que una persona nueva
            entienda el flujo, ejecute el proyecto y haga su primer PR útil{" "}
            <strong>sin mapas mentales de tres pizarras</strong>.
          </p>
        </div>

        <figure className={`${card}`}>
          <figcaption className={`${h3} mb-4`}>Flujo ideal de onboarding</figcaption>
          <svg viewBox="0 0 640 120" className="h-auto w-full" aria-hidden>
            <rect x="10" y="30" width="100" height="44" rx="8" fill="#dbeafe" stroke="#2563eb" />
            <text x="60" y="56" textAnchor="middle" className="fill-zinc-800 text-[10px] font-medium" style={{ fontFamily: "system-ui" }}>
              Clone
            </text>
            <path d="M 115 52 L 135 52" stroke="#64748b" strokeWidth="2" />
            <rect x="140" y="30" width="100" height="44" rx="8" fill="#e0e7ff" stroke="#4f46e5" />
            <text x="190" y="56" textAnchor="middle" className="fill-zinc-800 text-[10px] font-medium" style={{ fontFamily: "system-ui" }}>
              pnpm i
            </text>
            <path d="M 245 52 L 265 52" stroke="#64748b" strokeWidth="2" />
            <rect x="270" y="30" width="100" height="44" rx="8" fill="#ede9fe" stroke="#7c3aed" />
            <text x="320" y="56" textAnchor="middle" className="fill-zinc-800 text-[10px] font-medium" style={{ fontFamily: "system-ui" }}>
              dev up
            </text>
            <path d="M 375 52 L 395 52" stroke="#64748b" strokeWidth="2" />
            <rect x="400" y="30" width="100" height="44" rx="8" fill="#d1fae5" stroke="#059669" />
            <text x="450" y="52" textAnchor="middle" className="fill-zinc-800 text-[9px] font-medium" style={{ fontFamily: "system-ui" }}>
              1er PR
            </text>
            <text x="450" y="64" textAnchor="middle" className="fill-zinc-800 text-[9px] font-medium" style={{ fontFamily: "system-ui" }}>
              (valor)
            </text>
            <path d="M 505 52 L 525 52" stroke="#64748b" strokeWidth="2" />
            <rect x="530" y="30" width="100" height="44" rx="8" fill="#fce7f3" stroke="#db2777" />
            <text x="580" y="56" textAnchor="middle" className="fill-zinc-800 text-[10px] font-medium" style={{ fontFamily: "system-ui" }}>
              feedback
            </text>
          </svg>
        </figure>

        <div className={card}>
          <h2 className={`${h2} mb-4`}>Code review: enseñar, no exhibir</h2>
          <p className={`${p} mb-4`}>
            Un review que solo apunta superioridad manda la señal equivocada. Lo útil combina estándares
            claros, sugerencias concretas y contexto de negocio. El objetivo es{" "}
            <strong>subir la mediana del equipo</strong>, no ganar debates.
          </p>
          <pre className={codeBlock}>
            <code>{`// Comentario poco útil:
// "Esto está mal."

// Comentario con DX positiva:
// "Aquí duplicamos validación; ya existe useUserForm() en features/user.
//  Te dejo link al test de ejemplo: __tests__/user-form.test.tsx"`}</code>
          </pre>
        </div>

        <div className={card}>
          <h2 className={`${h2} mb-4`}>Automatizar lo trivial</h2>
          <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-300">
            <li>Formato y lint en pre-commit o CI — la discusión de comillas ya está resuelta.</li>
            <li>Plantillas de PR y checklist mínimo (qué probé, riesgos, screenshots).</li>
            <li>Scripts documentados: <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">make dev</code> o{" "}
            <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">pnpm dev</code> deben bastar.</li>
          </ul>
        </div>

        <div className={`${card} border-emerald-200 bg-emerald-50/60 dark:border-emerald-900/40 dark:bg-emerald-950/20`}>
          <h3 className={`${h3} mb-3`}>Señal de un DX sano</h3>
          <p className={p}>
            Un desarrollador nuevo puede seguir el hilo desde el ticket hasta el código, correr tests
            localmente y proponer un arreglo pequeño en poco tiempo. Si eso tarda semanas, el problema
            rara vez es “falta de talento”: suele ser <strong>complejidad accidental</strong> acumulada.
          </p>
        </div>
      </div>
    ),
  },
];

export const blogPosts: BlogPost[] = [
  ...blogPostsCore,
  ...blogPostsWave2Part1,
  ...blogPostsWave2Part2,
];
