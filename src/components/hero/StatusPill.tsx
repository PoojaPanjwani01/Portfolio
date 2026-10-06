import React from "react";
import { profile } from "@/data/profile";
import { Activity } from "lucide-react";

export function StatusPill() {
  return (
    <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-xs font-mono tracking-wider backdrop-blur-md shadow-[0_0_20px_rgba(0,242,254,0.12)]">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
      </span>
      <span className="text-cyan-300 font-semibold">{profile.statusIndicator}</span>
      <span className="text-slate-400 border-l border-cyan-500/30 pl-2.5 hidden sm:inline">
        {profile.statusSubtext}
      </span>
      <Activity className="w-3.5 h-3.5 text-cyan-400 ml-0.5 opacity-80" />
    </div>
  );
}
