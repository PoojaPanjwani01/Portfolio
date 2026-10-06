import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "active" | "muted" | "highlight";
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
}

export function TechBadge({
  name,
  variant = "default",
  size = "sm",
  className,
  onClick,
}: TechBadgeProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "inline-flex items-center font-mono rounded transition-all duration-200 cursor-default select-none border",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs sm:text-sm",
        variant === "default" &&
          "bg-white/[0.03] text-slate-300 border-white/[0.08] hover:border-cyan-400/40 hover:text-cyan-300",
        variant === "active" &&
          "bg-cyan-950/40 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(0,242,254,0.2)]",
        variant === "highlight" &&
          "bg-indigo-950/40 text-indigo-300 border-indigo-500/50 shadow-[0_0_12px_rgba(99,102,241,0.2)]",
        variant === "muted" &&
          "bg-white/[0.01] text-slate-400 border-transparent opacity-40",
        className
      )}
    >
      {name}
    </span>
  );
}
