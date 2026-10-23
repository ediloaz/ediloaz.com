import Link from "next/link";
import type { ReactNode } from "react";
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

const PUBLISH_DATE = "2026-10-23";

const c = blogCard;
const p = blogP;
const h2 = blogH2;
const h3 = blogH3;
const list = "list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-300 leading-relaxed";
const orderedList = "list-inside list-decimal space-y-2 text-zinc-700 dark:text-zinc-200 leading-relaxed";
const link = "font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400";

function C({ children }: { children: ReactNode }) {
  return <code className="rounded bg-zinc-200 px-1 font-mono text-[0.9em] dark:bg-zinc-700">{children}</code>;
}

function Code({ children }: { children: string }) {
  return (
    <pre className={`${blogCodeBlock} mt-4`}>
      <code>{children}</code>
    </pre>
  );
}

function AuthorCta() {
  return (
    <aside className={blogCallout}>
      <h2 className={`${h3} mb-3`}>¿Tu equipo trabaja con React y Next.js?</h2>
      <p className={p}>
        Soy Edisson López, desarrollador Full Stack Senior: React, Next.js y TypeScript en el frontend; C# / ASP.NET
        Core y Node.js en el backend. Si buscas a alguien para un proyecto o para sumarse a tu equipo, revisa mi{" "}
        <Link href="/cv" className={link}>
          experiencia
        </Link>{" "}
        o{" "}
        <Link href="/contact" className={link}>
          escríbeme
        </Link>
        .
      </p>
    </aside>
  );
}

const CACHE_LIFE_PROFILES = [
  ["default", "5 min", "15 min", "nunca"],
  ["seconds", "30 s", "1 s", "1 min"],
  ["minutes", "5 min", "1 min", "1 h"],
  ["hours", "5 min", "1 h", "1 día"],
  ["days", "5 min", "1 día", "1 semana"],
  ["weeks", "5 min", "1 semana", "30 días"],
  ["max", "5 min", "30 días", "nunca"],
];

