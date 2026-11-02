import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  Flame, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  Clock, 
  Video,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { DEMO_STUDENT } from '../data/mockCampusData';

interface StudentPortalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLab: () => void;
}

export const StudentPortalDrawer: React.FC<StudentPortalDrawerProps> = ({
  isOpen,
  onClose,
  onOpenLab,
}) => {
  const [student, setStudent] = useState(DEMO_STUDENT);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  if (!isOpen) return null;

  const handleRSVP = () => {
    setRsvpSuccess(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full sm:max-w-2xl bg-white sm:rounded-3xl border-l-2 sm:border-2 border-slate-900 h-full max-h-[100vh] sm:max-h-[94vh] flex flex-col justify-between overflow-hidden shadow-[8px_8px_0px_#0f172a]">
        
        {/* Header Ribbon */}
        <div className="p-5 sm:p-6 bg-[#131b2e] text-white border-b-2 border-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-12 h-12 rounded-full border-2 border-[#06b6d4] object-cover shadow-[2px_2px_0px_#0f172a]"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg text-white">
                  {student.name}
                </span>
                <span className="neo-pill-badge px-2 py-0.5 bg-[#06b6d4] text-slate-900 text-[10px] font-black border-slate-900">
                  ENROLLED
                </span>
              </div>
              <span className="text-xs text-slate-300 font-sans">
                {student.cohort}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-white bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1 font-sans text-xs bg-[#faf8ff]">
          
          {/* Progress Overview Card */}
          <div className="neo-card p-5 bg-white space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-display font-black text-base text-slate-900">
                Cohort Graduation Sprint
              </span>
              <span className="neo-pill-badge px-2.5 py-0.5 bg-emerald-100 text-emerald-900 font-black border-slate-900">
                {student.overallProgress}% Complete
              </span>
            </div>

            {/* Custom Progress Bar */}
            <div className="w-full h-4 bg-slate-100 rounded-full border-2 border-slate-900 overflow-hidden p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-[#06b6d4] to-[#10b981] rounded-full border-r-2 border-slate-900 transition-all duration-500"
                style={{ width: `${student.overallProgress}%` }}
              />
            </div>

            {/* Quick Progress Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-slate-300">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Streak</span>
                <span className="text-sm font-black text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>{student.streakDays} Days</span>
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-slate-300">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Labs Passed</span>
                <span className="text-sm font-black text-slate-900 mt-0.5 block">
                  {student.completedLabs} / 32
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-slate-300">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Expected Grad</span>
                <span className="text-sm font-black text-slate-900 mt-0.5 block">
                  Feb 2027
                </span>
              </div>
            </div>
          </div>

          {/* Current Active Sprint */}
          <div className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#4f46e5]">
                ACTIVE SPRINT MILESTONE
              </span>
              <span className="text-[10px] font-bold text-slate-400">Due Sunday 11:59 PM</span>
            </div>
            <div className="text-sm font-black text-slate-900">
              {student.currentSprint}
            </div>
            <p className="text-slate-600 font-sans">
              Implement firewalled execution harnesses in Docker, wrap tool invocations in Pydantic guardrails, and write automated tests for edge-case query retries.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  onClose();
                  onOpenLab();
                }}
                className="neo-btn-primary px-4 py-1.5 text-xs font-black uppercase"
              >
                <span>Continue Lab Code</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>

          {/* Upcoming Masterclass */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#eaedff] to-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="neo-pill-badge px-2.5 py-0.5 bg-[#4f46e5] text-white text-[10px] font-black border-slate-900">
                LIVE MASTERCLASS
              </span>
              <span className="text-slate-500 font-semibold">{student.upcomingMasterclass.date}</span>
            </div>

            <div className="text-sm font-black text-slate-900">
              {student.upcomingMasterclass.title}
            </div>
            <div className="text-slate-600 font-medium">
              Guest Speaker: <span className="font-bold text-slate-900">{student.upcomingMasterclass.instructor}</span>
            </div>

            <div className="pt-1 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 flex items-center gap-1 font-semibold">
                <Video className="w-3.5 h-3.5 text-[#4f46e5]" />
                Live Q&A + Interactive Breakouts
              </span>

              <button
                onClick={handleRSVP}
                disabled={rsvpSuccess}
                className="neo-btn-primary px-4 py-1.5 font-black text-xs"
              >
                {rsvpSuccess ? '✓ RSVP Confirmed' : 'RSVP 1-Click'}
              </button>
            </div>
          </div>

          {/* Verifiable Credentials Showcase */}
          <div className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#acedff] border-2 border-slate-900 flex items-center justify-center font-bold text-slate-900">
                <Award className="w-5 h-5 text-[#00687a]" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs">
                  Intermediate AI Micro-Credential
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {student.certificateStatus.certificateId}
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowCertificateModal(true)}
              className="neo-btn-white px-3 py-1.5 text-xs font-bold"
            >
              <FileCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
              <span>View Badge</span>
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t-2 border-slate-900 flex items-center justify-between">
          <div className="text-[11px] text-slate-500 font-semibold">
            Campus Session: <span className="text-slate-900 font-bold">Logged In</span>
          </div>
          <button
            onClick={onClose}
            className="neo-btn-white px-5 py-2 font-bold text-xs"
          >
            Close Dashboard
          </button>
        </div>

      </div>

      {/* Verifiable Certificate Modal */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="neo-card p-6 sm:p-8 bg-white max-w-lg w-full relative space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <span className="font-display font-black text-xl text-slate-900">
                  PROOF-OF-WORK CREDENTIAL
                </span>
              </div>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="w-8 h-8 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf8ff] border-2 border-slate-900 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#06b6d4] border-2 border-slate-900 flex items-center justify-center mx-auto shadow-[3px_3px_0px_#0f172a]">
                <Award className="w-8 h-8 text-slate-900" />
              </div>

              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                NEO-CAMPUS KINETIC ACCREDITATION
              </div>

              <h4 className="font-display text-2xl font-black text-slate-900">
                {student.name}
              </h4>

              <p className="text-xs text-slate-600 font-sans">
                has successfully completed all Phase 1 & 2 rigorous benchmarks for
              </p>

              <div className="font-display font-black text-base text-[#4f46e5]">
                AUTONOMOUS AI SYSTEMS & AGENTS
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Verified Technical Competencies
                </span>
                <div className="flex flex-wrap gap-1 justify-center">
                  {student.certificateStatus.skillsVerified.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-800 border border-slate-300"
                    >
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-400 pt-1">
                SHA-256: e8b94f...99a01 • Issued: {student.certificateStatus.issueDate}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowCertificateModal(false)}
                className="neo-btn-primary px-5 py-2 text-xs font-bold"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
