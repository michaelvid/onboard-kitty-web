import { ShieldCheck, Clock, FileCheck, UserCheck, Activity } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
          Agentic AI for Faster, Safer <span className="text-secondary">Microbusiness Onboarding</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-text max-w-2xl text-balance">
          OnboardKitty helps banks accelerate AML/KYC onboarding for sole proprietors and small businesses while keeping compliance decisions human-controlled, auditable, and secure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-secondary hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium text-center transition-colors shadow-lg shadow-blue-900/20">
            Request a Demo
          </a>
          <a href="#solution" className="bg-white border border-gray-200 hover:border-gray-300 text-primary px-6 py-3 rounded-md font-medium text-center transition-colors shadow-sm">
            Explore the Solution
          </a>
        </div>
        
        <div className="flex items-center gap-3 text-sm text-muted-text bg-white/50 p-4 rounded-lg border border-gray-100">
          <ShieldCheck className="w-8 h-8 text-success flex-shrink-0" />
          <p>Built for regulated banking environments with human-in-the-loop controls, audit logging, and policy-constrained AI.</p>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md mx-auto md:max-w-none relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-accent/20 blur-3xl -z-10 rounded-[3rem]" />
        <div className="bg-card-bg border border-gray-200 rounded-2xl shadow-xl overflow-hidden p-6 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-gray-100">
            <h3 className="font-semibold text-primary">Onboarding Overview</h3>
            <span className="px-2 py-1 bg-green-100 text-success text-xs font-medium rounded-full flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> Live
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-medium text-sm text-primary">KYC Cycle Time</span>
              </div>
              <span className="text-sm font-bold text-success">-40%</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-secondary" />
                <span className="font-medium text-sm text-primary">Document Completeness</span>
              </div>
              <span className="text-sm font-bold">92%</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-amber-500" />
                <span className="font-medium text-sm text-primary">Escalation Required</span>
              </div>
              <span className="text-sm font-bold">12%</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border-l-4 border-secondary">
              <div className="flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-secondary" />
                <span className="font-medium text-sm text-primary">Human Approval</span>
              </div>
              <span className="text-sm font-bold text-secondary">Pending</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-muted-text">
            <ShieldCheck className="w-4 h-4 text-success" />
            Audit Trail Active
          </div>
        </div>
      </div>
    </section>
  );
}
