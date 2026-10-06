"use client";

import React, { useState } from "react";
import { WhatIBuildItem } from "@/types";
import { TechBadge } from "@/components/ui/TechBadge";
import { Database, Sparkles, Bot, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

interface DomainCardProps {
  item: WhatIBuildItem;
}

const iconMap: Record<string, React.ElementType> = {
  Database,
  Sparkles,
  Bot,
  Cloud,
};

export function DomainCard({ item }: DomainCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[item.icon] || Database;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 border flex flex-col justify-between overflow-hidden",
        isHovered
          ? "bg-[#0d1017] border-cyan-500/40 shadow-[0_0_30px_rgba(0,242,254,0.12)] -translate-y-1"
          : "bg-[#0a0c10] border-white/[0.08] hover:border-white/20"
      )}
    >
      {/* Background ambient corner flare */}
      <div
        className={cn(
          "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none",
          isHovered ? "bg-cyan-500/15 opacity-100" : "bg-cyan-500/5 opacity-0"
        )}
      />

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 border",
                isHovered
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                  : "bg-white/[0.03] text-slate-400 border-white/10"
              )}
            >
              <IconComponent className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
              {`${item.number} // DOMAIN`}
            </span>
          </div>

          <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.06]">
            {item.metricsLabel}
          </span>
        </div>

        {/* Title and Tagline */}
        <h3
          className={cn(
            "text-xl sm:text-2xl font-bold tracking-tight mb-2 transition-colors duration-200 font-sans",
            isHovered ? "text-cyan-200" : "text-slate-100"
          )}
        >
          {item.title}
        </h3>

        <p className="text-sm font-mono text-cyan-400/90 mb-3 font-medium">
          {item.tagline}
        </p>

        <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
          {item.description}
        </p>
      </div>

      {/* Interactive Micro Flow Simulator on Hover */}
      <div>
        <div className="mb-6 p-3 rounded-xl bg-black/40 border border-white/[0.05]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
              PIPELINE EXECUTION STAGES
            </span>
            <span
              className={cn(
                "font-mono text-[10px] transition-colors",
                isHovered ? "text-cyan-400" : "text-slate-400"
              )}
            >
              {isHovered ? "SIMULATION ACTIVE" : "IDLE"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {item.flowSteps.map((step, sIndex) => (
              <div
                key={sIndex}
                className={cn(
                  "flex items-center gap-1.5 px-2 py-1.5 rounded text-[11px] font-mono transition-all duration-300",
                  isHovered
                    ? "bg-cyan-950/40 text-cyan-200 border border-cyan-500/20"
                    : "bg-white/[0.02] text-slate-400 border border-transparent"
                )}
                style={{
                  transitionDelay: isHovered ? `${sIndex * 60}ms` : "0ms",
                }}
              >
                <div
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-colors",
                    isHovered ? "bg-cyan-400 animate-pulse" : "bg-slate-600"
                  )}
                />
                <span className="truncate">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
          {item.technologies.map((tech) => (
            <TechBadge
              key={tech}
              name={tech}
              variant={isHovered ? "active" : "default"}
              size="sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
