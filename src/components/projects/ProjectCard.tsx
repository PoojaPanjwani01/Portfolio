"use client";

import React from "react";
import { Project } from "@/types";
import { TechBadge } from "@/components/ui/TechBadge";
import { SqlAgentVisualizer } from "./architectures/SqlAgentVisualizer";
import { DataOpsAssistantVisualizer } from "./architectures/DataOpsAssistantVisualizer";
import { Cpu } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const renderVisualizer = () => {
    switch (project.interactiveType) {
      case "sql-agent":
        return <SqlAgentVisualizer project={project} />;
      case "dataops-assistant":
        return <DataOpsAssistantVisualizer project={project} />;
      default:
        return null;
    }
  };

  return (
    <div
      id={`project-${project.id}`}
      className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-12 border-b border-white/[0.08] last:border-b-0"
    >
      {/* Left Column: Project Narrative & Engineering Details */}
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          {/* Index & Category */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded">
              SYSTEM {project.number}
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Title and Subtitle */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 font-sans">
            {project.title}
          </h3>
          <p className="font-mono text-sm text-cyan-300 font-medium mb-4">
            {project.subtitle}
          </p>

          {/* Detailed Summary */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
            {project.detailedOverview}
          </p>

          {/* Architecture Flow Formula */}
          <div className="mb-6 p-3.5 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-[11px] text-slate-400">
            <div className="text-[10px] uppercase text-cyan-400 font-bold mb-1.5 flex items-center gap-1.5">
              <Cpu className="w-3 h-3" />
              <span>PIPELINE ARCHITECTURE FLOW</span>
            </div>
            <div className="text-slate-300 font-medium leading-relaxed">
              {project.architecture.flowDescription}
            </div>
          </div>

          {/* Key Engineering Concepts */}
          <div className="mb-6">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2.5">
              CORE SYSTEM SPECIFICATIONS
            </div>
            <ul className="space-y-2">
              {project.keyConcepts.map((concept, cIdx) => (
                <li key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                  <span>{concept}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((t) => (
              <TechBadge key={t} name={t} variant="default" size="sm" />
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Interactive System Architecture Visualizer */}
      <div className="lg:col-span-7 sticky top-28">
        {renderVisualizer()}
      </div>
    </div>
  );
}
