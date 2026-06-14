"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import PageLayout from "@/components/page-layout";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  WA_PHONE,
  BUILDER_META,
  BUILDER_PRICES,
  SUBDOMAIN_BASE,
  ESSENTIAL_PACKAGE,
  DOMAIN_OPTIONS,
  DOMAIN_STEP,
  EXTRA_PAGES,
  EXTRA_PAGES_SECTION,
  ADVANCED_FEATURES,
  ADVANCED_FEATURES_SECTION,
  BRIDGE_ESSENTIAL_ONLY,
  MODULE_INCLUDES,
  HIDDEN_DETAILS,
  formatCRC,
  formatCRCShort,
  getMaintenanceAnnualText,
  type DomainOptionId,
} from "@/constants/website-builder";

type PageSelection = Record<string, boolean>;
type FeatureSelection = Record<string, boolean>;

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function SectionHeader({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-xl text-sm font-black shrink-0"
          style={{
            background: "linear-gradient(135deg, var(--accent), #7c3aed)",
            color: "white",
          }}
        >
          {step}
        </span>
        <h2 className="text-xl md:text-2xl font-black tracking-tight" style={{ color: "var(--fg)" }}>
          {title}
        </h2>
      </div>
      <p className="text-sm md:text-base leading-relaxed max-w-3xl" style={{ color: "var(--fg-muted)" }}>
        {description}
      </p>
    </div>
  );
}

function PriceTag({ price, selected }: { price: number; selected?: boolean }) {
  return (
    <span
      className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-lg tabular-nums transition-all duration-200"
      style={{
        background: selected ? "var(--accent-glow)" : "var(--bg-subtle)",
        color: selected ? "var(--accent)" : "var(--fg-muted)",
        border: `1px solid ${selected ? "color-mix(in srgb, var(--accent) 35%, transparent)" : "var(--border)"}`,
      }}
    >
      {price === 0 ? "+ ₡0" : `+ ${formatCRC(price)}`}
    </span>
  );
}

function InfoChip({ label, detail }: { label: string; detail: string }) {
  return (
    <span
      tabIndex={0}
      className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold cursor-default outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", color: "var(--fg)" }}
    >
      {label}
      <span
        className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold shrink-0"
        style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
        aria-hidden="true"
      >
        i
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 px-3 py-2 rounded-xl text-[11px] font-normal leading-relaxed opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 transition-all duration-200 z-20 shadow-lg"
        style={{ background: "var(--surface)", border: "1px solid var(--border-strong)", color: "var(--fg-muted)" }}
      >
        {detail}
      </span>
    </span>
  );
}

