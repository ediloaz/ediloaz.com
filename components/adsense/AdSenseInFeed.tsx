"use client";

import AdSense from "./AdSense";

type AdSenseInFeedProps = {
  clientId: string;
  slot: string;
  className?: string;
};

/**
 * Anuncio in-feed para listas (p. ej. catálogo de proyectos).
 */
export default function AdSenseInFeed({ clientId, slot, className = "" }: AdSenseInFeedProps) {
  return (
    <div className={`w-full ${className}`}>
      <AdSense clientId={clientId} slot={slot} format="auto" className="w-full" />
    </div>
  );
}
