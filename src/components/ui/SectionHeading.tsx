import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  tag,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white/[0.03] border border-white/10 text-cyan-400 mb-4",
          align === "center" && "justify-center"
        )}
      >
        {number && <span className="text-slate-400">{number} {"//"}</span>}
        <span>{tag || "SYSTEM COMPONENT"}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 font-sans">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
