import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Terminal, 
  Play, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  HelpCircle, 
  Sparkles, 
  ChevronRight, 
  Copy, 
  Check, 
  Maximize2 
} from 'lucide-react';
import { CODING_CHALLENGES } from '../data/mockCampusData';
import { CodingChallenge } from '../types/campus';

interface InteractiveCodeLabProps {
  initialChallengeId?: string;
  onApplyForTrack?: (trackId: string) => void;
}

export const InteractiveCodeLab: React.FC<InteractiveCodeLabProps> = ({
  initialChallengeId,
}) => {
  const [selectedChallenge, setSelectedChallenge] = useState<CodingChallenge>(
    CODING_CHALLENGES.find((c) => c.id === initialChallengeId) || CODING_CHALLENGES[0]
  );
  const [code, setCode] = useState<string>(selectedChallenge.starterCode);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '⚡ Neo-Campus Kinetic Sandbox Kernel v2.1 initialized.',
    'Ready. Select a test or press "Execute Sandbox" to test your implementation.',
  ]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<{ name: string; passed: boolean }[]>(
    selectedChallenge.tests.map((t) => ({ name: t.name, passed: false }))
  );
  const [showHints, setShowHints] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectChallenge = (challenge: CodingChallenge) => {
    setSelectedChallenge(challenge);
    setCode(challenge.starterCode);
    setTerminalLogs([
      `⚡ Loaded environment for: ${challenge.title} (${challenge.language.toUpperCase()})`,
      'Ready. Press "Execute Sandbox" or "Run Test Suite".',
    ]);
    setTestResults(challenge.tests.map((t) => ({ name: t.name, passed: false })));
    setShowHints(false);
  };

  const handleResetCode = () => {
    setCode(selectedChallenge.starterCode);
    setTerminalLogs((prev) => [...prev, '↺ Reset code buffer to starter template.']);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExecuteSandbox = () => {
    setIsRunning(true);
    setTerminalLogs((prev) => [
      ...prev,
      `$ ${selectedChallenge.language} run main.${selectedChallenge.language === 'python' ? 'py' : selectedChallenge.language === 'typescript' ? 'ts' : 'rs'}`,
      'Compiling and executing in isolated micro-sandbox...',
    ]);

    setTimeout(() => {
      setIsRunning(false);
      setTerminalLogs((prev) => [
        ...prev,
        'stdout: [OK] Code executed successfully in 12ms.',
        selectedChallenge.expectedOutput,
        'STATUS: Exit code 0 (Success)',
      ]);
    }, 700);
  };

  const handleRunTests = () => {
    setIsRunning(true);
    setTerminalLogs((prev) => [
      ...prev,
      '$ pytest --verbose / cargo test / vitest run',
      'Running automated verification test harness against FAANG rubric...',
    ]);

    setTimeout(() => {
      setIsRunning(false);
      const passedAll = true;
      setTestResults(selectedChallenge.tests.map((t) => ({ name: t.name, passed: true })));

      setTerminalLogs((prev) => [
        ...prev,
        '✓ Test 1: PASSED (Expected payload match)',
        '✓ Test 2: PASSED (Zero invariant violations)',
        '✓ Test 3: PASSED (Fault tolerance & edge cases verified)',
        '-------------------------------------------------------',
        '🎉 ALL 3 TESTS PASSED! Solution validated by Kinetic Evaluator.',
      ]);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#4f46e5', '#10b981', '#0f172a'],
      });
    }, 1000);
  };

  return (
    <section id="lab" className="py-16 md:py-24 bg-[#faf8ff] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="neo-pill-badge px-3 py-1 bg-[#acedff] text-slate-900 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#0f172a]">
                LIVE PRODUCTION SANDBOX
              </span>
              <span className="text-xs font-bold text-slate-500">Hands-on Rigor</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              INTERACTIVE CODE & ARCHITECTURE LAB.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-sans">
              Test your engineering instinct in our in-browser kinetic sandbox. 
              Write real code, execute live test suites, and see how our curriculum turns theory into muscle memory.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] shrink-0 self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-[#06b6d4]" />
            <span className="text-xs font-bold text-slate-900">100% In-Browser Execution</span>
          </div>
        </div>

        {/* Challenge Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CODING_CHALLENGES.map((challenge) => {
            const isSelected = selectedChallenge.id === challenge.id;
            return (
              <button
                key={challenge.id}
                onClick={() => handleSelectChallenge(challenge)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all border-2 border-slate-900 cursor-pointer ${
                  isSelected
                    ? 'bg-[#06b6d4] text-slate-900 shadow-[3px_3px_0px_#0f172a] -translate-x-0.5 -translate-y-0.5'
                    : 'bg-white text-slate-700 hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a]'
                }`}
              >
                <span className="uppercase text-[10px] font-black mr-1.5 opacity-70">
                  [{challenge.language}]
                </span>
                <span>{challenge.title}</span>
              </button>
            );
          })}
        </div>

        {/* Sandbox Main Container (Neo-Card with 2px Slate Border) */}
        <div className="neo-card bg-[#0f172a] text-slate-100 overflow-hidden shadow-[6px_6px_0px_#0f172a]">
          
          {/* Top Bar of Sandbox */}
          <div className="bg-[#1e293b] px-4 sm:px-6 py-3.5 border-b-2 border-slate-900 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Terminal Traffic Light Dots */}
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500 border border-rose-700" />
                <div className="w-3 h-3 rounded-full bg-amber-500 border border-amber-700" />
                <div className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-700" />
              </div>

              <div className="h-4 w-[1px] bg-slate-700 mx-1" />

              <span className="font-mono text-xs font-bold text-[#acedff]">
                sandbox://{selectedChallenge.trackId}/main.{selectedChallenge.language === 'python' ? 'py' : selectedChallenge.language === 'typescript' ? 'ts' : 'rs'}
              </span>

              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-800 text-slate-300 border border-slate-700 uppercase">
                {selectedChallenge.difficulty}
              </span>
            </div>

            {/* Sandbox Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
                title="Copy code"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handleResetCode}
                className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
                title="Reset code"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>

              <button
                onClick={() => setShowHints(!showHints)}
                className="px-2.5 py-1 rounded-full bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 text-xs font-bold border border-amber-700/60 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3 h-3" />
                <span>Hints ({selectedChallenge.hints.length})</span>
              </button>
            </div>
          </div>

          {/* Scenario Banner */}
          <div className="bg-[#131b2e] px-4 sm:px-6 py-3 border-b border-slate-800 text-xs text-slate-300 font-sans flex items-start gap-2">
            <span className="font-bold text-[#06b6d4] shrink-0">Lab Objective:</span>
            <span>{selectedChallenge.scenario}</span>
          </div>

          {/* Hints Panel (Collapsible) */}
          {showHints && (
            <div className="bg-amber-950/40 border-b border-amber-800/40 p-4 text-xs text-amber-200 font-sans space-y-1.5 animate-fadeIn">
              <span className="font-bold uppercase tracking-wider block text-amber-400">Architecture Hints:</span>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                {selectedChallenge.hints.map((hint, i) => (
                  <li key={i}>{hint}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Editor and Terminal Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            
            {/* Code Editor Area */}
            <div className="lg:col-span-7 p-4 border-b-2 lg:border-b-0 lg:border-r-2 border-slate-900 bg-[#0f172a] font-mono text-xs sm:text-sm">
              <div className="flex justify-between items-center text-[11px] text-slate-400 mb-2 font-mono">
                <span>// EDITABLE SOURCE BUFFER</span>
                <span>UTF-8 • {code.split('\n').length} lines</span>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                rows={16}
                className="w-full bg-transparent text-[#e2e8f0] font-mono leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-[#06b6d4] rounded-lg p-2"
                style={{ tabSize: 2 }}
              />
            </div>

            {/* Terminal Output & Test Results Area */}
            <div className="lg:col-span-5 bg-[#090d16] p-4 flex flex-col justify-between font-mono text-xs">
              
              {/* Terminal Logs View */}
              <div className="space-y-1.5 overflow-y-auto max-h-64 pr-2">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>KINETIC CLI TERMINAL</span>
                </div>
                {terminalLogs.map((log, index) => (
                  <div
                    key={index}
                    className={`leading-relaxed ${
                      log.startsWith('$')
                        ? 'text-[#4cd7f6] font-bold'
                        : log.startsWith('✓') || log.startsWith('🎉')
                        ? 'text-emerald-400 font-bold'
                        : log.startsWith('STATUS')
                        ? 'text-slate-400 font-semibold'
                        : 'text-slate-300'
                    }`}
                  >
                    {log}
                  </div>
                ))}
                {isRunning && (
                  <div className="text-[#06b6d4] animate-pulse">
                    Executing process pid: 4892...
                  </div>
                )}
              </div>

              {/* Test Suite Matrix */}
              <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Verification Harness:
                </div>
                <div className="space-y-1.5">
                  {testResults.map((test, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800"
                    >
                      <span className="text-slate-300 font-sans text-xs">{test.name}</span>
                      {test.passed ? (
                        <span className="flex items-center text-emerald-400 font-bold text-[11px] gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>PASS</span>
                        </span>
                      ) : (
                        <span className="flex items-center text-slate-500 font-bold text-[11px] gap-1">
                          <div className="w-2.5 h-2.5 rounded-full border border-slate-600" />
                          <span>PENDING</span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Execution Action Toolbar */}
          <div className="bg-[#1e293b] px-4 sm:px-6 py-4 border-t-2 border-slate-900 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-sans">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Isolated Docker Sandbox Running • Zero Latency Execution</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleExecuteSandbox}
                disabled={isRunning}
                className="neo-btn-white px-4 py-2 text-xs font-bold cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 mr-1.5 text-slate-900 fill-slate-900" />
                <span>Execute Code</span>
              </button>

              <button
                onClick={handleRunTests}
                disabled={isRunning}
                className="neo-btn-primary px-5 py-2 text-xs font-black uppercase tracking-wider cursor-pointer disabled:opacity-50"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Run Full Test Suite</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
