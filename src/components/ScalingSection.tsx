export default function ScalingSection() {
  const phases = [
    {
      title: "Crawl — Controlled Pilot",
      desc: "Validate safety and value in low-risk microbusiness segments.",
      enabled: ["Template-based document requests", "Status updates", "Upload link generation", "Conservative escalation"],
      exit: ["15–20% reduction in KYC cycle time", "No increase in compliance defects", "90% escalation appropriateness", "Zero critical security incidents"]
    },
    {
      title: "Walk — Expanded Automation",
      desc: "Scale efficiency across broader microbusiness onboarding.",
      enabled: ["Missing document detection", "Inconsistency checks", "More nuanced escalation logic", "Suggested resolution paths"],
      exit: ["Sustained KPI improvements", "Stable or improved compliance outcomes", "30% reduction in manual handling time", "Positive employee feedback"]
    },
    {
      title: "Run — Industrialized",
      desc: "Embed OnboardKitty into standard onboarding operations.",
      enabled: ["End-to-end communication orchestration", "Workflow bottleneck insights", "Continuous monitoring dashboards", "Periodic audits & model risk reviews"],
      exit: []
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          Risk-gated scaling: Crawl, Walk, Run
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, i) => (
            <div key={i} className="flex flex-col bg-page-bg rounded-2xl border border-gray-100 overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-text">{phase.desc}</p>
              </div>
              
              <div className="p-6 space-y-6 flex-1">
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Enabled Capabilities:</h4>
                  <ul className="space-y-2">
                    {phase.enabled.map((item, j) => (
                      <li key={j} className="text-sm text-muted-text flex items-start gap-2">
                        <span className="text-success mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {phase.exit.length > 0 && (
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Exit Criteria:</h4>
                    <ul className="space-y-2">
                      {phase.exit.map((item, j) => (
                        <li key={j} className="text-sm text-muted-text flex items-start gap-2">
                          <span className="text-accent mt-0.5">↳</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
