import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessSection from "@/components/ProcessSection";
import BusinessValueSection from "@/components/BusinessValueSection";
import SecurityGovernanceSection from "@/components/SecurityGovernanceSection";
import HumanControlSection from "@/components/HumanControlSection";
import ScalingSection from "@/components/ScalingSection";
import KPISection from "@/components/KPISection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-page-bg text-primary">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CapabilitiesSection />
        <ProcessSection />
        <BusinessValueSection />
        <SecurityGovernanceSection />
        <HumanControlSection />
        <ScalingSection />
        <KPISection />
        <ContactSection />
      </main>
      
      <footer className="bg-primary text-slate-300 py-12 text-center text-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">O</span>
            </div>
            <span className="font-semibold text-white">OnboardKitty</span>
          </div>
          <p>© {new Date().getFullYear()} OnboardKitty. All rights reserved. Agentic AI for Banking Onboarding.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
