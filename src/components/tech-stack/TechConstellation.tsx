"use client";

import React, { useState } from "react";
import { technologies, techCategories } from "@/data/technologies";
import { TechItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Layers, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function TechConstellation() {
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredTechs = selectedCategory === "ALL"
    ? technologies
    : technologies.filter((t) => t.category === selectedCategory);

  const isRelated = (techName: string) => {
    if (!hoveredTech) return false;
    if (hoveredTech.name === techName) return true;
    return hoveredTech.relatedTech?.includes(techName) ?? false;
  };

  return (
    <section id="stack" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      <SectionHeading
        number="05"
        tag="SYSTEM INVENTORY"
        title="TECHNOLOGY CONSTELLATION"
        subtitle="Hover any technology to observe interconnected dependencies, pipelines, and framework relationships."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory("ALL")}
          className={cn(
            "px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all border",
            selectedCategory === "ALL"
              ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(0,242,254,0.2)]"
              : "bg-white/[0.02] text-slate-400 border-white/[0.06] hover:text-slate-200"
          )}
        >
          ALL ({technologies.length})
        </button>
        {techCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={cn(
              "px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all border",
              selectedCategory === cat.key
                ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(0,242,254,0.2)]"
                : "bg-white/[0.02] text-slate-400 border-white/[0.06] hover:text-slate-200"
            )}
          >
            {cat.label} ({cat.badgeCount})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Grid of Nodes */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filteredTechs.map((tech) => {
            const isHovered = hoveredTech?.name === tech.name;
            const related = isRelated(tech.name);
            const isDimmed = hoveredTech && !isHovered && !related;

            return (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                className={cn(
                  "p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none",
                  isHovered
                    ? "bg-cyan-950/70 border-cyan-400 text-cyan-200 shadow-[0_0_20px_rgba(0,242,254,0.3)] scale-[1.03] z-10"
                    : related
                    ? "bg-indigo-950/40 border-indigo-400/60 text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.25)] scale-[1.01]"
                    : isDimmed
                    ? "bg-white/[0.01] border-white/[0.03] text-slate-600 opacity-40"
                    : "bg-[#090b0e] border-white/[0.06] text-slate-300 hover:border-white/20"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                    {tech.category}
                  </span>
                  <div
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-colors",
                      isHovered
                        ? "bg-cyan-400 animate-ping"
                        : related
                        ? "bg-indigo-400"
                        : "bg-transparent"
                    )}
                  />
                </div>

                <div className="font-mono text-sm font-bold tracking-tight">
                  {tech.name}
                </div>

                {isHovered && (
                  <div className="font-mono text-[9px] text-cyan-400 mt-2">
                    ACTIVE NODE
                  </div>
                )}
                {related && !isHovered && (
                  <div className="font-mono text-[9px] text-indigo-400 mt-2">
                    LINKED ECOSYSTEM
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Node Inspector Panel */}
        <div className="lg:col-span-4 rounded-2xl bg-[#0a0c10] border border-white/[0.08] p-6 sticky top-28">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold mb-4 uppercase tracking-wider">
            <Share2 className="w-4 h-4" />
            <span>ECOSYSTEM RELATIONSHIP INSPECTOR</span>
          </div>

          {hoveredTech ? (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase">
                  SELECTED TECHNOLOGY
                </span>
                <h4 className="text-2xl font-bold text-white font-mono mt-0.5">
                  {hoveredTech.name}
                </h4>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30 mt-1.5">
                  CATEGORY: {hoveredTech.category}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {hoveredTech.description}
              </p>

              <div>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block mb-2">
                  LINKED ARCHITECTURE NODES ({hoveredTech.relatedTech?.length || 0}):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {hoveredTech.relatedTech?.map((rel) => (
                    <span
                      key={rel}
                      className="px-2.5 py-1 rounded font-mono text-xs bg-indigo-950/40 text-indigo-300 border border-indigo-500/40 shadow-[0_0_8px_rgba(99,102,241,0.2)]"
                    >
                      {rel}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-slate-400 font-mono text-xs">
              <Layers className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">
                Hover over any technology node to reveal interconnected dependencies.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
