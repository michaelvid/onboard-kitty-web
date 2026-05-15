import { ArrowRight, ArrowDown } from 'lucide-react';

export default function ProcessSection() {
  const asIs = [
    "Initial client contact",
    "Explain onboarding requirements",
    "Request AML/KYC documents",
    "Client submits documents",
    "Manual document review",
    "Clarifications and follow-ups",
    "Compliance / AML review",
    "Escalations",
    "KYC decision",
    "Account activation",
    "Manual client notification"
  ];

  const toBe = [
    "Guided application initiation",
    "AI translates AML/KYC requirements",
    "Intelligent document collection",
    "AI completeness and consistency checks",
    "Automated status updates and follow-ups",
    "Workflow monitoring and risk flagging",
    "Human compliance review when needed",
    "Human KYC decision",
    "Account activation",
    "AI-drafted client notification",
    "Audit trail storage"
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From manual follow-ups to AI-assisted onboarding orchestration
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AS-IS */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold mb-6 flex items-center justify-between">
              AS-IS Process
              <span className="text-xs font-medium bg-red-500/20 text-red-300 px-3 py-1 rounded-full">
                Manual, fragmented, repetitive, and slow.
              </span>
            </h3>
            <div className="space-y-3">
              {asIs.map((step, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-slate-300">
                  <div className="w-6 flex justify-center text-slate-500">
                    {i < asIs.length - 1 ? <ArrowDown className="w-4 h-4" /> : <div className="w-4 h-4 rounded-full bg-slate-600" />}
                  </div>
                  <div className="bg-slate-700/50 py-2 px-4 rounded w-full">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TO-BE */}
          <div className="bg-secondary/20 rounded-2xl p-8 border border-secondary/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full" />
            <h3 className="text-xl font-semibold mb-6 flex items-center justify-between relative z-10">
              TO-BE Process with OnboardKitty
              <span className="text-xs font-medium bg-success/20 text-success px-3 py-1 rounded-full">
                Faster, clearer, controlled, and auditable.
              </span>
            </h3>
            <div className="space-y-3 relative z-10">
              {toBe.map((step, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-medium text-blue-100">
                  <div className="w-6 flex justify-center text-secondary">
                    {i < toBe.length - 1 ? <ArrowDown className="w-4 h-4" /> : <div className="w-4 h-4 rounded-full bg-secondary" />}
                  </div>
                  <div className="bg-secondary/30 py-2 px-4 rounded w-full border border-secondary/40 shadow-sm">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
