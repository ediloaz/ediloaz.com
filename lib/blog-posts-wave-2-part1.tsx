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

export const blogPostsWave2Part1: BlogPost[] = [
  {
    slug: "efecto-restauracion-codigo-legado",
    title: 'El "Efecto Restauración" en el Código Legado',
    description:
      "Analogía con la restauración de madera: cuándo lijar asperezas en una función legada y cuándo aplicar un barniz nuevo (refactor profunda) para recuperar la veta del negocio.",
    seoDescription:
      "Cómo abordar código legado con criterio: refactor incremental vs reescritura, recuperar lógica de negocio, deuda técnica y estrategias para equipos en Costa Rica y LATAM.",
    keywords: [
      "código legado",
      "refactorización",
      "deuda técnica",
      "mantenimiento software",
      "arquitectura empresarial",
      "legacy code español",
    ],
    publishDate: "2026-04-02",
    category: "arquitectura",
    tags: ["legacy", "refactor", "deuda técnica", "ingeniería"],
    readingTime: 26,
    content: (
      <div className="space-y-10">
        <section className={c}>
          <p className={p}>
            Quien ha restaurado un mueble antiguo sabe que el trabajo no es “pintar encima” hasta que
            quede brillante: primero hay que evaluar capas, entender la madera y decidir si conviene{" "}
            <strong>lijar</strong> hasta recuperar la veta o si la pieza ya no tiene estructura y merece un
            proceso más profundo. El <strong>código legado</strong> se comporta igual: años de parches,
            “hotfixes” del viernes y nombres que ya no reflejan el dominio pueden ocultar reglas de negocio
            valiosas — o convertirse en una trampa si el equipo confunde movimiento con progreso.
          </p>
          <p className={`${p} mt-4`}>
            En este artículo uso la analogía del <strong>efecto restauración</strong> para explicar cómo
            abordar sistemas antiguos sin romanticizar el rewrite ni caer en el refactor infinito. La idea
            central es recuperar la <strong>veta original</strong>: la intención del negocio que el código
            alguna vez expresó claramente, antes de que la complejidad accidental la enterrara.
          </p>
        </section>

        <figure className={`${c} overflow-hidden`}>
          <figcaption className={`${h3} mb-4`}>Capas sobre el dominio: lijar vs barnizar de nuevo</figcaption>
          <svg viewBox="0 0 720 240" className="h-auto w-full" aria-hidden>
            <defs>
              <linearGradient id="ercl-wood" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d4a574" />
                <stop offset="100%" stopColor="#8b5a2b" />
              </linearGradient>
              <linearGradient id="ercl-paint" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#64748b" stopOpacity="0.7" />
              </linearGradient>
              <marker id="ercl-arw" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#2563eb" />
              </marker>
            </defs>
            <rect x="40" y="30" width="300" height="180" rx="8" fill="url(#ercl-paint)" stroke="#475569" />
            <text x="190" y="60" textAnchor="middle" className="fill-white text-[11px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Parches + “pintura”
            </text>
            <text x="190" y="85" textAnchor="middle" className="fill-white/90 text-[10px]" style={{ fontFamily: "system-ui" }}>
              Deuda visual y lógica mezclada
            </text>
            <path d="M 360 120 L 400 120" stroke="#2563eb" strokeWidth="2" markerEnd="url(#ercl-arw)" />
            <rect x="420" y="30" width="260" height="180" rx="8" fill="url(#ercl-wood)" stroke="#78350f" />
            <text x="550" y="70" textAnchor="middle" className="fill-amber-950 text-[11px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Veta visible
            </text>
            <text x="550" y="95" textAnchor="middle" className="fill-amber-900 text-[10px]" style={{ fontFamily: "system-ui" }}>
              Reglas de negocio claras
            </text>
            <text x="550" y="175" textAnchor="middle" className="fill-amber-900 text-[9px]" style={{ fontFamily: "system-ui" }}>
              Lijar = claridad incremental
            </text>
          </svg>
          <p className={`${blogMuted} mt-3`}>
            Lijar no siempre es cosmético: a veces es renombrar, extraer funciones y añadir tests de
            caracterización. Barnizar de nuevo es la reescritura cuando la estructura ya no aguanta.
          </p>
        </figure>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Qué significa “lijar” en una base de código real</h2>
          <p className={p}>
            Lijar es <strong>reducir asperezas sin cambiar el comportamiento observable</strong>: mejorar
            nombres, eliminar duplicación obvia, acotar efectos colaterales y cubrir con tests lo que hoy
            solo vive en la cabeza de una persona. Es trabajo que rara vez enamora en un demo, pero baja el
            riesgo de regresiones y prepara el terreno para decisiones mayores. En equipos distribuidos o en
            contextos de alta rotación —muy comunes en startups y consultoras en{" "}
            <strong>Costa Rica y LATAM</strong>— lijar es una forma de transferir conocimiento silencioso al
            repositorio.
          </p>
          <p className={`${p} mt-4`}>
            Un error frecuente es confundir lijar con “tocar sin tests”. Si el módulo es crítico, la
            caracterización (tests que documentan el comportamiento actual, aunque sea imperfecto) es la
            lija de grano fino: no juzga si el negocio está bien, solo congela la realidad para poder
            evolucionar con seguridad.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Cuándo el barniz nuevo es inevitable</h2>
          <p className={p}>
            A veces la madera está podrida: acoplamientos imposibles, tecnologías sin soporte, o reglas de
            negocio contradictorias que nadie puede explicar sin contradicciones. Ahí, seguir lijando es
            carísimo. Un <strong>barniz nuevo</strong> equivale a una refactorización profunda o módulo
            nuevo detrás de una fachada, con migración gradual y métricas claras (latencia, errores,
            tiempo de despliegue).
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-300">
            <li>
              <strong>Señal 1:</strong> el costo de oportunidad supera el valor: cada feature pequeña tarda
              semanas por miedo a romper efectos colaterales invisibles.
            </li>
            <li>
              <strong>Señal 2:</strong> el dominio cambió radicalmente y el modelo mental del código ya no
              coincide con cómo vende o opera la empresa hoy.
            </li>
            <li>
              <strong>Señal 3:</strong> incidentes recurrentes por la misma zona, pese a parches
              incrementales.
            </li>
          </ul>
        </section>

        <section className={blogCallout}>
          <h3 className={`${h3} mb-3`}>Mini-checklist antes de tocar legado crítico</h3>
          <ol className="list-inside list-decimal space-y-2 text-zinc-700 dark:text-zinc-200">
            <li>¿Hay ambiente de staging que refleje datos realistas (sin exponer PII)?</li>
            <li>¿Existe rollback o feature flag para aislar el cambio?</li>
            <li>¿Quién es dueño del resultado de negocio y puede validar casos borde?</li>
            <li>¿Medimos tiempo de ciclo y defectos en la zona tocada?</li>
          </ol>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Ejemplo: de “blob” a función con intención</h2>
          <p className={`${p} mb-4`}>
            El siguiente fragmento es deliberadamente simple: ilustra cómo recuperar intención sin cambiar
            resultados. En producción, acompañarías esto con tests y quizá extracción a archivos separados.
          </p>
          <pre className={code}>
            <code>{`// Antes: “lija” necesaria — nombres opacos, mezcla de niveles
public decimal Calc(decimal a, decimal b, int t, bool x) {
  if (t == 1) return a * 0.5m;
  if (t == 2) return (a + b) * 0.0833m;
  if (x) return a - (a * 0.1m);
  return a;
}

// Después: misma lógica, veta más visible (ajusta nombres a tu dominio real)
public decimal CalcularProvisionMensual(
  decimal salarioBase,
  decimal variableOpcional,
  TipoCalculo tipo,
  bool aplicarRetencionEspecial
) {
  if (tipo == TipoCalculo.AguinaldoProporcional) return salarioBase * 0.5m;
  if (tipo == TipoCalculo.HorasExtraPromedio) return (salarioBase + variableOpcional) * 0.0833m;
  if (aplicarRetencionEspecial) return salarioBase - (salarioBase * 0.1m);
  return salarioBase;
}`}</code>
          </pre>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Comunicación con negocio: el barniz también es política</h2>
          <p className={p}>
            Ninguna metáfora de carpintería reemplaza la conversación honesta con producto y operaciones. Si
            propones una reescritura, lleva <strong>costos, riesgos y alternativas</strong>. Si propones solo
            lijar, explica cómo eso desbloquea entregas en el próximo trimestre. El código legado casi
            siempre es un activo político: quien lo entiende tiene responsabilidad; quien lo critica sin
            contexto genera fricción. La restauración buena es técnica y empática.
          </p>
          <p className={`${p} mt-4`}>
            Para SEO y para equipos: documentar decisiones (ADR breves), enlazar issues y mantener un glosario
            de términos del dominio ayuda a que la “veta” no dependa de una sola persona — algo esencial en
            mercados pequeños donde el talento rota entre fintechs, nearshore y producto propio.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Herramientas que hacen medible la restauración</h2>
          <p className={p}>
            Sin métricas, todo debate sobre legado se vuelve opiniones. Antes de tocar módulos sensibles,
            establece una línea base: tiempos de respuesta, tasa de errores, cobertura de tests donde exista,
            complejidad ciclomática aproximada o deuda acumulada en SonarQube/Semgrep. No persigas la métrica
            perfecta: persigue <strong>tendencias</strong> que puedas mostrar en una retrospectiva. Si después de
            lijar el código la incidencia baja y el tiempo de despliegue no empeora, tienes evidencia para
            pedir más presupuesto de mantenimiento.
          </p>
          <p className={`${p} mt-4`}>
            En organizaciones con compliance (finanzas, salud, sector público), enlaza cada cambio a un ticket
            auditado y conserva diffs legibles. La “restauración” también es trazabilidad: quién autorizó,
            qué se probó, qué se asumió como riesgo residual. Eso no solo satisface auditores: forma parte del
            SEO interno del sistema — la capacidad de explicar el producto a futuros ingenieros sin depender
            del fundador.
          </p>
          <p className={`${p} mt-4`}>
            Finalmente, celebra los micro-hitos: renombrar un agregado confuso, eliminar un flag muerto,
            documentar un caso borde. La cultura que reconoce pequeños avances sobre código feo pero honesto
            es la cultura donde la gente se anima a mejorar sin pedir permiso para una reescritura total cada
            vez que lee un archivo incómodo.
          </p>
        </section>

        <blockquote className="border-l-4 border-amber-500 pl-4 text-lg italic text-zinc-700 dark:text-zinc-300">
          El objetivo no es un código bonito: es un sistema que el negocio pueda evolucionar sin miedo, y
          que los ingenieros puedan explicar en una frase qué problema resuelve cada pieza.
        </blockquote>
      </div>
    ),
  },

  {
    slug: "legal-tech-codigo-ley-laboral-democratizar-acceso",
    title: "Legal-Tech: Cerrando la Brecha entre el Código y la Ley Laboral",
    description:
      "Cómo herramientas digitales (como calculadoras de derechos laborales) pueden acercar la ley a las personas: de textos complejos a interfaces accionables en el mercado local.",
    seoDescription:
      "Legal-tech y derechos laborales en Costa Rica: ingeniería de software, UX, accesibilidad y cómo traducir normativa a productos digitales útiles sin sustituir asesoría profesional.",
    keywords: [
      "legal tech Costa Rica",
      "derechos laborales app",
      "ley laboral UX",
      "calculadora laboral",
      "acceso a la justicia digital",
      "ingeniería de producto legal",
    ],
    publishDate: "2026-03-28",
    category: "producto",
    tags: ["legal-tech", "laboral", "UX", "accesibilidad"],
    readingTime: 24,
    content: (
      <div className="space-y-10">
        <section className={c}>
          <p className={p}>
            La ley laboral —en Costa Rica y en buena parte de Latinoamérica— suele estar escrita para
            especialistas: referencias cruzadas, fórmulas implícitas y términos que un trabajador promedio
            no usa en el día a día. Eso no es “culpa del ciudadano”: es un problema de{" "}
            <strong>acceso a la información</strong>. El <strong>legal-tech</strong> entra aquí no para
            reemplazar abogados o sindicatos, sino para convertir normas en experiencias que cualquier persona
            pueda explorar con claridad, en su idioma y con pasos concretos.
          </p>
          <p className={`${p} mt-4`}>
            Un ejemplo cercano: las <strong>calculadoras de beneficios laborales</strong>. Detrás hay reglas
            del Código de Trabajo, interpretación de jornadas, exclusiones y redondeos. El reto de ingeniería
            no es solo “hacer la cuenta”: es <strong>explicar el porqué</strong>, mostrar supuestos,
            advertir límites y guiar al usuario sin infantilizarlo.
          </p>
        </section>

        <figure className={`${c} overflow-hidden`}>
          <figcaption className={`${h3} mb-4`}>Del artículo legal a la interfaz: un flujo posible</figcaption>
          <svg viewBox="0 0 720 200" className="h-auto w-full" aria-hidden>
            <rect x="30" y="40" width="140" height="100" rx="10" fill="#eff6ff" stroke="#2563eb" />
            <text x="100" y="78" textAnchor="middle" className="fill-blue-900 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Texto legal
            </text>
            <text x="100" y="98" textAnchor="middle" className="fill-blue-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              Artículos + criterios
            </text>
            <path d="M 175 90 L 215 90" stroke="#64748b" strokeWidth="2" />
            <rect x="220" y="35" width="150" height="110" rx="10" fill="#f5f3ff" stroke="#7c3aed" />
            <text x="295" y="78" textAnchor="middle" className="fill-violet-900 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Modelo de reglas
            </text>
            <text x="295" y="98" textAnchor="middle" className="fill-violet-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              Validación + casos borde
            </text>
            <path d="M 375 90 L 415 90" stroke="#64748b" strokeWidth="2" />
            <rect x="420" y="30" width="270" height="120" rx="10" fill="#ecfdf5" stroke="#059669" />
            <text x="555" y="70" textAnchor="middle" className="fill-emerald-900 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              UI accionable
            </text>
            <text x="555" y="95" textAnchor="middle" className="fill-emerald-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              Inputs claros · resultados explicados
            </text>
            <text x="555" y="120" textAnchor="middle" className="fill-emerald-800 text-[8px]" style={{ fontFamily: "system-ui" }}>
              disclaimers · fuentes · enlaces
            </text>
          </svg>
        </figure>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Por qué la ingeniería importa tanto como el derecho</h2>
          <p className={p}>
            Un error de redondeo o una validación laxa puede dar falsas expectativas — y en temas laborales
            eso duele en la vida real. Por eso el stack técnico debe incluir{" "}
            <strong>pruebas automatizadas</strong> de reglas, datos de ejemplo auditables y versionado de
            fórmulas cuando la normativa cambia. La democratización no es simplificar a costa de la verdad:
            es <strong>traducir sin traicionar</strong>.
          </p>
          <p className={`${p} mt-4`}>
            Desde SEO y producto: las personas buscan “cómo calcular aguinaldo”, “horas extra Costa Rica”,
            “liquidación”… Un buen contenido responde intención de búsqueda con{" "}
            <strong>educación + herramienta</strong>: texto que posiciona y una UI que retiene porque
            resuelve. Esa combinación es el corazón del legal-tech útil.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Principios de diseño para mercados locales</h2>
          <ul className="list-inside list-disc space-y-3 text-zinc-600 dark:text-zinc-300">
            <li>
              <strong>Idioma y tono:</strong> español claro, sin jerga innecesaria; glosario de términos
              legales con definiciones cortas.
            </li>
            <li>
              <strong>Accesibilidad:</strong> contraste, tamaños táctiles, lectura por lectores de
              pantalla en resultados críticos.
            </li>
            <li>
              <strong>Transparencia:</strong> mostrar fórmulas o al menos supuestos (qué incluye el salario
              base, qué no).
            </li>
            <li>
              <strong>Expectativas:</strong> “esto es orientativo” debe ser visible, no un enlace escondido.
            </li>
          </ul>
        </section>

        <section className={blogCallout}>
          <h3 className={`${h3} mb-3`}>Privacidad y responsabilidad</h3>
          <p className={p}>
            Cuantos menos datos personales procese la herramienta, mejor. Cuando hay persistencia, cifrado en
            tránsito, políticas claras y minimización de datos no son “extras”: son requisitos de
            confianza. El legal-tech maduro entiende que la credibilidad es parte del diseño.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Ejemplo: de requisito a validación (pseudo-código)</h2>
          <pre className={code}>
            <code>{`type ResultadoCalculo = {
  monto: number;
  moneda: "CRC" | "USD";
  desglose: { concepto: string; valor: number }[];
  advertencias: string[]; // ej. "Asume jornada ordinaria de 48h"
};

function calcularAguinaldoProporcional(input: InputLaboral): ResultadoCalculo {
  validarSalarioBase(input.salario);
  const meses = clampMesesTrabajados(input.meses);
  const proporcion = meses / 12;
  // … reglas del dominio, tests unitarios por caso legal documentado
  return { monto: /* … */, moneda: "CRC", desglose: [/* … */], advertencias: [/* … */] };
}`}</code>
          </pre>
          <p className={`${blogMuted} mt-3`}>
            El valor está en que cada rama tenga un test nombrado alineado a un criterio legal verificable.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Cierre: tecnología como puente, no como muro</h2>
          <p className={p}>
            Las herramientas digitales pueden acercar derechos, pero la ecuación humana sigue ahí: negociación
            colectiva, asesoría profesional y contexto de cada trabajo. Un producto honesto combina{" "}
            <strong>excelencia técnica</strong> con <strong>humildad legal</strong>: ayuda a decidir qué
            preguntar, no pretende sustituir el juicio experto. Esa línea es la diferencia entre un juguete y
            un servicio que merece confianza en la región.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Internacionalización y contexto local (SEO y producto)</h2>
          <p className={p}>
            Si tu audiencia es Costa Rica, usa ejemplos en colones cuando aplique, menciona feriados o
            particularidades de jornada con cuidado y enlaza fuentes oficiales cuando sea posible. Para SEO,
            combina palabras long-tail (“cómo calcular vacaciones Costa Rica”, “derechos laborales teletrabajo”)
            con secciones educativas que no dependan solo de la herramienta: Google premia contenido que
            responde intenciones informativas, no únicamente transaccionales.
          </p>
          <p className={`${p} mt-4`}>
            Desde ingeniería, versiona las reglas cuando cambie la normativa y publica notas de release
            legibles para humanos. Eso construye confianza a largo plazo y reduce la carga de soporte: la
            transparencia operativa es parte del diseño del legal-tech serio.
          </p>
        </section>
      </div>
    ),
  },

  {
    slug: "patron-estrategia-microservicios-procesamiento-documentos-csharp",
    title: "El Patrón Estrategia en Microservicios de Procesamiento",
    description:
      "Arquitectura para lectura automatizada de facturas y documentos: Strategy Pattern en C# para soportar múltiples formatos sin un monolito de if-else, con espacio para crecer.",
    seoDescription:
      "Strategy Pattern en C# para microservicios de OCR y parsing: PDF, XML, imágenes, inyección de dependencias, escalabilidad y pruebas por formato sin acoplar el núcleo del dominio.",
    keywords: [
      "Strategy Pattern C#",
      "microservicios procesamiento documentos",
      "OCR arquitectura",
      "ASP.NET Core DI",
      "facturas electrónicas parsing",
      "software escalable",
    ],
    publishDate: "2026-03-18",
    category: "arquitectura",
    tags: ["C#", "microservicios", "patrones de diseño", "OCR"],
    readingTime: 27,
    content: (
      <div className="space-y-10">
        <section className={c}>
          <p className={p}>
            Los servicios que leen documentos en producción enfrentan una realidad incómoda: los formatos
            multiplican. Hoy PDF escaneado, mañana XML de factura electrónica, pasado mañana una imagen con
            ruido. Si el núcleo del sistema está lleno de <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">if (tipo == …)</code>
            , cada formato nuevo vuelve más frágil todo el servicio. El <strong>Strategy Pattern</strong>{" "}
            ofrece una salida clásica y efectiva: aislar variaciones en estrategias intercambiables detrás de
            una interfaz estable.
          </p>
          <p className={`${p} mt-4`}>
            En este artículo me centro en <strong>C# / .NET</strong> y un microservicio de procesamiento, pero
            la idea trasciende el lenguaje: el dominio habla de “documento entendido”, no de “bytes de
            PDF”.
          </p>
        </section>

        <figure className={`${c} overflow-hidden`}>
          <figcaption className={`${h3} mb-4`}>If-else monolítico vs estrategias inyectables</figcaption>
          <svg viewBox="0 0 720 220" className="h-auto w-full" aria-hidden>
            <rect x="40" y="30" width="300" height="160" rx="10" fill="#fef2f2" stroke="#ef4444" />
            <text x="190" y="60" textAnchor="middle" className="fill-red-900 text-[11px] font-bold" style={{ fontFamily: "system-ui" }}>
              Monolito de ramas
            </text>
            <text x="190" y="85" textAnchor="middle" className="fill-red-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              if / else por formato · difícil de testear
            </text>
            <text x="190" y="110" textAnchor="middle" className="fill-red-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              cambios tocan todo el archivo
            </text>
            <path d="M 360 110 L 410 110" stroke="#64748b" strokeWidth="2" />
            <polygon points="405,105 415,110 405,115" fill="#64748b" />
            <rect x="420" y="30" width="260" height="160" rx="10" fill="#eff6ff" stroke="#2563eb" />
            <text x="550" y="60" textAnchor="middle" className="fill-blue-900 text-[11px] font-bold" style={{ fontFamily: "system-ui" }}>
              IDocumentParser
            </text>
            <text x="550" y="85" textAnchor="middle" className="fill-blue-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              PdfParser · XmlParser · ImageParser
            </text>
            <text x="550" y="110" textAnchor="middle" className="fill-blue-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              registro por DI · tests aislados
            </text>
          </svg>
        </figure>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Contrato estable, variaciones encapsuladas</h2>
          <p className={`${p} mb-4`}>
            El servicio orquesta: recibe un documento, detecta o recibe el tipo, delega a la estrategia
            adecuada y unifica el resultado hacia el resto del sistema (validación de negocio, antifraud,
            almacenamiento). La clave es que el <strong>modelo de salida</strong> sea compartido aunque las
            entradas difieran.
          </p>
          <pre className={code}>
            <code>{`public interface IDocumentoParser
{
    bool PuedeProcesar(DocumentoEntrada entrada);
    Task<ResultadoParseo> ParsearAsync(DocumentoEntrada entrada, CancellationToken ct);
}

public sealed class OrquestadorDocumentos
{
    private readonly IEnumerable<IDocumentoParser> _parsers;

    public OrquestadorDocumentos(IEnumerable<IDocumentoParser> parsers) => _parsers = parsers;

    public async Task<ResultadoParseo> ProcesarAsync(DocumentoEntrada entrada, CancellationToken ct)
    {
        var parser = _parsers.FirstOrDefault(p => p.PuedeProcesar(entrada))
            ?? throw new FormatoNoSoportadoException(entrada.MimeType);
        return await parser.ParsearAsync(entrada, ct);
    }
}`}</code>
          </pre>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Registro en DI (ASP.NET Core)</h2>
          <pre className={code}>
            <code>{`// Program.cs / extensiones
builder.Services.AddSingleton<IDocumentoParser, PdfFacturaParser>();
builder.Services.AddSingleton<IDocumentoParser, XmlDgtParser>();
builder.Services.AddSingleton<IDocumentoParser, ImagenHeuristicaParser>();
builder.Services.AddSingleton<OrquestadorDocumentos>();`}</code>
          </pre>
          <p className={`${blogMuted} mt-3`}>
            Cada parser evoluciona a su ritmo: equipos distintos pueden publicar versiones si el empaquetado lo
            permite.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Escalar “orgánicamente” sin reescribir el núcleo</h2>
          <p className={p}>
            Cuando aparece un nuevo formato, añades una clase, tests y registro — el orquestador permanece
            delgado. Eso reduce el riesgo de regresiones en flujos ya estables y mejora el SEO interno del
            repositorio: los nuevos desarrolladores encuentran el patrón repetible en lugar de cazar condiciones
            esparcidas por mil líneas.
          </p>
          <p className={`${p} mt-4`}>
            En microservicios, combina esto con <strong>límites claros</strong>: un servicio demasiado grande
            deja de ser “micro”, pero un núcleo bien diseñado permite extraer pipelines (OCR, normalización,
            NLP) sin reventar el contrato público.
          </p>
        </section>

        <section className={blogCallout}>
          <h3 className={`${h3} mb-3`}>Observabilidad: mismo patrón, mismas métricas</h3>
          <p className={p}>
            Etiqueta spans por tipo de documento y por parser. Cuando un formato falla más que otros, los datos
            te dirigen a la estrategia correcta — no a adivinar en producción.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Pruebas: tabla de casos por formato</h2>
          <p className={p}>
            Crea una matriz de pruebas donde cada fila sea un documento representativo (factura XML válida, PDF
            escaneado borroso, imagen rotada) y cada columna sea el resultado esperado en el modelo de dominio.
            Cuando un nuevo país o proveedor agrega variaciones, añades filas — no reescribes el orquestador.
            Esta disciplina es la que permite dormir cuando el pipeline corre a las 3 a.m.
          </p>
          <p className={`${p} mt-4`}>
            En cuanto a rendimiento, perfila el costo de CPU/memoria por estrategia: un parser de imagen pesada
            no debería bloquear colas rápidas de XML. Patrones como colas separadas, batching o workers
            especializados pueden convivir con Strategy si el contrato de entrada/salida permanece estable.
          </p>
        </section>
      </div>
    ),
  },

  {
    slug: "meseta-b2-reaprendiendo-ingles-como-senior-developer",
    title: "La Meseta del B2+: Re-aprendiendo Inglés siendo Senior Dev",
    description:
      "Más allá del inglés funcional: por qué la fluidez técnica no alcanza para liderazgo global, y cómo estudiar el idioma con la disciplina de una certificación cloud.",
    seoDescription:
      "Meseta del inglés nivel B2, desarrolladores senior, comunicación en equipos remotos, liderazgo técnico global y rutinas para avanzar hacia C1 sin abandonar el trabajo.",
    keywords: [
      "inglés para desarrolladores",
      "meseta B2 inglés",
      "senior developer English",
      "comunicación ingeniería remoto",
      "liderazgo técnico inglés",
    ],
    publishDate: "2026-03-05",
    category: "carrera",
    tags: ["inglés", "carrera", "soft skills", "remoto"],
    readingTime: 24,
    content: (
      <div className="space-y-10">
        <section className={c}>
          <p className={p}>
            Muchos ingenieros en LATAM llegan a un <strong>inglés B2 “de trabajo”</strong>: entienden standups,
            leen documentación y escriben tickets. Eso basta para sobrevivir, pero no siempre para{" "}
            <strong>liderar</strong>: negociar prioridades con stakeholders internacionales, dar feedback
            fino, escribir RFCs que lean personas no técnicas o defender trade-offs en una llamada con
            silencios incómodos. Ahí aparece la <strong>meseta</strong>: estudiar ya no parece urgente, pero
            estancarse tiene costo invisible en promoción y alcance.
          </p>
        </section>

        <figure className={`${c} overflow-hidden`}>
          <figcaption className={`${h3} mb-4`}>Funcional vs estratégico</figcaption>
          <svg viewBox="0 0 700 200" className="h-auto w-full" aria-hidden>
            <rect x="50" y="50" width="240" height="100" rx="12" fill="#e0f2fe" stroke="#0284c7" />
            <text x="170" y="88" textAnchor="middle" className="fill-sky-900 text-[11px] font-semibold" style={{ fontFamily: "system-ui" }}>
              B2 funcional
            </text>
            <text x="170" y="112" textAnchor="middle" className="fill-sky-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              tickets · docs · daily
            </text>
            <path d="M 300 100 L 380 100" stroke="#64748b" strokeWidth="2" />
            <rect x="400" y="35" width="250" height="130" rx="12" fill="#ede9fe" stroke="#7c3aed" />
            <text x="525" y="80" textAnchor="middle" className="fill-violet-900 text-[11px] font-semibold" style={{ fontFamily: "system-ui" }}>
              C1 estratégico
            </text>
            <text x="525" y="105" textAnchor="middle" className="fill-violet-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              matices · humor · negociación
            </text>
            <text x="525" y="130" textAnchor="middle" className="fill-violet-800 text-[9px]" style={{ fontFamily: "system-ui" }}>
              confianza en viva voz
            </text>
          </svg>
        </figure>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Por qué la fluidez técnica no es suficiente</h2>
          <p className={p}>
            Escribir código limpio no entrena automáticamente la capacidad de <strong>detectar ironía</strong>,
            calibrar tono o reformular una mala noticia sin sonar defensivo. Esas habilidades viven en el
            dominio del idioma amplio — lectura de ensayo, podcasts densos, debate respetuoso. Un senior que
            aspira a staff o arquitectura con equipos distribuidos necesita practicar{" "}
            <strong>input desafiante</strong>, no solo tutoriales.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Tratar el idioma como certificación: plan + métricas</h2>
          <p className={`${p} mb-4`}>
            Igual que preparar <em>AWS Cloud Practitioner</em>: syllabus, repasos espaciados, simulacros.
            Aplica lo mismo al inglés: objetivo medible (p. ej. presentación grabada de 8 minutos, shadowing 4×
            por semana, escritura con corrección).
          </p>
          <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-300">
            <li>
              <strong>Bloque profundo diario</strong> de 30–45 min (no solo scroll pasivo en Twitter/X).
            </li>
            <li>
              <strong>Output obligatorio</strong>: voz (aunque sea grabarte a ti mismo) varias veces por
              semana.
            </li>
            <li>
              <strong>Retroalimentación</strong>: intercambio con compañeros, tutor o IA con criterio — la
              corrección sin práctica no pega.
            </li>
          </ul>
        </section>

        <section className={blogCallout}>
          <h3 className={`${h3} mb-3`}>Honestidad profesional</h3>
          <p className={p}>
            Pedir que repitan o parafrasear no es debilidad: es protocolo de ingeniería aplicado a la
            comunicación. Normalizarlo en tu equipo multiplica la claridad — especialmente cuando hay acentos
            mezclados y cansancio post-release.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Cierre: la meseta se rompe con hábito, no con ansiedad</h2>
          <p className={p}>
            No necesitas sonar como nativo: necesitas sonar <strong>claro, amable y firme</strong> cuando el
            sistema está caído y el cliente está mirando. Eso se entrena con la misma constancia que
            mantienes en tus skills técnicas: repetición deliberada, feedback y paciencia — la misma que
            pides cuando un junior aprende a desplegar sin miedo.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Ideas de práctica deliberada (sin humo)</h2>
          <p className={p}>
            Escribe resúmenes de incidentes postmortem en inglés aunque el borrador sea interno. Graba
            explicaciones de arquitectura de 5 minutos y revisa tu ritmo, muletillas y claridad. Participa en
            lecturas de documentación abierta (RFCs de proyectos que admires) y copia estructuras de
            argumentación, no solo vocabulario técnico.
          </p>
          <p className={`${p} mt-4`}>
            Si trabajas con clientes en otros husos, practica negociación de plazos: no solo vocabulario, sino
            cortesía y firmeza. El inglés de negocio no es un examen de pronunciación: es una herramienta de
            <strong> alineamiento</strong> entre personas con incentivos distintos.
          </p>
        </section>
      </div>
    ),
  },

  {
    slug: "arquitectura-marca-blanca-pymes-nextjs-vercel",
    title: 'Arquitectura de "Marca Blanca" para PYMES locales',
    description:
      "Retos de construir sitios personalizables para comercios: un template robusto en Next.js y Vercel que sea ‘blanco’ pero flexible para reflejar identidad sin multiplicar costos.",
    seoDescription:
      "Marca blanca web para pymes: multi-sitio Next.js, theming, Vercel, SEO por tenant, rendimiento y gobernanza de contenidos para agencias y productos en Costa Rica.",
    keywords: [
      "marca blanca Next.js",
      "multi-tenant sitios web",
      "Vercel despliegue",
      "PYMES Costa Rica web",
      "white label arquitectura",
      "design tokens multi-marca",
    ],
    publishDate: "2026-02-22",
    category: "producto",
    tags: ["Next.js", "Vercel", "PYMES", "multi-tenant"],
    readingTime: 25,
    content: (
      <div className="space-y-10">
        <section className={c}>
          <p className={p}>
            Una plataforma de <strong>marca blanca</strong> promete escala: un solo núcleo técnico, muchas
            marcas encima. El infierno llega cuando cada cliente pide “solo un detalle” que rompe supuestos del
            template. La arquitectura debe separar <strong>identidad</strong> (colores, tipografías, logos,
            copy) de <strong>funcionalidad</strong> (catálogo, reservas, formularios) — y dejar explícito qué
            se personaliza sin forks eternos.
          </p>
        </section>

        <figure className={`${c} overflow-hidden`}>
          <figcaption className={`${h3} mb-4`}>Un núcleo, varias pieles</figcaption>
          <svg viewBox="0 0 720 210" className="h-auto w-full" aria-hidden>
            <rect x="260" y="25" width="200" height="70" rx="12" fill="#1e293b" />
            <text x="360" y="58" textAnchor="middle" className="fill-white text-[11px] font-bold" style={{ fontFamily: "system-ui" }}>
              Core Next.js
            </text>
            <text x="360" y="78" textAnchor="middle" className="fill-slate-300 text-[9px]" style={{ fontFamily: "system-ui" }}>
              rutas · layouts · datos
            </text>
            <path d="M 360 95 L 360 115" stroke="#64748b" strokeWidth="2" />
            <rect x="80" y="125" width="160" height="70" rx="10" fill="#dbeafe" stroke="#2563eb" />
            <text x="160" y="158" textAnchor="middle" className="fill-blue-900 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Marca A
            </text>
            <text x="160" y="178" textAnchor="middle" className="fill-blue-800 text-[8px]" style={{ fontFamily: "system-ui" }}>
              tokens + contenido
            </text>
            <rect x="280" y="125" width="160" height="70" rx="10" fill="#fce7f3" stroke="#db2777" />
            <text x="360" y="158" textAnchor="middle" className="fill-pink-900 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Marca B
            </text>
            <rect x="480" y="125" width="160" height="70" rx="10" fill="#ecfccb" stroke="#65a30d" />
            <text x="560" y="158" textAnchor="middle" className="fill-lime-900 text-[10px] font-semibold" style={{ fontFamily: "system-ui" }}>
              Marca C
            </text>
          </svg>
        </figure>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Eficiencia: variables de tema por tenant</h2>
          <p className={`${p} mb-4`}>
            Ya sea por subdominio, path o dominio custom, el sistema resuelve un <strong>theme manifest</strong>{" "}
            (JSON validado) que alimenta CSS variables o Tailwind extendido en build/runtime. Evita copiar
            componentes por cliente: compones una vez, varias pieles.
          </p>
          <pre className={code}>
            <code>{`// theme.schema.json (ejemplo simplificado)
{
  "slug": "cafeteria-centro",
  "brand": {
    "primary": "#7c3aed",
    "radius": "12px",
    "fontHeading": "Fraunces",
    "fontBody": "Inter"
  },
  "seo": { "defaultTitle": "Cafetería Centro — Heredia" }
}`}</code>
          </pre>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Vercel y despliegues: previews por marca</h2>
          <p className={p}>
            Usa <strong>preview deployments</strong> por rama o por configuración para que cada cliente vea
            cambios antes de producción. Documenta límites: cuántas variantes soporta el plan, cómo se
            invalida caché y cómo se gestionan secretos por entorno. La marca blanca falla cuando el costo
            operativo por tenant es igual a hacer un sitio aparte.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>SEO y contenido duplicado</h2>
          <p className={p}>
            Si el HTML base es idéntico, Google puede ver duplicación. Mitiga con copy único, metadatos por
            tenant, datos estructurados <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">LocalBusiness</code>{" "}
            donde aplique y performance impecable (Core Web Vitals). La arquitectura debe permitir{" "}
            <strong>texto real</strong>, no solo cambiar colores.
          </p>
        </section>

        <section className={blogCallout}>
          <h3 className={`${h3} mb-3`}>Gobernanza</h3>
          <p className={p}>
            Define qué pedidos nuevos entran al core y cuáles son “proyecto custom”. Sin esa línea, el template
            deja de ser blanco y se vuelve gris: un monstruo de flags imposible de mantener.
          </p>
        </section>

        <section className={c}>
          <h2 className={`${h2} mb-4`}>Contenido y CMS: quién escribe la historia de cada marca</h2>
          <p className={p}>
            La marca blanca falla si el cliente no puede actualizar textos sin llamarte. Integra un CMS
            headless o fuentes de contenido por tenant con validación de esquema (Zod, JSON Schema) para que
            campos obligatorios —horarios, dirección, políticas— no queden vacíos en producción. Desde SEO,
            cada sitio debe tener textos únicos: puedes ofrecer plantillas de copy por rubro (restaurante,
            gimnasio, taller mecánico) que aceleren la adopción sin duplicar HTML basura entre dominios.
          </p>
          <p className={`${p} mt-4`}>
            Piensa en accesibilidad y rendimiento como parte del paquete: un template “blanco” que no cumple
            WCAG o que carga 4 MB de JavaScript innecioso perjudica la reputación de tu plataforma entera, no
            solo de un cliente.
          </p>
        </section>
      </div>
    ),
  },
];
