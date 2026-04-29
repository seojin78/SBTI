import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wallet, ArrowRight, Sparkles } from 'lucide-react';
import { QUESTIONS, RESULTS } from './constants';
import { Dimension, SBTIResult } from './types';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import ResultView from './components/ResultView';

type AppState = 'intro' | 'quiz' | 'result';

export default function App() {
  const [state, setState] = useState<AppState>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});

  const handleAnswer = (value: string) => {
    const dimension = QUESTIONS[currentIdx].dimension;
    setAnswers((prev) => ({
      ...prev,
      [dimension]: [...(prev[dimension] || []), value],
    }));

    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setState('result');
    }
  };

  const finalResult = useMemo(() => {
    if (state !== 'result') return null;

    const getMajorType = (dimension: Dimension, typeA: string) => {
      const counts = answers[dimension] || [];
      const aCount = counts.filter(v => v === typeA).length;
      return aCount >= 3 ? typeA : (QUESTIONS.find(q => q.dimension === dimension)?.options.find(o => o.value !== typeA)?.value || '');
    };

    const type = 
      getMajorType('Frequency', 'S') + 
      getMajorType('Target', 'S') + 
      getMajorType('Quality', 'Q') + 
      getMajorType('Planning', 'P');

    return RESULTS[type] || RESULTS['SSQP'];
  }, [state, answers]);

  const reset = () => {
    setState('intro');
    setCurrentIdx(0);
    setAnswers({});
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black font-sans selection:bg-black selection:text-white" id="main-container">
      <div className="max-w-2xl mx-auto px-6 py-12" id="content-layout">
        <header className="mb-12 flex justify-between items-end border-b-4 border-black pb-4" id="app-header">
          <div>
            <h1 className="text-4xl font-display italic tracking-tighter" id="logo">SBTI</h1>
            <p className="text-sm font-bold uppercase tracking-widest opacity-60">Spending Behavior Type Indicator</p>
          </div>
          <Wallet size={32} className="mb-1" />
        </header>

        <main id="app-main">
          <AnimatePresence mode="wait">
            {state === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-8"
                id="intro-view"
              >
                <div className="relative" id="hero-section">
                  <div className="absolute -top-6 -left-6 bg-black text-white px-4 py-1 text-sm font-bold skew-x-[-12deg] z-10">
                    요즘 MZ 필수 테스트
                  </div>
                  <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden" id="hero-card">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 border-l-4 border-b-4 border-black flex items-center justify-center -rotate-12 translate-x-8 -translate-y-8">
                       <span className="text-4xl">💸</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-none mb-6 tracking-tighter relative z-10">
                      돈 쓰는 스타일이 <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 underline decoration-black">나의 정체성</span>
                    </h2>
                    <p className="text-lg font-bold text-gray-700 leading-relaxed relative z-10">
                      MBTI보다 더 정확한 '지갑 사정' 분석기! 지갑이 텅텅 비는 이유, 여기서 찾아보세요.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4" id="stats-summary">
                  <div className="p-4 border-4 border-black font-bold">
                    <p className="text-xs opacity-60">문항 수</p>
                    <p className="text-2xl italic tracking-tighter">20 Quest</p>
                  </div>
                  <div className="p-4 border-4 border-black font-bold">
                    <p className="text-xs opacity-60">소요 시간</p>
                    <p className="text-2xl italic tracking-tighter">~3 Mins</p>
                  </div>
                </div>

                <button
                  onClick={() => setState('quiz')}
                  className="group flex items-center justify-between w-full p-6 bg-black text-white border-4 border-black font-black text-2xl hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(255,107,107,1)] hover:shadow-none translate-y-[-4px] hover:translate-y-0"
                  id="start-button"
                >
                  진단 시작하기
                  <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            )}

            {state === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id="quiz-view"
              >
                <div className="flex justify-between items-baseline mb-2 font-black italic" id="quiz-progress-text">
                  <span className="text-xl">QUESTION {currentIdx + 1}</span>
                  <span className="opacity-40">{currentIdx + 1} / {QUESTIONS.length}</span>
                </div>
                <ProgressBar current={currentIdx + 1} total={QUESTIONS.length} />
                <QuestionCard
                  question={QUESTIONS[currentIdx]}
                  onAnswer={handleAnswer}
                  direction={1}
                />
              </motion.div>
            )}

            {state === 'result' && finalResult && (
              <ResultView 
                result={finalResult} 
                onReset={reset} 
              />
            )}
          </AnimatePresence>
        </main>

        <footer className="mt-20 pt-8 border-t-2 border-dashed border-black/20 text-center text-sm font-bold opacity-40 uppercase tracking-widest" id="app-footer">
          © {new Date().getFullYear()} SBTI RESEARCH LAB 
        </footer>
      </div>
    </div>
  );
}
