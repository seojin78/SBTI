import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: string) => void;
  direction: number;
}

export default function QuestionCard({ question, onAnswer, direction }: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ x: direction * 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -direction * 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-6"
        id={`question-card-${question.id}`}
      >
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4" id={`question-text-${question.id}`}>
          {question.text}
        </h2>
        <div className="flex flex-col gap-4">
          {question.options.map((option, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(option.value)}
              className="w-full p-6 text-left border-4 border-black font-bold text-lg md:text-xl transition-colors hover:bg-black hover:text-white group relative overflow-hidden"
              id={`option-${question.id}-${idx}`}
            >
              <span className="relative z-10">{option.text}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
