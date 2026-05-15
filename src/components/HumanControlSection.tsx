import { UserCheck, Bot } from 'lucide-react';

export default function HumanControlSection() {
  const aiTasks = [
    "Draft messages",
    "Prepare document checklists",
    "Generate secure upload links",
    "Monitor case progress",
    "Recommend escalation"
  ];
  
  const humanTasks = [
    "KYC completion",
    "Exceptions",
    "Account activation approval",
    "Sanctions-related actions",
    "Risk acceptance"
  ];

  return (
    <section className="py-20 bg-page-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            AI assistance without autonomous compliance decisions
          </h2>
          <p className="text-lg text-muted-text">
            OnboardKitty supports employees by reducing repetitive coordination work, standardizing communication, and surfacing risk signals. It does not approve clients, reject clients, freeze accounts, or make sanctions-related decisions.
          </p>
          <p className="text-lg font-medium text-primary">
            Every regulatory or financial-impact decision remains human-made, traceable, and auditable.
          </p>
        </div>
        
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            <h3 className="flex items-center gap-2 text-lg font-bold text-primary mb-4">
              <Bot className="w-5 h-5 text-accent" /> AI can:
            </h3>
            <ul className="space-y-3">
              {aiTasks.map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-text">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden ring-2 ring-secondary/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
            <h3 className="flex items-center gap-2 text-lg font-bold text-secondary mb-4">
              <UserCheck className="w-5 h-5 text-secondary" /> Humans decide:
            </h3>
            <ul className="space-y-3">
              {humanTasks.map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
