"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Foco de luz sutil que sigue el cursor. Una sola capa, actualización con
 * requestAnimationFrame para mínimo impacto en performance.
 * No se muestra en dispositivos solo táctiles ni si el usuario prefiere menos movimiento.
 */
export default function CursorSpotlight() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    setEnabled(!prefersReducedMotion && hasHover);
  }, []);

  useEffect(() => {
    if (!mounted || !enabled) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        setPosition(posRef.current);
        rafId.current = null;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [mounted, enabled]);

  if (!mounted || !enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden
    >
      <div
        className="absolute w-[70vmax] max-w-[800px] h-[70vmax] max-h-[800px] rounded-full opacity-100"
        style={{
          left: 0,
          top: 0,
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          background:
            "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.12) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
