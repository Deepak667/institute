import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, ArrowLeft, Check, Compass, DollarSign, Award } from 'lucide-react';
import { TRACKS } from '../data/mockCampusData';
import { Track } from '../types/campus';

interface DiagnosticQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTrackForApplication: (track: Track) => void;
}

export const DiagnosticQuizModal: React.FC<DiagnosticQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectTrackForApplication,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [background, setBackground] = useState<string>('intermediate-js');
  const [interest, setInterest] = useState<string>('ai');
  const [commitment, setCommitment] = useState<string>('fulltime');
  const [timeline, setTimeline] = useState<string>('asap');
  const [calculatedTrack, setCalculatedTrack] = useState<Track | null>(null);

  if (!isOpen) return null;

  const handleFinishQuiz = () => {
    let matchedTrack = TRACKS[0]; // default AI
    if (interest === 'ai') {
      matchedTrack = TRACKS.find((t) => t.id === 'ai-agents') || TRACKS[0];
    } else if (interest === 'fullstack') {
      matchedTrack = TRACKS.find((t) => t.id === 'fullstack-cloud') || TRACKS[1];
    } else if (interest === 'systems') {
      matchedTrack = TRACKS.find((t) => t.id === 'rust-systems') || TRACKS[2];
    } else if (interest === 'security') {
      matchedTrack = TRACKS.find((t) => t.id === 'cyber-defense') || TRACKS[3];
    }

    setCalculatedTrack(matchedTrack);
    setCurrentStep(5);

    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#4f46e5', '#10b981'],
    });
  };

  const handleReset = () => {
    setCurrentStep(1);
    setCalculatedTrack(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="neo-card p-6 sm:p-8 bg-white max-w-xl w-full relative max-h-[90vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="neo-pill-badge px-3 py-0.5 bg-[#acedff] text-slate-900 text-[10px] font-black uppercase tracking-wider">
                CAREER DIAGNOSTIC
              </span>
              {currentStep < 5 && (
                <span className="text-xs font-bold text-slate-500">
                  Step {currentStep} of 4
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl font-black text-slate-900">
              {currentStep === 5 ? 'YOUR TAILORED ACCELERATOR MATCH' : 'FIND YOUR KINETIC TRACK'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center font-bold text-slate-900 hover:bg-slate-100 shadow-[2px_2px_0px_#0f172a] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Step 1: Background */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              What is your current technical foundation or programming experience?
            </p>

            <div className="space-y-2">
              {[
                { id: 'beginner', label: 'Basic Coding / Self-Taught (HTML, JS, or Python syntax basics)' },
                { id: 'intermediate-js', label: 'Intermediate Developer (Built apps with React or Node, want tier-1 rigor)' },
                { id: 'cs-grad', label: 'CS Graduate / STEM Degree (Solid theory, need production architectures)' },
                { id: 'working-dev', label: 'Working Software Engineer (Looking to transition into AI or Systems)' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setBackground(opt.id)}
                  className={`w-full p-3.5 rounded-2xl border-2 border-slate-900 text-left font-bold text-xs transition-all flex items-center justify-between cursor-pointer ${
                    background === opt.id
                      ? 'bg-[#acedff] text-slate-900 shadow-[2px_2px_0px_#0f172a]'
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{opt.label}</span>
                  {background === opt.id && <Check className="w-4 h-4 text-slate-900 shrink-0" />}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setCurrentStep(2)}
                className="neo-btn-primary px-6 py-2.5 text-xs font-black uppercase"
              >
                <span>Next Question</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Tech Domain */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Which high-growth technical domain excites you the most?
            </p>

            <div className="space-y-2">
              {[
                { id: 'ai', title: 'Autonomous AI Systems & Agents', sub: 'RAG, LangGraph, vLLM, Agentic tool pipelines' },
                { id: 'fullstack', title: 'Full-Stack TypeScript & Cloud', sub: 'Next.js 19, Kafka, high-scale Postgres, Terraform' },
                { id: 'systems', title: 'Rust & Low-Latency Systems', sub: 'Async Tokio, Raft consensus, eBPF, memory safety' },
                { id: 'security', title: 'Cyber Defense & Zero-Trust', sub: 'Cloud red teaming, SPIFFE/SPIRE, SIEM automation' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setInterest(opt.id)}
                  className={`w-full p-3.5 rounded-2xl border-2 border-slate-900 text-left font-bold text-xs transition-all flex items-start justify-between cursor-pointer ${
                    interest === opt.id
                      ? 'bg-[#acedff] text-slate-900 shadow-[2px_2px_0px_#0f172a]'
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="text-sm font-black">{opt.title}</div>
                    <div className="text-[11px] text-slate-600 font-medium">{opt.sub}</div>
                  </div>
                  {interest === opt.id && <Check className="w-4 h-4 text-slate-900 shrink-0 mt-1" />}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="neo-btn-white px-4 py-2 text-xs font-bold"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="neo-btn-primary px-6 py-2.5 text-xs font-black uppercase"
              >
                <span>Next Question</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Commitment */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              How many hours per week can you dedicate to sprints and hackrooms?
            </p>

            <div className="space-y-2">
              {[
                { id: 'fulltime', title: 'Full-Time Accelerator (20-30 hrs/wk)', sub: 'Fastest placement track, daily peer sprints' },
                { id: 'parttime', title: 'Part-Time Flex (12-18 hrs/wk)', sub: 'Evenings and weekends alongside existing employment' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setCommitment(opt.id)}
                  className={`w-full p-3.5 rounded-2xl border-2 border-slate-900 text-left font-bold text-xs transition-all flex items-start justify-between cursor-pointer ${
                    commitment === opt.id
                      ? 'bg-[#acedff] text-slate-900 shadow-[2px_2px_0px_#0f172a]'
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="text-sm font-black">{opt.title}</div>
                    <div className="text-[11px] text-slate-600 font-medium">{opt.sub}</div>
                  </div>
                  {commitment === opt.id && <Check className="w-4 h-4 text-slate-900 shrink-0 mt-1" />}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="neo-btn-white px-4 py-2 text-xs font-bold"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="neo-btn-primary px-6 py-2.5 text-xs font-black uppercase"
              >
                <span>Next Question</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Timeline */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              When are you ready to start your cohort?
            </p>

            <div className="space-y-2">
              {[
                { id: 'asap', label: 'November 17, 2026 Batch (Immediate Enrollment)' },
                { id: 'next', label: 'January 2027 Winter Batch (Planning ahead)' },
                { id: 'exploring', label: 'Flexible / Next 3-6 Months' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setTimeline(opt.id)}
                  className={`w-full p-3.5 rounded-2xl border-2 border-slate-900 text-left font-bold text-xs transition-all flex items-center justify-between cursor-pointer ${
                    timeline === opt.id
                      ? 'bg-[#acedff] text-slate-900 shadow-[2px_2px_0px_#0f172a]'
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{opt.label}</span>
                  {timeline === opt.id && <Check className="w-4 h-4 text-slate-900 shrink-0" />}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-between">
              <button
                onClick={() => setCurrentStep(3)}
                className="neo-btn-white px-4 py-2 text-xs font-bold"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                <span>Back</span>
              </button>
              <button
                onClick={handleFinishQuiz}
                className="neo-btn-primary px-6 py-2.5 text-xs font-black uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Generate Path</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Result Card */}
        {currentStep === 5 && calculatedTrack && (
          <div className="space-y-5 animate-scaleUp">
            <div className="p-5 rounded-3xl bg-gradient-to-br from-[#eaedff] to-[#f8fafc] border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-3">
              <div className="flex items-center justify-between">
                <span className="neo-pill-badge px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-black border-slate-900">
                  98% FIT SCORE
                </span>
                <span className="text-xs font-black text-slate-600">
                  {calculatedTrack.durationWeeks} Weeks • {calculatedTrack.hoursPerWeek}
                </span>
              </div>

              <h4 className="font-display text-2xl font-black text-slate-900">
                {calculatedTrack.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-700 font-sans">
                {calculatedTrack.headline}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-slate-300">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Median Starting Base</span>
                  <span className="text-sm font-black text-emerald-700">{calculatedTrack.avgStartingSalary}</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-300">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Next Available Cohort</span>
                  <span className="text-sm font-black text-slate-900">{calculatedTrack.nextCohortDate}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleReset}
                className="neo-btn-white px-4 py-2 text-xs font-bold"
              >
                <span>Retake Quiz</span>
              </button>

              <button
                onClick={() => {
                  onSelectTrackForApplication(calculatedTrack);
                  onClose();
                }}
                className="neo-btn-primary px-6 py-2.5 text-xs font-black uppercase tracking-wider"
              >
                <span>Apply for this Track</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
