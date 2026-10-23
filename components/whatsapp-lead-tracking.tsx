"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Registra en el Meta Pixel cada clic a WhatsApp (todos los CTA de venta son enlaces wa.me),
 * para que los anuncios puedan optimizarse por leads y no solo por visitas.
 */
export function WhatsAppLeadTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (!event.target.closest('a[href^="https://wa.me/"]')) return;
      window.fbq?.("track", "Lead", { content_name: window.location.pathname });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
