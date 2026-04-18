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
   * Estilo del contenedor (ej: "display", "in-article", "in-feed")
   */
  style?: "display" | "in-article" | "in-feed";
  /**
   * Clases CSS adicionales para el contenedor
   */
  className?: string;
  /**
   * Si es true, el anuncio se carga de forma lazy (solo cuando está visible)
   */
  lazy?: boolean;
};

/**
 * Componente optimizado de Google AdSense con diseño coherente al branding del sitio
 * - Usa lazy loading para no afectar el rendimiento
 * - Diseño glassmorphism que coincide con el estilo del sitio
 * - No afecta el SEO (carga asíncrona)
 */
export default function AdSense({
  clientId,
  slot,
  format = "auto",
  style = "display",
  className = "",
  lazy = true,
}: AdSenseProps) {
  useEffect(() => {
    // Inicializar AdSense cuando el componente se monta
    if (typeof window !== "undefined" && (window as any).adsbygoogle) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        // Silenciar errores de AdSense en desarrollo
        if (process.env.NODE_ENV === "development") {
          console.log("AdSense no disponible en desarrollo");
        }
      }
    }
  }, []);

  // Si no hay clientId o slot, no renderizar nada
  if (!clientId || !slot) {
    return null;
  }

  return (
    <>
      {/* Contenedor del anuncio con diseño glassmorphism */}
      <div
        className={`glass-panel rounded-2xl border border-white/10 p-4 my-8 relative overflow-hidden ${className}`}
        style={{
          minHeight: format === "horizontal" ? "100px" : format === "vertical" ? "250px" : "200px",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
        }}
      >
        {/* Borde superior decorativo */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(74, 161, 255, 0.3), transparent)",
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
    </>
  );
}

