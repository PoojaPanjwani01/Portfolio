"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import { Database, ShieldCheck, Table, Code } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  project?: Project;
}

export function SqlAgentVisualizer({}: Props) {
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);

  const examples = [
    {
      naturalLanguage: "Show the top 5 departments by average salary.",
      generatedSql: `SELECT 
    d.department_name,
    COUNT(e.employee_id) AS total_headcount,
    ROUND(AVG(e.salary), 2) AS average_salary
FROM departments d
JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_name
ORDER BY average_salary DESC
LIMIT 5;`,
      tableData: [
        { department_name: "Machine Learning", total_headcount: 18, average_salary: "$142,500" },
        { department_name: "Data Platform", total_headcount: 24, average_salary: "$138,200" },
        { department_name: "Cloud Infrastructure", total_headcount: 15, average_salary: "$134,800" },
        { department_name: "Security & Compliance", total_headcount: 9, average_salary: "$129,400" },
        { department_name: "Backend Systems", total_headcount: 32, average_salary: "$126,100" },
      ],
    },
    {
      naturalLanguage: "List data pipelines with failure rates above 5% in the last 7 days.",
      generatedSql: `SELECT 
    p.pipeline_id,
    p.pipeline_name,
    COUNT(r.run_id) AS total_runs,
    ROUND(SUM(CASE WHEN r.status = 'FAILED' THEN 1 ELSE 0 END) * 100.0 / COUNT(r.run_id), 2) AS failure_rate_pct
FROM pipeline_metadata p
JOIN pipeline_runs r ON p.pipeline_id = r.pipeline_id
WHERE r.started_at >= NOW() - INTERVAL '7 days'
GROUP BY p.pipeline_id, p.pipeline_name
HAVING (SUM(CASE WHEN r.status = 'FAILED' THEN 1 ELSE 0 END) * 100.0 / COUNT(r.run_id)) > 5.0
ORDER BY failure_rate_pct DESC;`,
      tableData: [
        { pipeline_id: "pipe_801", pipeline_name: "clickstream_raw_ingest", total_runs: 168, failure_rate_pct: "8.33%" },
        { pipeline_id: "pipe_409", pipeline_name: "customer_360_daily_rollup", total_runs: 28, failure_rate_pct: "7.14%" },
        { pipeline_id: "pipe_112", pipeline_name: "inventory_sync_hourly", total_runs: 168, failure_rate_pct: "5.95%" },
      ],
    },
  ];

  const current = examples[selectedExampleIndex];

  return (
    <div className="rounded-2xl bg-[#090b0e] border border-white/[0.08] p-5 sm:p-6 flex flex-col gap-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-200">
          <Database className="w-4 h-4 text-cyan-400" />
          <span>DATAPILOT — READ-ONLY SQL ENGINE</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 font-mono text-[10px] font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>STRICT SELECT-ONLY GUARANTEE</span>
        </div>
      </div>

      {/* Query Selector Tabs */}
      <div>
        <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-2">
          SELECT SAMPLE NATURAL LANGUAGE PROMPT
        </div>
        <div className="flex flex-wrap gap-2">
          {examples.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedExampleIndex(idx)}
              className={cn(
                "px-3 py-1.5 rounded-lg border text-left font-mono text-xs transition-all",
                selectedExampleIndex === idx
                  ? "bg-cyan-950/50 border-cyan-500/50 text-cyan-200 shadow-[0_0_12px_rgba(0,242,254,0.15)]"
                  : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200"
              )}
            >
              {idx === 0 ? "1. Top 5 Departments Query" : "2. Pipeline Failure Rate Query"}
            </button>
          ))}
        </div>
      </div>

      {/* Natural Language Prompt Card */}
      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
          USER NATURAL LANGUAGE INPUT:
        </div>
        <div className="text-sm font-semibold text-slate-100 font-mono">
          &ldquo;{current.naturalLanguage}&rdquo;
        </div>
      </div>

      {/* Generated SQL Window */}
      <div className="rounded-xl bg-black/70 border border-white/[0.08] p-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-2 text-[10px] text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Code className="w-3 h-3" />
            GENERATED READ-ONLY SQL (VERIFIED AST)
          </span>
          <span className="text-emerald-400">READ-ONLY: PASSED</span>
        </div>
        <pre className="text-cyan-300 overflow-x-auto text-[11px] leading-relaxed">
          {current.generatedSql}
        </pre>
      </div>

      {/* Result Data Matrix Preview */}
      <div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-2">
          <Table className="w-3.5 h-3.5 text-cyan-400" />
          <span>OUTPUT DATAFRAME VIEW (SAFE REPLICA EXECUTION)</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/40">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-white/[0.04] text-slate-300 text-[10px] uppercase border-b border-white/[0.08]">
              <tr>
                {Object.keys(current.tableData[0]).map((col) => (
                  <th key={col} className="p-2.5 font-semibold">
                    {col.replace("_", " ")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] text-slate-300 text-[11px]">
              {current.tableData.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-white/[0.02]">
                  {Object.values(row).map((val, cIdx) => (
                    <td key={cIdx} className="p-2.5">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
