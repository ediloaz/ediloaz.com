"use client";

import { useState, useEffect, useRef } from "react";
import PageLayout from "@/components/page-layout";
import { ScrollReveal } from "@/components/scroll-reveal";

const WA_PHONE = "50686523185"; // ← Reemplazá con tu número real de WhatsApp

const SPOTS_TAKEN = 4;

type PkgId = "landing" | "corporativo" | "profesional" | "ecommerce";

interface OnboardingData {
  businessType: string;
  packageId: PkgId | "";
  businessName: string;
  domain: string;
  palette: string;
}

const packages = [
  {
    id: "landing" as PkgId,
    icon: "⚡",
    name: "Landing Page",
    tagline: "Presencia Rápida",
    target: "Emprendedores, marcas personales o campañas de un solo producto/servicio.",
    priceReal: "₡150,000",
    pricePromo: "₡80,000",
    maintenanceAnnual: "₡35,000",
    deliveryWeeks: 1,
    accentColor: "#4f8ef7",
    features: [
      "1 página inmersiva de alto impacto",
      "Hero + Servicios + Galería + Testimonios + CTA",
      "Botón directo a WhatsApp",
      "SEO básico de arranque",
      "Diseño 100% responsivo",
      "Carga ultrarrápida",
      "Dominio + Hosting + SSL incluidos",
    ],
    missing: ["Múltiples páginas", "Formulario de contacto", "Panel de autogestión"],
    popular: false,
  },
  {
    id: "corporativo" as PkgId,
    icon: "🏢",
    name: "Sitio Corporativo",
    tagline: "Consolidación Digital",
    target: "PYMES establecidas, profesionales independientes y pequeños negocios.",
    priceReal: "₡250,000",
    pricePromo: "₡150,000",
    maintenanceAnnual: "₡45,000",
    deliveryWeeks: 2,
    accentColor: "#7c3aed",
    features: [
      "Todo lo del plan Landing +",
      "Hasta 5 páginas estratégicas",
      "Formulario de leads directo a tu correo",
      "SEO on-page avanzado",
      "Google Analytics integrado",
      "2 actualizaciones de contenido al año",
      "Blog / sección de noticias",
    ],
    missing: ["Reservas automáticas", "Panel de autogestión"],
    popular: true,
  },
  {
    id: "profesional" as PkgId,
    icon: "🚀",
    name: "Web Profesional",
    tagline: "Automatización de Negocio",
    target: "Clínicas, hoteles, talleres, agrocomerciales y negocios de alto flujo.",
    priceReal: "₡500,000",
    pricePromo: "₡300,000",
    maintenanceAnnual: "₡90,000",
    deliveryWeeks: 2,
    accentColor: "#059669",
    features: [
      "Todo lo del plan Corporativo +",
      "Sistema de reservas/citas automáticas",
      "Google Maps interactivo integrado",
      "Catálogo de productos o habitaciones",
      "Panel autogestionable de contenido",
      "Widget WhatsApp Business flotante",
      "4 ventanas de soporte al año",
    ],
    missing: [],
    popular: false,
  },
];

const upsells = [
  {
    icon: "🎨",
    name: "Kit de Identidad Visual",
    price: "₡50,000",
    tag: "Branding",
    tagColor: "#7c3aed",
    desc: "Logotipo, paleta cromática y tipografías diseñadas con IA. Resultado profesional en 48 horas.",
  },
  {
    icon: "📍",
    name: "Posicionamiento Google Maps",
    price: "₡25,000",
    tag: "SEO Local",
    tagColor: "#ea580c",
    desc: "Optimización profunda de tu ficha Google My Business para dominar las búsquedas locales.",
  },
  {
    icon: "✉️",
    name: "Correo Corporativo",
    price: "₡25,000",
    tag: "Profesional",
    tagColor: "#059669",
    desc: "Configura info@tunegocio.com con Google Workspace. Imagen ejecutiva al instante.",
  },
];

const whyUs = [
  {
    icon: "⚡",
    title: "Carga Ultrarrápida",
    desc: "Tu web carga al instante. Google lo premia con mejor posicionamiento y tus clientes no se van por frustración.",
    stat: "99.9% uptime",
  },
  {
    icon: "⚙️",
    title: "Automatización 24/7",
    desc: "No entregamos folletos digitales. Conectamos tu web con calendarios de reservas, WhatsApp y CRMs para que trabaje mientras dormís.",
    stat: "0 servidores propios",
  },
  {
    icon: "🧘",
    title: "Cero Estrés Técnico",
    desc: "Dominios, hosting, SSL y respaldos van por nuestra cuenta. Vos solo atendé los prospectos que lleguen.",
    stat: "1 pago anual",
  },
  {
    icon: "🎯",
    title: "Diseño que Convierte",
    desc: "Psicología de ventas integrada en cada pixel. Cada sección empuja al visitante hacia el botón de contacto.",
    stat: "+40% conversión",
  },
];

