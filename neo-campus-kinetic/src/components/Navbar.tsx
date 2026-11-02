import React, { useState } from 'react';
import { Sparkles, Terminal, BookOpen, Users, Compass, UserCircle, Menu, X, ArrowUpRight, Flame } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDiagnostic: () => void;
  onOpenApply: () => void;
  onOpenStudentPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenDiagnostic,
  onOpenApply,
  onOpenStudentPortal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'tracks', label: 'Bootcamp Tracks', icon: Compass },
    { id: 'timeline', label: 'Syllabus & Milestones', icon: BookOpen },
    { id: 'lab', label: 'Interactive Lab', icon: Terminal },
    { id: 'mentors', label: '1:1 Mentors', icon: Users },
    { id: 'pulse', label: 'Campus Pulse', icon: Flame },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf8ff]/90 backdrop-blur-md border-b-2 border-slate-900">
      {/* Top Ticker Ribbon */}
      <div className="bg-[#0f172a] text-[#acedff] py-1.5 px-4 text-xs font-bold uppercase tracking-wider overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#06b6d4] text-[#0f172a] text-[10px] font-black tracking-normal">
              LIVE COHORT
            </span>
            <span className="text-white">
              November 17 Batch • Only <span className="text-[#06b6d4] font-black">9 Seats Left</span> Across 4 Accelerators
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline text-emerald-400">94.8% Placement Rate</span>
            <span className="hidden lg:inline text-slate-400">•</span>
            <span className="hidden lg:inline text-slate-300">Avg. Compensation: $126,500</span>
          </div>
          <button
            onClick={onOpenDiagnostic}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#06b6d4] hover:text-[#22d3ee] underline underline-offset-2 transition-colors cursor-pointer"
          >
            <span>Take 2-Min Career Diagnostic</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <button
            onClick={() => setActiveTab('tracks')}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none text-left"
          >
            <div className="w-10 h-10 rounded-full bg-[#06b6d4] border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0px_#0f172a] group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0px_#0f172a] transition-all">
              <span className="text-slate-900 font-display font-black text-xl leading-none">K</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl tracking-tight text-slate-900">
                  NEO-CAMPUS
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#4f46e5] text-white text-[10px] font-extrabold uppercase tracking-wider border border-slate-900">
                  KINETIC
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 tracking-tight">
                Tech Accelerator & Engineering Campus
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white px-2 py-1.5 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#06b6d4] text-slate-900 border-2 border-slate-900 shadow-[1px_1px_0px_#0f172a]'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-2 border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenStudentPortal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border-2 border-slate-900 bg-white text-slate-800 text-xs font-bold shadow-[2px_2px_0px_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#0f172a] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
            >
              <UserCircle className="w-4 h-4 text-[#4f46e5]" />
              <span>Student Portal</span>
            </button>

            <button
              onClick={onOpenApply}
              className="neo-btn-primary px-5 py-2 text-xs font-extrabold tracking-wide uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenApply}
              className="neo-btn-primary px-3 py-1.5 text-xs font-black uppercase"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border-2 border-slate-900 bg-white shadow-[2px_2px_0px_#0f172a] text-slate-900 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t-2 border-slate-900 bg-[#f8fafc] px-4 py-4 space-y-3 shadow-lg">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-2 w-full px-4 py-2.5 rounded-full text-sm font-bold border-2 border-slate-900 transition-all ${
                    isActive
                      ? 'bg-[#06b6d4] text-slate-900 shadow-[2px_2px_0px_#0f172a]'
                      : 'bg-white text-slate-800 shadow-[2px_2px_0px_#0f172a]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenStudentPortal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full border-2 border-slate-900 bg-white font-bold text-xs shadow-[2px_2px_0px_#0f172a]"
            >
              <UserCircle className="w-4 h-4 text-[#4f46e5]" />
              <span>Student Dashboard (Demo)</span>
            </button>
            <button
              onClick={() => {
                onOpenDiagnostic();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full border-2 border-slate-900 bg-[#acedff] font-bold text-xs shadow-[2px_2px_0px_#0f172a]"
            >
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span>Career Diagnostic Quiz</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
