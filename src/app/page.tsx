import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { WhatIBuildSection } from "@/components/what-i-build/WhatIBuildSection";
import { SelectedSystems } from "@/components/projects/SelectedSystems";
import { DataToIntelligenceFlow } from "@/components/philosophy/DataToIntelligenceFlow";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { TechConstellation } from "@/components/tech-stack/TechConstellation";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060709] text-slate-100 relative bg-tech-grid selection:bg-cyan-500/20 selection:text-cyan-200">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <WhatIBuildSection />
      <SelectedSystems />
      <DataToIntelligenceFlow />
      <ExperienceSection />
      <TechConstellation />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