const process = [
  { step: "01", title: "Brief Oficial", desc: "Recibimos tus materiales: logo, textos, fotos y paleta de colores. Más el 50% de anticipo.", time: "Día 1-2" },
  { step: "02", title: "Desarrollo", desc: "Construimos el sitio sobre nuestra plantilla base optimizada. Velocidad sin sacrificar calidad.", time: "Día 3-7" },
  { step: "03", title: "Revisión", desc: "Te presentamos el primer build. Abrimos una ventana de feedback para ajustes de diseño.", time: "Semana 2" },
  { step: "04", title: "Lanzamiento", desc: "Publicamos, configuramos el dominio, SSL y analytics. Tu web sale al aire.", time: "Entrega final" },
];

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en estar lista mi web?",
    a: "Las Landing Pages las entregamos en 7 días hábiles desde que recibimos el Brief Oficial y el anticipo. Los sitios Corporativos y Profesionales en 14 días. El plazo depende de que el cliente entregue los materiales completos (textos, fotos, logo).",
  },
  {
    q: "¿Cuál es la forma de pago?",
    a: "50% de anticipo innegociable para apartar el espacio e iniciar el desarrollo, y 50% restante al entregar el sitio finalizado. Aceptamos transferencias bancarias y SINPE Móvil.",
  },
  {
    q: "¿Qué pasa si necesito cambios después de la entrega?",
    a: "El plan Landing incluye los cambios durante el período de revisión; luego se cobran à la carte. Los planes Corporativo y Profesional incluyen 2 y 4 ventanas de actualizaciones anuales respectivamente.",
  },
  {
    q: "¿El cliente es dueño de su web?",
    a: "El cliente es dueño absoluto de su dominio, contenido, textos, imágenes y diseño visual. El código fuente queda bajo licencia de uso exclusivo e indefinido mientras el contrato de hosting esté activo.",
  },
  {
    q: "¿Qué incluye el mantenimiento anual?",
    a: "Dominio personalizado, hosting de alto rendimiento, certificado SSL (el candadito de seguridad) y respaldos periódicos. Todo en un solo pago al año, sin cobros mensuales.",
  },
  {
    q: "¿Pueden integrar sistemas externos?",
    a: "¡Sí! Integramos Calendly para reservas, WhatsApp Business, Google Analytics, Supabase y muchos más. Los proyectos a la medida permiten cualquier integración personalizada.",
  },
];

const businessTypes = [
  { id: "Hotel / Turismo", icon: "🏨" },
  { id: "Clínica / Salud", icon: "🏥" },
  { id: "Restaurante", icon: "🍽️" },
  { id: "Agrocomercial", icon: "🌿" },
  { id: "Profesional Independiente", icon: "💼" },
  { id: "Taller / Mecánico", icon: "🔧" },
  { id: "Comercio / Tienda", icon: "🏪" },
  { id: "Otro", icon: "✨" },
];

const palettes = [
  { id: "Azul Corporativo", colors: ["#1a56db", "#3b82f6", "#eff6ff"] },
  { id: "Verde Natural", colors: ["#059669", "#34d399", "#ecfdf5"] },
  { id: "Púrpura Moderno", colors: ["#7c3aed", "#a78bfa", "#f5f3ff"] },
  { id: "Rojo Vibrante", colors: ["#dc2626", "#f87171", "#fef2f2"] },
  { id: "Naranja Energético", colors: ["#ea580c", "#fb923c", "#fff7ed"] },
  { id: "Oscuro Premium", colors: ["#111827", "#6b7280", "#f9fafb"] },
];

function useCountUp(target: number, duration = 1400, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const raf = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, duration]);
  return count;
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <span
      className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
      style={{ background: color }}
      aria-hidden="true"
    >
      ✓
    </span>
  );
}

function XIcon() {
  return (
    <span
      className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
      style={{ background: "var(--border-strong)", color: "var(--fg-muted)" }}
      aria-hidden="true"
    >
      ✕
    </span>
  );
}

