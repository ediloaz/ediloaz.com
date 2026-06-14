import Link from "next/link";
import { BUILDER_PRICES } from "@/constants/website-builder";

function ShieldIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>
  );
}

const TRUST_ITEMS = [
  { icon: ShieldIcon, label: "100% seguro" },
  { icon: BadgeIcon, label: "Garantía" },
  { icon: BoltIcon, label: "Rápido" },
  { icon: HeadsetIcon, label: "Soporte" },
] as const;

export default function Ad01Page() {
  return (
    <article
      className="relative overflow-hidden flex flex-col items-center text-center select-none mx-auto"
      style={{
        width: 1080,
        minHeight: 1350,
        background: "linear-gradient(165deg, #050a30 0%, #0a1035 35%, #120828 70%, #190033 100%)",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
      }}
    >
      {/* Starfield */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 15%, rgba(255,255,255,0.7) 50%, transparent 50%),
            radial-gradient(2px 2px at 75% 8%, rgba(255,255,255,0.5) 50%, transparent 50%),
            radial-gradient(2px 2px at 45% 25%, rgba(255,255,255,0.4) 50%, transparent 50%),
            radial-gradient(2px 2px at 85% 35%, rgba(255,255,255,0.6) 50%, transparent 50%),
            radial-gradient(2px 2px at 10% 45%, rgba(255,255,255,0.5) 50%, transparent 50%),
            radial-gradient(2px 2px at 60% 55%, rgba(255,255,255,0.3) 50%, transparent 50%),
            radial-gradient(2px 2px at 30% 70%, rgba(255,255,255,0.5) 50%, transparent 50%),
            radial-gradient(2px 2px at 90% 65%, rgba(255,255,255,0.4) 50%, transparent 50%),
            radial-gradient(2px 2px at 15% 85%, rgba(255,255,255,0.3) 50%, transparent 50%),
            radial-gradient(2px 2px at 70% 90%, rgba(255,255,255,0.5) 50%, transparent 50%)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #00f2ff 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-[720px] h-[720px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, #bc13fe 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center w-full px-16 pt-24 pb-16">
        {/* Badge */}
        {/* <div
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold tracking-[0.2em] uppercase mb-16"
          style={{
            fontSize: 26,
            background: "rgba(0, 242, 255, 0.08)",
            border: "1px solid rgba(0, 242, 255, 0.25)",
            color: "#7dd3fc",
          }}
        >
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#00f2ff", boxShadow: "0 0 12px #00f2ff" }}
          />
          💻 Agencia Digital
        </div> */}

        {/* Headline */}
        <h1
          className="font-black leading-[1.12] tracking-tight"
          style={{ color: "#ffffff", fontSize: 82 }}
        >
          ¡Tu competencia
          <br />
          ya tiene web,
        </h1>

        <span
          className="inline-block px-8 py-2 rounded-full font-black italic mt-3 mb-2"
          style={{
            fontSize: 82,
            color: "#00f2ff",
            background: "rgba(0, 242, 255, 0.12)",
            border: "1px solid rgba(0, 242, 255, 0.3)",
            textShadow: "0 0 30px rgba(0, 242, 255, 0.5)",
          }}
        >
          superala!
        </span>

        <p className="font-black leading-tight mt-2" style={{ color: "#ffffff", fontSize: 82 }}>
          armando una
        </p>

        <p
          className="font-black uppercase leading-none mt-5 mb-14"
          style={{
            fontSize: 128,
            background: "linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #bc13fe 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 32px rgba(188, 19, 254, 0.45))",
          }}
        >
          MEJOR WEB
        </p>

        {/* Divider */}
        <div className="relative w-full max-w-[680px] h-[2px] mb-16" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent, #00f2ff 35%, #bc13fe 65%, transparent)",
              boxShadow: "0 0 20px rgba(0, 242, 255, 0.6)",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
            style={{
              background: "#ffffff",
              boxShadow: "0 0 16px #00f2ff, 0 0 32px #bc13fe",
            }}
          />
        </div>

        <p className="font-bold leading-snug mb-16 px-4" style={{ color: "#ffffff", fontSize: 52 }}>
          ¡Convierte tus visitas
          <br />
          en clientes potenciales!
        </p>

        {/* Price box */}
        <div
          className="w-full max-w-[820px] rounded-3xl px-12 py-10 mb-16"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <p className="font-black leading-none mb-4" style={{ fontSize: 88 }}>
            <span style={{ color: "#00f2ff" }}>Desde </span>
            <span style={{ color: "#ffffff" }}>
              ₡{BUILDER_PRICES.essentialPackage.toLocaleString("en-US")}
            </span>
          </p>
          <p className="font-medium" style={{ fontSize: 32, color: "rgba(255,255,255,0.65)" }}>
            Sin sorpresas. Un único pago.
          </p>
        </div>

        <ul className="flex items-start justify-between w-full max-w-[820px] mb-16 px-2 list-none m-0 p-0">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-3 flex-1">
              <span style={{ color: "#67e8f9" }}>
                <Icon />
              </span>
              <span className="font-semibold leading-tight" style={{ fontSize: 26, color: "rgba(255,255,255,0.55)" }}>
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* <Link
          href="/armar-mi-web"
          className="flex items-center justify-center gap-4 w-full max-w-[820px] py-8 rounded-3xl font-black no-underline"
          style={{
            fontSize: 44,
            background: "linear-gradient(180deg, #34d399 0%, #22c55e 50%, #16a34a 100%)",
            color: "#ffffff",
            boxShadow: "0 12px 48px rgba(34, 197, 94, 0.45), inset 0 2px 0 rgba(255,255,255,0.25)",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Configurar mi web →
        </Link>

        <p className="mt-12 font-semibold leading-snug px-4" style={{ fontSize: 28, color: "rgba(255,255,255,0.55)" }}>
          ↑ Tocá el botón verde y recibí tu presupuesto al instante
        </p>
        <p className="mt-2 font-medium" style={{ fontSize: 24, color: "rgba(255,255,255,0.35)" }}>
          Sin compromiso · respuesta por WhatsApp
        </p> */}

        
      </div>
    </article>
  );
}
