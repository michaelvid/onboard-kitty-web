import { Shield, Lock, ServerCog } from 'lucide-react';

export default function SecurityGovernanceSection() {
  const cards = [
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Data Privacy & Access Control",
      items: ["Least-privilege access", "Case-ID context locking", "Data minimization", "GDPR-aligned purpose limitation"]
    },
    {
      icon: <Lock className="w-8 h-8 text-accent" />,
      title: "Cybersecurity Controls",
      items: ["Allowlisted tools", "Deny-by-default system actions", "Template-only outbound communication", "Encryption in transit and at rest", "Recipient verification", "Expiring upload links"]
    },
    {
      icon: <ServerCog className="w-8 h-8 text-primary" />,
      title: "Risk Monitoring & Governance",
      items: ["Prompt-injection defenses", "Full audit logging to SIEM", "Anomaly detection", "Auto-pause rules", "Kill switch controlled by leadership", "AI inventory and periodic risk reviews"]
    }
  ];

  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Built for regulated banking environments
          </h2>
          <p className="text-sm font-medium text-success bg-green-50 inline-block px-4 py-2 rounded-full">
            Aligned with Ukrainian AML/CFT expectations, NBU regulatory requirements, GDPR principles, and anticipatory EU AI Act high-risk system controls.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-page-bg p-8 rounded-2xl border border-gray-100">
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-4">{card.title}</h3>
              <ul className="space-y-3">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
