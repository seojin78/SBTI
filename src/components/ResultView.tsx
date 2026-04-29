import { motion } from 'motion/react';
import { SBTIResult } from '../types';
import { RefreshCcw, Share2, Download, Sparkles } from 'lucide-react';

interface ResultViewProps {
  result: SBTIResult;
  onReset: () => void;
}

export default function ResultView({ result, onReset }: ResultViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col gap-8 pb-12"
      id="result-view"
    >
      <div 
        className="p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center relative overflow-hidden"
        style={{ backgroundColor: result.color }}
        id="result-card"
      >
        <div className="absolute top-4 right-4 w-12 h-12 border-4 border-black rounded-full flex items-center justify-center font-black bg-white rotate-12">
          OK
        </div>
        
        <p className="text-xl font-black uppercase tracking-widest mb-2 opacity-80 flex items-center gap-2">
          <Sparkles size={18} /> YOUR SBTI IS <Sparkles size={18} />
        </p>
        <h1 className="text-7xl md:text-9xl font-display mb-4 tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
          {result.type}
        </h1>
        <div className="bg-black text-white px-6 py-3 text-3xl md:text-4xl font-black mb-8 rotate-[-2deg] border-4 border-white">
          {result.title}
        </div>
        
        <p className="text-xl md:text-2xl font-bold mb-8 max-w-md leading-snug">
          "{result.description}"
        </p>
        
        <div className="w-full bg-white p-6 border-4 border-black mb-6 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-black text-xl mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
            📊 지갑 속 사정
          </h3>
          <ul className="space-y-3">
            {result.characteristics.map((c, i) => (
              <li key={i} className="flex items-start gap-3 font-bold text-lg">
                <span className="mt-1.5 w-3 h-3 bg-black flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full bg-black text-white p-6 border-4 border-black text-left shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
          <h3 className="font-black text-xl mb-3 flex items-center gap-2 text-yellow-400">
            💡 솔직한 소비 솔루션
          </h3>
          <p className="font-bold text-lg leading-relaxed italic">
            {result.advice}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button 
          onClick={() => {}} 
          className="flex items-center justify-center gap-2 p-4 border-4 border-black font-black text-lg hover:bg-black hover:text-white transition-colors"
          id="share-btn"
        >
          <Share2 size={20} /> 결과 공유하기
        </button>
        <button 
          onClick={onReset} 
          className="flex items-center justify-center gap-2 p-4 border-4 border-black font-black text-lg bg-black text-white hover:bg-white hover:text-black transition-colors"
          id="reset-btn"
        >
          <RefreshCcw size={20} /> 다시 테스트하기
        </button>
      </div>
    </motion.div>
  );
}
