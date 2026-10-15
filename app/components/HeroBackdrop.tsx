"use client";

import { useEffect, useRef } from "react";

const SPACING = 34;
const RADIUS = 150;

// A field of small crosses with a slow travelling wave; crosses near the cursor light up red.
export default function HeroBackdrop() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let fg = "236,232,225";
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    const readColors = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--fg").trim();
      const m = v.match(/^#?([0-9a-f]{6})$/i);
      if (m) {
        const n = parseInt(m[1], 16);
        fg = `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const time = t / 1000;
      for (let y = SPACING / 2; y < h; y += SPACING) {
        for (let x = SPACING / 2; x < w; x += SPACING) {
          const wave = (Math.sin(time * 0.6 + x * 0.008 - y * 0.012) + 1) / 2;
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const d = Math.hypot(dx, dy);
          const near = d < RADIUS ? 1 - d / RADIUS : 0;

          const push = near * 6;
          const px = x + (d ? (dx / d) * push : 0);
          const py = y + (d ? (dy / d) * push : 0);
          const size = 2 + near * 2.5;

          ctx.strokeStyle =
            near > 0.05 ? `rgba(255,70,85,${0.25 + near * 0.65})` : `rgba(${fg},${0.06 + wave * 0.14})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px - size, py);
          ctx.lineTo(px + size, py);
          ctx.moveTo(px, py - size);
          ctx.lineTo(px, py + size);
          ctx.stroke();
        }
      }
    };

    const loop = (t: number) => {
      if (visible) draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      if (reduced) draw(0);
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
      if (reduced) draw(0);
    };

    readColors();
    resize();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(canvas);

    const mo = new MutationObserver(() => {
      readColors();
      if (reduced) draw(0);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const host = canvas.parentElement!;
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    if (reduced) draw(0);
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="hero-backdrop" aria-hidden />;
}
