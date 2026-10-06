"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "WORK", href: "#work" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "STACK", href: "#stack" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["work", "experience", "stack", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-[#060709]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#"
          className="group flex items-center gap-3 font-mono text-sm tracking-wider text-slate-100 hover:text-cyan-400 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f2fe]" />
          <span className="font-bold">{profile.navName}</span>
          <span className="hidden sm:inline-block text-xs text-slate-400 font-normal border-l border-white/10 pl-3">
            {profile.role}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/[0.08] rounded-full p-1.5 px-3 backdrop-blur-sm">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider transition-all duration-200",
                  isActive
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,242,254,0.15)]"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]"
                )}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:shadow-[0_0_20px_rgba(0,242,254,0.5)]"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-white/[0.05] border border-white/10"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c10]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-mono tracking-wider transition-colors",
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-300 hover:bg-white/[0.05]"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-mono font-semibold bg-cyan-400 text-slate-900 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
