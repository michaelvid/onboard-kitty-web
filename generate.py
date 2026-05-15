import os

components_dir = "src/components"
os.makedirs(components_dir, exist_ok=True)

files = {
    "Navbar.tsx": """import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-page-bg/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <span className="text-xl font-bold text-primary">OnboardKitty</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-text">
          <a href="#problem" className="hover:text-primary transition-colors">Problem</a>
          <a href="#solution" className="hover:text-primary transition-colors">Solution</a>
          <a href="#value" className="hover:text-primary transition-colors">Value</a>
          <a href="#security" className="hover:text-primary transition-colors">Security</a>
          <a href="#kpis" className="hover:text-primary transition-colors">KPIs</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex bg-secondary hover:bg-blue-900 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
            Request a Demo
          </a>
          <button className="md:hidden text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
""",
    "HeroSection.tsx": """import { ShieldCheck, Clock, FileCheck, UserCheck, Activity } from 'lucide-react';

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
""",
    "ProblemSection.tsx": """import { LinkBreak2Icon } from '@radix-ui/react-icons';
import { AlertCircle, FileX, Scale } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <LinkBreak2Icon className="w-6 h-6 text-red-500" />,
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
""",
    "SolutionSection.tsx": """import { Bot, Wrench, UserCog, ScrollText } from 'lucide-react';

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
""",
    "CapabilitiesSection.tsx": """import { ListChecks, MessageSquareText, Link as LinkIcon, HelpCircle, Eye, AlertTriangle } from 'lucide-react';

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
""",
    "ProcessSection.tsx": """import { ArrowRight, ArrowDown } from 'lucide-react';

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
""",
    "BusinessValueSection.tsx": """export default function BusinessValueSection() {
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
""",
    "SecurityGovernanceSection.tsx": """import { Shield, Lock, ServerCog } from 'lucide-react';

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
""",
    "HumanControlSection.tsx": """import { UserCheck, Bot } from 'lucide-react';

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
""",
    "ScalingSection.tsx": """export default function ScalingSection() {
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
""",
    "KPISection.tsx": """export default function KPISection() {
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
""",
    "ContactSection.tsx": """'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Ready to make microbusiness onboarding faster and safer?
          </h2>
          <p className="text-lg text-muted-text text-balance">
            OnboardKitty helps banks improve onboarding speed, client experience, and operational productivity while preserving compliance oversight and auditability.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <button onClick={() => document.getElementById('demo-form')?.focus()} className="bg-secondary hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium text-center transition-colors">
              Request a Demo
            </button>
            <button className="bg-white border border-gray-200 hover:border-gray-300 text-primary px-6 py-3 rounded-md font-medium text-center transition-colors">
              Download Solution Brief
            </button>
          </div>
        </div>
        
        <div className="flex-1 bg-page-bg rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <CheckCircle2 className="w-16 h-16 text-success" />
              <h3 className="text-2xl font-bold text-primary">Thank you!</h3>
              <p className="text-muted-text">Your request has been received. Our team will contact you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-secondary hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Name <span className="text-red-500">*</span></label>
                <input required id="name" type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary mb-1">Company <span className="text-red-500">*</span></label>
                  <input required id="company" type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-primary mb-1">Role <span className="text-red-500">*</span></label>
                  <input required id="role" type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">Work Email <span className="text-red-500">*</span></label>
                <input required id="email" type="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"></textarea>
              </div>
              
              <div className="pt-2 flex items-center justify-between">
                <p className="text-xs text-muted-text max-w-xs">Please do not include sensitive banking or personal financial information in this form.</p>
                <button type="submit" id="demo-form" className="bg-primary hover:bg-slate-800 text-white px-6 py-2.5 rounded-md font-medium flex items-center gap-2 transition-colors">
                  Submit <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
"""
}

for filename, content in files.items():
    with open(os.path.join(components_dir, filename), "w", encoding="utf-8") as f:
        f.write(content)

print("All components generated.")
