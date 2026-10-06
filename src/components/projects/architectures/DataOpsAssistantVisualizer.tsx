"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import { CheckCircle2, Play, RefreshCw, Database, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  project?: Project;
}

export function DataOpsAssistantVisualizer({}: Props) {
  const [selectedRule, setSelectedRule] = useState<"null_check" | "range_check" | "schema_drift">("null_check");
  const [isRunning, setIsRunning] = useState(false);

  const rules: {
    id: "null_check" | "range_check" | "schema_drift";
    name: string;
    target: string;
    threshold: string;
    result: string;
    status: string;
  }[] = [
    {
      id: "null_check",
      name: "Null Spike Detection",
      target: "customer_id",
      threshold: "< 0.01% nulls",
      result: "0.00% Nulls Found",
      status: "PASSED",
    },
    {
      id: "range_check",
      name: "Numeric Range Assertions",
      target: "transaction_amount",
      threshold: "0.01 <= amt <= 50000.00",
      result: "All 12,480 rows in range",
      status: "PASSED",
    },
    {
      id: "schema_drift",
      name: "Schema Drift & Type Check",
      target: "event_metadata",
      threshold: "Strict JSON Schema v2",
      result: "Schema compatible with DDL",
      status: "PASSED",
    },
  ];

  const pipelineStages = [
    { step: "01", name: "SOURCE (S3)", desc: "Raw Ingestion Batch" },
    { step: "02", name: "ETL (Glue / PySpark)", desc: "Distributed Transform" },
    { step: "03", name: "DATA QUALITY CHECKS", desc: "Rule Assertions", highlight: true },
    { step: "04", name: "VALIDATION ENGINE", desc: "Pass / Fail Evaluation" },
    { step: "05", name: "ISSUE DETECTION", desc: "Anomaly Isolation" },
    { step: "06", name: "TELEMETRY CLASSIFIER", desc: "Telemetry Tagging" },
    { step: "07", name: "CLOUDWATCH ALERT", desc: "Automated Dispatch" },
  ];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 800);
  };

  return (
    <div className="rounded-2xl bg-[#090b0e] border border-white/[0.08] p-5 sm:p-6 flex flex-col gap-6 shadow-2xl">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-200">
          <Database className="w-4 h-4 text-cyan-400" />
          <span>DATAOPS AI ASSISTANT — PIPELINE MONITOR</span>
        </div>

        <button
          onClick={handleRunSimulation}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold transition-all shadow-[0_0_12px_rgba(0,242,254,0.3)] disabled:opacity-50"
        >
          {isRunning ? (
            <>
              <RefreshCw className="w-3 h-3 animate-spin" />
              <span>EVALUATING BATCH...</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 fill-current" />
              <span>RUN QUALITY SUITE</span>
            </>
          )}
        </button>
      </div>

      {/* Visual Pipeline Flow Strip */}
      <div className="overflow-x-auto pb-2">
        <div className="flex items-center gap-2 min-w-[550px]">
          {pipelineStages.map((stage, idx) => (
            <React.Fragment key={stage.step}>
              <div
                className={cn(
                  "p-2.5 rounded-xl border flex-1 min-w-[120px] transition-all",
                  stage.highlight
                    ? "bg-cyan-950/40 border-cyan-500/50 text-cyan-200 shadow-[0_0_12px_rgba(0,242,254,0.15)]"
                    : "bg-white/[0.02] border-white/[0.06] text-slate-300"
                )}
              >
                <div className="font-mono text-[9px] text-slate-400 mb-0.5">{stage.step}</div>
                <div className="font-mono text-[11px] font-bold truncate">{stage.name}</div>
                <div className="text-[10px] text-slate-400 truncate">{stage.desc}</div>
              </div>
              {idx < pipelineStages.length - 1 && (
                <div className="text-slate-600 font-mono text-xs">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Interactive Quality Rule Inspector */}
      <div className="space-y-3">
        <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
          ACTIVE DATA QUALITY ASSERTIONS
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {rules.map((rule) => {
            const isSelected = selectedRule === rule.id;
            return (
              <div
                key={rule.id}
                onClick={() => setSelectedRule(rule.id)}
                className={cn(
                  "p-3.5 rounded-xl border cursor-pointer transition-all",
                  isSelected
                    ? "bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/10"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-semibold text-slate-200">
                    {rule.name}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="font-mono text-[10px] text-slate-400 mb-1">
                  TARGET: <span className="text-slate-300">{rule.target}</span>
                </div>
                <div className="font-mono text-[10px] text-emerald-400 font-medium">
                  {rule.result}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CloudWatch Telemetry Output */}
      <div className="p-4 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-xs text-slate-300">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-3">
          <div className="flex items-center gap-2 text-cyan-400 text-[11px] font-bold">
            <Zap className="w-3.5 h-3.5" />
            <span>AWS CLOUDWATCH METRIC EMISSION</span>
          </div>
          <span className="text-[10px] text-emerald-400">EMISSION STATUS: HEALTHY</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
          <div>
            <span className="text-slate-400 block text-[10px]">PIPELINE STATUS</span>
            <span className="text-emerald-400 font-bold">HEALTHY</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">RECORDS EVALUATED</span>
            <span className="text-slate-200 font-bold">12,480</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">ERROR VIOLATIONS</span>
            <span className="text-slate-200 font-bold">0</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">LATENCY OVERHEAD</span>
            <span className="text-cyan-400 font-bold">+180ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