const cacheComponentsPost: BlogPost = {
  slug: "nextjs-cache-components-use-cache-guia-practica",
  title: "Cache Components en Next.js 16: la caché por fin hace lo que tú le dices",
  description:
    "Desde Next.js 16.4 es el modelo recomendado para cualquier app y será el default en Next.js 17. Cómo funcionan 'use cache', cacheLife, cacheTag y Suspense, con ejemplos y los errores más comunes.",
  seoDescription:
    "Guía práctica de Cache Components en Next.js 16: 'use cache', cacheLife, cacheTag, updateTag, Suspense y Partial Prerendering, con ejemplos y errores comunes.",
  keywords: [
    "cache components next.js",
    "use cache next.js",
    "next.js 16 caché",
    "partial prerendering",
    "cacheLife cacheTag",
    "updateTag revalidateTag",
    "next.js 17",
  ],
  publishDate: PUBLISH_DATE,
  category: "frontend",
  tags: ["nextjs", "react", "rendimiento", "cache"],
  readingTime: 9,
  content: (
    <div className="space-y-10">
      <section className={c}>
        <p className={p}>
          Durante años, la caché del App Router fue la parte más confusa de Next.js. En las versiones 13 y 14,{" "}
          <C>fetch</C> se cacheaba por defecto y aparecían bugs del tipo «¿por qué mi página no se actualiza?». En la
          15 el default cambió a no cachear, y muchos equipos terminaron llenando el código de{" "}
          <C>{"export const dynamic = 'force-dynamic'"}</C> sin tener muy claro qué estaba pasando.
        </p>
        <p className={`${p} mt-4`}>
          Cache Components invierte el enfoque: <strong>el trabajo asíncrono es dinámico por defecto y tú decides
          explícitamente qué se cachea</strong>, con la directiva <C>{"'use cache'"}</C>. Desde Next.js 16.4 el equipo
          de Next lo recomienda para cualquier aplicación, las apps nuevas creadas con <C>create-next-app</C> ya lo
          traen activado y el plan anunciado es que sea el comportamiento por defecto en Next.js 17. Si mantienes una
          app en Next.js, este es el momento de entenderlo.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Cómo activarlo</h2>
        <Code>{`// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
}

export default nextConfig`}</Code>
        <p className={`${p} mt-4`}>
          Conviene declarar <C>partialPrefetching</C> de forma explícita: si lo omites, Next.js muestra una advertencia,
          porque la primera versión de Cache Components salió sin Partial Prefetching. Ojo también con el runtime: Cache
          Components requiere Node.js, así que hay que eliminar cualquier <C>export const runtime</C> de tus rutas,
          incluido <C>{"'edge'"}</C>.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Tres tipos de contenido en una misma página</h2>
        <p className={p}>La idea clave es que cada parte del árbol de componentes cae en una de tres categorías:</p>
        <ul className={`${list} mt-4`}>
          <li>
            <strong>Estático:</strong> código síncrono, imports y cálculos puros. Next.js lo prerenderiza en el build
            sin que hagas nada.
          </li>
          <li>
            <strong>Cacheado:</strong> componentes o funciones marcados con <C>{"'use cache'"}</C>. Su resultado también
            entra en el HTML estático (el <em>static shell</em>) y se revalida según su <C>cacheLife</C>.
          </li>
          <li>
            <strong>Dinámico:</strong> datos que deben estar frescos en cada request o que dependen de la petición (
            <C>cookies()</C>, <C>headers()</C>, <C>searchParams</C>). Van dentro de un <C>{"<Suspense>"}</C>: el
            fallback viaja en el shell y el contenido real llega por streaming.
          </li>
        </ul>
        <Code>{`// app/dashboard/page.tsx
import { Suspense } from 'react'
import { cookies } from 'next/headers'
import { cacheLife, cacheTag } from 'next/cache'

export default function DashboardPage() {
  return (
    <main>
      {/* Estático: forma parte del shell */}
      <h1>Panel</h1>

      {/* Cacheado: también entra en el shell */}
      <Announcements />

      {/* Dinámico: se transmite en cada request */}
      <Suspense fallback={<p>Cargando tu resumen…</p>}>
        <AccountSummary />
      </Suspense>
    </main>
  )
}

async function Announcements() {
  'use cache'
  cacheLife('hours')
  cacheTag('announcements')

  const items = await db.announcement.findMany({ take: 5 })
  return <AnnouncementList items={items} />
}

async function AccountSummary() {
  const session = (await cookies()).get('session')?.value
  const account = await getAccount(session)
  return <SummaryCard account={account} />
}`}</Code>
        <p className={`${p} mt-4`}>
          El resultado es Partial Prerendering (PPR) sin configuración extra: el usuario recibe al instante el HTML con
          el título, los anuncios cacheados y el fallback del resumen, y la parte personalizada llega por streaming en
          la misma respuesta. Leer <C>cookies()</C> ya no convierte toda la ruta en dinámica, como pasaba en el modelo
          anterior: solo afecta al límite de <C>{"<Suspense>"}</C> que la envuelve.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>cacheLife: ponle fecha de caducidad a todo</h2>
        <p className={p}>
          Cada <C>{"'use cache'"}</C> debería ir acompañado de un <C>cacheLife</C>; si no lo pones, se aplica el perfil{" "}
          <C>default</C>. Estos son los perfiles que trae Next.js 16:
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-600 dark:text-zinc-300">
            <thead className="border-b border-zinc-200 text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
              <tr>
                <th className="py-2 pr-4 font-semibold">Perfil</th>
                <th className="py-2 pr-4 font-semibold">stale</th>
                <th className="py-2 pr-4 font-semibold">revalidate</th>
                <th className="py-2 font-semibold">expire</th>
              </tr>
            </thead>
            <tbody>
              {CACHE_LIFE_PROFILES.map(([profile, stale, revalidate, expire]) => (
                <tr key={profile} className="border-b border-zinc-100 dark:border-zinc-700/60">
                  <td className="py-2 pr-4 font-mono">{profile}</td>
                  <td className="py-2 pr-4">{stale}</td>
                  <td className="py-2 pr-4">{revalidate}</td>
                  <td className="py-2">{expire}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`${p} mt-4`}>
          <C>stale</C> es cuánto tiempo el navegador puede reutilizar el resultado sin preguntarle al servidor;{" "}
          <C>revalidate</C>, cada cuánto el servidor regenera la entrada en segundo plano; y <C>expire</C>, cuánto puede
          vivir sin tráfico antes de descartarse. Puedes definir perfiles propios en <C>next.config.ts</C> o pasar un
          objeto <C>{"{ stale, revalidate, expire }"}</C> directamente. Un detalle: si el lifetime es muy corto, ese
          contenido no entra en el shell estático.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-6`}>Los errores más comunes</h2>

        <h3 className={`${h3} mb-3`}>1. Leer cookies() dentro de un scope cacheado</h3>
        <p className={p}>
          Una función cacheada se comparte entre requests, así que no puede depender de la petición actual. El patrón
          correcto es leer el valor afuera y pasarlo como argumento: los argumentos forman parte de la clave de caché.
        </p>
        <Code>{`async function ProfilePanel() {
  const session = (await cookies()).get('session')?.value
  return <CachedProfile sessionId={session} />
}

async function CachedProfile({ sessionId }: { sessionId?: string }) {
  'use cache'
  cacheLife('minutes')

  // sessionId forma parte de la clave de caché
  const profile = await getProfile(sessionId)
  return <ProfileCard profile={profile} />
}`}</Code>
        <p className={`${p} mt-4`}>
          Para datos por usuario que quieres incluir en los prefetch, existe la variante{" "}
          <C>{"'use cache: private'"}</C>, que sí puede leer <C>cookies()</C> directamente y guarda el resultado solo
          en el navegador.
        </p>

        <h3 className={`${h3} mb-3 mt-8`}>2. Olvidar el Suspense</h3>
        <p className={p}>
          Si un componente hace trabajo asíncrono sin caché y no está dentro de un <C>{"<Suspense>"}</C>, el overlay de
          desarrollo te muestra un aviso de ruta bloqueante con la solución sugerida: envolverlo en un límite de
          Suspense o cachearlo. Hazle caso: esa validación es la que garantiza que cada ruta tenga un shell estático.
        </p>

        <h3 className={`${h3} mb-3 mt-8`}>3. Valores aleatorios y fechas</h3>
        <p className={p}>
          <C>Math.random()</C>, <C>Date.now()</C> o <C>crypto.randomUUID()</C> dan un valor distinto en cada ejecución,
          así que Next.js te obliga a decidir: si debe ser único por request, llama a <C>await connection()</C> antes y
          envuelve el componente en Suspense; si puede compartirse, cachéalo.
        </p>
        <Code>{`import { connection } from 'next/server'

async function RequestId() {
  await connection() // difiere este componente al momento del request
  return <p>Request: {crypto.randomUUID()}</p>
}`}</Code>

        <h3 className={`${h3} mb-3 mt-8`}>4. Esperar params demasiado arriba</h3>
        <p className={p}>
          Hacer <C>await params</C> en un layout con parámetros dinámicos impide prerenderizar todo lo que hay debajo.
          Pasa la promesa hacia abajo y resuélvela dentro de un <C>{"<Suspense>"}</C>: el sidebar, los children y el
          fallback siguen entrando en el shell. Mientras más abajo en el árbol esté el trabajo asíncrono, más página se
          prerenderiza.
        </p>

        <h3 className={`${h3} mb-3 mt-8`}>5. Creer que la caché del servidor es compartida</h3>
        <p className={p}>
          Por defecto, los resultados en runtime se guardan en memoria por instancia: en serverless eso es efímero y no
          se comparte entre instancias. <C>{"'use cache: remote'"}</C> los mueve a un cache handler duradero y
          compartido, pero agrega un viaje de red, así que solo compensa con una tasa de aciertos alta. Además, todas
          las cachés son por deploy: un deploy nuevo empieza de cero.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Mutaciones: updateTag, revalidateTag y refresh</h2>
        <p className={p}>
          Para invalidar contenido cacheado, etiquétalo con <C>cacheTag</C> y elige la función según el caso:
        </p>
        <ul className={`${list} mt-4`}>
          <li>
            <C>updateTag(tag)</C>: solo dentro de Server Actions. Expira la entrada y lee datos frescos en el mismo
            request, así que quien hizo el cambio lo ve de inmediato (<em>read-your-own-writes</em>).
          </li>
          <li>
            <C>{"revalidateTag(tag, 'max')"}</C>: en Server Actions o Route Handlers, por ejemplo el webhook de un CMS.
            Sirve el dato cacheado mientras regenera en segundo plano (<em>stale-while-revalidate</em>). En Next.js 16
            el segundo argumento, el perfil, es obligatorio.
          </li>
          <li>
            <C>refresh()</C>: solo en Server Actions. Vuelve a pedir los datos no cacheados que muestra la página, sin
            tocar la caché.
          </li>
        </ul>
        <Code>{`// app/dashboard/actions.ts
'use server'

import { updateTag } from 'next/cache'

export async function publishAnnouncement(formData: FormData) {
  const title = String(formData.get('title') ?? '').trim()
  if (!title) return

  await db.announcement.create({ data: { title } })
  updateTag('announcements') // quien publica ve el cambio al instante
}`}</Code>
        <Code>{`// app/api/cms-webhook/route.ts
import { revalidateTag } from 'next/cache'

export async function POST(request: Request) {
  if (!(await isValidSignature(request))) {
    return new Response('Unauthorized', { status: 401 })
  }

  revalidateTag('announcements', 'max') // stale-while-revalidate
  return Response.json({ revalidated: true })
}`}</Code>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Lo nuevo en 16.4: ensureStatic, navigation() y prefetch()</h2>
        <p className={p}>
          Si tienes páginas que deben ser 100% estáticas (un blog, una landing, un catálogo), exportar{" "}
          <C>ensureStatic</C> hace que el build falle si algún componente dinámico se cuela en la ruta. Acepta{" "}
          <C>{"'navigation'"}</C>, <C>{"'prefetch'"}</C> o <C>{"'shell'"}</C> según qué tan estricta quieras la
          garantía, y puedes ponerlo en un layout para cubrir todas sus páginas.
        </p>
        <Code>{`// app/blog/[slug]/page.tsx
export const ensureStatic = 'navigation'`}</Code>
        <p className={`${p} mt-4`}>
          Además, desde <C>next/cache</C>: <C>await navigation()</C> saca contenido cacheado del prefetch para que se
          cargue recién al navegar, y <C>await prefetch()</C> lo saca del shell hasta que haya un prefetch explícito.
          Es útil cuando prefetchear cada link visible sale caro, como en un inbox con cientos de conversaciones.
        </p>
      </section>

      <section className={blogCallout}>
        <h2 className={`${h3} mb-3`}>Actualiza antes de adoptar</h2>
        <p className={p}>
          El 14 de octubre de 2026 salió Next.js 16.4.1 con parches críticos, entre ellos una ejecución remota de código
          en funciones <C>{"'use cache'"}</C> que devuelven varios typed arrays. Si vas a usar Cache Components,
          asegúrate de estar en 16.4.1 o superior.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Checklist para migrar una app existente</h2>
        <ol className={orderedList}>
          <li>Actualiza a la última 16.x y activa cacheComponents y partialPrefetching en una rama aparte.</li>
          <li>Recorre tus rutas con next dev: el overlay marca cada acceso que bloquea el prerender y cómo resolverlo.</li>
          <li>
            Reemplaza los <C>dynamic</C> y <C>revalidate</C> del modelo anterior por <C>{"'use cache'"}</C> +{" "}
            <C>cacheLife</C> donde quieras caché, y por Suspense donde quieras datos frescos.
          </li>
          <li>Elimina los export const runtime de tus rutas.</li>
          <li>Etiqueta con cacheTag lo que se invalida por mutaciones y usa updateTag en tus Server Actions.</li>
          <li>Empuja el trabajo asíncrono hacia abajo del árbol para maximizar el shell estático.</li>
          <li>Mide Core Web Vitals y el peso del HTML inicial antes y después.</li>
        </ol>
        <p className={`${blogMuted} mt-4`}>
          La documentación oficial tiene una guía de migración a Cache Components y, desde 16.4, el comando{" "}
          <C>next upgrade --agent</C> prepara la actualización para agentes de código.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>En resumen</h2>
        <p className={p}>
          Cache Components cambia la pregunta de «¿por qué esto está cacheado?» a «¿qué quiero cachear y por cuánto
          tiempo?». Ese cambio de mentalidad, explícito y por componente, es lo que vuelve predecible una app grande en
          Next.js.
        </p>
      </section>

      <AuthorCta />
    </div>
  ),
};

const reactCompilerPost: BlogPost = {
  slug: "react-compiler-borrar-usememo-usecallback",
  title: "React Compiler: ¿ya puedes borrar tus useMemo y useCallback?",
  description:
    "El React Compiler memoiza por ti en tiempo de build. Qué optimiza realmente, cómo activarlo en Next.js 16, cómo adoptarlo de forma gradual y cuándo la memoización manual sigue teniendo sentido.",
  seoDescription:
    "React Compiler 1.0 explicado: qué optimiza, cómo activarlo en Next.js 16 con reactCompiler, modo annotation, 'use no memo' y cuándo seguir usando useMemo.",
  keywords: [
    "react compiler",
    "useMemo useCallback",
    "react compiler next.js",
    "reactCompiler next.config",
    "memoización react",
    "rendimiento react",
  ],
  publishDate: PUBLISH_DATE,
  category: "frontend",
  tags: ["react", "nextjs", "rendimiento", "react compiler"],
  readingTime: 8,
  content: (
    <div className="space-y-10">
      <section className={c}>
        <p className={p}>
          Si trabajas con React hace un tiempo, conoces el impuesto de la memoización: <C>useMemo</C> por aquí,{" "}
          <C>useCallback</C> por allá, <C>React.memo</C> en cada fila de una lista y discusiones eternas en los code
          reviews sobre si «esto realmente necesita memo». Y cuando alguien olvida una dependencia, el bug aparece en
          silencio.
        </p>
        <p className={`${p} mt-4`}>
          El React Compiler, estable desde su versión 1.0 en octubre de 2025, propone otra cosa: que esa optimización la
          haga una herramienta en tiempo de build, no una persona en cada componente.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Qué hace exactamente</h2>
        <p className={p}>
          El compilador analiza tus componentes y hooks, entiende qué valores dependen de qué props y estado, e inserta
          memoización automática de forma granular. Incluso puede memoizar cosas que a mano serían incómodas o
          imposibles, como valores calculados después de un return temprano o JSX condicional.
        </p>
        <Code>{`// Antes: memoización manual
const ProductList = memo(function ProductList({ products, query, onSelect }: Props) {
  const visible = useMemo(
    () => products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())),
    [products, query]
  )
  const handleSelect = useCallback((id: string) => onSelect(id), [onSelect])

  return visible.map((p) => (
    <ProductRow key={p.id} product={p} onSelect={handleSelect} />
  ))
})

// Con React Compiler: el mismo componente, sin ceremonia
function ProductList({ products, query, onSelect }: Props) {
  const visible = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  return visible.map((p) => (
    <ProductRow key={p.id} product={p} onSelect={(id) => onSelect(id)} />
  ))
}`}</Code>
        <p className={`${p} mt-4`}>
          En la segunda versión no hay ninguna API de memoización, pero el compilador cachea <C>visible</C> y el JSX
          resultante según <C>products</C> y <C>query</C>, y la función que se pasa a <C>onSelect</C> se mantiene
          estable mientras sus dependencias no cambien. Si las entradas son las mismas, reutiliza el resultado anterior
          y React puede saltarse el re-render de los hijos.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Cómo activarlo en Next.js 16</h2>
        <Code>{`npm install -D babel-plugin-react-compiler`}</Code>
        <Code>{`// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
}

export default nextConfig`}</Code>
        <p className={`${p} mt-4`}>
          En Next.js 16 la opción salió de <C>experimental</C> y es estable. El compilador corre como plugin de Babel,
          pero Next.js usa una optimización en SWC para aplicarlo solo a los archivos relevantes (los que tienen JSX o
          hooks), así que el impacto en el build es pequeño. Desde la 16.3 existe además una versión experimental en
          Rust que corre dentro de Turbopack (<C>experimental.turbopackRustReactCompiler</C>); en la 16.4 redujeron su
          uso de memoria un 30% y su tiempo de compilación un 15%.
        </p>
        <p className={`${p} mt-4`}>
          Fuera de Next.js, en Vite por ejemplo, se usa el mismo <C>babel-plugin-react-compiler</C> en la configuración
          del bundler. Funciona mejor con React 19, pero también soporta React 17 y 18.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Adopción gradual: modo annotation y «use no memo»</h2>
        <p className={p}>
          En una base de código grande no hace falta encenderlo para todo de golpe. El modo <C>annotation</C> compila
          solo los componentes que marques:
        </p>
        <Code>{`// next.config.ts
const nextConfig: NextConfig = {
  reactCompiler: {
    compilationMode: 'annotation',
  },
}`}</Code>
        <Code>{`export default function CheckoutPage() {
  'use memo' // solo los componentes anotados se compilan
  // ...
}

function LegacyChart(props: ChartProps) {
  'use no memo' // lo excluye mientras investigas un problema
  // ...
}`}</Code>
        <p className={`${p} mt-4`}>
          Una estrategia razonable: empieza en modo annotation con las pantallas más críticas, mide, y luego pasa al modo
          por defecto (<C>infer</C>), dejando <C>{"'use no memo'"}</C> solo como escape temporal.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>La letra chica: las Reglas de React</h2>
        <p className={p}>
          El compilador asume que tu código respeta las Reglas de React: renderizado puro, no mutar props ni estado y
          llamar a los hooks siempre en el mismo orden. Cuando encuentra código que no puede optimizar con seguridad,
          simplemente no lo compila; no lo rompe. Para saber dónde estás fallando, instala el plugin de ESLint:
        </p>
        <Code>{`npm install -D eslint-plugin-react-hooks@latest`}</Code>
        <p className={`${p} mt-4`}>
          Las reglas del compilador vienen en el preset <C>recommended-latest</C>. Actívalas antes de encender el
          compilador: te van a mostrar mutaciones durante el render y otros patrones que hoy funcionan de casualidad.
        </p>
        <Code>{`// ❌ Muta un objeto recibido por props durante el render
function OrderSummary({ order }: { order: Order }) {
  order.total = order.items.reduce((sum, item) => sum + item.price, 0)
  return <p>Total: {order.total}</p>
}

// ✅ Deriva el valor sin mutar
function OrderSummary({ order }: { order: Order }) {
  const total = order.items.reduce((sum, item) => sum + item.price, 0)
  return <p>Total: {total}</p>
}`}</Code>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>¿Entonces borro todos mis useMemo?</h2>
        <p className={p}>No de golpe. Algunas recomendaciones:</p>
        <ul className={`${list} mt-4`}>
          <li>
            <strong>Código nuevo:</strong> escríbelo sin <C>useMemo</C> ni <C>useCallback</C> y deja que el compilador
            haga su trabajo.
          </li>
          <li>
            <strong>Código existente:</strong> el compilador convive con la memoización manual. Retírala de forma
            gradual, con tests, a medida que tocas cada archivo.
          </li>
          <li>
            <strong>Dependencias de efectos:</strong> la memoización del compilador es una optimización, no una
            garantía semántica. Si un efecto depende de la identidad estable de un objeto o función, la memoización
            manual sigue siendo válida para controlarlo. Aunque muchas veces lo mejor es replantear el efecto: lo
            explico en{" "}
            <Link href="/blog/useeffect-no-es-para-eso-react-19" className={link}>
              useEffect no es para eso
            </Link>
            .
          </li>
          <li>
            <strong>Librerías que mutan:</strong> si una librería muta objetos en lugar de crear nuevos, podrías ver UI
            desactualizada. Aísla ese componente con <C>{"'use no memo'"}</C> y revisa si hay una versión compatible.
          </li>
        </ul>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Cómo verificar que está funcionando</h2>
        <ul className={list}>
          <li>React DevTools muestra el badge «Memo ✨» junto a los componentes optimizados.</li>
          <li>
            En el código compilado aparece el import de <C>react/compiler-runtime</C>.
          </li>
          <li>
            Usa el Profiler de React DevTools antes y después en las interacciones más lentas, y vigila el INP en
            producción.
          </li>
        </ul>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>En resumen</h2>
        <p className={p}>
          El React Compiler no te exime de pensar en rendimiento: si una lista renderiza 10.000 filas, sigues
          necesitando virtualización. Lo que elimina es la memoización defensiva que ensuciaba el código y fallaba en
          silencio cuando alguien olvidaba una dependencia. Menos ceremonia, menos bugs, mismo resultado.
        </p>
      </section>

      <AuthorCta />
    </div>
  ),
};

const useEffectPost: BlogPost = {
  slug: "useeffect-no-es-para-eso-react-19",
  title: "useEffect no es para eso: 7 efectos que puedes borrar hoy en React 19",
  description:
    "Muchos bugs de React vienen de efectos que no deberían existir. Siete patrones comunes, cómo reemplazarlos con React 19 y cuándo un efecto sí es la herramienta correcta.",
  seoDescription:
    "7 usos incorrectos de useEffect en React y cómo reemplazarlos: estado derivado, key, handlers, use(), useSyncExternalStore y useEffectEvent en React 19.",
  keywords: [
    "useEffect react",
    "cuándo usar useEffect",
    "useEffectEvent",
    "useSyncExternalStore",
    "react 19 hooks",
    "buenas prácticas react",
  ],
  publishDate: PUBLISH_DATE,
  category: "frontend",
  tags: ["react", "hooks", "buenas prácticas", "frontend"],
  readingTime: 9,
  content: (
    <div className="space-y-10">
      <section className={c}>
        <p className={p}>
          <C>useEffect</C> es el hook más malinterpretado de React. Su propósito es{" "}
          <strong>sincronizar un componente con un sistema externo</strong>: una API del navegador, una conexión de red,
          un widget que no está hecho en React. Cuando no hay ningún sistema externo de por medio, lo más probable es
          que el efecto sobre.
        </p>
        <p className={`${p} mt-4`}>
          Y los efectos que sobran se notan: renders dobles, parpadeos, bucles infinitos y condiciones de carrera
          difíciles de reproducir. Estos son siete patrones muy comunes y cómo reemplazarlos con lo que ofrece React 19.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>1. Calcular estado derivado</h2>
        <Code>{`// ❌ Un render extra con el valor viejo, y un estado más que mantener
const [fullName, setFullName] = useState('')
useEffect(() => {
  setFullName(\`\${firstName} \${lastName}\`)
}, [firstName, lastName])

// ✅ Si se puede calcular, se calcula durante el render
const fullName = \`\${firstName} \${lastName}\``}</Code>
        <p className={`${p} mt-4`}>
          Si un valor sale de props o estado, no lo guardes en otro estado. Si el cálculo es costoso, memoízalo, o deja
          que el{" "}
          <Link href="/blog/react-compiler-borrar-usememo-usecallback" className={link}>
            React Compiler
          </Link>{" "}
          lo haga por ti.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>2. Resetear el estado cuando cambia una prop</h2>
        <Code>{`// ❌ El componente se renderiza primero con el comentario del usuario anterior
function Profile({ userId }: { userId: string }) {
  const [comment, setComment] = useState('')
  useEffect(() => {
    setComment('')
  }, [userId])
  // ...
}

// ✅ Una key distinta crea una instancia nueva, con estado limpio
<Profile key={userId} userId={userId} />`}</Code>
        <p className={`${p} mt-4`}>
          La <C>key</C> le dice a React que es otro componente. Todo el estado interno se reinicia sin código extra y
          sin un render intermedio con datos equivocados.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>3. Ejecutar la lógica de un evento</h2>
        <Code>{`// ❌ Un efecto que observa una bandera para hacer el POST
useEffect(() => {
  if (submitted) {
    post('/api/register', formData)
  }
}, [submitted, formData])

// ✅ Si pasa porque el usuario hizo algo, va en el handler
function handleSubmit(event: React.FormEvent) {
  event.preventDefault()
  post('/api/register', formData)
}`}</Code>
        <p className={`${p} mt-4`}>
          Pregúntate por qué se ejecuta el código. Si la respuesta es «porque el usuario hizo clic», el lugar correcto es
          el handler. Los efectos son para lo que tiene que pasar porque el componente se mostró en pantalla.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>4. Avisarle al componente padre</h2>
        <Code>{`// ❌ El padre se entera un render tarde
useEffect(() => {
  onChange(isOn)
}, [isOn, onChange])

// ✅ Actualiza ambos en el mismo evento
function toggle() {
  const next = !isOn
  setIsOn(next)
  onChange(next)
}`}</Code>
        <p className={`${p} mt-4`}>
          Mejor aún: si el padre necesita el valor, sube el estado y convierte el componente en controlado.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>5. Pedir datos en un efecto</h2>
        <p className={p}>
          Es el clásico. En el App Router de Next.js, la primera opción es pedir los datos en un Server Component. Si un
          Client Component los necesita, puedes iniciar la promesa en el servidor y leerla con <C>use()</C>:
        </p>
        <Code>{`// app/orders/page.tsx (Server Component)
import { Suspense } from 'react'
import { Orders } from './orders'

export default function OrdersPage() {
  const ordersPromise = getOrders() // sin await: no bloquea el render
  return (
    <Suspense fallback={<TableSkeleton />}>
      <Orders ordersPromise={ordersPromise} />
    </Suspense>
  )
}`}</Code>
        <Code>{`// app/orders/orders.tsx
'use client'

import { use } from 'react'

export function Orders({ ordersPromise }: { ordersPromise: Promise<Order[]> }) {
  const orders = use(ordersPromise)
  return <OrdersTable orders={orders} />
}`}</Code>
        <p className={`${p} mt-4`}>
          En una SPA sin servidor, una librería como TanStack Query o SWR resuelve caché, reintentos y deduplicación. Y
          si de verdad tienes que pedir datos en un efecto, cancela la petición anterior para evitar condiciones de
          carrera:
        </p>
        <Code>{`useEffect(() => {
  const controller = new AbortController()

  fetch(\`/api/search?q=\${encodeURIComponent(query)}\`, { signal: controller.signal })
    .then((res) => res.json())
    .then(setResults)
    .catch((error) => {
      if (error.name !== 'AbortError') setError(error)
    })

  return () => controller.abort()
}, [query])`}</Code>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>6. Suscribirse a una fuente externa con useState + useEffect</h2>
        <Code>{`import { useSyncExternalStore } from 'react'

function subscribe(callback: () => void) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

export function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine, // valor en el cliente
    () => true // valor durante el render en el servidor
  )
}`}</Code>
        <p className={`${p} mt-4`}>
          <C>useSyncExternalStore</C> existe exactamente para esto: evita estados intermedios inconsistentes con el
          renderizado concurrente y resuelve el valor del servidor sin trucos.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>7. Re-ejecutar un efecto por un valor que solo se lee</h2>
        <p className={p}>
          El caso típico: un chat que se reconecta cada vez que cambia el tema visual, solo porque la notificación de
          «conectado» usa ese tema. Desde React 19.2, <C>useEffectEvent</C> separa la parte que reacciona de la parte que
          solo lee:
        </p>
        <Code>{`import { useEffect, useEffectEvent } from 'react'

function ChatRoom({ roomId, theme }: { roomId: string; theme: 'light' | 'dark' }) {
  const onConnected = useEffectEvent(() => {
    showNotification('¡Conectado!', theme) // siempre lee el theme actual
  })

  useEffect(() => {
    const connection = createConnection(roomId)
    connection.on('connected', () => onConnected())
    connection.connect()
    return () => connection.disconnect()
  }, [roomId]) // cambiar el theme ya no reconecta el chat
}`}</Code>
        <p className={`${p} mt-4`}>
          Las funciones de <C>useEffectEvent</C> solo se llaman desde dentro de efectos, no se pasan a otros componentes
          y no van en el array de dependencias; el linter de React ya lo sabe.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Cuándo sí usar useEffect</h2>
        <ul className={list}>
          <li>Conectar con un WebSocket, un chat o cualquier servicio en tiempo real.</li>
          <li>Integrar widgets que no son de React: mapas, gráficos, editores de texto.</li>
          <li>Suscribirte a eventos del navegador que no cubre useSyncExternalStore.</li>
          <li>Manipular el DOM: enfocar un input o medir un elemento (useLayoutEffect si necesitas medir antes del paint).</li>
          <li>Registrar que una pantalla se mostró, para analítica.</li>
        </ul>
        <p className={`${p} mt-4`}>
          Y siempre con función de limpieza. Si usas Next.js con Cache Components hay un motivo extra: Next.js mantiene
          ocultas las rutas visitadas con <C>{"<Activity>"}</C>, limpia sus efectos al ocultarlas y los vuelve a crear
          al regresar. Un efecto sin un cleanup correcto se nota mucho más.
        </p>
      </section>

      <section className={blogCallout}>
        <h2 className={`${h3} mb-3`}>Checklist antes de escribir un useEffect</h2>
        <ol className={orderedList}>
          <li>¿Puedo calcularlo durante el render? Entonces no es un efecto.</li>
          <li>¿Ocurre por una acción del usuario? Va en el handler.</li>
          <li>¿Necesito reiniciar el estado cuando cambia una prop? Usa key.</li>
          <li>¿Son datos del servidor? Server Component, use() o una librería de datos.</li>
          <li>¿Me suscribo a una fuente externa? useSyncExternalStore.</li>
          <li>¿El efecto lee un valor que no debería re-ejecutarlo? useEffectEvent.</li>
          <li>¿Nada de lo anterior? Entonces sí: useEffect, con cleanup.</li>
        </ol>
      </section>

      <AuthorCta />
    </div>
  ),
};

const formsPost: BlogPost = {
  slug: "formularios-react-19-server-actions-useactionstate",
  title: "Formularios en React 19 sin librerías: Server Actions, useActionState y useOptimistic",
  description:
    "Cómo construir formularios con validación en el servidor, estados de carga y UI optimista usando solo React 19 y Next.js, y los errores de seguridad que tienes que evitar.",
  seoDescription:
    "Formularios en React 19 y Next.js con Server Actions, useActionState, useFormStatus y useOptimistic: validación con Zod, estados de carga y seguridad.",
  keywords: [
    "formularios react 19",
    "server actions next.js",
    "useActionState",
    "useFormStatus",
    "useOptimistic",
    "validación zod",
  ],
  publishDate: PUBLISH_DATE,
  category: "frontend",
  tags: ["react", "nextjs", "formularios", "server actions"],
  readingTime: 10,
  content: (
    <div className="space-y-10">
      <section className={c}>
        <p className={p}>
          Durante años, un formulario «bien hecho» en React significaba <C>onSubmit</C> con <C>preventDefault</C>, un{" "}
          <C>useState</C> por campo, otro para el loading, otro para los errores y, casi siempre, una librería encima.
        </p>
        <p className={`${p} mt-4`}>
          React 19 cambió el punto de partida con las Actions: le pasas una función a <C>{"<form action>"}</C>, React la
          ejecuta dentro de una transición y te da hooks para el estado pendiente, el resultado y la UI optimista.
          Combinado con las Server Actions de Next.js, alcanza para la mayoría de formularios sin dependencias extra.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>1. La Server Action: validar en el servidor</h2>
        <Code>{`// app/contacto/actions.ts
'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().min(2, 'Escribe tu nombre'),
  email: z.email('Escribe un correo válido'),
  message: z.string().trim().min(10, 'Cuéntame un poco más (mínimo 10 caracteres)'),
})

type Field = 'name' | 'email' | 'message'

export type ContactState = {
  ok: boolean
  errors?: Partial<Record<Field, string[]>>
  values?: Partial<Record<Field, string>>
}

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
  }

  const parsed = schema.safeParse(values)
  if (!parsed.success) {
    return { ok: false, errors: z.flattenError(parsed.error).fieldErrors, values }
  }

  await saveMessage(parsed.data)
  return { ok: true }
}`}</Code>
        <p className={`${p} mt-4`}>
          Dos detalles. La acción recibe el estado anterior como primer argumento, que es lo que espera{" "}
          <C>useActionState</C>. Y si la validación falla, devuelve también los valores enviados; enseguida verás por
          qué. El esquema usa la API de Zod 4.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>2. El formulario con useActionState</h2>
        <Code>{`// app/contacto/contact-form.tsx
'use client'

import { useActionState } from 'react'
import { sendMessage, type ContactState } from './actions'
import { SubmitButton } from './submit-button'

const initialState: ContactState = { ok: false }

export function ContactForm() {
  const [state, formAction] = useActionState(sendMessage, initialState)

  if (state.ok) {
    return <p role="status">¡Gracias! Te respondo pronto.</p>
  }

  return (
    <form action={formAction} noValidate>
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        name="name"
        defaultValue={state.values?.name}
        aria-invalid={Boolean(state.errors?.name)}
        aria-describedby={state.errors?.name ? 'name-error' : undefined}
      />
      {state.errors?.name && <p id="name-error">{state.errors.name[0]}</p>}

      {/* email y message siguen el mismo patrón */}

      <SubmitButton />
    </form>
  )
}`}</Code>
        <p className={`${p} mt-4`}>
          <C>useActionState</C> devuelve el último estado, la acción que se conecta al form y un tercer valor,{" "}
          <C>isPending</C>. Fíjate en el <C>defaultValue</C>: cuando una acción termina correctamente, React resetea
          los campos no controlados del formulario. Si tu acción devuelve errores de validación sin lanzar una
          excepción, para React terminó bien, y el usuario perdería todo lo que escribió. Devolver los valores y usarlos
          como <C>defaultValue</C> evita ese clásico.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>3. Estado pendiente reutilizable con useFormStatus</h2>
        <Code>{`// app/contacto/submit-button.tsx
'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Enviando…' : 'Enviar mensaje'}
    </button>
  )
}`}</Code>
        <p className={`${p} mt-4`}>
          <C>useFormStatus</C> lee el estado del form que lo contiene, así que tiene que usarse en un componente
          renderizado dentro del <C>{"<form>"}</C>, no en el mismo componente que lo dibuja. Es ideal para el botón de tu
          design system: funciona en cualquier formulario sin pasarle props.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>4. UI optimista con useOptimistic</h2>
        <Code>{`// app/blog/[slug]/like-button.tsx
'use client'

import { useOptimistic } from 'react'
import { toggleLike } from './actions'

type Props = { postId: string; liked: boolean; likes: number }

export function LikeButton({ postId, liked, likes }: Props) {
  const [optimistic, setOptimistic] = useOptimistic(
    { liked, likes },
    (current, nextLiked: boolean) => ({
      liked: nextLiked,
      likes: current.likes + (nextLiked ? 1 : -1),
    })
  )

  return (
    <form
      action={async () => {
        setOptimistic(!optimistic.liked)
        await toggleLike(postId)
      }}
    >
      <button type="submit" aria-pressed={optimistic.liked}>
        {optimistic.liked ? '♥' : '♡'} {optimistic.likes}
      </button>
    </form>
  )
}`}</Code>
        <Code>{`// app/blog/[slug]/actions.ts
'use server'

import { updateTag } from 'next/cache'

export async function toggleLike(postId: string) {
  const user = await requireUser() // autentica en cada acción
  await db.like.toggle({ postId, userId: user.id })
  updateTag(\`post:\${postId}\`)
}`}</Code>
        <p className={`${p} mt-4`}>
          El cambio se ve al instante. Cuando la acción termina, React descarta el estado optimista y muestra el valor
          real que llega del servidor; si la acción falla, la UI vuelve sola al estado anterior. <C>updateTag</C>{" "}
          invalida la caché del post para que quien dio like vea el dato fresco. Si usas Cache Components, lo explico
          en la{" "}
          <Link href="/blog/nextjs-cache-components-use-cache-guia-practica" className={link}>
            guía de Cache Components
          </Link>
          .
        </p>
      </section>

      <section className={blogCallout}>
        <h2 className={`${h3} mb-3`}>Seguridad: una Server Action es un endpoint público</h2>
        <p className={p}>
          Es lo que más se olvida. Cada Server Action se expone como un endpoint HTTP que cualquiera puede invocar con el
          payload que quiera, sin pasar por tu UI. Por eso:
        </p>
        <ul className={`${list} mt-4`}>
          <li>Valida siempre en el servidor, aunque también valides en el cliente.</li>
          <li>Verifica autenticación y permisos dentro de cada acción: ocultar un botón no protege nada.</li>
          <li>No devuelvas datos sensibles en el estado: todo lo que retornas llega al navegador.</li>
          <li>Limita la tasa de envíos en formularios públicos, como contacto o registro.</li>
          <li>
            Mantén Next.js al día: el 14 de octubre de 2026 salió un parche (16.4.1) para un ataque de denegación de
            servicio contra apps con Server Actions.
          </li>
        </ul>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>Funciona antes de que cargue el JavaScript</h2>
        <p className={p}>
          Si el form recibe directamente una Server Action, se puede enviar incluso antes de que la página hidrate, o con
          JavaScript deshabilitado: mejora progresiva gratis para conexiones lentas. Para mostrar errores en ese
          escenario, el form tiene que estar en un Client Component y usar <C>useActionState</C>, como en el ejemplo.
        </p>
      </section>

      <section className={c}>
        <h2 className={`${h2} mb-4`}>¿Y las librerías de formularios?</h2>
        <p className={p}>
          Siguen teniendo su lugar: formularios muy dinámicos (campos que se agregan y quitan, wizards con validación
          cruzada) o validación instantánea mientras el usuario escribe. React Hook Form, por ejemplo, se combina bien
          con Server Actions. Pero para la mayoría de formularios (contacto, login, ajustes, comentarios), React 19 ya
          trae todo lo necesario.
        </p>
      </section>

      <AuthorCta />
    </div>
  ),
};

export const blogPostsReactNext: BlogPost[] = [
  cacheComponentsPost,
  reactCompilerPost,
  useEffectPost,
  formsPost,
];
