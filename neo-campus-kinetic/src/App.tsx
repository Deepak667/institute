import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TracksExplorer } from './components/TracksExplorer';
import { CurriculumTimeline } from './components/CurriculumTimeline';
import { InteractiveCodeLab } from './components/InteractiveCodeLab';
import { MentorDirectory } from './components/MentorDirectory';
import { CampusPulse } from './components/CampusPulse';
import { Footer } from './components/Footer';
import { DiagnosticQuizModal } from './components/DiagnosticQuizModal';
import { ApplyModal } from './components/ApplyModal';
import { StudentPortalDrawer } from './components/StudentPortalDrawer';
import { TRACKS } from './data/mockCampusData';
import { Track } from './types/campus';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('tracks');
  const [selectedTrack, setSelectedTrack] = useState<Track>(TRACKS[0]);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);
  const [isApplyOpen, setIsApplyOpen] = useState<boolean>(false);
  const [isStudentPortalOpen, setIsStudentPortalOpen] = useState<boolean>(false);
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | undefined>(undefined);

  const handleSelectTrack = (track: Track) => {
    setSelectedTrack(track);
    setActiveTab('timeline');
    const timelineEl = document.getElementById('timeline');
    if (timelineEl) {
      timelineEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyForTrack = (track: Track) => {
    setSelectedTrack(track);
    setIsApplyOpen(true);
  };

  const handleOpenLabForTrack = (track: Track) => {
    setSelectedTrack(track);
    if (track.id === 'ai-agents') {
      setSelectedChallengeId('c-1');
    } else if (track.id === 'fullstack-cloud') {
      setSelectedChallengeId('c-2');
    } else if (track.id === 'rust-systems') {
      setSelectedChallengeId('c-3');
    }
    setActiveTab('lab');
    const labEl = document.getElementById('lab');
    if (labEl) {
      labEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#0f172a] selection:bg-[#06b6d4] selection:text-[#0f172a]">
      {/* Navigation Bar with Live Ticker */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          const el = document.getElementById(tab);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenStudentPortal={() => setIsStudentPortalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreTracks={() => {
            setActiveTab('tracks');
            const el = document.getElementById('tracks');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenLab={() => {
            setActiveTab('lab');
            const el = document.getElementById('lab');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
          onOpenApply={() => setIsApplyOpen(true)}
        />

        {/* Tracks Explorer */}
        <TracksExplorer
          onSelectTrack={handleSelectTrack}
          onApplyForTrack={handleApplyForTrack}
          onOpenLabForTrack={handleOpenLabForTrack}
        />

        {/* Modular Curriculum Milestones Timeline */}
        <CurriculumTimeline
          selectedTrack={selectedTrack}
          onSelectTrack={setSelectedTrack}
          onOpenLab={(challengeId) => {
            if (challengeId) setSelectedChallengeId(challengeId);
            setActiveTab('lab');
            const el = document.getElementById('lab');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onApply={handleApplyForTrack}
        />

        {/* Interactive Code & Architecture Lab */}
        <InteractiveCodeLab
          initialChallengeId={selectedChallengeId}
          onApplyForTrack={(tId) => {
            const track = TRACKS.find((t) => t.id === tId) || selectedTrack;
            handleApplyForTrack(track);
          }}
        />

        {/* 1:1 Mentors Directory */}
        <MentorDirectory />

        {/* Campus Pulse & Hiring Network */}
        <CampusPulse />
      </main>

      {/* Neo-brutalist Footer */}
      <Footer
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        onExploreTracks={() => {
          setActiveTab('tracks');
          const el = document.getElementById('tracks');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Modals and Drawers */}
      <DiagnosticQuizModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onSelectTrackForApplication={(track) => {
          setSelectedTrack(track);
          setIsApplyOpen(true);
        }}
      />

      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        selectedTrack={selectedTrack}
      />

      <StudentPortalDrawer
        isOpen={isStudentPortalOpen}
        onClose={() => setIsStudentPortalOpen(false)}
        onOpenLab={() => {
          setIsStudentPortalOpen(false);
          setActiveTab('lab');
          const el = document.getElementById('lab');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}
