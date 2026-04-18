"use client";

import { useEffect } from "react";

type AdSenseProps = {
  /**
   * El ID del cliente de AdSense (ej: "ca-pub-xxxxxxxxxxxxxxxx")
   */
  clientId: string;
  /**
   * El slot ID del anuncio (ej: "1234567890")
   */
  slot: string;
  /**
   * Formato del anuncio (ej: "auto", "horizontal", "vertical", "rectangle")
   */
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  /**
   * Clases CSS adicionales para el contenedor
   */
  className?: string;
};

/**
 * Google AdSense con contenedor alineado al diseño de ediloaz (bordes zinc, acento azul/violeta).
 */
export default function AdSense({
  clientId,
  slot,
  format = "auto",
  className = "",
}: AdSenseProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as { adsbygoogle?: unknown[] }).adsbygoogle) {
      try {
        const w = window as { adsbygoogle: unknown[] };
        (w.adsbygoogle = w.adsbygoogle || []).push({});
      } catch {
        if (process.env.NODE_ENV === "development") {
          console.log("AdSense no disponible en desarrollo");
        }
      }
    }
  }, []);

  if (!clientId || !slot) {
    return null;
  }

  return (
    <div
      className={`rounded-2xl border border-zinc-200/90 dark:border-zinc-700/90 bg-zinc-50/80 dark:bg-zinc-900/40 p-4 my-8 relative overflow-hidden ${className}`}
      style={{
        minHeight: format === "horizontal" ? "100px" : format === "vertical" ? "250px" : "200px",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.35), rgba(147, 51, 234, 0.35), transparent)",
        }}
      />
      <ins
        className="adsbygoogle block w-full text-center"
        style={{
          display: "block",
          textAlign: "center",
          minHeight: "inherit",
        }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