function ModuleIncludesBanner() {
  return (
    <div
      className="mb-6 p-4 md:p-5 rounded-2xl grid sm:grid-cols-2 gap-3"
      style={{
        background: "linear-gradient(135deg, var(--accent-glow), transparent)",
        border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
      }}
    >
      <p className="sm:col-span-2 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
        {MODULE_INCLUDES.title}
      </p>
      {MODULE_INCLUDES.items.map((item) => (
        <div key={item.label} className="flex gap-3 items-start">
          <span className="text-lg shrink-0" aria-hidden="true">{item.icon}</span>
          <div>
            <p className="text-sm font-bold" style={{ color: "var(--fg)" }}>{item.label}</p>
            <p className="text-xs mt-0.5 font-medium" style={{ color: "var(--accent)" }}>{item.example}</p>
            <p className="text-[11px] mt-1 leading-relaxed" style={{ color: "var(--fg-muted)" }}>{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function buildWhatsAppMessage(
  domainId: DomainOptionId,
  domainInput: string,
  pages: PageSelection,
  features: FeatureSelection,
  total: number,
): string {
  const domain = DOMAIN_OPTIONS.find((d) => d.id === domainId)!;
  let domainLine = domain.label;

  if (domainInput.trim()) {
    if (domainId === "subdomain") {
      domainLine = `${domain.label} (${domainInput.trim()}.${SUBDOMAIN_BASE})`;
    } else {
      domainLine = `${domain.label} (${domainInput.trim()})`;
    }
  }

  const selectedPages = EXTRA_PAGES.filter((p) => pages[p.id]);
  const pagesLine =
    selectedPages.length > 0
      ? selectedPages.map((p) => p.defaultName).join(", ")
      : "Ninguna";

  const pagesExtra =
    selectedPages.length > 0
      ? selectedPages.reduce((sum, p) => sum + p.price, 0)
      : 0;

  const selectedFeatures = ADVANCED_FEATURES.filter((f) => features[f.id]);
  const featuresLine =
    selectedFeatures.length > 0
      ? selectedFeatures.map((f) => f.title).join(", ")
      : "Ninguna";

  const featuresExtra =
    selectedFeatures.length > 0
      ? selectedFeatures.reduce((sum, f) => sum + f.price, 0)
      : 0;

  return (
    `Hola ${BUILDER_META.contactName}, armé mi presupuesto web modular:\n\n` +
    `Paquete Esencial: ${formatCRCShort(BUILDER_PRICES.essentialPackage)}\n\n` +
    `Dominio: ${domainLine}${domain.price > 0 ? ` [+ ${formatCRCShort(domain.price)}]` : ""}\n\n` +
    `Páginas Extra: ${pagesLine}${pagesExtra > 0 ? ` [+ ${formatCRCShort(pagesExtra)}]` : ""}\n\n` +
    `Funcionalidades: ${featuresLine}${featuresExtra > 0 ? ` [+ ${formatCRCShort(featuresExtra)}]` : ""}\n` +
    `Total Desarrollo: ${formatCRCShort(total)}\n` +
    `Quiero iniciar el proyecto, ¿cuál es el siguiente paso?`
  );
}

export default function ArmarMiWebPage() {
  const [domainOption, setDomainOption] = useState<DomainOptionId>("subdomain");
  const [domainInput, setDomainInput] = useState("");
  const [pages, setPages] = useState<PageSelection>(() =>
    Object.fromEntries(EXTRA_PAGES.map((p) => [p.id, false])),
  );
  const [features, setFeatures] = useState<FeatureSelection>(() =>
    Object.fromEntries(ADVANCED_FEATURES.map((f) => [f.id, false])),
  );
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const [showDomainDeferHint, setShowDomainDeferHint] = useState(false);

  const configuratorRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const summaryInView = useInView(configuratorRef, { margin: "-20% 0px 0px 0px" });

  useEffect(() => {
    const onScroll = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      setShowStickyBar(heroBottom < 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const domainPrice = DOMAIN_OPTIONS.find((d) => d.id === domainOption)?.price ?? 0;
  const hasPurchasedDomain = domainOption === "new-domain";
  const maintenanceText = getMaintenanceAnnualText(hasPurchasedDomain);

  const pagesTotal = useMemo(
    () => EXTRA_PAGES.filter((p) => pages[p.id]).reduce((s, p) => s + p.price, 0),
    [pages],
  );

  const featuresTotal = useMemo(
    () => ADVANCED_FEATURES.filter((f) => features[f.id]).reduce((s, f) => s + f.price, 0),
    [features],
  );

  const total = BUILDER_PRICES.essentialPackage + domainPrice + pagesTotal + featuresTotal;

  const selectedCount =
    1 +
    (domainPrice > 0 ? 1 : 0) +
    EXTRA_PAGES.filter((p) => pages[p.id]).length +
    ADVANCED_FEATURES.filter((f) => features[f.id]).length;

  const waLink = useMemo(
    () =>
      `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
        buildWhatsAppMessage(domainOption, domainInput, pages, features, total),
      )}`,
    [domainOption, domainInput, pages, features, total],
  );

  const togglePage = useCallback((id: string) => {
    setPages((prev) => {
      const next = !prev[id];
      if (next) setLastAdded(id);
      return { ...prev, [id]: next };
    });
  }, []);

  const toggleFeature = useCallback((id: string) => {
    setFeatures((prev) => {
      const next = !prev[id];
      if (next) setLastAdded(id);
      return { ...prev, [id]: next };
    });
  }, []);

  useEffect(() => {
    if (!lastAdded) return;
    const t = setTimeout(() => setLastAdded(null), 1200);
    return () => clearTimeout(t);
  }, [lastAdded]);

  useEffect(() => {
    setShowDomainDeferHint(false);
    const t = setTimeout(() => setShowDomainDeferHint(true), 4000);
    return () => clearTimeout(t);
  }, [domainOption]);

  return (
    <PageLayout className="pb-32">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden min-h-[88vh] flex flex-col items-center justify-center text-center px-5 pb-16"
      >
        <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[520px] h-[520px] rounded-full opacity-[0.14] blur-[90px] pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-[0.10] blur-[70px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 65%)" }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <motion.div
          className="relative z-10 max-w-4xl w-full"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-7 border"
            style={{
              background: "var(--accent-glow)",
              color: "var(--accent)",
              borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "pulse-glow 2s ease infinite" }} />
            Cotizador modular · Pago único · Sin suscripciones
          </motion.div>

          <h1 className="text-[clamp(2rem,7vw,4.2rem)] font-black tracking-tight leading-[1.08] mb-5">
            <span className="gradient-text-animated">¡Arma tu Sitio Web Profesional!</span>
          </h1>

          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            {BUILDER_META.subtitle}
          </p>

          <motion.button
            onClick={() => configuratorRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, #7c3aed 100%)",
              color: "white",
              boxShadow: "0 4px 28px var(--accent-glow)",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Empezar a configurar
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.button>

          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {["Pago único", "Panel de administración", "WhatsApp integrado", "SEO base", "100% responsivo"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-[11px] font-semibold"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--fg-muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator" style={{ color: "var(--fg-muted)" }} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Configurator */}
      <section ref={configuratorRef} id="configurador" className="max-w-4xl mx-auto px-5 py-16 space-y-16">
        {/* Step 1: Essential */}
        <ScrollReveal>
          <motion.div
            className="rounded-3xl p-6 md:p-8 glow-card relative overflow-hidden"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            <SectionHeader
              step={1}
              title="Empieza con el Paquete Esencial"
              description={ESSENTIAL_PACKAGE.description}
            />

            <div
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 p-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, var(--accent-glow), transparent)",
                border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
              }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
                  Precio base · incluido siempre
                </p>
                <p className="text-3xl md:text-4xl font-black tabular-nums gradient-text-animated">
                  {formatCRC(BUILDER_PRICES.essentialPackage)}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--fg-muted)" }}>Pago único de desarrollo</p>
              </div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: "rgba(34,197,94,0.12)", color: "#16a34a", border: "1px solid rgba(34,197,94,0.25)" }}
              >
                ✓ Seleccionado
              </span>
            </div>

            <p className="text-sm font-bold mb-3" style={{ color: "var(--fg)" }}>
              ¿Qué incluye?
            </p>
            <div className="flex flex-wrap gap-2">
              {ESSENTIAL_PACKAGE.chips.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <InfoChip label={chip.label} detail={chip.detail} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Step 2: Domain */}
        <ScrollReveal delay={0.05}>
          <div className="rounded-3xl p-6 md:p-8 glow-card" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <SectionHeader
              step={2}
              title="¿Cómo quieres que te encuentren?"
              description="Dale formalidad a tu negocio con una dirección web propia."
            />
            <div className="space-y-3">
              {DOMAIN_OPTIONS.map((opt) => {
                const selected = domainOption === opt.id;
                return (
                  <motion.button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setDomainOption(opt.id);
                      setDomainInput("");
                    }}
                    className="w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-200"
                    style={{
                      background: selected ? "var(--accent-glow)" : "var(--bg-subtle)",
                      border: selected
                        ? "2px solid color-mix(in srgb, var(--accent) 50%, transparent)"
                        : "2px solid transparent",
                      boxShadow: selected ? "0 0 24px var(--accent-glow)" : "none",
                    }}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.995 }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                          style={{
                            borderColor: selected ? "var(--accent)" : "var(--border-strong)",
                            background: selected ? "var(--accent)" : "transparent",
                          }}
                        >
                          {selected && <span className="w-2 h-2 rounded-full bg-white" />}
                        </span>
                        <div>
                          <p className="font-bold text-sm" style={{ color: "var(--fg)" }}>{opt.label}</p>
                          <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                            {opt.description.replace("ediloaz.com", SUBDOMAIN_BASE)}
                          </p>
                        </div>
                      </div>
                      <PriceTag price={opt.price} selected={selected} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {(domainOption === "subdomain" ||
                domainOption === "new-domain" ||
                domainOption === "existing-domain") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 space-y-3" style={{ borderTop: "1px solid var(--border)" }}>
                    <div>
                      <label htmlFor="domain-input" className="block text-xs font-semibold mb-2" style={{ color: "var(--fg-muted)" }}>
                        {domainOption === "subdomain"
                          ? DOMAIN_STEP.subdomainInputLabel
                          : domainOption === "new-domain"
                            ? DOMAIN_STEP.newDomainInputLabel
                            : DOMAIN_STEP.existingDomainInputLabel}
                      </label>
                      <div
                        className="flex items-stretch gap-0 rounded-xl overflow-hidden"
                        style={{ border: "1px solid var(--border-strong)" }}
                      >
                        {domainOption === "subdomain" ? (
                          <>
                            <input
                              id="domain-input"
                              type="text"
                              value={domainInput}
                              onChange={(e) => setDomainInput(e.target.value.replace(/\s/g, "").toLowerCase())}
                              placeholder="minegocio"
                              className="flex-1 min-w-0 px-4 py-2.5 text-sm outline-none"
                              style={{ background: "var(--bg-subtle)", color: "var(--fg)" }}
                            />
                            <span
                              className="flex items-center px-3 text-xs font-medium shrink-0"
                              style={{
                                background: "var(--surface)",
                                color: "var(--fg-muted)",
                                borderLeft: "1px solid var(--border-strong)",
                              }}
                            >
                              .{SUBDOMAIN_BASE}
                            </span>
                          </>
                        ) : (
                          <input
                            id="domain-input"
                            type="text"
                            value={domainInput}
                            onChange={(e) => setDomainInput(e.target.value)}
                            placeholder="minegocio.com"
                            className="w-full px-4 py-2.5 text-sm outline-none"
                            style={{ background: "var(--bg-subtle)", color: "var(--fg)" }}
                          />
                        )}
                      </div>
                      <p className="text-[11px] mt-1.5" style={{ color: "var(--fg-muted)" }}>
                        {domainOption === "subdomain"
                          ? DOMAIN_STEP.subdomainInputHint
                          : domainOption === "new-domain"
                            ? DOMAIN_STEP.newDomainInputHint
                            : "Si ya lo tenés a mano, indicarlo nos ayuda a preparar tu proyecto."}
                      </p>
                    </div>

                    <AnimatePresence>
                      {showDomainDeferHint && (
                        <motion.p
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="text-xs px-3 py-2.5 rounded-xl leading-relaxed"
                          style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                        >
                          💡 {DOMAIN_STEP.deferHint}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Bridge: essential only vs continue */}
        <ScrollReveal delay={0.08}>
          <motion.div
            className="rounded-2xl p-5 md:p-6 text-center"
            style={{
              background: "linear-gradient(135deg, var(--surface) 0%, var(--accent-glow) 100%)",
              border: "1px dashed color-mix(in srgb, var(--accent) 35%, transparent)",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-black mb-2" style={{ color: "var(--fg)" }}>
              {BRIDGE_ESSENTIAL_ONLY.title}
            </p>
            <p className="text-xs md:text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--fg-muted)" }}>
              {BRIDGE_ESSENTIAL_ONLY.body}
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Step 3: Extra pages */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-3xl p-6 md:p-8 glow-card" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <SectionHeader
              step={3}
              title={EXTRA_PAGES_SECTION.title}
              description={EXTRA_PAGES_SECTION.description}
            />

            <ModuleIncludesBanner />

            {pagesTotal === 0 && (
              <motion.p
                className="text-xs mb-4 px-3 py-2 rounded-lg"
                style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                💡 Tip: La mayoría de nuestros clientes agregan al menos 2 páginas para generar más confianza.
              </motion.p>
            )}

            <div className="space-y-3">
              {EXTRA_PAGES.map((page) => {
                const isSelected = pages[page.id];

                return (
                  <motion.div
                    key={page.id}
                    layout
                    className="rounded-2xl overflow-hidden transition-all duration-200"
                    style={{
                      background: isSelected ? "var(--accent-glow)" : "var(--bg-subtle)",
                      border: isSelected
                        ? "2px solid color-mix(in srgb, var(--accent) 45%, transparent)"
                        : "2px solid transparent",
                    }}
                    animate={lastAdded === page.id ? { scale: [1, 1.015, 1] } : {}}
                  >
                    <button
                      type="button"
                      onClick={() => togglePage(page.id)}
                      className="w-full text-left p-4 md:p-5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span
                            className="mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 text-[11px] font-bold transition-all"
                            style={{
                              borderColor: isSelected ? "var(--accent)" : "var(--border-strong)",
                              background: isSelected ? "var(--accent)" : "transparent",
                              color: isSelected ? "white" : "transparent",
                            }}
                          >
                            {isSelected ? "✓" : ""}
                          </span>
                          <div>
                            <p className="font-bold text-sm" style={{ color: "var(--fg)" }}>
                              {page.title}
                            </p>
                            <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                              {page.description}
                            </p>
                            {page.warning && (
                              <p className="text-[11px] mt-1.5" style={{ color: "var(--fg-muted)" }}>
                                {page.warning}
                              </p>
                            )}
                          </div>
                        </div>
                        <PriceTag price={page.price} selected={isSelected} />
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Step 4: Advanced features */}
        <ScrollReveal delay={0.15}>
          <div className="rounded-3xl p-6 md:p-8 glow-card" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <SectionHeader
              step={4}
              title={ADVANCED_FEATURES_SECTION.title}
              description={ADVANCED_FEATURES_SECTION.description}
            />

            <ModuleIncludesBanner />

            <div className="space-y-3">
              {ADVANCED_FEATURES.map((feat) => {
                const isSelected = features[feat.id];
                return (
                  <motion.button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className="w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-200"
                    style={{
                      background: isSelected ? "var(--accent-glow)" : "var(--bg-subtle)",
                      border: isSelected
                        ? "2px solid color-mix(in srgb, var(--accent) 45%, transparent)"
                        : "2px solid transparent",
                    }}
                    whileHover={{ scale: 1.005 }}
                    animate={lastAdded === feat.id ? { scale: [1, 1.015, 1] } : {}}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 text-[11px] font-bold transition-all"
                          style={{
                            borderColor: isSelected ? "var(--accent)" : "var(--border-strong)",
                            background: isSelected ? "var(--accent)" : "transparent",
                            color: isSelected ? "white" : "transparent",
                          }}
                        >
                          {isSelected ? "✓" : ""}
                        </span>
                        <div>
                          <p className="font-bold text-sm" style={{ color: "var(--fg)" }}>{feat.title}</p>
                          <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                            {feat.description}
                          </p>
                        </div>
                      </div>
                      <PriceTag price={feat.price} selected={isSelected} />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Summary card */}
        <ScrollReveal delay={0.2}>
          <motion.div
            className="rounded-3xl p-6 md:p-8 popular-glow"
            style={{
              background: "linear-gradient(135deg, var(--surface) 0%, var(--accent-glow) 100%)",
              border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
            }}
          >
            <h2 className="text-xl font-black mb-2" style={{ color: "var(--fg)" }}>
              Tu Presupuesto Total de Desarrollo
            </h2>
            <motion.p
              key={total}
              className="text-4xl md:text-5xl font-black tabular-nums gradient-text-animated mb-4"
              initial={{ scale: 0.95, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {formatCRC(total)}
            </motion.p>
            <p className="text-xs mb-1" style={{ color: "var(--fg-muted)" }}>Pago único</p>

            <div className="space-y-2 my-6 text-sm" style={{ color: "var(--fg-muted)" }}>
              <div className="flex justify-between">
                <span>Paquete Esencial</span>
                <span className="font-semibold tabular-nums" style={{ color: "var(--fg)" }}>
                  {formatCRC(BUILDER_PRICES.essentialPackage)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Dominio</span>
                <span className="font-semibold tabular-nums" style={{ color: "var(--fg)" }}>
                  {domainPrice === 0 ? "₡0" : formatCRC(domainPrice)}
                </span>
              </div>
              {pagesTotal > 0 && (
                <div className="flex justify-between">
                  <span>Páginas extra ({EXTRA_PAGES.filter((p) => pages[p.id]).length})</span>
                  <span className="font-semibold tabular-nums" style={{ color: "var(--fg)" }}>
                    {formatCRC(pagesTotal)}
                  </span>
                </div>
              )}
              {featuresTotal > 0 && (
                <div className="flex justify-between">
                  <span>Funcionalidades ({ADVANCED_FEATURES.filter((f) => features[f.id]).length})</span>
                  <span className="font-semibold tabular-nums" style={{ color: "var(--fg)" }}>
                    {formatCRC(featuresTotal)}
                  </span>
                </div>
              )}
            </div>

            <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--fg-muted)" }}>
              <strong style={{ color: "var(--fg)" }}>Mantenimiento Anual Transparente:</strong>{" "}
              {maintenanceText} (Precios indicados no incluyen IVA)
            </p>
            <p className="text-xs leading-relaxed mb-6" style={{ color: "var(--fg-muted)" }}>
              <strong style={{ color: "var(--fg)" }}>Proceso de Entrega:</strong> Entrega final en{" "}
              {BUILDER_PRICES.deliveryWeeks} semana (previa entrega de todo tu contenido), con{" "}
              {BUILDER_PRICES.revisionRounds} rondas de revisiones incluidas.
            </p>

            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                color: "white",
                boxShadow: "0 4px 24px rgba(37, 211, 102, 0.35)",
              }}
              whileHover={{ scale: 1.02, boxShadow: "0 6px 32px rgba(37, 211, 102, 0.45)" }}
              whileTap={{ scale: 0.98 }}
            >
              <WhatsAppIcon size={22} />
              Enviar mi configuración por WhatsApp y solicitar mi web
            </motion.a>

            <p className="text-[11px] text-center mt-3" style={{ color: "var(--fg-muted)" }}>
              {selectedCount} módulos en tu configuración · Sin compromiso hasta que confirmes
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Hidden details */}
        <div className="pt-4">
          <button
            type="button"
            onClick={() => setDetailsOpen(!detailsOpen)}
            className="w-full flex items-center justify-center gap-2 text-[11px] py-2 transition-opacity hover:opacity-70"
            style={{ color: "var(--fg-muted)" }}
            aria-expanded={detailsOpen}
          >
            <span>Más detalles técnicos y condiciones</span>
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ rotate: detailsOpen ? 180 : 0 }}
            >
              <path d="M6 9l6 6 6-6" />
            </motion.svg>
          </button>
          <AnimatePresence>
            {detailsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <ul
                  className="mt-2 space-y-2 px-4 py-3 rounded-xl text-[11px] leading-relaxed"
                  style={{ background: "var(--bg-subtle)", color: "var(--fg-muted)", border: "1px solid var(--border)" }}
                >
                  {HIDDEN_DETAILS.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span aria-hidden="true">·</span>
                      <span>{detail.replace("ediloaz.com", SUBDOMAIN_BASE)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Sticky bottom bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 glass"
            style={{ borderTop: "1px solid var(--border)", boxShadow: "0 -8px 32px rgba(0,0,0,0.08)" }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          >
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider truncate" style={{ color: "var(--fg-muted)" }}>
                  Total desarrollo
                </p>
                <motion.p
                  key={total}
                  className="text-xl md:text-2xl font-black tabular-nums truncate gradient-text-animated"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  {formatCRC(total)}
                </motion.p>
              </div>
              <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl font-bold text-xs md:text-sm"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(37, 211, 102, 0.35)",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                animate={
                  summaryInView
                    ? {
                        boxShadow: [
                          "0 4px 20px rgba(37,211,102,0.35)",
                          "0 4px 28px rgba(37,211,102,0.55)",
                          "0 4px 20px rgba(37,211,102,0.35)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              >
                <WhatsAppIcon size={18} />
                <span className="hidden sm:inline">Enviar por WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
