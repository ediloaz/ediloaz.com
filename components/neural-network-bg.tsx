"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number; // for pulsing
}

interface DataPacket {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
  reverse: boolean;
}

const PARTICLE_COUNT = 24;
const LINK_DIST = 170;
const PACKET_MAX = 6;
const MOUSE_RADIUS = 130;

function getAccentRGB(): [number, number, number] {
  const theme = document.documentElement.dataset.theme;
  const isDark =
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  return isDark ? [79, 142, 247] : [26, 86, 219];
}

export function NeuralNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let packets: DataPacket[] = [];
    let mouse = { x: -999, y: -999, active: false };
    let raf = 0;
    let W = 0;
    let H = 0;
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      W = rect.width;
      H = rect.height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 2 + Math.random() * 2.5,
        phase: (i / PARTICLE_COUNT) * Math.PI * 2,
      }));
      packets = [];
    }

    function spawnPacket() {
      if (packets.length >= PACKET_MAX) return;
      const edges: [number, number][] = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          if (Math.hypot(dx, dy) < LINK_DIST) edges.push([i, j]);
        }
      }
      if (!edges.length) return;
      const [a, b] = edges[Math.floor(Math.random() * edges.length)];
      const reverse = Math.random() < 0.5;
      packets.push({
        fromIdx: reverse ? b : a,
        toIdx: reverse ? a : b,
        progress: 0,
        speed: 0.006 + Math.random() * 0.009,
        reverse,
      });
    }

    let time = 0;
    function draw() {
      ctx!.clearRect(0, 0, W, H);
      time += 0.016;

      const [r, g, b] = getAccentRGB();

      // Update particles
      for (const p of particles) {
        // Soft mouse interaction — attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (mouse.active && dist < MOUSE_RADIUS && dist > 0) {
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.012;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Damping + clamp speed
        p.vx *= 0.985;
        p.vy *= 0.985;
        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 0.9) {
          p.vx = (p.vx / speed) * 0.9;
          p.vy = (p.vy / speed) * 0.9;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Soft bounce off edges
        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); }
        if (p.x > W) { p.x = W; p.vx = -Math.abs(p.vx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); }
        if (p.y > H) { p.y = H; p.vy = -Math.abs(p.vy); }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.22;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      // Draw nodes with pulse glow
      for (const p of particles) {
        const pulse = 0.5 + 0.5 * Math.sin(time * 1.5 + p.phase);
        const glowR = p.radius * (3 + pulse * 2);

        // Outer glow
        const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        grd.addColorStop(0, `rgba(${r},${g},${b},${0.18 + pulse * 0.08})`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();

        // Core dot
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r},${g},${b},${0.55 + pulse * 0.3})`;
        ctx!.fill();
      }

      // Animate data packets
      const live: DataPacket[] = [];
      for (const pkt of packets) {
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) continue;
        live.push(pkt);

        const from = particles[pkt.fromIdx];
        const to = particles[pkt.toIdx];
        const px = from.x + (to.x - from.x) * pkt.progress;
        const py = from.y + (to.y - from.y) * pkt.progress;

        // Bright core
        ctx!.beginPath();
        ctx!.arc(px, py, 3, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r},${g},${b},0.95)`;
        ctx!.fill();

        // Trailing glow
        const trailSteps = 10;
        for (let t = 1; t <= trailSteps; t++) {
          const tp = pkt.progress - t * pkt.speed * 4;
          if (tp < 0) break;
          const tx = from.x + (to.x - from.x) * tp;
          const ty = from.y + (to.y - from.y) * tp;
          const ta = (1 - t / trailSteps) * 0.45;
          ctx!.beginPath();
          ctx!.arc(tx, ty, 2, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${r},${g},${b},${ta})`;
          ctx!.fill();
        }
      }
      packets = live;

      // Occasionally spawn new packet
      if (Math.random() < 0.025) spawnPacket();

      raf = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    // Seed initial packets
    for (let i = 0; i < 4; i++) spawnPacket();
    raf = requestAnimationFrame(draw);

    // Track mouse globally so interaction works even under overlapping content
    const handleMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = rect.top <= e.clientY && e.clientY <= rect.bottom;
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    const handleLeave = () => { mouse.active = false; };
    canvas.addEventListener("mouseleave", handleLeave);

    const ro = new ResizeObserver(() => { resize(); initParticles(); });
    ro.observe(canvas);

    const themeObserver = new MutationObserver(() => {});
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      ro.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      aria-hidden
    />
  );
}
