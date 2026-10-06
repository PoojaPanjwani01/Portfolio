"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Database, GitFork, ShieldCheck, Sparkles, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export function DataToIntelligenceFlow() {
  const [activeLayer, setActiveLayer] = useState(2);

  const layers = [
    {
      step: "01",
      title: "DATA",
      role: "Raw Ingestion & Storage",
      desc: "Lakes, transactional streams, and event stores providing the uncorrupted source of truth.",
      icon: Database,
    },
    {
      step: "02",
      title: "ENGINEERING",
      role: "Distributed Transformation",
      desc: "PySpark transformations, Glue jobs, and resilient ETL pipelines structuring unstructured chaos.",
      icon: GitFork,
    },
    {
      step: "03",
      title: "QUALITY",
      role: "Automated Verification Gate",
      desc: "Schema drift monitors, null assertions, and data contracts ensuring zero garbage reaches downstream consumers.",
      icon: ShieldCheck,
    },
    {
      step: "04",
      title: "INTELLIGENCE",
      role: "Context & LLM Grounding",
      desc: "Semantic retrieval, vector embeddings, and schema metadata grounding LLM reasoning.",
      icon: Sparkles,
    },
    {
      step: "05",
      title: "AUTOMATION",
      role: "Safe Agent Execution",
      desc: "Stateful agents with human-in-the-loop checkpoints executing verified actions across real-world tools.",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      <SectionHeading
        number="03"
        tag="ENGINEERING PHILOSOPHY"
        title="FROM DATA TO INTELLIGENCE"
        subtitle="I like building systems where reliable data engineering forms the foundation for intelligent automation."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Editorial Manifesto */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0c10] border border-white/[0.08] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="font-mono text-xs text-cyan-400 font-bold mb-3 uppercase tracking-wider">
              OPERATIONAL GROUND TRUTH
            </div>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-4 font-sans font-medium">
              &ldquo;An AI agent is only as competent as the data it observes. Without dependable pipelines and active quality verification, intelligent automation fails silently.&rdquo;
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every system I build starts with data hygiene and ends with deterministic, auditable execution paths.
            </p>
          </div>
        </div>

        {/* Right Side: Sequential Interactive Pipeline Layers */}
        <div className="lg:col-span-7 space-y-3">
          {layers.map((layer, idx) => {
            const isSelected = activeLayer === idx;
            const Icon = layer.icon;

            return (
              <div
                key={layer.step}
                onClick={() => setActiveLayer(idx)}
                className={cn(
                  "p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4",
                  isSelected
                    ? "bg-cyan-950/40 border-cyan-500/60 shadow-[0_0_20px_rgba(0,242,254,0.18)] translate-x-2"
                    : "bg-[#090b0e] border-white/[0.06] hover:border-white/15 text-slate-300"
                )}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold border transition-colors",
                      isSelected
                        ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_12px_rgba(0,242,254,0.35)]"
                        : "bg-white/[0.03] text-slate-400 border-white/10"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-cyan-400 font-semibold">
                        {layer.step}
                      </span>
                      <span className="font-mono text-sm font-bold text-slate-100">
                        {layer.title}
                      </span>
                      <span className="font-mono text-xs text-slate-400 hidden sm:inline">
                        — {layer.role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 max-w-lg">
                      {layer.desc}
                    </p>
                  </div>
                </div>

                <div className="font-mono text-[11px] text-slate-400 shrink-0 hidden sm:block">
                  {isSelected ? (
                    <span className="text-cyan-400 font-bold">● ACTIVE</span>
                  ) : (
                    <span>VIEW</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
