import { Bot, Wrench, UserCog, ScrollText } from 'lucide-react';

export default function SolutionSection() {
  const features = [
    {
      icon: <ScrollText className="w-6 h-6 text-secondary" />,
      title: "Policy-constrained AI",
      desc: "Uses approved AML/KYC policies, onboarding rules, and communication templates."
    },
    {
      icon: <Wrench className="w-6 h-6 text-accent" />,
      title: "Tool-using agent",
      desc: "Performs allowed actions such as drafting messages, generating upload links, and updating workflow status."
    },
    {
      icon: <UserCog className="w-6 h-6 text-amber-500" />,
      title: "Human-in-the-loop",
      desc: "Escalates uncertain or risk-relevant cases to designated human reviewers."
    },
    {
      icon: <Bot className="w-6 h-6 text-success" />,
      title: "Audit-ready by design",
      desc: "Logs actions, decisions, and escalations for compliance review."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-page-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Meet OnboardKitty: an AI workflow companion for banking onboarding
          </h2>
          <p className="text-lg text-muted-text mb-8">
            OnboardKitty is an agentic AI assistant embedded into the bank's CRM and onboarding portal. It supports employees and clients throughout the onboarding journey — from application and document collection to workflow monitoring, escalation, and AI-drafted client notifications.
          </p>
          <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded-r-lg">
            <p className="text-sm font-medium text-secondary">
              <strong>Compliance Statement:</strong> OnboardKitty does not replace compliance judgment. Final KYC decisions, exceptions, freezes, sanctions-related actions, and other high-impact outcomes remain strictly human-authorized.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-page-bg rounded-xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">{f.title}</h3>
              <p className="text-muted-text text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
