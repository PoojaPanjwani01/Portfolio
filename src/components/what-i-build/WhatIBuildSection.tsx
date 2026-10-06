import React from "react";
import { whatIBuildItems } from "@/data/whatIBuild";
import { DomainCard } from "./DomainCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatIBuildSection() {
  return (
    <section id="what-i-build" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      <SectionHeading
        number="01"
        tag="CORE CAPABILITIES"
        title="WHAT I BUILD"
        subtitle="Specialized in building end-to-end architectures that span distributed data processing, stateful AI agent loops, and automated cloud systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {whatIBuildItems.map((item) => (
          <DomainCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
