import React, { useState } from 'react';
import { Flame, Star, GitFork, ArrowUpRight, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { STUDENT_PROJECTS, HIRING_PARTNERS } from '../data/mockCampusData';

export const CampusPulse: React.FC = () => {
  const [likedProjects, setLikedProjects] = useState<Record<string, number>>({});

  const handleLike = (id: string, initialStars: number) => {
    setLikedProjects((prev) => ({
      ...prev,
      [id]: (prev[id] || initialStars) + 1,
    }));
  };

  return (
    <section id="pulse" className="py-16 md:py-24 bg-[#faf8ff] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="neo-pill-badge px-3 py-1 bg-[#d1fae5] text-[#065f46] text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#0f172a]">
                STUDENT PROOF-OF-WORK
              </span>
              <span className="text-xs font-bold text-slate-500">Live Production Ships</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              CAMPUS PULSE & HIRING NETWORK.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-sans">
              Our graduates don’t submit homework—they ship open-source libraries, micro-VM sandboxes, 
              and distributed architectures that get starred by engineering leads and hired on the spot.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="neo-pill-badge px-4 py-2 bg-white text-slate-900 text-xs font-black shadow-[2px_2px_0px_#0f172a]">
              ⭐ 1,480+ Tier-1 Hires Placed
            </span>
          </div>
        </div>

        {/* Student Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STUDENT_PROJECTS.map((proj) => {
            const starsCount = likedProjects[proj.id] !== undefined ? likedProjects[proj.id] : proj.stars;

            return (
              <div
                key={proj.id}
                className="neo-card neo-card-interactive overflow-hidden flex flex-col justify-between bg-white group"
              >
                <div>
                  {/* Project Image Banner */}
                  <div className="relative h-48 overflow-hidden border-b-2 border-slate-900">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="neo-pill-badge px-2.5 py-0.5 bg-[#0f172a] text-[#acedff] text-[10px] font-black border-slate-900">
                        {proj.trackTitle}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 sm:p-6 space-y-3 font-sans">
                    
                    {/* Author Ribbon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={proj.authorAvatar}
                          alt={proj.author}
                          className="w-7 h-7 rounded-full border border-slate-900 object-cover"
                        />
                        <span className="text-xs font-bold text-slate-800">{proj.author}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">{proj.cohort}</span>
                    </div>

                    <h3 className="font-display text-xl font-black text-slate-900 tracking-tight">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proj.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f1f5f9] text-slate-700 border border-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Placement Outcome Pill */}
                    {proj.hiredAt && (
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center gap-2 text-[11px] font-bold text-emerald-950">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{proj.hiredAt}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Bar: Star & Demo Actions */}
                <div className="p-4 bg-[#faf8ff] border-t-2 border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleLike(proj.id, proj.stars)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-900 bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold shadow-[1px_1px_0px_#0f172a] transition-all cursor-pointer"
                  >
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span>{starsCount}</span>
                  </button>

                  <a
                    href="#lab"
                    className="flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:text-[#4338ca] underline cursor-pointer"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hiring Partners Ticker / Marquee Banner */}
        <div className="neo-card p-6 sm:p-8 bg-[#0f172a] text-white">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="neo-pill-badge px-3 py-0.5 bg-[#06b6d4] text-slate-900 text-[10px] font-black uppercase tracking-wider mb-2">
              ALUMNI CAREER DESTINATIONS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
              WHERE OUR GRADUATES WRITE PRODUCTION CODE.
            </h3>
            <p className="text-xs text-slate-300 font-sans mt-1">
              Over 260+ high-growth tech companies skip standard resume queues and interview our grads directly.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            {HIRING_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#1e293b] border-2 border-slate-800 text-center font-display font-black text-sm text-[#acedff] flex items-center justify-center hover:border-[#06b6d4] transition-colors"
              >
                {partner.logo}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 font-sans">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Money-Back Placement Warranty for eligible applicants</span>
            </span>
            <span className="font-semibold text-slate-300">
              Average Interview-to-Offer Cycle: 19 Calendar Days
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
