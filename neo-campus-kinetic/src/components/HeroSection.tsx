import React, { useState } from 'react';
import { ArrowRight, Terminal, Award, Briefcase, Zap, ShieldCheck, CheckCircle2, TrendingUp, Sparkles, ChevronRight } from 'lucide-react';
import { CAMPUS_STATS } from '../data/mockCampusData';

interface HeroSectionProps {
  onExploreTracks: () => void;
  onOpenLab: () => void;
  onOpenDiagnostic: () => void;
  onOpenApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTracks,
  onOpenLab,
  onOpenDiagnostic,
  onOpenApply,
}) => {
  // Interactive Career Path Comparison Simulator
  const [comparisonPath, setComparisonPath] = useState<'traditional' | 'self' | 'kinetic'>('kinetic');

  const pathDetails = {
    traditional: {
      label: '4-Year CS Degree',
      duration: '48 Months (4 Years)',
      cost: '$140,000+ Tuition Debt',
      focus: 'Theoretical proofs, outdated legacy Java/C',
      outcome: 'Generalist diploma, cold job applications',
      roiScore: '42 / 100',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-900',
    },
    self: {
      label: 'Solo Self-Taught Tutorials',
      duration: '18-24 Months (Sporadic)',
      cost: '$500 (Udemy / Books)',
      focus: 'Shallow clone tutorials, tutorial hell',
      outcome: 'No code review, solo projects, low placement',
      roiScore: '55 / 100',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-900',
    },
    kinetic: {
      label: 'Neo-Campus Kinetic Accelerator',
      duration: '18-24 Weeks (Intensive)',
      cost: 'Tuition or Income-Share (Zero Upfront)',
      focus: 'Production distributed systems, agentic AI, eBPF & vLLM',
      outcome: '94.8% Placement, 1:1 FAANG Mentors, Proof-of-Work Portfolio',
      roiScore: '98 / 100',
      badgeColor: 'bg-[#acedff] text-slate-900 border-slate-900',
    },
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-20 border-b-2 border-slate-900 bg-[#faf8ff]">
      {/* Decorative Neo-brutalist Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tags Ribbon */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="neo-pill-badge px-3.5 py-1 bg-[#acedff] text-slate-900 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#0f172a]">
                ⚡ 2026/2027 COHORT ENROLLMENT OPEN
              </span>
              <span className="neo-pill-badge px-3 py-1 bg-white text-slate-800 text-xs font-bold shadow-[2px_2px_0px_#0f172a] hidden sm:inline-flex">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                Guaranteed Career Placement Track
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              ACCELERATE FROM CODE TO{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-slate-900 underline decoration-[#06b6d4] decoration-wavy decoration-4">
                  ARCHITECT
                </span>
              </span>{' '}
              AT KINETIC VELOCITY.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans max-w-2xl">
              Break past shallow tutorial loops. Immerse in a hyper-focused engineering bootcamp designed 
              with 2px neo-brutalist discipline: production agentic AI, distributed systems, high-concurrency cloud, 
              and 1:1 mentorship from Staff Engineers at OpenAI, Stripe, and Cloudflare.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenApply}
                className="neo-btn-primary px-7 py-3.5 text-sm sm:text-base font-black tracking-wide"
              >
                <span>APPLY FOR NEXT COHORT</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={onExploreTracks}
                className="neo-btn-secondary px-6 py-3.5 text-sm sm:text-base font-bold"
              >
                <span>VIEW 4 ACCELERATORS</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onOpenLab}
                className="neo-btn-white px-5 py-3.5 text-sm font-bold"
              >
                <Terminal className="w-4 h-4 mr-2 text-[#06b6d4]" />
                <span>Live Terminal Sandbox</span>
              </button>
            </div>

            {/* Mini Trust Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="bg-white p-3 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                <div className="text-xl sm:text-2xl font-display font-black text-slate-900">{CAMPUS_STATS.placementRate}</div>
                <div className="text-[11px] font-semibold text-slate-600">Placement Within 180 Days</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                <div className="text-xl sm:text-2xl font-display font-black text-slate-900">{CAMPUS_STATS.medianSalary}</div>
                <div className="text-[11px] font-semibold text-slate-600">Median Graduate Base</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                <div className="text-xl sm:text-2xl font-display font-black text-slate-900">{CAMPUS_STATS.alumniHired}</div>
                <div className="text-[11px] font-semibold text-slate-600">Engineers Placed Worldwide</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                <div className="text-xl sm:text-2xl font-display font-black text-slate-900">{CAMPUS_STATS.satisfactionScore}</div>
                <div className="text-[11px] font-semibold text-slate-600">Alumni Satisfaction Rating</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Career Simulator & Live Campus Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Interactive Trajectory Comparison Card */}
            <div className="neo-card p-6 relative overflow-hidden bg-white">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="neo-pill-badge px-3 py-1 bg-[#dae2fd] text-slate-900 text-xs font-bold uppercase">
                  CAREER SIMULATOR
                </span>
                <span className="text-xs font-bold text-slate-500">Compare Trajectories</span>
              </div>

              <h2 className="font-display text-lg font-bold text-slate-900 mb-3">
                How Will You Break Into Tier-1 Tech in 2026?
              </h2>

              {/* Selector Pills */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-full border-2 border-slate-900 mb-4">
                <button
                  onClick={() => setComparisonPath('traditional')}
                  className={`py-1.5 px-2 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
                    comparisonPath === 'traditional'
                      ? 'bg-white text-slate-900 border-2 border-slate-900 shadow-[1px_1px_0px_#0f172a]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  4-Yr College
                </button>
                <button
                  onClick={() => setComparisonPath('self')}
                  className={`py-1.5 px-2 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
                    comparisonPath === 'self'
                      ? 'bg-white text-slate-900 border-2 border-slate-900 shadow-[1px_1px_0px_#0f172a]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Solo Tutorial
                </button>
                <button
                  onClick={() => setComparisonPath('kinetic')}
                  className={`py-1.5 px-2 text-[11px] font-black rounded-full transition-all cursor-pointer ${
                    comparisonPath === 'kinetic'
                      ? 'bg-[#06b6d4] text-slate-900 border-2 border-slate-900 shadow-[1px_1px_0px_#0f172a]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ⚡ Kinetic
                </button>
              </div>

              {/* Simulation Result Box */}
              <div className="p-4 rounded-2xl border-2 border-slate-900 bg-[#f8fafc] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-sm text-slate-900">
                    {pathDetails[comparisonPath].label}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-black border ${pathDetails[comparisonPath].badgeColor}`}>
                    Efficiency: {pathDetails[comparisonPath].roiScore}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-white rounded-xl border border-slate-300">
                    <span className="text-slate-500 block text-[10px] font-bold uppercase">Time to Placement</span>
                    <span className="font-extrabold text-slate-900">{pathDetails[comparisonPath].duration}</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-slate-300">
                    <span className="text-slate-500 block text-[10px] font-bold uppercase">Tuition / Debt</span>
                    <span className="font-extrabold text-slate-900">{pathDetails[comparisonPath].cost}</span>
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-slate-300 text-xs">
                  <span className="text-slate-500 block text-[10px] font-bold uppercase">Technical Depth</span>
                  <span className="font-medium text-slate-800">{pathDetails[comparisonPath].focus}</span>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-slate-300 text-xs">
                  <span className="text-slate-500 block text-[10px] font-bold uppercase">Career Guarantee</span>
                  <span className="font-semibold text-slate-900">{pathDetails[comparisonPath].outcome}</span>
                </div>
              </div>

              {/* Diagnostic CTA */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">Unsure which track fits your background?</span>
                <button
                  onClick={onOpenDiagnostic}
                  className="neo-btn-primary px-3.5 py-1.5 text-xs font-bold"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  <span>Run Quiz</span>
                </button>
              </div>

            </div>

            {/* Live Peer Activity Badge */}
            <div className="p-4 rounded-2xl border-2 border-slate-900 bg-[#eaedff] flex items-center justify-between shadow-[2px_2px_0px_#0f172a]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute inset-0" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500 relative" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">48 Students Currently Coding in Labs</div>
                  <div className="text-[11px] text-slate-600">Active rooms: #distributed-systems, #agent-evals</div>
                </div>
              </div>
              <button
                onClick={onOpenLab}
                className="text-xs font-bold text-[#4f46e5] hover:text-[#4338ca] underline cursor-pointer"
              >
                Join Sandbox
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
