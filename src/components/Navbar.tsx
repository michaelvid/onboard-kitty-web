import { Menu } from 'lucide-react';

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
