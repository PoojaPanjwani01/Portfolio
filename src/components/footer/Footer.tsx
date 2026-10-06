"use client";

import React, { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ArrowUp, Terminal } from "lucide-react";

export function Footer() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050608] py-12 px-6 sm:px-8 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Status & Identity */}
        <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-200 font-bold">{profile.name}</span>
          </div>
          <span className="text-slate-400">/</span>
          <span className="text-slate-400">{profile.role}</span>
          <span className="text-slate-400">/</span>
          <span className="text-slate-400">{profile.company}</span>
        </div>

        {/* Center Live Clock & System Metric */}
        <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.06] px-3.5 py-1.5 rounded-full">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-400">UTC CLOCK:</span>
          <span className="text-cyan-300 font-semibold">{timeString || "00:00:00 UTC"}</span>
        </div>

        {/* Right Scroll to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-slate-400">
            © {new Date().getFullYear()} {profile.name}
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
