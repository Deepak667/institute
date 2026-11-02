import React, { useState } from 'react';
import { Users, Calendar, Clock, Star, MessageSquare, Check, Sparkles, ArrowRight } from 'lucide-react';
import { MENTORS } from '../data/mockCampusData';
import { Mentor } from '../types/campus';

export const MentorDirectory: React.FC = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const handleOpenBooking = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setSelectedSlot(mentor.availableSlots[0] || '');
    setSelectedTopic(mentor.topics[0] || '');
    setBookingConfirmed(false);
  };

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      setSelectedMentor(null);
      setBookingConfirmed(false);
    }, 2200);
  };

  return (
    <section id="mentors" className="py-16 md:py-24 bg-[#faf8ff] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="neo-pill-badge px-3 py-1 bg-[#eaedff] text-[#4b41e1] text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#0f172a]">
                1:1 ELITE MENTORSHIP
              </span>
              <span className="text-xs font-bold text-slate-500">Every Student Gets Matched</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              STAFF ARCHITECTS & RESEARCHERS.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-sans">
              No junior teaching assistants. Receive weekly 1:1 code audits and architectural critiques 
              from engineers actively building at OpenAI, Cloudflare, Stripe, and Datadog.
            </p>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10b981] border-2 border-slate-900 flex items-center justify-center font-black text-white">
              1:1
            </div>
            <div>
              <div className="text-xs font-black text-slate-900">Weekly Guaranteed Sessions</div>
              <div className="text-[11px] text-slate-500">Unlimited async code reviews on GitHub</div>
            </div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTORS.map((mentor) => (
            <div
              key={mentor.id}
              className="neo-card neo-card-interactive p-6 flex flex-col justify-between bg-white"
            >
              <div>
                {/* Avatar and Company Ribbon */}
                <div className="relative mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-2xl border-2 border-slate-900 object-cover shadow-[3px_3px_0px_#0f172a]"
                  />
                  <span className="absolute bottom-0 right-2 translate-y-2 neo-pill-badge px-2.5 py-0.5 bg-[#acedff] text-slate-900 text-[10px] font-black border-slate-900">
                    {mentor.company}
                  </span>
                </div>

                {/* Mentor Info */}
                <h3 className="font-display text-xl font-black text-slate-900 mb-0.5">
                  {mentor.name}
                </h3>
                <div className="text-xs font-bold text-[#4f46e5] mb-2">
                  {mentor.role}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                  {mentor.bio}
                </p>

                {/* Specialty Pill */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Track Specialty:
                  </span>
                  <span className="neo-pill-badge px-2.5 py-1 text-[11px] font-bold bg-[#f1f5f9] text-slate-800 border-slate-900">
                    {mentor.trackSpecialty}
                  </span>
                </div>

                {/* Topics List */}
                <div className="mb-6 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Core Review Topics:
                  </span>
                  {mentor.topics.slice(0, 2).map((t, idx) => (
                    <div key={idx} className="text-[11px] text-slate-700 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <button
                onClick={() => handleOpenBooking(mentor)}
                className="neo-btn-primary w-full py-2.5 text-xs font-black uppercase tracking-wider"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                <span>Book 1:1 Critique</span>
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Booking Drawer/Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="neo-card p-6 sm:p-8 bg-white max-w-lg w-full relative">
            
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={selectedMentor.avatar}
                  alt={selectedMentor.name}
                  className="w-14 h-14 rounded-2xl border-2 border-slate-900 object-cover shadow-[2px_2px_0px_#0f172a]"
                />
                <div>
                  <h3 className="font-display text-xl font-black text-slate-900">
                    {selectedMentor.name}
                  </h3>
                  <div className="text-xs font-bold text-[#4f46e5]">
                    {selectedMentor.role} • {selectedMentor.company}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedMentor(null)}
                className="w-8 h-8 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center font-bold text-slate-900 hover:bg-slate-100 shadow-[2px_2px_0px_#0f172a] cursor-pointer"
              >
                ✕
              </button>
            </div>

            {bookingConfirmed ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
                  <Check className="w-8 h-8 text-white stroke-[3]" />
                </div>
                <h4 className="font-display text-2xl font-black text-slate-900">
                  CRITIQUE RESERVED!
                </h4>
                <p className="text-xs text-slate-600 font-sans max-w-sm mx-auto">
                  Calendar invitation and Zoom invite dispatched to your student email for <span className="font-bold">{selectedSlot}</span>.
                </p>
              </div>
            ) : (
              <div className="space-y-4 font-sans text-xs">
                <div>
                  <label className="font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Select Available Office Hours Slot:
                  </label>
                  <div className="space-y-2">
                    {selectedMentor.availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`w-full p-3 rounded-full border-2 border-slate-900 text-left font-bold flex items-center justify-between transition-all cursor-pointer ${
                          selectedSlot === slot
                            ? 'bg-[#acedff] text-slate-900 shadow-[2px_2px_0px_#0f172a]'
                            : 'bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-slate-800" />
                          <span>{slot}</span>
                        </div>
                        {selectedSlot === slot && <span className="text-xs">✓ Selected</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Review Agenda / Technical Focus:
                  </label>
                  <div className="space-y-1.5">
                    {selectedMentor.topics.map((topic) => (
                      <label
                        key={topic}
                        className={`flex items-center gap-2.5 p-2.5 rounded-xl border-2 border-slate-900 transition-all cursor-pointer ${
                          selectedTopic === topic ? 'bg-indigo-50 border-indigo-900' : 'bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="topic"
                          checked={selectedTopic === topic}
                          onChange={() => setSelectedTopic(topic)}
                          className="w-4 h-4 text-[#06b6d4] accent-[#06b6d4]"
                        />
                        <span className="font-semibold text-slate-800">{topic}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedMentor(null)}
                    className="neo-btn-white px-4 py-2 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmBooking}
                    className="neo-btn-primary px-6 py-2 font-black uppercase tracking-wider"
                  >
                    Confirm 1:1 Session
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
