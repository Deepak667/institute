import React, { useState } from 'react';
import { Search, Star, Clock, Calendar, Users, ArrowRight, BookOpen, Terminal, Sparkles, DollarSign, Layers } from 'lucide-react';
import { Track, TrackCategory } from '../types/campus';
import { TRACKS } from '../data/mockCampusData';

interface TracksExplorerProps {
  onSelectTrack: (track: Track) => void;
  onApplyForTrack: (track: Track) => void;
  onOpenLabForTrack: (track: Track) => void;
}

export const TracksExplorer: React.FC<TracksExplorerProps> = ({
  onSelectTrack,
  onApplyForTrack,
  onOpenLabForTrack,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TrackCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: TrackCategory; label: string }[] = [
    { id: 'all', label: 'All Tracks (4)' },
    { id: 'ai', label: 'Autonomous AI & Agents' },
    { id: 'fullstack', label: 'Full-Stack & Cloud' },
    { id: 'systems', label: 'Rust & Systems' },
    { id: 'security', label: 'Cyber Defense' },
  ];

  const filteredTracks = TRACKS.filter((track) => {
    const matchesCategory = selectedCategory === 'all' || track.category === selectedCategory;
    const matchesSearch =
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getBadgeStyle = (variant: 'cyan' | 'amber' | 'emerald' | 'indigo') => {
    switch (variant) {
      case 'cyan':
        return 'bg-[#acedff] text-[#004e5c] border-slate-900';
      case 'amber':
        return 'bg-[#fef3c7] text-[#92400e] border-slate-900';
      case 'emerald':
        return 'bg-[#d1fae5] text-[#065f46] border-slate-900';
      case 'indigo':
        return 'bg-[#e0e7ff] text-[#3730a3] border-slate-900';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-900';
    }
  };

  return (
    <section id="tracks" className="py-16 md:py-24 bg-[#faf8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="neo-pill-badge px-3 py-1 bg-[#eaedff] text-[#4b41e1] text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#0f172a]">
                TECHNICAL ACCELERATORS
              </span>
              <span className="text-xs font-bold text-slate-500">Tier-1 Curriculum</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              SELECT YOUR CAREER ACCELERATOR.
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl font-sans">
              Intensive, project-driven programs engineered for measurable senior engineering competency. 
              Zero filler. Every curriculum is stress-tested against FAANG hiring rubrics.
            </p>
          </div>

          {/* Search Pill Input */}
          <div className="w-full md:w-80 relative">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tracks or tech (e.g. PyTorch, Rust)..."
                className="w-full pl-11 pr-4 py-3 bg-white rounded-full border-2 border-slate-900 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:shadow-[2px_2px_0px_#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border-2 border-slate-900 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#06b6d4] text-slate-900 shadow-[3px_3px_0px_#0f172a] -translate-x-0.5 -translate-y-0.5'
                  : 'bg-white text-slate-700 hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tracks Grid (2 Columns Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTracks.map((track) => (
            <div
              key={track.id}
              className="neo-card neo-card-interactive p-6 sm:p-8 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Badge and Seats Indicator */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span
                    className={`neo-pill-badge px-3 py-1 text-xs font-black tracking-wide ${getBadgeStyle(
                      track.badge.variant
                    )}`}
                  >
                    {track.badge.text}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="neo-pill-badge px-2.5 py-0.5 bg-rose-50 text-rose-700 text-[11px] font-black border-slate-900">
                      🔥 Only {track.seatsLeft} of {track.totalSeats} seats left
                    </span>
                    <div className="flex items-center text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-300">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-1" />
                      <span>{track.rating}</span>
                      <span className="text-slate-400 ml-1">({track.reviewsCount})</span>
                    </div>
                  </div>
                </div>

                {/* Track Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-[#4b41e1] transition-colors">
                  {track.title}
                </h3>

                {/* Headline summary */}
                <p className="text-sm font-semibold text-slate-700 mb-4 leading-snug">
                  {track.headline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                  {track.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-[#f8fafc] border-2 border-slate-900 mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      Duration
                    </span>
                    <div className="text-sm font-black text-slate-900 mt-0.5">
                      {track.durationWeeks} Weeks
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">{track.hoursPerWeek}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-emerald-600" />
                      Median Comp
                    </span>
                    <div className="text-sm font-black text-emerald-700 mt-0.5">
                      {track.avgStartingSalary}
                    </div>
                    <span className="text-[10px] text-emerald-600 font-semibold">{track.salaryUplift} Avg Uplift</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#4f46e5]" />
                      Next Cohort
                    </span>
                    <div className="text-sm font-black text-slate-900 mt-0.5">
                      {track.nextCohortDate}
                    </div>
                    <span className="text-[10px] text-[#4f46e5] font-semibold">Rolling Review</span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-6">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    <span>Curriculum Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {track.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white text-slate-800 border border-slate-300 shadow-[1px_1px_0px_#0f172a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-4 border-t-2 border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectTrack(track)}
                    className="neo-btn-white px-4 py-2 text-xs font-bold"
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1.5 text-[#4f46e5]" />
                    <span>Syllabus Timeline</span>
                  </button>

                  <button
                    onClick={() => onOpenLabForTrack(track)}
                    className="neo-btn-white px-3.5 py-2 text-xs font-bold hidden sm:inline-flex"
                  >
                    <Terminal className="w-3.5 h-3.5 mr-1 text-[#06b6d4]" />
                    <span>Code Lab</span>
                  </button>
                </div>

                <button
                  onClick={() => onApplyForTrack(track)}
                  className="neo-btn-primary px-5 py-2 text-xs font-black uppercase tracking-wider"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTracks.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a]">
            <p className="text-lg font-bold text-slate-800">No tracks match your current filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 neo-btn-primary px-5 py-2 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
