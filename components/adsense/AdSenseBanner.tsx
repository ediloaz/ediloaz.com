"use client";

import AdSense from "./AdSense";

type AdSenseBannerProps = {
  clientId: string;
  slot: string;
  className?: string;
};

/**
 * Banner horizontal para colocar entre secciones de contenido (equivalente a posts del blog).
 */
export default function AdSenseBanner({ clientId, slot, className = "" }: AdSenseBannerProps) {
  return (
    <div className={`w-full ${className}`}>
      <AdSense clientId={clientId} slot={slot} format="horizontal" className="w-full" />
    </div>
  );
}
