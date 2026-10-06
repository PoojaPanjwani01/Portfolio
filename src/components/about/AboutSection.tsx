import React from "react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Database, Bot, ShieldCheck, Cloud, Terminal } from "lucide-react";

export function AboutSection() {
  const pillars = [
    { label: "Data Pipelines", icon: Database, desc: "High-throughput ingestion & transformation with PySpark & SQL" },
    { label: "AI Agents", icon: Bot, desc: "Stateful orchestration, checkpointing, and LangGraph workflows" },
    { label: "Data Quality", icon: ShieldCheck, desc: "Automated schema assertion gates and anomaly root-cause detection" },
    { label: "Cloud Workflows", icon: Cloud, desc: "Serverless AWS architectures with Step Functions & Lambda" },
    { label: "Backend Systems", icon: Terminal, desc: "FastAPI endpoints, secure SELECT-only database proxies & APIs" },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      <SectionHeading
        number="06"
        tag="ABOUT & ETHOS"
        title="ENGINEERING PHILOSOPHY"
        subtitle="Bridging the gap between reliable data engineering infrastructure and safe, intelligent autonomous agents."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Focused Bio Statement */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-8 rounded-2xl bg-[#090b0e] border border-white/[0.08]">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug font-sans">
              &ldquo;Data Engineer working at the intersection of data platforms, GenAI, and intelligent automation.&rdquo;
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              I specialize in designing systems where automated data pipelines provide the verifiable truth required by modern LLMs and agentic loops.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              My engineering approach centers on durability: prefer idempotent architectures, build strict human-in-the-loop gates for write operations, and automate data validation before issues impact downstream systems.
            </p>
          </div>

          {/* 3 Core Principles */}
          <div className="space-y-3">
            {profile.engineeringPrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-slate-200">
                    {principle.title}
                  </h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 5 Core Technical Focus Areas */}
        <div className="lg:col-span-6 space-y-3">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
            PRIMARY SYSTEM DISCIPLINES
          </div>

          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0a0c10] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] group-hover:bg-cyan-950/40 border border-white/10 group-hover:border-cyan-500/40 text-slate-400 group-hover:text-cyan-300 flex items-center justify-center transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-slate-200 group-hover:text-cyan-200 transition-colors">
                    {pillar.label}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
