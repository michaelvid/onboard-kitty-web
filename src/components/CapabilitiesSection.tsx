import { ListChecks, MessageSquareText, Link as LinkIcon, HelpCircle, Eye, AlertTriangle } from 'lucide-react';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: <ListChecks className="w-6 h-6 text-accent" />,
      title: "Smart Document Checklists",
      desc: "Turns AML/KYC requirements into clear, client-friendly document instructions."
    },
    {
      icon: <MessageSquareText className="w-6 h-6 text-secondary" />,
      title: "AI-Drafted Client Updates",
      desc: "Generates consistent onboarding messages using approved communication templates."
    },
    {
      icon: <LinkIcon className="w-6 h-6 text-success" />,
      title: "Secure Upload Links",
      desc: "Creates recipient-bound, one-time, expiring document upload links."
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-primary" />,
      title: "Status Q&A",
      desc: "Answers standard questions about onboarding status, requirements, and next steps."
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      title: "Workflow Monitoring",
      desc: "Tracks progress, detects blockers, and prompts timely follow-ups."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      title: "Risk-Based Escalation",
      desc: "Flags uncertainty, missing information, and risk signals for human review."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          What OnboardKitty does
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((c, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-page-bg rounded-xl flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                {c.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">{c.title}</h3>
                <p className="text-muted-text text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
