"use client";

import React, { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  label: string;
  sub: string;
}

export function HeroCanvasFlow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const labels = [
      { label: "DATA", sub: "Raw Ingestion" },
      { label: "PIPELINES", sub: "ETL & Streaming" },
      { label: "QUALITY", sub: "Automated Checks" },
      { label: "INTELLIGENCE", sub: "LLM & Schemas" },
      { label: "AGENTS", sub: "Safe Automation" },
    ];

    interface Particle {
      progress: number;
      speed: number;
      currentSegment: number;
      size: number;
      hue: number;
    }

    const particles: Particle[] = Array.from({ length: 14 }, (_, i) => ({
      progress: (i / 14),
      speed: 0.003 + Math.random() * 0.002,
      currentSegment: Math.floor(Math.random() * 4),
      size: 2.5 + Math.random() * 1.5,
      hue: Math.random() > 0.5 ? 185 : 230,
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Compute nodes in horizontal or responsive layout
      const isMobile = width < 640;
      const nodes: NodePoint[] = [];
      const nodeCount = labels.length;

      if (!isMobile) {
        const padding = Math.min(width * 0.08, 60);
        const availableWidth = width - padding * 2;
        const step = availableWidth / (nodeCount - 1);
        const centerY = height * 0.5;

        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x: padding + i * step,
            y: centerY + Math.sin(time + i * 0.8) * 8,
            label: labels[i].label,
            sub: labels[i].sub,
          });
        }
      } else {
        const padding = 40;
        const availableHeight = height - padding * 2;
        const step = availableHeight / (nodeCount - 1);
        const centerX = width * 0.5;

        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x: centerX + Math.sin(time + i * 0.8) * 12,
            y: padding + i * step,
            label: labels[i].label,
            sub: labels[i].sub,
          });
        }
      }

      // Draw connection lines
      ctx.lineWidth = 1.5;
      for (let i = 0; i < nodes.length - 1; i++) {
        const n1 = nodes[i];
        const n2 = nodes[i + 1];

        // Gradient line
        const grad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
        grad.addColorStop(0, "rgba(0, 242, 254, 0.2)");
        grad.addColorStop(0.5, "rgba(99, 102, 241, 0.35)");
        grad.addColorStop(1, "rgba(0, 242, 254, 0.2)");

        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);

        const midX = (n1.x + n2.x) / 2;
        const midY = (n1.y + n2.y) / 2;
        ctx.quadraticCurveTo(midX, midY, n2.x, n2.y);
        ctx.stroke();
      }

      // Draw animated particles flowing between nodes
      for (const p of particles) {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.currentSegment = (p.currentSegment + 1) % (nodes.length - 1);
        }

        const seg = p.currentSegment;
        const n1 = nodes[seg];
        const n2 = nodes[seg + 1];
        if (!n1 || !n2) continue;

        const currentX = n1.x + (n2.x - n1.x) * p.progress;
        const currentY = n1.y + (n2.y - n1.y) * p.progress;

        ctx.fillStyle = p.hue === 185 ? "#00f2fe" : "#818cf8";
        ctx.shadowColor = p.hue === 185 ? "rgba(0, 242, 254, 0.8)" : "rgba(129, 140, 248, 0.8)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(currentX, currentY, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Outer glow circle
        ctx.fillStyle = "rgba(12, 14, 18, 0.9)";
        ctx.strokeStyle = i === 2 || i === 4 ? "rgba(0, 242, 254, 0.7)" : "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Inner dot
        ctx.fillStyle = i === 4 ? "#00f2fe" : i === 2 ? "#818cf8" : "rgba(255, 255, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Node Label
        ctx.fillStyle = "#e2e8f0";
        ctx.font = "bold 11px var(--font-geist-mono), monospace";
        ctx.textAlign = "center";
        ctx.fillText(n.label, n.x, n.y + 32);

        // Sublabel
        ctx.fillStyle = "#64748b";
        ctx.font = "9px var(--font-geist-mono), monospace";
        ctx.fillText(n.sub, n.x, n.y + 45);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[240px] rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.06] overflow-hidden">
      <div className="absolute top-3 left-4 flex items-center gap-2 font-mono text-[11px] text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span>SYSTEM FLOW SIMULATION</span>
      </div>
      <div className="absolute top-3 right-4 font-mono text-[10px] text-slate-400">
        LATENCY: &lt; 12ms // ACTIVE
      </div>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
