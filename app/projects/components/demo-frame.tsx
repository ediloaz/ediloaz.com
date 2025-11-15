 "use client";

import { useCallback, useRef, type KeyboardEvent } from "react";
import { Sparkles } from "lucide-react";
import styles from "./demo-frame.module.css";

type DemoFrameProps = {
  demoUrl: string;
  name: string;
};

export default function DemoFrame({ demoUrl, name }: DemoFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handlePillActivate = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe || typeof window === "undefined") return;

    const rect = iframe.getBoundingClientRect();
    const centeredTop = rect.top + window.scrollY - (window.innerHeight - rect.height) / 2;
    const targetTop = centeredTop - 50;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    iframe.focus({ preventScroll: true });
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handlePillActivate();
      }
    },
    [handlePillActivate],
  );

  return (
    <div className={styles.demoShell}>
      <div className={styles.demoBody}>
        <div className={styles.demoStatus}>
          <div 
            className={styles.demoStatusLeft}
            onClick={handlePillActivate}
            onKeyDown={handleKeyDown}
            style={{ cursor: "pointer" }}
          >
            <span className={`${styles.demoLed} ${styles.demoLedAmber}`} aria-hidden />
            <span className={styles.demoStatusCaption}>Marco de demostración</span>
          </div>
          <div
            className={styles.demoStatusPill}
            role="button"
            tabIndex={0}
            onClick={handlePillActivate}
            onKeyDown={handleKeyDown}
            style={{ cursor: "pointer" }}
          >
            <Sparkles className="h-4 w-4" strokeWidth={1.5} />
            <span>MODO INTERACTIVO</span>
          </div>
        </div>

        <div className={styles.demoScreen}>
          <div className={styles.demoScreenGlare} aria-hidden />
          <iframe
            ref={iframeRef}
            tabIndex={-1}
            src={demoUrl}
            title={`Demo de ${name}`}
            loading="lazy"
            className={styles.demoScreenIframe}
            allowFullScreen
          />
          <div className={styles.demoScreenBadge}>DEMO</div>
        </div>
      </div>
    </div>
  );
}
