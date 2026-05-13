"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const CONTACT_LINKS = [
  {
    href: "mailto:ediloaz@gmail.com",
    emoji: "📧",
    label: "Email",
    value: "ediloaz@gmail.com",
  },
  {
    href: "https://linkedin.com/in/ediloaz",
    emoji: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/ediloaz",
  },
  {
    href: "https://github.com/ediloaz",
    emoji: "🐙",
    label: "GitHub",
    value: "github.com/ediloaz",
  },
  {
    href: "https://medium.com/@ediloaz",
    emoji: "✍️",
    label: "Medium",
    value: "medium.com/@ediloaz",
  },
];

const FIELDS = [
  { id: "name", label: "Nombre", type: "text", placeholder: "Tu nombre" },
  { id: "email", label: "Email", type: "email", placeholder: "tu@email.com" },
];

// Animated input with focus glow
function AnimatedInput({
  id,
  label,
  type,
  placeholder,
  delay,
  inView,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  delay: number;
  inView: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-2"
        style={{ color: "var(--fg-muted)" }}
      >
        {label}
      </label>
      <motion.div
        animate={{
          boxShadow: focused
            ? "0 0 0 2px var(--accent)"
            : "0 0 0 1px var(--border-strong)",
        }}
        transition={{ duration: 0.2 }}
        className="rounded-lg overflow-hidden"
      >
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full px-4 py-2.5 text-sm outline-none transition-colors"
          style={{
            background: "var(--bg)",
            color: "var(--fg)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// Submit button states: idle → sending → sent
function SubmitButton({ state }: { state: "idle" | "sending" | "sent" }) {
  return (
    <motion.button
      type="submit"
      disabled={state !== "idle"}
      whileHover={state === "idle" ? { scale: 1.02 } : {}}
      whileTap={state === "idle" ? { scale: 0.98 } : {}}
      className="w-full px-6 py-3 font-semibold rounded-xl text-sm relative overflow-hidden"
      style={{
        background: state === "sent"
          ? "#10b981"
          : "linear-gradient(135deg, var(--accent), #7c3aed)",
        color: "#fff",
        opacity: state === "sending" ? 0.8 : 1,
        transition: "background 0.4s ease",
      }}
    >
      <AnimatePresence mode="wait">
        {state === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Enviar Mensaje
          </motion.span>
        )}
        {state === "sending" && (
          <motion.span
            key="sending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2"
          >
            <motion.svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </motion.svg>
            Enviando…
          </motion.span>
        )}
        {state === "sent" && (
          <motion.span
            key="sent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2"
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                d="M4 12l5 5L20 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </svg>
            ¡Mensaje enviado!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function ContactClient() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [focusedTextarea, setFocusedTextarea] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "sent">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitState !== "idle") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    setErrorMessage("");
    setSubmitState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMessage(json.error ?? "Error al enviar el mensaje.");
        setSubmitState("idle");
        return;
      }

      setSubmitState("sent");
      form.reset();
      setTimeout(() => setSubmitState("idle"), 4000);
    } catch {
      setErrorMessage("Error de red. Verifica tu conexión e intenta de nuevo.");
      setSubmitState("idle");
    }
  }

  return (
    <section ref={ref} className="min-h-screen px-4 py-20" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold gradient-text-animated mb-4"
        >
          Contacto
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-lg mb-12 leading-relaxed"
          style={{ color: "var(--fg-muted)" }}
        >
          ¿Tienes un proyecto en mente?{" "}
          <strong style={{ color: "var(--fg)" }}>Hablemos.</strong>{" "}
          Siempre estoy interesado en nuevos desafíos y oportunidades de colaboración.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ─── Contact info card ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="rounded-2xl p-8"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--fg)" }}>
              Información de Contacto
            </h2>

            <div className="space-y-2">
              {CONTACT_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.38, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3.5 rounded-xl transition-colors"
                  style={{ color: "var(--fg)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--surface-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <span className="text-2xl w-10 h-10 flex items-center justify-center rounded-xl shrink-0"
                    style={{ background: "var(--bg)" }}>
                    {link.emoji}
                  </span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                      {link.label}
                    </p>
                    <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ─── Contact form card ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="rounded-2xl p-8"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--fg)" }}>
              Envíame un Mensaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {FIELDS.map((field, i) => (
                <AnimatedInput
                  key={field.id}
                  {...field}
                  delay={0.35 + i * 0.12}
                  inView={inView}
                />
              ))}

              {/* Textarea with focus glow */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.59, ease: "easeOut" }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Mensaje
                </label>
                <motion.div
                  animate={{
                    boxShadow: focusedTextarea
                      ? "0 0 0 2px var(--accent)"
                      : "0 0 0 1px var(--border-strong)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg overflow-hidden"
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntame sobre tu proyecto…"
                    onFocus={() => setFocusedTextarea(true)}
                    onBlur={() => setFocusedTextarea(false)}
                    className="w-full px-4 py-2.5 text-sm outline-none resize-none"
                    style={{ background: "var(--bg)", color: "var(--fg)" }}
                  />
                </motion.div>
              </motion.div>

              {/* Error message */}
              {errorMessage && (
                <p className="text-sm px-4 py-2 rounded-lg" style={{ color: "#ef4444", background: "rgba(239,68,68,0.08)" }}>
                  {errorMessage}
                </p>
              )}

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.72, ease: "easeOut" }}
              >
                <SubmitButton state={submitState} />
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