export default function ServiciosPage() {
  const [hoveredPkg, setHoveredPkg] = useState<PkgId | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<OnboardingData>({
    businessType: "",
    packageId: "",
    businessName: "",
    domain: "",
    palette: "",
  });
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [previewPulse, setPreviewPulse] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!formData.businessType && !formData.packageId && !formData.businessName && !formData.palette) return;
    const tOn  = setTimeout(() => setPreviewPulse(true),  0);
    const tOff = setTimeout(() => setPreviewPulse(false), 900);
    return () => { clearTimeout(tOn); clearTimeout(tOff); };
  }, [formData.businessType, formData.packageId, formData.palette, formData.businessName]);

  const projects = useCountUp(25, 1300, statsVisible);
  const satisfaction = useCountUp(100, 1300, statsVisible);
  const uptime = useCountUp(999, 1300, statsVisible);

  function buildWALink() {
    const pkgName = packages.find(p => p.id === formData.packageId)?.name ?? formData.packageId;
    const msg = encodeURIComponent(
      `Hola! 👋 Me interesa crear mi sitio web con Ediloaz.\n\n` +
      `🏢 *Negocio:* ${formData.businessName || "Por definir"}\n` +
      `📁 *Tipo:* ${formData.businessType}\n` +
      `📦 *Paquete:* ${pkgName}\n` +
      `🌐 *Dominio:* ${formData.domain ? `www.${formData.domain}` : "Por definir"}\n` +
      `🎨 *Paleta:* ${formData.palette}\n\n` +
      `¡Quedo en espera de más información!`
    );
    return `https://wa.me/${WA_PHONE}?text=${msg}`;
  }

  const formComplete = !!(formData.businessType && formData.packageId && formData.businessName && formData.palette);

  const selectedPalette = palettes.find(p => p.id === formData.palette);
  const previewAccent = selectedPalette?.colors[0] ?? "#4f8ef7";
  const previewBg = selectedPalette?.colors[2] ?? "#f0f6ff";
  const filledCount = [formData.businessType, formData.packageId, formData.businessName, formData.palette].filter(Boolean).length;
  const progressPct = Math.round((filledCount / 4) * 100);

  function waLink(text: string) {
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  }

  return (
    <PageLayout>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center text-center px-5 pb-20">
        <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />

        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[80px] pointer-events-none floating"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.10] blur-[64px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 65%)", animation: "float 9s ease-in-out infinite reverse" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-[0.08] blur-[56px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 65%)", animation: "float 7s ease-in-out 2s infinite" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl w-full">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-7 border"
            style={{ background: "var(--accent-glow)", color: "var(--accent)", borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "pulse-glow 2s ease infinite" }} />
            Oferta de lanzamiento · Solo {10 - SPOTS_TAKEN} cupos al precio promocional
          </div>

          <h1 className="text-[clamp(2.6rem,8vw,5rem)] font-black tracking-tight leading-[1.05] mb-6">
            <span className="gradient-text-animated">Máquinas de venta</span>
            <br />
            <span style={{ color: "var(--fg)" }}>digitales para tu negocio</span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-3 leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            No creamos "páginas web". Construimos plataformas automatizadas que captan clientes,
            generan reservas y trabajan por vos las 24 horas del día.
          </p>

          <p className="text-sm mb-10" style={{ color: "var(--fg-muted)" }}>
            <span className="font-semibold" style={{ color: "var(--fg)" }}>Ultra rápido.</span>{" "}
            Sin costos mensuales escondidos. Entrega en 1-2 semanas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink("Hola! Me interesa crear mi sitio web con Ediloaz. ¿Pueden darme más información?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, #7c3aed 100%)",
                color: "white",
                boxShadow: "0 4px 28px var(--accent-glow)",
              }}
            >
              <WhatsAppIcon />
              Quiero mi sitio ahora
            </a>
            <button
              onClick={() => document.getElementById("paquetes")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:brightness-110"
              style={{ background: "var(--surface)", color: "var(--fg)", border: "1px solid var(--border-strong)" }}
            >
              Ver paquetes y precios
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {["Carga Instantánea", "SEO On-Page", "100% Responsivo", "Infraestructura de Borde", "Automatizaciones", "Reservas Online", "WhatsApp Integrado"].map(t => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-[11px] font-semibold"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--fg-muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
          style={{ color: "var(--fg-muted)" }}
          aria-hidden="true"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────────── */}
      <div ref={statsRef}>
        <ScrollReveal>
          <section className="py-12 border-y" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: `${projects}+`, label: "Proyectos entregados" },
                { value: `${satisfaction}%`, label: "Clientes satisfechos" },
                { value: `${(uptime / 10).toFixed(1)}%`, label: "Uptime garantizado" },
                { value: "1-2", label: "Semanas de entrega" },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-black gradient-text-animated tabular-nums">{stat.value}</p>
                  <p className="text-xs mt-1.5 font-medium" style={{ color: "var(--fg-muted)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* ── SCARCITY BANNER ──────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="px-5 py-6">
          <div className="max-w-3xl mx-auto rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-5"
            style={{ background: "linear-gradient(135deg, rgba(234,88,12,0.07), rgba(234,88,12,0.02))", border: "1px solid rgba(234,88,12,0.2)" }}>
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">🔥</span>
              <div>
                <p className="font-bold text-sm" style={{ color: "var(--fg)" }}>Precio de lanzamiento activo</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                  Solo <strong style={{ color: "#ea580c" }}>{10 - SPOTS_TAKEN} cupos</strong> restantes al precio promocional. Se asignan por orden de llegada.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex gap-1" aria-label={`${SPOTS_TAKEN} de 10 cupos tomados`}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3.5 h-3.5 rounded-sm transition-colors"
                    style={{ background: i < SPOTS_TAKEN ? "#ea580c" : "var(--border-strong)" }}
                  />
                ))}
              </div>
              <span className="text-sm font-black text-orange-500">{SPOTS_TAKEN}/10</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── PACKAGES ─────────────────────────────────────────────────────────── */}
      <section id="paquetes" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
                Nuestros Paquetes
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-black tracking-tight leading-tight" style={{ color: "var(--fg)" }}>
                Elegí tu nivel de{" "}
                <span className="gradient-text-animated">automatización</span>
              </h2>
              <p className="text-sm mt-4 max-w-lg mx-auto" style={{ color: "var(--fg-muted)" }}>
                Todos los planes incluyen dominio, hosting, SSL y soporte técnico.
                Sin cobros mensuales. Un solo pago anual.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 items-start">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={i * 90}>
                <div
                  className={`relative rounded-2xl p-7 flex flex-col transition-all duration-250 ${pkg.popular ? "md:-translate-y-3" : ""}`}
                  style={{
                    background: "var(--surface)",
                    border: pkg.popular
                      ? `2px solid ${pkg.accentColor}`
                      : "1px solid var(--border-strong)",
                    boxShadow: pkg.popular
                      ? `0 0 56px ${pkg.accentColor}1a, 0 8px 40px rgba(0,0,0,0.12)`
                      : hoveredPkg === pkg.id
                        ? `0 8px 32px color-mix(in srgb, var(--accent-glow) 50%, transparent)`
                        : "0 1px 2px var(--border)",
                    transform: hoveredPkg === pkg.id && !pkg.popular ? "translateY(-4px)" : undefined,
                  }}
                  onMouseEnter={() => setHoveredPkg(pkg.id)}
                  onMouseLeave={() => setHoveredPkg(null)}
                >
                  {pkg.popular && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white whitespace-nowrap shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${pkg.accentColor}, #4f8ef7)` }}
                    >
                      ⭐ Más Popular
                    </div>
                  )}

                  <div className="mb-5">
                    <div className="text-3xl mb-3" aria-hidden="true">{pkg.icon}</div>
                    <h3 className="text-xl font-black" style={{ color: "var(--fg)" }}>{pkg.name}</h3>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: pkg.accentColor }}>{pkg.tagline}</p>
                    <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--fg-muted)" }}>{pkg.target}</p>
                  </div>

                  <div className="mb-5 pb-5" style={{ borderBottom: "1px solid var(--border)" }}>
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-[1.9rem] font-black" style={{ color: "var(--fg)" }}>{pkg.pricePromo}</span>
                      <span className="text-sm line-through" style={{ color: "var(--fg-muted)" }}>{pkg.priceReal}</span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: "var(--fg-muted)" }}>
                      + {pkg.maintenanceAnnual}/año mantenimiento
                    </p>
                    <div
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: `${pkg.accentColor}18`, color: pkg.accentColor }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      Entrega en {pkg.deliveryWeeks} semana{pkg.deliveryWeeks > 1 ? "s" : ""}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1" aria-label={`Características del plan ${pkg.name}`}>
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--fg)" }}>
                        <CheckIcon color={pkg.accentColor} />
                        {f}
                      </li>
                    ))}
                    {pkg.missing.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm opacity-35" style={{ color: "var(--fg-muted)" }}>
                        <XIcon />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(`Hola! Me interesa el paquete "${pkg.name}" (${pkg.pricePromo}). ¿Podemos hablar?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                    style={{
                      background: pkg.popular
                        ? `linear-gradient(135deg, ${pkg.accentColor}, #4f8ef7)`
                        : "var(--surface-hover)",
                      color: pkg.popular ? "white" : "var(--fg)",
                      border: pkg.popular ? "none" : "1px solid var(--border-strong)",
                    }}
                  >
                    <WhatsAppIcon size={15} />
                    Quiero este plan
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* E-commerce row */}
          <ScrollReveal delay={270}>
            <div
              className="mt-6 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div>
                <p className="font-bold text-base flex items-center gap-2" style={{ color: "var(--fg)" }}>
                  <span aria-hidden="true">🛒</span>
                  E-commerce / Proyectos a la Medida
                </p>
                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>
                  Tiendas en línea con pasarelas de pago nacionales e internacionales. Cualquier lógica de negocio personalizada. Desde <strong style={{ color: "var(--fg)" }}>₡800,000</strong>.
                </p>
              </div>
              <a
                href={waLink("Hola! Necesito cotización para un e-commerce o proyecto a la medida.")}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:brightness-110"
                style={{ color: "var(--fg)", border: "1px solid var(--border-strong)", background: "var(--bg-subtle)" }}
              >
                Solicitar cotización →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-5" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
                Nuestra Ventaja Competitiva
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-black tracking-tight" style={{ color: "var(--fg)" }}>
                Por qué elegir <span className="gradient-text-animated">Ediloaz</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 70}>
                <div
                  className="rounded-2xl p-7 glow-card transition-all duration-200 hover:-translate-y-1 flex gap-5"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="text-3xl shrink-0 mt-0.5" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold" style={{ color: "var(--fg)" }}>{item.title}</h3>
                      <span
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0"
                        style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                      >
                        {item.stat}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
                Proceso de Entrega
              </p>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight" style={{ color: "var(--fg)" }}>
                Tu web lista en <span className="gradient-text-animated">2 semanas</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div
              className="absolute left-6 top-8 bottom-8 w-px hidden sm:block"
              style={{ background: "linear-gradient(to bottom, var(--accent), #7c3aed, transparent)" }}
              aria-hidden="true"
            />
            <div className="space-y-5">
              {process.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 80}>
                  <div
                    className="rounded-2xl p-6 sm:pl-16 relative glow-card transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <div
                      className="hidden sm:flex absolute left-3.5 top-6 w-5 h-5 rounded-full items-center justify-center text-white text-[10px] font-black z-10"
                      style={{ background: "linear-gradient(135deg, var(--accent), #7c3aed)" }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
                          {step.time}
                        </p>
                        <h3 className="font-bold text-base mb-1" style={{ color: "var(--fg)" }}>{step.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{step.desc}</p>
                      </div>
                      <span
                        className="shrink-0 text-3xl font-black opacity-10 hidden md:block"
                        style={{ color: "var(--fg)" }}
                        aria-hidden="true"
                      >
                        {step.step}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── UPSELLS ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-5" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
                Servicios Adicionales
              </p>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight" style={{ color: "var(--fg)" }}>
                Potenciá tu presencia digital
              </h2>
              <p className="text-sm mt-3" style={{ color: "var(--fg-muted)" }}>
                Servicios complementarios para maximizar el impacto de tu inversión
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {upsells.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 80}>
                <div
                  className="rounded-2xl p-6 glow-card transition-all duration-200 hover:-translate-y-1 flex flex-col"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl" aria-hidden="true">{item.icon}</div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${item.tagColor}15`, color: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold mb-1" style={{ color: "var(--fg)" }}>{item.name}</h3>
                  <p className="text-xl font-black mb-3" style={{ color: "var(--accent)" }}>{item.price}</p>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--fg-muted)" }}>{item.desc}</p>
                  <a
                    href={waLink(`Hola! Me interesa agregar "${item.name}" a mi proyecto.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-all hover:brightness-110"
                    style={{ color: "var(--fg)", borderColor: "var(--border-strong)" }}
                  >
                    <WhatsAppIcon size={13} />
                    Agregar a mi proyecto
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONBOARDING FORM ──────────────────────────────────────────────────── */}
      <section id="configurar" className="py-24 px-5 relative overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 25% 60%, var(--accent-glow) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
                Configurá tu proyecto
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight" style={{ color: "var(--fg)" }}>
                Tu web comienza <span className="gradient-text-animated">aquí</span>
              </h2>
              <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: "var(--fg-muted)" }}>
                4 pasos, 2 minutos. Tu brief llega a nuestro WhatsApp y arrancamos de inmediato.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-[1fr_400px] gap-6 items-start">

              {/* ── FORM COLUMN ── */}
              <div className="rounded-2xl overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--border-strong)" }}>

                {/* Top progress bar */}
                <div className="h-1 w-full" style={{ background: "var(--border)" }}>
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${progressPct}%`,
                      background: formComplete
                        ? "linear-gradient(90deg,#059669,#34d399)"
                        : "linear-gradient(90deg, var(--accent), #7c3aed)",
                    }}
                  />
                </div>

                {/* Step tabs */}
                <div className="flex border-b" style={{ borderColor: "var(--border)" }}>
                  {[
                    { label: "Negocio", icon: "🏢" },
                    { label: "Paquete", icon: "📦" },
                    { label: "Detalles", icon: "✏️" },
                    { label: "Colores",  icon: "🎨" },
                  ].map((s, i) => (
                    <button
                      key={s.label}
                      onClick={() => i < step && setStep(i)}
                      disabled={i > step}
                      aria-current={i === step ? "step" : undefined}
                      className="flex-1 flex flex-col items-center gap-1 py-3.5 text-[11px] font-semibold transition-all duration-200 relative disabled:cursor-default"
                      style={{
                        color: i === step ? "var(--accent)" : i < step ? "var(--fg)" : "var(--fg-muted)",
                        background: i === step ? "var(--accent-glow)" : "transparent",
                        cursor: i < step ? "pointer" : undefined,
                      }}
                    >
                      <span className="text-base leading-none">{i < step ? "✓" : s.icon}</span>
                      <span className="hidden sm:block">{s.label}</span>
                      {i === step && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "var(--accent)" }} />
                      )}
                    </button>
                  ))}
                </div>

                {/* Step content */}
                <div className="p-8">

                  {step === 0 && (
                    <div style={{ animation: "fadeSlideUp 0.25s ease" }}>
                      <h3 className="text-xl font-black mb-1" style={{ color: "var(--fg)" }}>
                        ¿Qué tipo de negocio tenés?
                      </h3>
                      <p className="text-sm mb-7" style={{ color: "var(--fg-muted)" }}>
                        Hacé click y pasamos al siguiente paso automáticamente.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {businessTypes.map(b => (
                          <button
                            key={b.id}
                            onClick={() => { setFormData(d => ({ ...d, businessType: b.id })); setStep(1); }}
                            className="group p-4 rounded-xl text-center transition-all duration-150 hover:scale-[1.04] hover:-translate-y-1 cursor-pointer"
                            style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                            aria-label={b.id}
                          >
                            <div className="text-3xl mb-2 transition-transform duration-150 group-hover:scale-110">{b.icon}</div>
                            <div className="text-[11px] font-semibold leading-tight" style={{ color: "var(--fg-muted)" }}>{b.id}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div style={{ animation: "fadeSlideUp 0.25s ease" }}>
                      <h3 className="text-xl font-black mb-1" style={{ color: "var(--fg)" }}>
                        ¿Qué paquete te interesa?
                      </h3>
                      <p className="text-sm mb-7" style={{ color: "var(--fg-muted)" }}>
                        Podés cambiarlo después. El precio es de lanzamiento.
                      </p>
                      <div className="space-y-3">
                        {([...packages, {
                          id: "ecommerce" as PkgId,
                          icon: "🛒",
                          name: "E-commerce / A la Medida",
                          tagline: "Cotización personalizada",
                          pricePromo: "Desde ₡800,000",
                          priceReal: "",
                          popular: false,
                          accentColor: "",
                        }]).map(pkg => (
                          <button
                            key={pkg.id}
                            onClick={() => { setFormData(d => ({ ...d, packageId: pkg.id })); setStep(2); }}
                            className="w-full p-4 rounded-xl text-left transition-all duration-150 hover:scale-[1.01] hover:-translate-y-0.5 cursor-pointer group"
                            style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{pkg.icon}</span>
                                <div>
                                  <p className="font-bold text-sm" style={{ color: "var(--fg)" }}>{pkg.name}</p>
                                  <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>{pkg.tagline}</p>
                                </div>
                              </div>
                              <div className="text-right shrink-0">
                                <p className="font-black text-sm" style={{ color: "var(--accent)" }}>{pkg.pricePromo}</p>
                                {pkg.priceReal && (
                                  <p className="text-[10px] line-through" style={{ color: "var(--fg-muted)" }}>{pkg.priceReal}</p>
                                )}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                      <button onClick={() => setStep(0)} className="mt-4 text-xs font-semibold hover:underline" style={{ color: "var(--fg-muted)" }}>
                        ← Volver
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div style={{ animation: "fadeSlideUp 0.25s ease" }}>
                      <h3 className="text-xl font-black mb-1" style={{ color: "var(--fg)" }}>
                        ¿Cómo se llama tu negocio?
                      </h3>
                      <p className="text-sm mb-7" style={{ color: "var(--fg-muted)" }}>
                        Lo verás aparecer en la preview de tu sitio en tiempo real.
                      </p>
                      <div className="space-y-5">
                        <div>
                          <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "var(--fg-muted)" }}>
                            Nombre del negocio *
                          </label>
                          <input
                            type="text"
                            placeholder="ej. Hotel Paraíso Verde"
                            value={formData.businessName}
                            onChange={e => setFormData(d => ({ ...d, businessName: e.target.value }))}
                            className="w-full px-4 py-3.5 rounded-xl outline-none transition-all"
                            style={{
                              background: "var(--bg-subtle)",
                              border: "1px solid var(--border-strong)",
                              color: "var(--fg)",
                              fontSize: "1rem",
                            }}
                            autoFocus
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "var(--fg-muted)" }}>
                            Dominio soñado <span className="font-normal normal-case opacity-60">(opcional)</span>
                          </label>
                          <div className="flex items-stretch rounded-xl overflow-hidden" style={{ border: "1px solid var(--border-strong)" }}>
                            <span className="flex items-center px-4 text-sm font-semibold shrink-0" style={{ background: "var(--border)", color: "var(--fg-muted)" }}>
                              www.
                            </span>
                            <input
                              type="text"
                              placeholder="minegocio.com"
                              value={formData.domain}
                              onChange={e => setFormData(d => ({ ...d, domain: e.target.value }))}
                              className="flex-1 px-4 py-3.5 outline-none text-sm"
                              style={{ background: "var(--bg-subtle)", color: "var(--fg)" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-7">
                        <button onClick={() => setStep(1)} className="px-5 py-3 rounded-xl text-sm font-bold border" style={{ color: "var(--fg-muted)", borderColor: "var(--border)" }}>
                          ← Atrás
                        </button>
                        <button
                          onClick={() => formData.businessName && setStep(3)}
                          disabled={!formData.businessName}
                          className="flex-1 py-3 rounded-xl font-bold text-sm disabled:opacity-40 hover:brightness-110 transition-all"
                          style={{ background: "var(--accent)", color: "white" }}
                        >
                          Continuar →
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div style={{ animation: "fadeSlideUp 0.25s ease" }}>
                      <h3 className="text-xl font-black mb-1" style={{ color: "var(--fg)" }}>
                        ¿Qué estilo de colores preferís?
                      </h3>
                      <p className="text-sm mb-7" style={{ color: "var(--fg-muted)" }}>
                        Mirá la preview a la derecha — los colores cambian al instante.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {palettes.map(p => (
                          <button
                            key={p.id}
                            onClick={() => setFormData(d => ({ ...d, palette: p.id }))}
                            className="p-4 rounded-xl transition-all duration-150 hover:scale-[1.03] text-left cursor-pointer"
                            style={{
                              background: formData.palette === p.id ? "var(--accent-glow)" : "var(--bg-subtle)",
                              border: formData.palette === p.id ? "2px solid var(--accent)" : "1px solid var(--border)",
                            }}
                            aria-pressed={formData.palette === p.id}
                          >
                            <div className="flex gap-1.5 mb-2.5 items-end">
                              {p.colors.map((c, ci) => (
                                <div
                                  key={c}
                                  className="rounded-full shadow-sm"
                                  style={{ background: c, width: ci === 0 ? 22 : 16, height: ci === 0 ? 22 : 16 }}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="text-[11px] font-bold" style={{ color: "var(--fg)" }}>{p.id}</p>
                          </button>
                        ))}
                      </div>

                      {formComplete && (
                        <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.2)" }}>
                          <p className="text-xs font-bold mb-1.5 flex items-center gap-1.5" style={{ color: "#059669" }}>
                            ✓ Tu brief está listo
                          </p>
                          <p className="text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                            <strong style={{ color: "var(--fg)" }}>{formData.businessName}</strong>
                            {" · "}{formData.businessType}
                            {" · "}{packages.find(p => p.id === formData.packageId)?.name ?? "E-commerce"}
                            {" · "}{formData.palette}
                          </p>
                        </div>
                      )}

                      <div className="flex gap-3 mt-5">
                        <button onClick={() => setStep(2)} className="px-5 py-3.5 rounded-xl text-sm font-bold border" style={{ color: "var(--fg-muted)", borderColor: "var(--border)" }}>
                          ← Atrás
                        </button>
                        <a
                          href={formComplete ? buildWALink() : undefined}
                          target={formComplete ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          aria-disabled={!formComplete}
                          className={`flex-1 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${formComplete ? "hover:brightness-110 hover:scale-[1.01]" : "opacity-35 pointer-events-none"}`}
                          style={{ background: "linear-gradient(135deg, #25d366, #128c7e)", color: "white" }}
                        >
                          <WhatsAppIcon size={16} />
                          ¡Enviar a WhatsApp!
                        </a>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* ── LIVE PREVIEW COLUMN ── */}
              <div className="flex flex-col gap-4 lg:sticky lg:top-24 max-w-sm mx-auto w-full lg:max-w-none">

                {/* Mobile / tablet live header */}
                <div className="lg:hidden flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: "#25d366", animation: "pulse-glow 1.8s ease-in-out infinite" }}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-bold" style={{ color: "var(--fg)" }}>Vista previa en vivo</span>
                  </div>
                  <span className="text-xs" style={{ color: "var(--fg-muted)" }}>↑ los cambios se reflejan aquí ↓</span>
                </div>

                {/* Browser mockup */}
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 relative"
                  style={{
                    border: `1px solid ${previewPulse ? previewAccent + "80" : "var(--border-strong)"}`,
                    boxShadow: previewPulse
                      ? `0 0 0 3px ${previewAccent}30, 0 8px 32px ${previewAccent}18`
                      : "0 4px 24px rgba(0,0,0,0.10)",
                  }}
                >
                  {/* "Actualizado" flash badge — mobile only */}
                  {previewPulse && (
                    <div
                      className="lg:hidden absolute top-2 right-2 z-10 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold text-white"
                      style={{ background: "#059669", animation: "scaleIn 0.2s ease" }}
                      aria-live="polite"
                    >
                      ✓ Actualizado
                    </div>
                  )}
                  {/* Chrome bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border)" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                    <div className="flex-1 mx-2 px-3 py-1 rounded text-[10px] font-mono truncate" style={{ background: "var(--border)", color: "var(--fg-muted)" }}>
                      {formData.domain ? `www.${formData.domain}` : "www.tunegocio.com"}
                    </div>
                  </div>

                  {/* Site preview */}
                  <div style={{ background: previewBg }}>
                    {/* Nav */}
                    <div className="px-3 py-2 flex items-center justify-between transition-all duration-500" style={{ background: previewAccent }}>
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded bg-white opacity-25" />
                        <div className="w-12 h-1 rounded-full bg-white opacity-60" />
                      </div>
                      <div className="flex gap-1.5 items-center">
                        {(formData.packageId === "corporativo" || formData.packageId === "profesional" || formData.packageId === "ecommerce"
                          ? [1,2,3,4]
                          : [1,2]
                        ).map(i => <div key={i} className="w-5 h-0.5 rounded-full bg-white opacity-35" />)}
                        {formData.packageId === "ecommerce" && (
                          <div className="text-white opacity-70 text-[9px] ml-0.5">🛒</div>
                        )}
                        <div className="w-10 h-4 rounded-full bg-white opacity-15 ml-1" />
                      </div>
                    </div>

                    {/* Package label strip */}
                    {formData.packageId && (
                      <div
                        className="px-3 py-1 flex items-center justify-end gap-1 transition-all duration-500"
                        style={{ background: `${previewAccent}10`, borderBottom: `1px solid ${previewAccent}20` }}
                      >
                        <span className="text-[8px] font-bold uppercase tracking-widest transition-all duration-500" style={{ color: previewAccent }}>
                          {packages.find(p => p.id === formData.packageId)?.icon}{" "}
                          {packages.find(p => p.id === formData.packageId)?.name ?? "E-commerce"}
                        </span>
                      </div>
                    )}

                    {/* Hero */}
                    <div className={`px-5 text-center transition-all duration-500 ${formData.packageId === "ecommerce" ? "pt-4 pb-3" : "py-7"}`}>
                      {/* Business type icon */}
                      {formData.businessType && (
                        <div
                          className="text-xl mb-1.5 leading-none"
                          style={{ animation: "scaleIn 0.3s ease" }}
                          aria-hidden="true"
                        >
                          {businessTypes.find(b => b.id === formData.businessType)?.icon}
                        </div>
                      )}
                      <p
                        className="font-black mb-2 truncate transition-all duration-500"
                        style={{ color: previewAccent, fontSize: "10px" }}
                      >
                        {formData.businessName || (formData.businessType ? formData.businessType : "Tu Negocio")}
                      </p>
                      <div className="w-4/5 h-1.5 rounded-full mx-auto mb-1" style={{ background: previewAccent, opacity: 0.22 }} />
                      <div className="w-3/5 h-1 rounded-full mx-auto mb-1" style={{ background: previewAccent, opacity: 0.15 }} />
                      {formData.packageId !== "landing" && (
                        <div className="w-2/5 h-1 rounded-full mx-auto mb-1" style={{ background: previewAccent, opacity: 0.09 }} />
                      )}
                      <div className="mt-4">
                        <div
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-white text-[8px] font-bold transition-all duration-500"
                          style={{ background: previewAccent }}
                        >
                          Contáctanos →
                        </div>
                      </div>
                    </div>

                    {/* Landing: 2 simple cards */}
                    {(!formData.packageId || formData.packageId === "landing") && (
                      <div className="px-4 pb-5 grid grid-cols-2 gap-2" style={{ animation: "fadeSlideUp 0.3s ease" }}>
                        {[1,2].map(i => (
                          <div key={i} className="rounded-lg p-2.5" style={{ background: `${previewAccent}14`, border: `1px solid ${previewAccent}22` }}>
                            <div className="w-4 h-4 rounded mb-1.5" style={{ background: `${previewAccent}38` }} />
                            <div className="w-full h-1 rounded-full mb-1" style={{ background: `${previewAccent}28` }} />
                            <div className="w-3/4 h-1 rounded-full" style={{ background: `${previewAccent}18` }} />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Corporativo: 3 cards + blog list */}
                    {formData.packageId === "corporativo" && (
                      <div style={{ animation: "fadeSlideUp 0.3s ease" }}>
                        <div className="px-4 pb-2 grid grid-cols-3 gap-1.5">
                          {[1,2,3].map(i => (
                            <div key={i} className="rounded-md p-2" style={{ background: `${previewAccent}14`, border: `1px solid ${previewAccent}22` }}>
                              <div className="w-4 h-4 rounded mb-1" style={{ background: `${previewAccent}38` }} />
                              <div className="w-full h-0.5 rounded-full mb-0.5" style={{ background: `${previewAccent}28` }} />
                              <div className="w-2/3 h-0.5 rounded-full" style={{ background: `${previewAccent}18` }} />
                            </div>
                          ))}
                        </div>
                        <div className="px-4 pb-4 space-y-1">
                          <p className="text-[7px] font-bold uppercase tracking-widest mb-1.5" style={{ color: previewAccent }}>Blog</p>
                          {[1,2].map(i => (
                            <div key={i} className="flex items-center gap-2 px-2 py-1 rounded" style={{ background: `${previewAccent}09` }}>
                              <div className="w-2.5 h-2.5 rounded shrink-0" style={{ background: `${previewAccent}30` }} />
                              <div className="flex-1 h-0.5 rounded-full" style={{ background: `${previewAccent}22` }} />
                              <div className="w-4 h-0.5 rounded-full" style={{ background: `${previewAccent}15` }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Profesional: 3 cards + booking calendar */}
                    {formData.packageId === "profesional" && (
                      <div style={{ animation: "fadeSlideUp 0.3s ease" }}>
                        <div className="px-4 pb-2 grid grid-cols-3 gap-1.5">
                          {[1,2,3].map(i => (
                            <div key={i} className="rounded-md p-2" style={{ background: `${previewAccent}14`, border: `1px solid ${previewAccent}22` }}>
                              <div className="w-4 h-4 rounded mb-1" style={{ background: `${previewAccent}38` }} />
                              <div className="w-full h-0.5 rounded-full mb-0.5" style={{ background: `${previewAccent}28` }} />
                              <div className="w-2/3 h-0.5 rounded-full" style={{ background: `${previewAccent}18` }} />
                            </div>
                          ))}
                        </div>
                        <div className="px-4 pb-4">
                          <div className="rounded-lg p-2.5" style={{ background: `${previewAccent}0c`, border: `1px solid ${previewAccent}28` }}>
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-[7px] font-bold uppercase tracking-widest" style={{ color: previewAccent }}>Reservas</p>
                              <div className="w-8 h-0.5 rounded-full" style={{ background: `${previewAccent}30` }} />
                            </div>
                            <div className="grid grid-cols-7 gap-0.5">
                              {Array.from({ length: 21 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="aspect-square rounded-sm"
                                  style={{
                                    background: i === 6 || i === 13 ? previewAccent : `${previewAccent}20`,
                                    opacity: i > 17 ? 0.3 : 1,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* E-commerce: product grid */}
                    {formData.packageId === "ecommerce" && (
                      <div className="px-4 pb-4 grid grid-cols-2 gap-2" style={{ animation: "fadeSlideUp 0.3s ease" }}>
                        {[1,2,3,4].map(i => (
                          <div key={i} className="rounded-lg overflow-hidden" style={{ border: `1px solid ${previewAccent}22` }}>
                            <div className="h-8 flex items-center justify-center" style={{ background: `${previewAccent}22` }}>
                              <div className="w-4 h-4 rounded-full opacity-50" style={{ background: previewAccent }} />
                            </div>
                            <div className="p-1.5">
                              <div className="w-full h-0.5 rounded-full mb-1" style={{ background: `${previewAccent}28` }} />
                              <div className="flex items-center justify-between">
                                <div className="w-7 h-0.5 rounded-full" style={{ background: `${previewAccent}45` }} />
                                <div className="px-1.5 py-0.5 rounded text-[6px] font-bold text-white" style={{ background: previewAccent }}>+ Agregar</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="px-4 py-2.5 flex items-center justify-between transition-all duration-500" style={{ background: `${previewAccent}d0` }}>
                      <div className="w-8 h-0.5 rounded-full bg-white opacity-40" />
                      <div className="flex gap-1">
                        {[1,2,3].map(i => <div key={i} className="w-3.5 h-3.5 rounded bg-white opacity-15" />)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brief summary card */}
                <div className="rounded-2xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--fg-muted)" }}>Brief de Proyecto</p>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full transition-all duration-300"
                      style={{
                        background: formComplete ? "rgba(5,150,105,0.15)" : "var(--accent-glow)",
                        color: formComplete ? "#059669" : "var(--accent)",
                      }}
                    >
                      {formComplete ? "✓ Completo" : `${filledCount}/4`}
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      { label: "Negocio",  value: formData.businessName || null,  icon: "🏢" },
                      { label: "Tipo",     value: formData.businessType || null,   icon: "📁" },
                      { label: "Paquete",  value: packages.find(p => p.id === formData.packageId)?.name ?? (formData.packageId === "ecommerce" ? "E-commerce" : null), icon: "📦" },
                      { label: "Dominio",  value: formData.domain ? `www.${formData.domain}` : null, icon: "🌐" },
                    ].map(item => (
                      <div key={item.label} className="flex items-center gap-2.5">
                        <span className="text-base shrink-0">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "var(--fg-muted)" }}>{item.label}</p>
                          <p className="text-xs font-semibold truncate mt-0.5" style={{ color: item.value ? "var(--fg)" : "var(--border-strong)" }}>
                            {item.value || "Pendiente"}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-center gap-2.5">
                      <span className="text-base shrink-0">🎨</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "var(--fg-muted)" }}>Colores</p>
                        {formData.palette ? (
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="flex gap-1">
                              {selectedPalette?.colors.slice(0,2).map(c => (
                                <div key={c} className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ background: c }} />
                              ))}
                            </div>
                            <p className="text-xs font-semibold truncate" style={{ color: "var(--fg)" }}>{formData.palette}</p>
                          </div>
                        ) : (
                          <p className="text-xs font-semibold mt-0.5" style={{ color: "var(--border-strong)" }}>Pendiente</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-semibold" style={{ color: "var(--fg-muted)" }}>Progreso del brief</span>
                      <span className="text-[10px] font-black" style={{ color: formComplete ? "#059669" : "var(--accent)" }}>
                        {progressPct}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border-strong)" }}>
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${progressPct}%`,
                          background: formComplete
                            ? "linear-gradient(90deg,#059669,#34d399)"
                            : "linear-gradient(90deg, var(--accent), #7c3aed)",
                        }}
                      />
                    </div>
                  </div>
                </div>

              </div>
              {/* end preview column */}

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-5" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight" style={{ color: "var(--fg)" }}>
                Preguntas frecuentes
              </h2>
              <p className="text-sm mt-3" style={{ color: "var(--fg-muted)" }}>
                Todo lo que necesitás saber antes de empezar
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-2.5">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div
                  className="rounded-xl overflow-hidden transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    border: openFaq === i ? "1px solid var(--border-strong)" : "1px solid var(--border)",
                  }}
                >
                  <button
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-sm leading-snug" style={{ color: "var(--fg)" }}>{faq.q}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="shrink-0 transition-transform duration-200"
                      style={{
                        color: "var(--fg-muted)",
                        transform: openFaq === i ? "rotate(180deg)" : "none",
                      }}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="py-28 px-5 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, var(--accent-glow) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--accent), #7c3aed, transparent)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--accent)" }}>
              ¿Listo para empezar?
            </p>
            <h2 className="text-[clamp(2rem,6vw,4rem)] font-black tracking-tight leading-tight mb-5" style={{ color: "var(--fg)" }}>
              Tu competencia ya{" "}
              <span className="gradient-text-animated">está en línea</span>
            </h2>
            <p className="text-base mb-10 max-w-md mx-auto leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Cada día sin web profesional es un cliente que va a la competencia.
              Empezá hoy. Resultados en 2 semanas. Sin letra chica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink("Hola! Quiero iniciar mi proyecto de sitio web con Ediloaz. ¿Por dónde empezamos?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #25d366, #128c7e)",
                  color: "white",
                  boxShadow: "0 8px 32px rgba(37,211,102,0.25)",
                }}
              >
                <WhatsAppIcon />
                Iniciar por WhatsApp
              </a>
              <button
                onClick={() => document.getElementById("configurar")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 border hover:brightness-110"
                style={{ color: "var(--fg)", borderColor: "var(--border-strong)", background: "var(--surface)" }}
              >
                Configurar mi proyecto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Trust micro-copy */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-10">
              {["Sin contratos largos", "50% al inicio · 50% al entregar", "Dominio + Hosting incluidos", "Respuesta en menos de 24h"].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--fg-muted)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
