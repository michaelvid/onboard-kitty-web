export default function BusinessValueSection() {
  const metrics = [
    {
      value: "25–35%",
      label: "Target reduction in manual handling through clearer instructions and fewer re-requests."
    },
    {
      value: "~12,000 hrs",
      label: "Estimated annual operational time saved at 12,000 onboarding cases per year."
    },
    {
      value: "USD 260k–336k",
      label: "Estimated annual cost savings from reduced manual handling and rework."
    },
    {
      value: "USD 500k–800k",
      label: "Estimated total annual value impact including cost savings, revenue acceleration, and improved retention."
    },
    {
      value: "Within 1 year",
      label: "Potential payback period under conservative assumptions."
    }
  ];

  return (
    <section id="value" className="py-20 bg-page-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          Designed for measurable banking impact
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-secondary mb-4">{m.value}</span>
              <p className="text-sm text-muted-text">{m.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center max-w-3xl mx-auto text-xs text-muted-text">
          * Figures are illustrative estimates based on the business case assumptions for microbusiness onboarding volumes, operational cost, rework reduction, and revenue acceleration.
        </div>
      </div>
    </section>
  );
}
