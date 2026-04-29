"use client";

import Link from "next/link";
import PageLayout from "@/components/page-layout";
import { ScrollReveal } from "@/components/scroll-reveal";

const WA_PHONE = "50686523185";

function wa(msg: string) {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
}

const services = [
  {
    id: "branding",
    icon: "🎨",
    name: "Kit de Identidad Visual",
    price: "₡50,000",
    tag: "Branding",
    tagColor: "#7c3aed",
    tagBg: "rgba(124,58,237,0.12)",
    accentColor: "#7c3aed",
    accentGlow: "rgba(124,58,237,0.12)",
    delivery: "48 horas",
    tagline: "Tu marca, reconocible al instante.",
    problem:
      "El 80% de los negocios pierden clientes porque su imagen parece improvisada. Un logo hecho en Canva en 10 minutos transmite exactamente eso. Nosotros construimos una identidad visual coherente con IA de diseño + criterio humano.",
    deliverables: [
      "Logotipo en versión color, blanco y negro",
      "Paleta cromática principal y secundaria (6–8 tonos)",
      "Tipografía principal + tipografía de apoyo",
      "Guía básica de marca: cómo usar el logo correctamente",
      "Tarjeta de presentación digital lista para compartir",
      "Archivos en PNG, SVG y PDF en alta resolución",
      "2 rondas de ajustes incluidas sin costo extra",
    ],
    mockup: "branding",
    waMsg:
      "Hola! 👋 Me interesa el Kit de Identidad Visual (₡50,000). ¿Me podés dar más información?",
  },
  {
    id: "maps",
    icon: "📍",
    name: "Posicionamiento Google Maps",
    price: "₡25,000",
    tag: "SEO Local",
    tagColor: "#ea580c",
    tagBg: "rgba(234,88,12,0.12)",
    accentColor: "#ea580c",
    accentGlow: "rgba(234,88,12,0.12)",
    delivery: "5 días hábiles",
    tagline: "Aparecé primero cuando te buscan cerca.",
    problem:
      "El 46% de las búsquedas en Google son locales. Si tu negocio no aparece en el mapa cuando alguien busca «restaurante cerca» o «clínica en [tu ciudad]», le estás regalando clientes a tu competencia — gratis.",
    deliverables: [
      "Auditoría completa de tu ficha Google Business actual",
      "Optimización de categorías y atributos del negocio",
      "Descripción redactada con keywords locales de alto impacto",
      "Horarios, servicios y precios actualizados y verificados",
      "5 fotos organizadas y optimizadas para el perfil",
      "Respuesta profesional a reseñas pendientes",
      "Informe de visibilidad antes/después del trabajo",
    ],
    mockup: "maps",
    waMsg:
      "Hola! 👋 Me interesa el servicio de Posicionamiento Google Maps (₡25,000). ¿Me podés dar más información?",
  },
  {
    id: "email",
    icon: "✉️",
    name: "Correo Corporativo",
    price: "₡25,000",
    tag: "Profesional",
    tagColor: "#059669",
    tagBg: "rgba(5,150,105,0.12)",
    accentColor: "#059669",
    accentGlow: "rgba(5,150,105,0.12)",
    delivery: "24 horas",
    tagline: "De miempresa@gmail.com a info@tunegocio.com.",
    problem:
      "Usar Gmail o Hotmail para tu negocio envía una señal involuntaria: «somos pequeños». Un correo con tu propio dominio cuesta menos de lo que imaginás y multiplica la percepción de profesionalismo desde el primer contacto.",
    deliverables: [
      "Configuración completa de Google Workspace (o alternativa)",
      "Hasta 3 cuentas: info@, ventas@, soporte@ — las que necesités",
      "Integración con Gmail en celular y computadora",
      "Firma de correo profesional en HTML con logo y datos de contacto",
      "Tutorial en video de cómo usar el correo desde cualquier dispositivo",
      "Soporte de configuración por 15 días posteriores a la entrega",
    ],
    mockup: "email",
    waMsg:
      "Hola! 👋 Me interesa el servicio de Correo Corporativo (₡25,000). ¿Me podés dar más información?",
  },
];

const bundleWaMsg =
  "Hola! 👋 Me interesa el Kit Completo (Identidad Visual + Google Maps + Correo Corporativo) a ₡90,000. ¿Me podés dar más información?";

