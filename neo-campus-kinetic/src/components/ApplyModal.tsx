import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Check, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';
import { TRACKS } from '../data/mockCampusData';
import { Track } from '../types/campus';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTrack?: Track | null;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  selectedTrack,
}) => {
  const [trackId, setTrackId] = useState<string>(selectedTrack?.id || TRACKS[0].id);
  const [tuitionPlan, setTuitionPlan] = useState<'isa' | 'upfront' | 'monthly'>('isa');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [motivation, setMotivation] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const activeTrack = TRACKS.find((t) => t.id === trackId) || TRACKS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !agreedTerms) return;

    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#4f46e5', '#10b981'],
    });

    setTimeout(() => {
      // Keep showing confirmation
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="neo-card p-6 sm:p-8 bg-white max-w-xl w-full relative max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="neo-pill-badge px-3 py-1 bg-[#acedff] text-slate-900 text-[10px] font-black uppercase tracking-wider">
              FALL 2026 ADMISSIONS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              CAMPUS ACCELERATOR APPLICATION
            </h3>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              Selective admission. Decisions returned within 48 business hours.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center font-bold text-slate-900 hover:bg-slate-100 shadow-[2px_2px_0px_#0f172a] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a]">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <h4 className="font-display text-2xl font-black text-slate-900">
              APPLICATION RECEIVED!
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-md mx-auto">
              Welcome, <span className="font-bold text-slate-900">{fullName}</span>! Your candidate application 
              for <span className="font-bold text-[#4f46e5]">{activeTrack.title}</span> has been logged into our admissions queue. 
              Check your inbox at <span className="font-bold text-slate-900">{email}</span> for your technical screening diagnostic link.
            </p>

            <div className="p-4 rounded-2xl bg-[#f8fafc] border-2 border-slate-900 text-xs font-mono text-left max-w-sm mx-auto shadow-[2px_2px_0px_#0f172a]">
              <div className="text-slate-400">// CANDIDATE TRACKING ID</div>
              <div className="font-bold text-slate-900">KINETIC-APP-2026-{(Math.random() * 9000 + 1000).toFixed(0)}</div>
              <div className="text-emerald-600 font-bold mt-1">STATUS: Technical Screening Dispatched</div>
            </div>

            <button
              onClick={onClose}
              className="neo-btn-primary px-8 py-2.5 text-xs font-black uppercase mt-4"
            >
              Back to Campus
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
            
            {/* Track Selector */}
            <div>
              <label className="font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Select Your Accelerator Track:
              </label>
              <select
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-full border-2 border-slate-900 bg-[#f8fafc] font-bold text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:shadow-[2px_2px_0px_#0f172a] shadow-[2px_2px_0px_#0f172a] cursor-pointer"
              >
                {TRACKS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title} ({t.durationWeeks} Weeks • Starts {t.nextCohortDate})
                  </option>
                ))}
              </select>
            </div>

            {/* Applicant Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  Full Name: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full border-2 border-slate-900 bg-[#f8fafc] font-semibold text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:shadow-[2px_2px_0px_#0f172a] shadow-[2px_2px_0px_#0f172a]"
                />
              </div>

              <div>
                <label className="font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  Work / Student Email: *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full border-2 border-slate-900 bg-[#f8fafc] font-semibold text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:shadow-[2px_2px_0px_#0f172a] shadow-[2px_2px_0px_#0f172a]"
                />
              </div>
            </div>

            {/* GitHub URL */}
            <div>
              <label className="font-bold uppercase tracking-wider text-slate-600 block mb-1">
                GitHub or Portfolio Profile URL:
              </label>
              <input
                type="url"
                placeholder="https://github.com/username"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-full border-2 border-slate-900 bg-[#f8fafc] font-semibold text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:shadow-[2px_2px_0px_#0f172a] shadow-[2px_2px_0px_#0f172a]"
              />
            </div>

            {/* Tuition Financing Model (Radios matching design spec) */}
            <div>
              <label className="font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Choose Tuition & Financing Structure:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  {
                    id: 'isa' as const,
                    title: 'Income Share (ISA)',
                    cost: '$0 Upfront',
                    sub: 'Pay only after landing a $85k+ job',
                  },
                  {
                    id: 'upfront' as const,
                    title: 'Upfront Discount',
                    cost: `$${(activeTrack.tuition.upfront * 0.85).toLocaleString()}`,
                    sub: 'Save 15% immediately',
                  },
                  {
                    id: 'monthly' as const,
                    title: 'Monthly Installments',
                    cost: `$${activeTrack.tuition.monthly}/mo`,
                    sub: '0% APR split across duration',
                  },
                ].map((plan) => (
                  <label
                    key={plan.id}
                    className={`p-3 rounded-2xl border-2 border-slate-900 flex flex-col justify-between transition-all cursor-pointer ${
                      tuitionPlan === plan.id
                        ? 'bg-[#acedff] shadow-[2px_2px_0px_#0f172a]'
                        : 'bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-slate-900 text-xs">{plan.title}</span>
                      <input
                        type="radio"
                        name="tuition"
                        checked={tuitionPlan === plan.id}
                        onChange={() => setTuitionPlan(plan.id)}
                        className="w-4 h-4 text-[#06b6d4] accent-[#06b6d4] border-2 border-slate-900"
                      />
                    </div>
                    <div className="font-black text-slate-900 text-sm mt-0.5">{plan.cost}</div>
                    <div className="text-[10px] text-slate-600 font-medium leading-tight mt-1">{plan.sub}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Motivation statement */}
            <div>
              <label className="font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Brief Engineering Background & Goals:
              </label>
              <textarea
                rows={2}
                placeholder="What projects have you built? What is your dream tech role?"
                value={motivation}
                onChange={(e) => setMotivation(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl border-2 border-slate-900 bg-[#f8fafc] font-medium text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:shadow-[2px_2px_0px_#0f172a] shadow-[2px_2px_0px_#0f172a] resize-none"
              />
            </div>

            {/* Checkbox (Square rounded with 2px slate outline) */}
            <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="w-4 h-4 rounded mt-0.5 text-[#06b6d4] accent-[#06b6d4] border-2 border-slate-900 shrink-0"
              />
              <span className="text-[11px] text-slate-600 font-medium">
                I agree to the Neo-Campus Kinetic code of conduct, commit to completing assignments on time, 
                and consent to admissions review.
              </span>
            </label>

            {/* Submit Action */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="neo-btn-white px-4 py-2 text-xs font-bold"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!agreedTerms}
                className="neo-btn-primary px-7 py-2.5 text-xs font-black uppercase tracking-wider disabled:opacity-50"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Submit Candidate Application</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
