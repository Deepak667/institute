import React, { useState } from 'react';
import { 
  CheckCircle2, 
  CircleDot, 
  Lock, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Sparkles, 
  Terminal, 
  Download, 
  Code2, 
  Layers, 
  FolderGit2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Track, CurriculumModule, Lesson } from '../types/campus';
import { TRACKS } from '../data/mockCampusData';

interface CurriculumTimelineProps {
  selectedTrack: Track;
  onSelectTrack: (track: Track) => void;
  onOpenLab: (challengeId?: string) => void;
  onApply: (track: Track) => void;
}

export const CurriculumTimeline: React.FC<CurriculumTimelineProps> = ({
  selectedTrack,
  onSelectTrack,
  onOpenLab,
  onApply,
}) => {
  const [expandedModuleId, setExpandedModuleId] = useState<string>(
    selectedTrack.curriculum[0]?.id || ''
  );
  const [activeLessonModal, setActiveLessonModal] = useState<{
    module: CurriculumModule;
    lesson: Lesson;
  } | null>(null);

  const toggleModule = (id: string) => {
    setExpandedModuleId(expandedModuleId === id ? '' : id);
  };

  const getStatusIcon = (status: CurriculumModule['status'], index: number) => {
    if (status === 'completed') {
      return (
        <div className="w-9 h-9 rounded-full bg-[#10b981] border-2 border-slate-900 text-white flex items-center justify-center shadow-[2px_2px_0px_#0f172a] shrink-0">
          <CheckCircle2 className="w-5 h-5 text-slate-950 fill-white" />
        </div>
      );
    }
    if (status === 'in-progress') {
      return (
        <div className="w-9 h-9 rounded-full bg-[#06b6d4] border-2 border-slate-900 text-slate-900 flex items-center justify-center shadow-[2px_2px_0px_#0f172a] shrink-0 animate-pulse">
          <CircleDot className="w-5 h-5 text-slate-900" />
        </div>
      );
    }
    return (
      <div className="w-9 h-9 rounded-full bg-slate-200 border-2 border-slate-900 text-slate-600 flex items-center justify-center shadow-[2px_2px_0px_#0f172a] shrink-0">
        <span className="text-xs font-black">{index + 1}</span>
      </div>
    );
  };

  return (
    <section id="timeline" className="py-16 md:py-24 bg-[#f8fafc] border-b-2 border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Ribbon */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="neo-pill-badge px-3.5 py-1 bg-[#acedff] text-slate-900 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#0f172a]">
              CURRICULUM ARCHITECTURE
            </span>
            <span className="text-xs font-bold text-slate-500">Zero Slop • High Rigor</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            TIMELINE & MODULAR MILESTONES.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-sans">
            Modular engineering blocks connected along a strict production execution pipeline.
            Each milestone culminates in audited production code deployed to real infrastructure.
          </p>
        </div>

        {/* Track Switcher Tabs (Pill Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TRACKS.map((t) => {
            const isSelected = selectedTrack.id === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  onSelectTrack(t);
                  setExpandedModuleId(t.curriculum[0]?.id || '');
                }}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all border-2 border-slate-900 cursor-pointer ${
                  isSelected
                    ? 'bg-[#4f46e5] text-white shadow-[3px_3px_0px_#0f172a] -translate-x-0.5 -translate-y-0.5'
                    : 'bg-white text-slate-800 hover:bg-slate-100 shadow-[2px_2px_0px_#0f172a]'
                }`}
              >
                {t.title}
              </button>
            );
          })}
        </div>

        {/* Active Track Meta Banner */}
        <div className="neo-card p-6 sm:p-8 bg-white mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b-2 border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="neo-pill-badge px-3 py-0.5 text-xs font-black bg-[#acedff] text-slate-900 border-slate-900">
                  {selectedTrack.durationWeeks} Weeks Full Track
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Total Effort: ~{selectedTrack.durationWeeks * 22} Hands-on Hours
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
                {selectedTrack.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-sans">
                {selectedTrack.headline}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  // Simulated instant syllabus download notification
                  const blob = new Blob([JSON.stringify(selectedTrack, null, 2)], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${selectedTrack.slug}-syllabus.json`;
                  a.click();
                }}
                className="neo-btn-white px-4 py-2.5 text-xs font-bold"
                title="Download full course schema"
              >
                <Download className="w-3.5 h-3.5 mr-1.5 text-slate-700" />
                <span>Export Schema</span>
              </button>
              <button
                onClick={() => onApply(selectedTrack)}
                className="neo-btn-primary px-5 py-2.5 text-xs font-black uppercase"
              >
                <span>Enroll in Cohort</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
            <div className="p-3 bg-[#f8fafc] rounded-2xl border border-slate-300">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Phase Breakdown</span>
              <span className="text-sm font-extrabold text-slate-900">4 Master Modules</span>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-2xl border border-slate-300">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Code Labs</span>
              <span className="text-sm font-extrabold text-slate-900">32 Guided Labs</span>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-2xl border border-slate-300">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Portfolio Capstones</span>
              <span className="text-sm font-extrabold text-slate-900">4 Production Deployments</span>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-2xl border border-slate-300">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Mentor Reviews</span>
              <span className="text-sm font-extrabold text-slate-900">1:1 Weekly Code Critiques</span>
            </div>
          </div>
        </div>

        {/* The Vertical 2px Slate Line Timeline */}
        <div className="relative pl-6 sm:pl-8">
          
          {/* Vertical 2px Dark Slate Line */}
          <div className="absolute left-[26px] sm:left-[35px] top-6 bottom-10 w-[2px] bg-slate-900 pointer-events-none" />

          {/* Modular Curriculum Pill Blocks */}
          <div className="space-y-8">
            {selectedTrack.curriculum.map((mod, idx) => {
              const isExpanded = expandedModuleId === mod.id;

              return (
                <div key={mod.id} className="relative flex items-start gap-4 sm:gap-6">
                  
                  {/* Status Indicator Icon */}
                  <div className="relative z-10 pt-1">
                    {getStatusIcon(mod.status, idx)}
                  </div>

                  {/* Modular Pill Container / Card */}
                  <div className="flex-1">
                    <div 
                      className={`neo-card transition-all overflow-hidden ${
                        isExpanded ? 'ring-2 ring-[#06b6d4]' : 'hover:translate-x-1'
                      }`}
                    >
                      {/* Module Banner / Header */}
                      <button
                        onClick={() => toggleModule(mod.id)}
                        className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="neo-pill-badge px-2.5 py-0.5 text-[11px] font-black uppercase bg-[#f1f5f9] text-slate-800 border-slate-900">
                              {mod.weekNumber}
                            </span>
                            <span className="text-xs font-black text-[#4f46e5]">
                              {mod.phase}
                            </span>
                            <span className="text-slate-400 text-xs">•</span>
                            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {mod.durationHours} Hours Dedicated
                            </span>
                          </div>

                          <h4 className="font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                            {mod.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-2xl">
                            {mod.summary}
                          </p>
                        </div>

                        {/* Right Toggle Badge */}
                        <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                          <span className={`neo-pill-badge px-3 py-1 text-xs font-black ${
                            mod.status === 'completed'
                              ? 'bg-emerald-100 text-emerald-900 border-slate-900'
                              : mod.status === 'in-progress'
                              ? 'bg-[#acedff] text-slate-900 border-slate-900'
                              : 'bg-slate-100 text-slate-600 border-slate-400'
                          }`}>
                            {mod.status === 'completed' && '✓ Completed'}
                            {mod.status === 'in-progress' && '⚡ In Progress'}
                            {mod.status === 'locked' && '🔒 Locked Module'}
                          </span>

                          <div className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center bg-white shadow-[1px_1px_0px_#0f172a]">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-slate-900" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-900" />
                            )}
                          </div>
                        </div>
                      </button>

                      {/* Expandable Module Breakdown */}
                      {isExpanded && (
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t-2 border-slate-100 bg-[#faf8ff] space-y-6">
                          
                          {/* Module Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {mod.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white text-slate-800 border border-slate-300"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          {/* Lessons Grid */}
                          <div>
                            <div className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                              <Code2 className="w-4 h-4 text-[#06b6d4]" />
                              <span>Syllabus Lessons & Interactive Labs ({mod.lessons.length})</span>
                            </div>

                            <div className="space-y-2.5">
                              {mod.lessons.map((lesson) => (
                                <div
                                  key={lesson.id}
                                  className="p-3.5 bg-white rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                                >
                                  <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                                        lesson.type === 'code-lab'
                                          ? 'bg-cyan-100 text-cyan-900'
                                          : lesson.type === 'project'
                                          ? 'bg-purple-100 text-purple-900'
                                          : 'bg-slate-100 text-slate-700'
                                      }`}>
                                        {lesson.type}
                                      </span>
                                      <span className="text-[11px] text-slate-500 font-semibold">
                                        ⏱ {lesson.duration}
                                      </span>
                                    </div>
                                    <div className="text-sm font-bold text-slate-900">
                                      {lesson.title}
                                    </div>
                                    <p className="text-xs text-slate-600 font-sans">
                                      {lesson.description}
                                    </p>
                                    {lesson.deliverable && (
                                      <div className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                                        <span>Target Deliverable:</span>
                                        <span className="font-bold underline">{lesson.deliverable}</span>
                                      </div>
                                    )}
                                  </div>

                                  <button
                                    onClick={() => setActiveLessonModal({ module: mod, lesson })}
                                    className="neo-btn-white px-3 py-1.5 text-xs font-bold shrink-0 self-start sm:self-center"
                                  >
                                    <span>Inspect Lab</span>
                                    <ArrowRight className="w-3 h-3 ml-1" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Capstone Project Card */}
                          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#eaedff] to-[#f2f3ff] border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                            <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                              <span className="neo-pill-badge px-3 py-0.5 text-[10px] font-black uppercase bg-[#0f172a] text-[#acedff] border-slate-900">
                                PHASE CAPSTONE PROJECT
                              </span>
                              <div className="flex gap-1">
                                {mod.capstoneProject.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-900 border border-slate-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <h5 className="font-display text-lg font-bold text-slate-900 mb-1">
                              {mod.capstoneProject.title}
                            </h5>
                            <p className="text-xs text-slate-700 font-sans mb-3">
                              {mod.capstoneProject.description}
                            </p>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-300">
                              <span className="text-[11px] font-semibold text-slate-600">
                                Audited by Lead Architect • Stored in Public Git
                              </span>
                              <button
                                onClick={() => onOpenLab()}
                                className="neo-btn-primary px-3.5 py-1 text-xs font-bold"
                              >
                                <Terminal className="w-3 h-3 mr-1" />
                                <span>Simulate Lab</span>
                              </button>
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Lesson Details Drawer/Modal */}
      {activeLessonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="neo-card p-6 sm:p-8 bg-white max-w-xl w-full max-h-[90vh] overflow-y-auto relative animate-scaleUp">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="neo-pill-badge px-3 py-1 bg-[#dae2fd] text-slate-900 text-xs font-black uppercase">
                  {activeLessonModal.module.phase}
                </span>
                <h3 className="font-display text-2xl font-black text-slate-900 mt-2">
                  {activeLessonModal.lesson.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLessonModal(null)}
                className="w-8 h-8 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center font-black text-slate-900 hover:bg-slate-100 shadow-[2px_2px_0px_#0f172a] cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-sm text-slate-700 font-sans">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                  Lesson Objective
                </span>
                <p className="font-medium text-slate-800">
                  {activeLessonModal.lesson.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 bg-white">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Duration</span>
                  <span className="font-extrabold text-slate-900">{activeLessonModal.lesson.duration}</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-white">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Format</span>
                  <span className="font-extrabold text-slate-900 capitalize">{activeLessonModal.lesson.type}</span>
                </div>
              </div>

              {activeLessonModal.lesson.deliverable && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300">
                  <span className="text-[10px] font-bold uppercase text-emerald-800 block mb-0.5">
                    Production Milestone Deliverable
                  </span>
                  <span className="font-bold text-emerald-950">
                    {activeLessonModal.lesson.deliverable}
                  </span>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveLessonModal(null)}
                  className="neo-btn-white px-4 py-2 text-xs font-bold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveLessonModal(null);
                    onOpenLab();
                  }}
                  className="neo-btn-primary px-5 py-2 text-xs font-black uppercase"
                >
                  <Terminal className="w-3.5 h-3.5 mr-1" />
                  <span>Launch in Sandbox</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
