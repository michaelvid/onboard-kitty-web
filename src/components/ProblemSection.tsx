import { AlertCircle, FileX, Scale, Unlink } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <Unlink className="w-6 h-6 text-red-500" />,
      title: "Fragmented workflows",
      desc: "CRM, onboarding portals, email, document tools, and compliance systems are often disconnected."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-amber-500" />,
      title: "Repeated client follow-ups",
      desc: "Incomplete or unclear document requests create unnecessary clarification loops."
    },
    {
      icon: <FileX className="w-6 h-6 text-orange-500" />,
      title: "Slow KYC completion",
      desc: "Manual coordination extends onboarding time and delays account activation."
    },
    {
      icon: <Scale className="w-6 h-6 text-secondary" />,
      title: "Regulatory pressure",
      desc: "AML/KYC, sanctions screening, and customer due diligence must remain strict and non-negotiable."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Microbusiness onboarding is high-volume, manual, and compliance-sensitive
          </h2>
          <p className="text-lg text-muted-text">
            Banks need to improve speed without weakening control. OnboardKitty is designed for exactly that trade-off.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-page-bg p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{p.title}</h3>
              <p className="text-muted-text text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