function BrandingMockup({ color }: { color: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg" style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}>
          N
        </div>
        <div className="w-24 h-2 rounded-full" style={{ background: color }} />
        <div className="w-16 h-1 rounded-full opacity-40" style={{ background: color }} />
      </div>
      <div className="flex gap-2">
        {["#7c3aed", "#a78bfa", "#f5f3ff", "#0c0c0c", "#ffffff"].map((c) => (
          <div key={c} className="w-6 h-6 rounded-full shadow-sm border border-black/10" style={{ background: c }} />
        ))}
      </div>
      <div className="text-center space-y-1">
        <div className="text-[9px] font-bold uppercase tracking-widest opacity-50" style={{ color }}>Tipografía</div>
        <div className="text-base font-black" style={{ color }}>Aa Bb Cc</div>
        <div className="text-[10px]" style={{ color, opacity: 0.6 }}>Regular · Bold · Italic</div>
      </div>
    </div>
  );
}

function MapsMockup({ color }: { color: string }) {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-4">
      <div className="flex-1 rounded-xl relative overflow-hidden" style={{ background: "#e8f0e8" }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute h-px w-full opacity-20" style={{ background: "#666", top: `${25 * (i + 1)}%` }} />
        ))}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute w-px h-full opacity-20" style={{ background: "#666", left: `${25 * (i + 1)}%` }} />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm shadow-lg" style={{ background: color }}>📍</div>
            <div className="w-1 h-3 rounded-full" style={{ background: color }} />
          </div>
        </div>
      </div>
      <div className="rounded-xl p-3 space-y-1.5" style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded text-sm flex items-center justify-center" style={{ background: color + "20" }}>📍</div>
          <div className="flex-1">
            <div className="h-2 rounded-full w-3/4 mb-1" style={{ background: color + "60" }} />
            <div className="h-1.5 rounded-full w-1/2 opacity-40" style={{ background: color }} />
          </div>
        </div>
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-[10px]" style={{ color: i <= 4 ? "#f59e0b" : "var(--border-strong)" }}>★</span>
          ))}
          <span className="text-[9px] ml-1 opacity-50" style={{ color }}>4.8 (127)</span>
        </div>
        <div className="flex gap-1.5">
          {["Abierto", "Sitio web", "Llamar"].map(label => (
            <div key={label} className="px-2 py-0.5 rounded-full text-[8px] font-bold text-white" style={{ background: color + "cc" }}>{label}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EmailMockup({ color }: { color: string }) {
  const emails = [
    { from: "info@", subject: "Confirmación de cita", time: "09:12" },
    { from: "ventas@", subject: "Propuesta para cliente", time: "Ayer" },
    { from: "soporte@", subject: "Seguimiento #1042", time: "Lunes" },
  ];
  return (
    <div className="w-full h-full flex flex-col p-4 gap-3">
      <div className="flex items-center gap-2 pb-2" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold" style={{ background: color }}>@</div>
        <div>
          <div className="text-[10px] font-bold" style={{ color }}>tunegocio.com</div>
          <div className="text-[9px] opacity-50" style={{ color }}>Google Workspace</div>
        </div>
      </div>
      <div className="space-y-2">
        {emails.map((e, i) => (
          <div key={i} className="flex items-center gap-2 p-2 rounded-lg" style={{ background: i === 0 ? color + "12" : "transparent", border: i === 0 ? `1px solid ${color}25` : "none" }}>
            <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-white text-[9px] font-bold" style={{ background: color + (i === 0 ? "ee" : "60") }}>
              {e.from[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-bold truncate" style={{ color }}>{e.from}tunegocio.com</div>
              <div className="text-[8px] truncate opacity-60" style={{ color }}>{e.subject}</div>
            </div>
            <div className="text-[8px] opacity-40 shrink-0" style={{ color }}>{e.time}</div>
          </div>
        ))}
      </div>
      <div className="mt-auto p-2 rounded-xl text-center" style={{ background: color + "10", border: `1px dashed ${color}40` }}>
        <div className="text-[9px] font-bold" style={{ color }}>+ Nueva firma HTML incluida</div>
      </div>
    </div>
  );
}

function ServiceMockup({ id, color }: { id: string; color: string }) {
  if (id === "branding") return <BrandingMockup color={color} />;
  if (id === "maps") return <MapsMockup color={color} />;
  return <EmailMockup color={color} />;
}

export default function AdicionalesPage() {
  return (
    <PageLayout>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-5 text-center">
        <div className="hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, var(--accent-glow) 0%, transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <ScrollReveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
              style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--accent-glow)" }}
            >
              ✦ Servicios Adicionales
            </div>
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-black tracking-tight leading-[1.05] mb-5" style={{ color: "var(--fg)" }}>
              El extra que marca{" "}
              <span className="gradient-text-animated">la diferencia</span>
            </h1>
            <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: "var(--fg-muted)" }}>
              Una web profesional es el punto de partida. Estos servicios complementarios
              aseguran que tu negocio luzca sólido, aparezca en Google y comunique
              con imagen de empresa desde el día uno.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              {services.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 hover:scale-[1.04]"
                  style={{ background: s.accentGlow, color: s.accentColor, border: `1px solid ${s.accentColor}30` }}
                >
                  <span>{s.icon}</span>
                  {s.name}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-8 px-5 space-y-10 max-w-5xl mx-auto">
        {services.map((s, idx) => (
          <ScrollReveal key={s.id} delay={idx * 60}>
            <div
              id={s.id}
              className="rounded-3xl overflow-hidden scroll-mt-24"
              style={{ background: "var(--surface)", border: "1px solid var(--border-strong)" }}
            >
              <div className="grid md:grid-cols-[1fr_280px]">

                {/* Content */}
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                      style={{ background: s.tagBg, color: s.tagColor }}
                    >
                      {s.tag}
                    </span>
                    <span
                      className="text-lg font-black px-3 py-1 rounded-lg"
                      style={{ background: s.accentGlow, color: s.accentColor }}
                    >
                      {s.price}
                    </span>
                    <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
                      Entrega en {s.delivery}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{s.icon}</span>
                    <h2 className="text-2xl font-black" style={{ color: "var(--fg)" }}>{s.name}</h2>
                  </div>

                  <p className="text-sm font-semibold mb-3" style={{ color: s.accentColor }}>{s.tagline}</p>

                  <p className="text-sm leading-relaxed mb-7" style={{ color: "var(--fg-muted)" }}>
                    {s.problem}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--fg-muted)" }}>
                      Qué incluye
                    </p>
                    <ul className="space-y-2.5">
                      {s.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--fg)" }}>
                          <span
                            className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-black"
                            style={{ background: s.accentColor }}
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={wa(s.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-150 hover:brightness-110 hover:scale-[1.02]"
                    style={{ background: `linear-gradient(135deg, ${s.accentColor}, ${s.accentColor}bb)` }}
                  >
                    <WhatsAppIcon size={15} />
                    Me interesa este servicio
                  </a>
                </div>

                {/* Mockup visual */}
                <div
                  className="hidden md:flex items-stretch"
                  style={{ borderLeft: "1px solid var(--border)" }}
                >
                  <div
                    className="w-full"
                    style={{ background: s.accentGlow }}
                  >
                    <ServiceMockup id={s.id} color={s.accentColor} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* ── BUNDLE ── */}
      <section className="py-16 px-5 max-w-5xl mx-auto">
        <ScrollReveal>
          <div
            className="rounded-3xl p-8 md:p-12 text-center popular-glow"
            style={{
              background: "linear-gradient(135deg, var(--bg-subtle) 0%, var(--surface) 100%)",
              border: "1px solid var(--border-strong)",
            }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
              style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--accent-glow)" }}
            >
              🎁 Kit Completo — Ahorro de ₡10,000
            </div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3" style={{ color: "var(--fg)" }}>
              Los 3 servicios,{" "}
              <span className="gradient-text-animated">un solo precio</span>
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "var(--fg-muted)" }}>
              Identidad visual + posicionamiento local + correo profesional.
              Todo lo que un negocio necesita para verse sólido desde el día uno.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {services.map(s => (
                <div
                  key={s.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                  style={{ background: s.tagBg, color: s.tagColor }}
                >
                  <span>{s.icon}</span>
                  {s.name}
                  <span className="text-xs opacity-60">{s.price}</span>
                </div>
              ))}
            </div>

            <div className="flex items-baseline justify-center gap-3 mb-8">
              <span className="text-2xl line-through opacity-40" style={{ color: "var(--fg-muted)" }}>
                ₡100,000
              </span>
              <span className="text-5xl font-black" style={{ color: "var(--fg)" }}>
                ₡90,000
              </span>
            </div>

            <a
              href={wa(bundleWaMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all duration-150 hover:brightness-110 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
            >
              <WhatsAppIcon size={18} />
              Quiero el Kit Completo
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ── BACK CTA ── */}
      <section className="pb-20 px-5 text-center">
        <ScrollReveal>
          <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>
            ¿Todavía no tenés tu web? Empezá por ahí.
          </p>
          <Link
            href="/servicios#configurar"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-150 hover:opacity-85 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, var(--accent), #7c3aed)", color: "white" }}
          >
            Crear mi web →
          </Link>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
