'use client';

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
