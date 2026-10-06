import React from "react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Building2 } from "lucide-react";

export function ExperienceSection() {
  const currentRole = experience[0];

  return (
    <section id="experience" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      <SectionHeading
        number="04"
        tag="PROFESSIONAL TRACK"
        title="EXPERIENCE"
        subtitle="Designing scalable data pipelines, automated quality checks, and intelligent agent workflows in enterprise environments."
      />

      <div className="rounded-2xl bg-[#090b0e] border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />

        {/* Company and Role Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CURRENT ENGAGEMENT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              {currentRole.role}
            </h3>
            <div className="flex items-center gap-2 mt-1.5 text-base text-slate-300 font-mono">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>{currentRole.company}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 max-w-md">
            {currentRole.focusAreas.map((area) => (
              <TechBadge key={area} name={area} variant="highlight" size="sm" />
            ))}
          </div>
        </div>

        {/* Summary */}
        <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-3xl">
          {currentRole.summary}
        </p>

        {/* System Timeline / Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentRole.systemHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.03] transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-cyan-300">
                <span className="text-slate-400">{`0${idx + 1} //`}</span>
                <span>{highlight.title}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                {highlight.tags.map((tag) => (
                  <TechBadge key={tag} name={tag} variant="default" size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
