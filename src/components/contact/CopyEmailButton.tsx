"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { Copy, Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:scale-[1.02]"
      >
        <Mail className="w-4 h-4" />
        <span>SEND EMAIL</span>
      </a>

      <button
        onClick={handleCopy}
        className={cn(
          "inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs sm:text-sm font-semibold tracking-wider border transition-all",
          copied
            ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
        )}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span>EMAIL COPIED!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 text-slate-400" />
            <span>COPY EMAIL ADDRESS</span>
          </>
        )}
      </button>
    </div>
  );
}
