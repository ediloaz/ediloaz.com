import type { BlogPost } from "./blog-types";
import {
  blogCallout,
  blogCard,
  blogCodeBlock,
  blogH2,
  blogH3,
  blogMuted,
  blogP,
} from "./blog-content-styles";

const c = blogCard;
const h2 = blogH2;
const h3 = blogH3;
const p = blogP;
const code = blogCodeBlock;

export const blogPostsWave2Part2: BlogPost[] = [
  {
    slug: "posgrado-una-materia-maestria-computacion-startup",
    title: 'El Posgrado de "Una Materia": Estrategia de Crecimiento Sostenible',
    description:
      "Volver a la maestría en ciencias de la computación con carga mínima mientras corres una startup: por qué la constancia vence a la intensidad cuando buscas profundidad técnica real.",
    seoDescription:
      "Maestría en computación y trabajo a tiempo completo: educación continua, una materia por periodo, gestión del tiempo y aprendizaje profundo vs burn-out en Costa Rica.",
    keywords: [
      "maestría ciencias computación",
      "estudiar trabajando full time",
      "educación continua desarrolladores",
      "startup y posgrado",
      "aprendizaje sostenible",
    ],
    publishDate: "2026-02-10",
    category: "carrera",
    tags: ["maestría", "educación", "startup", "gestión del tiempo"],
    readingTime: 22,
    content: (
      <div className="space-y-10">
        <section className={c}>
          <p className={p}>
            El relato heroico del “hago la maestría completa en un año mientras lanzo producto” vende cursos,
            pero en la vida real suele terminar en <strong>burn-out</strong> o en títulos sin comprensión
            profunda. Un enfoque más honesto —especialmente si ya tienes responsabilidades en una{" "}
            <strong>startup</strong> o rol senior— es el <strong>posgrado de una materia</strong>: avanzar
            con ritmo sostenible, proteger sueño y foco, y aceptar que el calendario se estira si la prioridad
            es aprender bien, no acumular créditos.
          </p>
          <p className={`${p} mt-4`}>
            No es conformismo: es reconocer que la <strong>profundidad técnica</strong> se parece más a
            entrenar fuerza que a un sprint de hackathon. Las neuronas necesitan repetición, descanso y
            espacio para conectar ideas — algo escaso cuando intentas demasiadas cosas “al máximo” a la vez.
          </p>
        </section>

        <figure className={`${c} overflow-hidden`}>
          <figcaption className={`${h3} mb-4`}>Intensidad vs constancia (simplificado)</figcaption>
          <svg viewBox="0 0 700 200" className="h-auto w-full" aria-hidden>
            <path
              d="M 40 160 Q 180 40 360 120 T 660 80"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              strokeDasharray="6 4"
            />
            <text x="200" y="35" className="fill-red-600 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Pico de carga — riesgo de abandono
            </text>
            <path d="M 40 170 L 660 120" fill="none" stroke="#22c55e" strokeWidth="3" />
            <text x="420" y="105" className="fill-emerald-700 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Curva baja pero sostenida
            </text>
          </svg>
          <p className={`${blogMuted} mt-3`}>
            La meta es mantener energía cognitiva para el trabajo y para el estudio, sin sacrificar lo que
            hace insostenible el plan (salud, familia, calidad del código en el empleo).
          </p>
        </figure>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Por qué “una materia” puede ser más productiva</h2>
          <p className={p}>
            Con una sola asignatura puedes hacer <strong>lectura primaria</strong> (papers, libros de
            texto), practicar ejercicios y enlazar conceptos con problemas reales de tu trabajo. Dividir
            atención entre tres cursos suele reducir todo a supervivencia: apruebas, pero no integras. En
            ciencias de la computación, donde los fundamentos se encadenan (álgebra lineal → optimización,
            lógica → verificación), la integración es el retorno real del posgrado.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Negociación con tu rol actual</h2>
          <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-300">
            <li>
              <strong>Transparencia:</strong> comunicar horarios bloqueados para clases o evaluaciones evita
              conflictos con releases imprevistos.
            </li>
            <li>
              <strong>Alineación:</strong> si tu tesis o proyectos pueden relacionarse con el producto,
              ganas doble: valor académico y valor laboral.
            </li>
            <li>
              <strong>Límites:</strong> decir “no” a tareas voluntarias no es falta de compromiso; es reservar
              capacidad para el compromiso que asumiste con tu educación.
            </li>
          </ul>
        </section>

        <section className={blogCallout}>
          <h3 className={`${h3} mb-3`}>Argumento central</h3>
          <p className={p}>
            La constancia supera la intensidad cuando el horizonte es de años. Un plan modesto que puedes
            sostener vence a un plan ambicioso que abandonas a mitad de camino — y el mercado valora
            persistencia casi tanto como picos de productividad.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>SEO personal: tu historia cuenta</h2>
          <p className={p}>
            Documentar públicamente (blog, charlas locales, posts en LinkedIn) lo que aprendes refuerza tu
            marca profesional y ayuda a otros en LATAM a visualizar trayectorias no lineales. Usa palabras
            clave honestas: “maestría trabajando”, “estudios part-time ingeniería”, sin prometer fórmulas
            mágicas.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Micro-hábitos que sostienen el ritmo académico</h2>
          <p className={p}>
            Bloquea en el calendario sesiones cortas pero innegociables: revisión de notas el mismo día de
            clase, 25 minutos de problemas antes del trabajo, o una lectura de paper los domingos. El truco no
            es “más horas”: es <strong>menos fricción</strong> para empezar. Si tu entorno de estudio está a
            un clic —PDFs sincronizados, anotaciones en un solo lugar— reduces la procrastinación que mata
            los planes ambiciosos.
          </p>
          <p className={`${p} mt-4`}>
            Habla con tu mentor o profesor sobre expectativas reales: muchos programas permiten ajustar
            entregables cuando el estudiante trabaja full time, siempre que la comunicación sea temprana y
            profesional. Eso no es pedir favores: es gestión de riesgos educativo, igual que harías con un
            stakeholder de producto.
          </p>
        </section>
      </div>
    ),
  },

  {
    slug: "mobile-first-supervivencia-startups-design-tokens",
    title: "Mobile-First como Estrategia de Supervivencia en Startups",
    description:
      "Más allá del diseño: priorizar lo esencial en pantallas pequeñas obliga a recortar lo accesorio; los design tokens desde el día uno evitan reconstrucciones caras.",
    seoDescription:
      "Mobile-first en startups: priorización de features, design tokens, costo de refactor UI, rendimiento y por qué el sistema de diseño temprano ahorra dinero y tiempo.",
    keywords: [
      "mobile first startups",
      "design tokens",
      "priorización producto",
      "refactor UI costo",
      "sistema de diseño",
      "Costa Rica startups tech",
    ],
    publishDate: "2026-01-30",
    category: "frontend",
    tags: ["mobile-first", "design tokens", "startups", "producto"],
    readingTime: 23,
    content: (
      <div className="space-y-10">
        <section className={c}>
          <p className={p}>
            En una <strong>startup</strong> con presupuesto finito, el enemigo silencioso es la{" "}
            <strong>dispersión</strong>: demasiadas features medianas que nadie ama del todo. La filosofía{" "}
            <strong>mobile-first</strong> fuerza un criterio brutal: si no cabe claro en una pantalla pequeña,
            probablemente no es esencial todavía. Eso no es estética: es supervivencia — cada componente extra
            es deuda de mantenimiento, soporte y diseño.
          </p>
        </section>

        <figure className={`${c} overflow-hidden`}>
          <figcaption className={`${h3} mb-4`}>Pirámide de prioridad (móvil primero)</figcaption>
          <svg viewBox="0 0 640 220" className="h-auto w-full" aria-hidden>
            <polygon points="320,20 120,200 520,200" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
            <text x="320" y="100" textAnchor="middle" className="fill-blue-900 text-[11px] font-bold" style={{ fontFamily: "system-ui" }}>
              Flujo crítico
            </text>
            <text x="320" y="125" textAnchor="middle" className="fill-blue-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              reserva · pago · confirmación
            </text>
            <polygon points="320,55 160,200 480,200" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1" opacity="0.85" />
            <text x="320" y="165" textAnchor="middle" className="fill-indigo-900 text-[9px]" style={{ fontFamily: "system-ui" }}>
              Nice-to-have más abajo
            </text>
          </svg>
        </figure>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Design tokens desde el día uno: ahorro, no lujo</h2>
          <p className={p}>
            Definir <strong>tokens</strong> (color, espacio, radio, tipografía) al inicio evita que cada
            pantalla invente valores sueltos. Cuando el producto crece, no necesitas una “gran refactorización
            visual” tan seguida: cambias tokens y propagas consistencia. Eso es dinero: menos horas de QA
            visual, menos discusiones en Figma, menos CSS basura.
          </p>
          <p className={`${p} mt-4`}>
            En equipos pequeños en <strong>Costa Rica</strong> y la región, donde a veces una persona mezcla
            frontend y diseño, los tokens son tu documentación viva: la máquina y el humano comparten el mismo
            vocabulario.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Ejemplo mínimo de tokens (CSS)</h2>
          <pre className={code}>
            <code>{`:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --radius-pill: 9999px;
  --radius-card: 12px;
  --color-fg: #0f172a;
  --color-bg: #ffffff;
  --color-brand: #2563eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-fg: #f8fafc;
    --color-bg: #020617;
  }
}`}</code>
          </pre>
        </section>

        <section className={blogCallout}>
          <h3 className={`${h3} mb-3`}>Lo que mobile-first no es</h3>
          <p className={p}>
            No es “solo hacemos app y el desktop es segundo ciudadano para siempre”. Es comenzar por la
            restricción más dura para no inflar el alcance, y luego <strong>expandir</strong> con datos de uso
            reales: si el 70% de ingresos viene de escritorio, el roadmap debe reflejarlo en su momento.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Rendimiento como argumento de negocio</h2>
          <p className={p}>
            En móvil, cada kilobyte cuenta: imágenes pesadas, fuentes innecesarias y JS bloqueante destruyen
            conversión antes de que alguien lea tu value proposition. Instrumenta Web Vitals desde el MVP y
            comparte dashboards con producto. Cuando el debate es “¿feature o performance?”, los datos te dan un
            idioma común — y el enfoque mobile-first te recuerda que el usuario real no siempre está en Wi-Fi
            de oficina.
          </p>
        </section>
      </div>
    ),
  },

  {
    slug: "liderazgo-silencioso-proponer-ideas-con-respeto",
    title: "Liderazgo Silencioso: Cómo Proponer Ideas con Respeto",
    description:
      "Comunicación asertiva en ingeniería: introducir innovación o cambios técnicos validando el trabajo previo, reduciendo fricción y construyendo confianza.",
    seoDescription:
      "Liderazgo en equipos de software: proponer cambios técnicos sin humillar código legado, validación emocional, asertividad y patrones de conversación para evolucionar la arquitectura.",
    keywords: [
      "liderazgo ingeniería software",
      "comunicación asertiva equipos tech",
      "proponer refactor sin fricción",
      "cultura engineering",
      "feedback técnico respetuoso",
    ],
    publishDate: "2026-01-14",
    category: "cultura",
    tags: ["liderazgo", "comunicación", "cultura", "equipo"],
    readingTime: 21,
    content: (
      <div className="space-y-10">
        <section className={c}>
          <p className={p}>
            El estereotipo del genio que “entra y arregla todo” puede inspirar películas, pero en equipos reales
            destruye <strong>confianza</strong>. Las ideas nuevas —un framework, un patrón, un cambio de
            infraestructura— se adoptan mejor cuando quien propone demuestra que entiende <em>por qué</em>{" "}
            el sistema actual existe y qué problema resolvía ayer. Eso es <strong>liderazgo silencioso</strong>:
            influencia sin humillar, autoridad sin gritar.
          </p>
        </section>

        <figure className={`${c} overflow-hidden`}>
          <figcaption className={`${h3} mb-4`}>Validar → Contextualizar → Proponer</figcaption>
          <svg viewBox="0 0 700 160" className="h-auto w-full" aria-hidden>
            <rect x="30" y="40" width="180" height="80" rx="10" fill="#ecfdf5" stroke="#059669" />
            <text x="120" y="78" textAnchor="middle" className="fill-emerald-900 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              1. Validar esfuerzo
            </text>
            <text x="120" y="98" textAnchor="middle" className="fill-emerald-800 text-[8px]" style={{ fontFamily: "system-ui" }}>
              “Esto funcionó en su contexto”
            </text>
            <path d="M 215 80 L 255 80" stroke="#64748b" strokeWidth="2" />
            <rect x="260" y="40" width="180" height="80" rx="10" fill="#eff6ff" stroke="#2563eb" />
            <text x="350" y="78" textAnchor="middle" className="fill-blue-900 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              2. Contexto actual
            </text>
            <text x="350" y="98" textAnchor="middle" className="fill-blue-800 text-[8px]" style={{ fontFamily: "system-ui" }}>
              carga · riesgo · métricas
            </text>
            <path d="M 445 80 L 485 80" stroke="#64748b" strokeWidth="2" />
            <rect x="490" y="40" width="180" height="80" rx="10" fill="#faf5ff" stroke="#9333ea" />
            <text x="580" y="78" textAnchor="middle" className="fill-violet-900 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              3. Propuesta medible
            </text>
            <text x="580" y="98" textAnchor="middle" className="fill-violet-800 text-[8px]" style={{ fontFamily: "system-ui" }}>
              plan incremental
            </text>
          </svg>
        </figure>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Anti-patrones que matan la innovación</h2>
          <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-300">
            <li>
              <strong>Burlarse del código ajeno</strong> en canales públicos: genera defensividad y pierdes
              aliados.
            </li>
            <li>
              <strong>Reescritura como única opción</strong> sin estimación de riesgo ni plan de migración.
            </li>
            <li>
              <strong>Jerga de superioridad</strong> que excluye a quienes no conocen el término de moda.
            </li>
          </ul>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Plantilla mental para un mensaje difícil</h2>
          <pre className={code}>
            <code>{`1) Reconocimiento: "Gracias por el esfuerzo en X; resolvió Y cuando Z."
2) Datos: "Hoy vemos latencia p95 en W por causa V (gráfico/link)."
3) Propuesta: "Propongo A en dos iteraciones: (i) … (ii) …"
4) Pedido: "¿Te parece si prototipamos esta semana y medimos?"`}</code>
          </pre>
        </section>

        <section className={blogCallout}>
          <h3 className={`${h3} mb-3`}>Por qué importa al SEO de tu carrera</h3>
          <p className={p}>
            Equipos donde la gente puede hablar sin miedo retienen talento — y los proyectos con menos miedo
            suelen documentar mejor, desplegar mejor y aprender más rápido. El respeto no es “suavizar la
            verdad”: es <strong>empaquetar la verdad</strong> para que se pueda escuchar.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Cuando la resistencia no es tóxica, es señal</h2>
          <p className={p}>
            A veces tu idea choca con restricciones que desconocías: compliance, acuerdos con clientes,
            deuda contractual con un proveedor. En lugar de interpretar la fricción como sabotaje, conviértela
            en datos. Pregunta “¿qué evidencia cambiaría tu opinión?” y ofrece experimentos acotados. El
            liderazgo silencioso no evita conflictos: los canaliza hacia aprendizaje mutuo.
          </p>
        </section>
      </div>
    ),
  },

  {
    slug: "aws-cloud-practitioner-vs-realidad-produccion-startups",
    title: 'AWS Practitioner vs. La Realidad de los "Fierros"',
    description:
      "La certificación cubre vocabulario y buenas prácticas; producción añade caos real: redes, IAM, costos e incidentes. Comparativa honesta para desarrolladores en startups.",
    seoDescription:
      "AWS Cloud Practitioner frente a problemas reales en producción: límites de la certificación, observabilidad, incidentes, costos y qué estudiar después para startups en la nube.",
    keywords: [
      "AWS Cloud Practitioner",
      "certificación AWS útil",
      "producción vs teoría cloud",
      "startups AWS",
      "observabilidad incidentes",
      "FinOps básico",
    ],
    publishDate: "2026-01-05",
    category: "cloud",
    tags: ["AWS", "cloud", "producción", "SRE"],
    readingTime: 23,
    content: (
      <div className="space-y-10">
        <section className={c}>
          <p className={p}>
            <strong>AWS Cloud Practitioner</strong> es una puerta excelente al vocabulario de la nube: modelos
            de responsabilidad compartida, servicios con nombre, conceptos de precio a alto nivel. Pero la
            nube real —los <em>fierros</em> metafóricos: cables lógicos, políticas IAM enmarañadas, picos de
            facturación sorpresa— rara vez pregunta con amabilidad si estudiaste el glosario. Este artículo
            contrasta <strong>teoría de certificación</strong> con <strong>operación en startup</strong>, sin
            menospreciar el estudio formal: solo ubicarlo.
          </p>
        </section>

        <figure className={`${c} overflow-hidden`}>
          <figcaption className={`${h3} mb-4`}>Certificación ↔ Producción (no 1:1)</figcaption>
          <svg viewBox="0 0 720 200" className="h-auto w-full" aria-hidden>
            <rect x="40" y="35" width="300" height="130" rx="12" fill="#fff7ed" stroke="#ea580c" />
            <text x="190" y="70" textAnchor="middle" className="fill-orange-900 text-[11px] font-bold" style={{ fontFamily: "system-ui" }}>
              Examen
            </text>
            <text x="190" y="95" textAnchor="middle" className="fill-orange-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              definiciones · billing básico · servicios
            </text>
            <text x="190" y="120" textAnchor="middle" className="fill-orange-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              escenario idealizado
            </text>
            <path d="M 360 100 L 400 100" stroke="#64748b" strokeWidth="2" />
            <rect x="410" y="35" width="270" height="130" rx="12" fill="#f0fdf4" stroke="#16a34a" />
            <text x="545" y="70" textAnchor="middle" className="fill-green-900 text-[11px] font-bold" style={{ fontFamily: "system-ui" }}>
              Producción
            </text>
            <text x="545" y="95" textAnchor="middle" className="fill-green-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              IAM · redes · throttling · 3 a.m.
            </text>
            <text x="545" y="120" textAnchor="middle" className="fill-green-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              costos · postmortems
            </text>
          </svg>
        </figure>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Qué la certificación no simula</h2>
          <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-300">
            <li>
              <strong>Incidentes en cadena:</strong> cuando cae RDS y el fallback no existía porque “lo
              agregamos después”.
            </li>
            <li>
              <strong>IAM least privilege real:</strong> políticas que se acumulan durante años.
            </li>
            <li>
              <strong>FinOps:</strong> etiquetado, presupuestos, alarmas de gasto — tema de supervivencia en
              startups.
            </li>
          </ul>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Qué hacer después del Practitioner</h2>
          <p className={`${p} mb-4`}>
            Laboratorio: VPC pequeña, despliegue de una app con logs centralizados, rotación de secretos,
            prueba de restore de backup. Mide todo: eso es la brújula que el examen no sustituye.
          </p>
          <pre className={code}>
            <code>{`// Preguntas que deberías poder responder en tu cuenta real:
// - ¿Dónde están los logs de este servicio y qué retención tienen?
// - ¿Quién puede asumir este rol IAM y desde dónde?
// - ¿Cuánto costó ayer el recurso X y qué etiqueta lo identifica?
// - ¿Cuál es el plan de rollback del último deploy?`}</code>
          </pre>
          <p className={`${blogMuted} mt-3`}>
            Si Practitioner te abrió la puerta, la práctica con incidentes simulados (game days) es el
            siguiente escalón — especialmente si tu empresa no tiene SRE dedicado.
          </p>
        </section>

        <section className={blogCallout}>
          <h3 className={`${h3} mb-3`}>Conclusión equilibrada</h3>
          <p className={p}>
            La certificación es mapa, no terreno. Úsala para orientarte; usa producción disciplinada para
            aprender el paisaje. Ambas cosas, combinadas, son lo que prepara a un desarrollador para el
            caos elegante de la vida real en la nube.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Tabla de brechas típicas post-Practitioner</h2>
          <p className={`${p} mb-4`}>
            Usa esta lista como checklist honesto de madurez — no para avergonzar, sino para priorizar
            aprendizaje en el trabajo:
          </p>
          <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-300">
            <li>
              <strong>Redes:</strong> entender subredes privadas, security groups y rutas cuando algo “no
              alcanza” un endpoint interno.
            </li>
            <li>
              <strong>Datos:</strong> backups probados, restauración parcial, encriptación en reposo y en
              tránsito con claves rotadas.
            </li>
            <li>
              <strong>Operación:</strong> runbooks, alertas accionables y rotación de guardias — no solo
              dashboards bonitos.
            </li>
          </ul>
        </section>
      </div>
    ),
  },

  {
    slug: "documentacion-como-producto-readme-onboarding",
    title: "Documentación como Producto: El README que nadie lee",
    description:
      "Tratar docs con el mismo rigor que el código: estructura, audiencias, ejemplos ejecutables y métricas de fricción (menos reuniones, más claridad).",
    seoDescription:
      "Documentación técnica efectiva: README útil, guías de onboarding, Diátaxis, ejemplos copy-paste y cómo reducir dependencia de transferencia oral en equipos de software.",
    keywords: [
      "documentación técnica",
      "README buenas prácticas",
      "onboarding desarrolladores",
      "knowledge base ingeniería",
      "Diátaxis",
      "DX documentación",
    ],
    publishDate: "2025-12-18",
    category: "cultura",
    tags: ["documentación", "DX", "onboarding", "procesos"],
    readingTime: 26,
    content: (
      <div className="space-y-10">
        <section className={c}>
          <p className={p}>
            Todo equipo ha escuchado “está en el README” mientras alguien comparte pantalla otra vez. No es
            que la gente odie leer: es que el documento <strong>no es un producto usable</strong>. Un README
            mal estructurado —sin objetivo, sin pasos ordenados, sin troubleshooting— empuja a la gente al
            canal de chat. La documentación efectiva reduce reuniones, acelera onboarding y hace que la
            arquitectura sea <em>visible</em> sin heroísmo individual.
          </p>
        </section>

        <figure className={`${c} overflow-hidden`}>
          <figcaption className={`${h3} mb-4`}>De “texto largo” a producto con secciones claras</figcaption>
          <svg viewBox="0 0 700 180" className="h-auto w-full" aria-hidden>
            <rect x="50" y="30" width="600" height="40" rx="8" fill="#fef3c7" stroke="#d97706" />
            <text x="350" y="55" textAnchor="middle" className="fill-amber-950 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Objetivo del doc · quién debería leerlo · 5 min o menos al primer valor
            </text>
            <rect x="50" y="85" width="600" height="40" rx="8" fill="#e0f2fe" stroke="#0284c7" />
            <text x="350" y="110" textAnchor="middle" className="fill-sky-950 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Pasos ejecutables · comandos copy-paste · variables de entorno
            </text>
            <rect x="50" y="135" width="600" height="35" rx="8" fill="#f5f3ff" stroke="#7c3aed" />
            <text x="350" y="156" textAnchor="middle" className="fill-violet-950 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Errores frecuentes · FAQ · enlaces profundos
            </text>
          </svg>
        </figure>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Tipos de documentación (inspirado en Diátaxis)</h2>
          <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-300">
            <li>
              <strong>Tutoriales:</strong> llevan al lector a un primer éxito guiado paso a paso.
            </li>
            <li>
              <strong>How-to:</strong> resuelven una tarea concreta (“cómo rotar secretos”).
            </li>
            <li>
              <strong>Referencia:</strong> precisa, exhaustiva, sin narrativa larga.
            </li>
            <li>
              <strong>Explicación:</strong> el “por qué” de decisiones de arquitectura (ADRs enlazados).
            </li>
          </ul>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>README mínimo que sí se lee</h2>
          <pre className={code}>
            <code>{`# Servicio de facturación

## Qué hace (1 párrafo)
## Requisitos (versiones exactas)
## Quickstart
   1. cp .env.example .env
   2. pnpm install
   3. pnpm dev
## Troubleshooting
   - Error A → causa → fix
## Arquitectura (diagrama + ADR-001)
## Contacto/on-call`}</code>
          </pre>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Métricas de fricción (informales pero útiles)</h2>
          <p className={p}>
            Cuenta cuántas veces la misma pregunta aparece en Slack tras un onboarding. Si baja semana a
            semana, tu documentación está funcionando como producto. Si no, no es “pereza de lectura”: es
            señal de que hay que iterar el doc — igual que iterarías una pantalla con mala conversión.
          </p>
        </section>

        <section className={blogCallout}>
          <h3 className={`${h3} mb-3`}>SEO interno y externo</h3>
          <p className={p}>
            Para el mundo: artículos públicos con palabras clave honestas atraen talento y clientes. Para el
            equipo: buscabilidad en el repo (títulos claros, índice en `/docs`) ahorra vida. La documentación
            es el <strong>interfaz</strong> de tu sistema social: si es confusa, el sistema social compensa con
            reuniones — caras para todos.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Plantillas vivas: documentación que se prueba en CI</h2>
          <p className={p}>
            Donde sea posible, convierte ejemplos en tests o scripts verificados: snippets que se ejecutan en
            pipelines para asegurar que no se pudren. Un README cuyo “quickstart” falla cada dos semanas es
            peor que no tener README: destruye confianza. La documentación como producto implica{" "}
            <strong>versionado</strong> y <strong>ownership</strong> igual que el código.
          </p>
          <p className={`${p} mt-4`}>
            Finalmente, celebra cuando alguien nueva/o llega y no pregunta lo mismo dos veces: significa que
            iteraste bien. Esa es la métrica oculta del éxito documental — y tiene un impacto directo en la
            velocidad del equipo y en la satisfacción de quienes odian depender del “conocimiento tribal”.
          </p>
        </section>
      </div>
    ),
  },
];
