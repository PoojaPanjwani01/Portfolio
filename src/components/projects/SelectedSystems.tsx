"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function SelectedSystems() {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);

  const scrollToProject = (id: string) => {
    setActiveProjectId(id);
    const el = document.getElementById(`project-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <SectionHeading
        number="02"
        tag="PORTFOLIO HIGHLIGHTS"
        title="SELECTED SYSTEMS"
        subtitle="Live, interactive system architectures showcasing natural-language SQL generation and automated data operations assistance."
      />

      {/* Sticky Quick Index Bar */}
      <div className="sticky top-20 z-30 py-3 mb-8 bg-[#060709]/90 backdrop-blur-md border-y border-white/[0.08] flex items-center justify-between gap-4 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          <span className="font-mono text-xs text-slate-400 mr-2 uppercase">SYSTEM INDEX:</span>
          {projects.map((proj) => {
            const isSelected = activeProjectId === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => scrollToProject(proj.id)}
                className={cn(
                  "px-3 py-1.5 rounded-lg font-mono text-xs font-semibold tracking-wider transition-all border flex items-center gap-2",
                  isSelected
                    ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(0,242,254,0.2)]"
                    : "bg-white/[0.02] text-slate-400 border-white/[0.06] hover:text-slate-200 hover:border-white/10"
                )}
              >
                <span>{proj.number}</span>
                <span className="hidden sm:inline">{proj.title}</span>
              </button>
            );
          })}
        </div>

        <div className="font-mono text-xs text-slate-400 hidden lg:block">
          {projects.length} ARCHITECTURES ONLINE
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={activeProjectId === project.id}
          />
        ))}
      </div>
    </section>
  );
}
