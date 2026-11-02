import React, { useState } from 'react';
import { ArrowRight, Sparkles, Terminal, Shield, Github, Twitter, Linkedin, Check } from 'lucide-react';

interface FooterProps {
  onOpenApply: () => void;
  onOpenDiagnostic: () => void;
  onExploreTracks: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApply,
  onOpenDiagnostic,
  onExploreTracks,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0f172a] text-white border-t-2 border-slate-900 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Box */}
        <div className="neo-card p-8 sm:p-10 bg-gradient-to-r from-[#06b6d4] to-[#4f46e5] text-slate-900 border-2 border-slate-900 mb-16 shadow-[6px_6px_0px_#000000]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="neo-pill-badge px-3 py-1 bg-white text-slate-900 text-xs font-black uppercase tracking-wider">
                ADMISSIONS DEADLINE: NOV 10
              </span>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                READY TO MASTER PRODUCTION ARCHITECTURE?
              </h3>
              <p className="text-sm font-semibold text-slate-900 max-w-xl">
                Seats are limited to 30 engineers per accelerator to preserve 1:1 mentor quality. 
                Apply early to secure interview priority.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenApply}
                className="neo-btn-white px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_#0f172a]"
              >
                <span>APPLY TODAY</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={onOpenDiagnostic}
                className="neo-btn-primary px-6 py-3.5 text-xs sm:text-sm font-bold bg-[#acedff]"
              >
                <Sparkles className="w-4 h-4 mr-1.5" />
                <span>Take Diagnostic</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#06b6d4] border-2 border-white flex items-center justify-center">
                <span className="text-slate-900 font-display font-black text-lg">K</span>
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">
                NEO-CAMPUS <span className="text-[#06b6d4]">KINETIC</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              An engineering accelerator engineered with neo-brutalist discipline. 
              Autonomous AI systems, distributed cloud, and memory-safe systems built for tier-1 tech careers.
            </p>

            {/* Newsletter Input */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-300 block mb-2">
                Subscribe to Kinetic Architecture Dispatch:
              </span>
              {subscribed ? (
                <div className="p-2.5 rounded-full bg-emerald-950/60 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Subscribed! Weekly systems breakdowns sent to your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="architect@tech.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 bg-slate-800 rounded-full border-2 border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#06b6d4]"
                  />
                  <button
                    type="submit"
                    className="neo-btn-primary px-4 py-2 text-xs font-bold tracking-wide"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Accelerators Col */}
          <div className="space-y-3">
            <div className="font-display font-black text-xs uppercase tracking-wider text-[#acedff]">
              Accelerators
            </div>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><button onClick={onExploreTracks} className="hover:text-white transition-colors cursor-pointer text-left">Autonomous AI & Agents</button></li>
              <li><button onClick={onExploreTracks} className="hover:text-white transition-colors cursor-pointer text-left">Full-Stack Cloud & TS</button></li>
              <li><button onClick={onExploreTracks} className="hover:text-white transition-colors cursor-pointer text-left">Rust & Systems Kernels</button></li>
              <li><button onClick={onExploreTracks} className="hover:text-white transition-colors cursor-pointer text-left">Cyber Defense & Zero-Trust</button></li>
            </ul>
          </div>

          {/* Campus Resources */}
          <div className="space-y-3">
            <div className="font-display font-black text-xs uppercase tracking-wider text-[#acedff]">
              Campus Ecosystem
            </div>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#lab" className="hover:text-white transition-colors">Interactive Terminal Lab</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">Syllabus & Milestone Graph</a></li>
              <li><a href="#mentors" className="hover:text-white transition-colors">Staff Mentorship Network</a></li>
              <li><a href="#pulse" className="hover:text-white transition-colors">Student Shipped Repos</a></li>
              <li><button onClick={onOpenDiagnostic} className="hover:text-white transition-colors cursor-pointer text-left">Path Diagnostic Quiz</button></li>
            </ul>
          </div>

          {/* Accreditation & Guarantee */}
          <div className="space-y-3">
            <div className="font-display font-black text-xs uppercase tracking-wider text-[#acedff]">
              Accountability
            </div>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-1.5 text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Job Guarantee Policy</span>
              </li>
              <li><span>CIRR-Verified Placement</span></li>
              <li><span>ISA Financing Disclosure</span></li>
              <li><span>Peer Code Conduct</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Neo-Campus Kinetic. Built for senior engineering velocity.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Privacy</span>
            <span>•</span>
            <span>Terms of Enrollment</span>
            <span>•</span>
            <span>Security Disclosures</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
