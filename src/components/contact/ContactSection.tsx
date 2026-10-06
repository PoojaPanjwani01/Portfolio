import React from "react";
import { profile } from "@/data/profile";
import { CopyEmailButton } from "./CopyEmailButton";
import { Mail, ArrowUpRight } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="relative rounded-3xl bg-[#090b0e] border border-white/[0.08] p-8 sm:p-14 overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/[0.06] blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>DISCUSS ARCHITECTURE & INITIATIVES</span>
          </div>

          {/* Large Typography Statement */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] uppercase font-sans mb-6">
            LET&apos;S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-indigo-300">
              SOMETHING USEFUL.
            </span>
          </h2>

          <div className="mb-8">
            <p className="text-slate-400 font-mono text-xs uppercase tracking-wider mb-2">
              OPEN TO OPPORTUNITIES IN:
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.openToOpportunities.map((opp) => (
                <span
                  key={opp}
                  className="px-3 py-1 rounded-full font-mono text-xs sm:text-sm bg-white/[0.04] text-slate-200 border border-white/10"
                >
                  {opp}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button & Copy */}
          <div className="mb-12">
            <CopyEmailButton />
          </div>

          {/* Links Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/[0.08] pt-8">
            <a
              href={`mailto:${profile.email}`}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">EMAIL</div>
                  <div className="font-mono text-xs text-slate-200 font-semibold group-hover:text-cyan-300 transition-colors">
                    {profile.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">GITHUB</div>
                  <div className="font-mono text-xs text-slate-200 font-semibold group-hover:text-cyan-300 transition-colors">
                    github.com/PoojaPanjwani01
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">LINKEDIN</div>
                  <div className="font-mono text-xs text-slate-200 font-semibold group-hover:text-cyan-300 transition-colors">
                    linkedin.com/in/poojapanjwani
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
