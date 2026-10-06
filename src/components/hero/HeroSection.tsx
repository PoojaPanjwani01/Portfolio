"use client";

import React from "react";
import { profile } from "@/data/profile";
import { StatusPill } from "./StatusPill";
import { HeroCanvasFlow } from "./HeroCanvasFlow";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/[0.04] blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-indigo-600/[0.04] blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Top Status & Identity Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <StatusPill />
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <span className="text-slate-400">ROLE //</span>
          <span className="text-slate-200">{profile.role}</span>
          <span className="text-slate-400">@</span>
          <span className="text-cyan-400">{profile.company}</span>
        </div>
      </div>

      {/* Main Statement */}
      <div className="max-w-5xl mb-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] uppercase font-sans">
          BUILDING SYSTEMS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            THAT TURN DATA
          </span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-indigo-300">
            INTO INTELLIGENCE.
          </span>
        </h1>
      </div>

      {/* Sub-headline & Description */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
        <div className="lg:col-span-7">
          <div className="inline-block font-mono text-sm sm:text-base font-semibold text-cyan-400 mb-3 tracking-wide">
            {profile.positioning}
          </div>
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            {profile.shortBio}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-4">
          <a
            href="#work"
            onClick={scrollToProjects}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_25px_rgba(0,242,254,0.35)] hover:shadow-[0_0_35px_rgba(0,242,254,0.55)] hover:scale-[1.02]"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Hero Canvas Visual Flow */}
      <div className="mb-12">
        <HeroCanvasFlow />
      </div>

      {/* Quick Architecture Spec Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 border-t border-white/[0.08] pt-8">
        {profile.heroStats.map((stat, i) => (
          <div
            key={i}
            className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
          >
            <div className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
              {stat.label}
            </div>
            <div className="font-mono text-xs sm:text-sm font-semibold text-slate-200">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
