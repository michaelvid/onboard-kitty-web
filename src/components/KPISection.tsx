export default function KPISection() {
  const kpis = [
    { name: "KYC Cycle Time", target: "Median ≤ 5 business days; P90 ≤ 10 business days" },
    { name: "First-Pass Document Acceptance", target: "≥ 50% initially, improving quarterly" },
    { name: "Client Follow-ups per Case", target: "≤ 1 follow-up per case" },
    { name: "Time-to-First-Response SLA", target: "≥ 90% within SLA window" },
    { name: "Escalation Appropriateness", target: "≥ 90% confirmed as necessary" },
    { name: "Compliance Defect Rate", target: "≥ 20% reduction versus baseline" }
  ];

  return (
    <section id="kpis" className="py-20 bg-page-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Success measured through operational KPIs
        </h2>
        
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hidden md:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-200">
                <th className="py-4 px-6 font-semibold text-primary">KPI Metric</th>
                <th className="py-4 px-6 font-semibold text-primary">Target Value</th>
              </tr>
            </thead>
            <tbody>
              {kpis.map((kpi, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-medium text-primary">{kpi.name}</td>
                  <td className="py-4 px-6 text-muted-text">{kpi.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {kpis.map((kpi, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-primary mb-2">{kpi.name}</h3>
              <p className="text-sm text-muted-text bg-slate-50 p-3 rounded-lg border border-gray-50">{kpi.target}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
