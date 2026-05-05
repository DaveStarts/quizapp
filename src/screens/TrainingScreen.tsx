import { useState } from 'react';
import { ALL_QUESTIONS, getQuestionsForTopic } from '../data/questions';
import {
  CheckCircle2,
  XCircle,
  Home,
  BrainCircuit,
  ArrowRight,
  Layers,
  Stethoscope,
} from 'lucide-react';

interface TrainingScreenProps {
  onExit: () => void;
}

// Typ-Definition für TypeScript Sicherheit
interface Question {
  q: string;
  a: string[];
  correct: number;
}

type TrainingStep = 'select_topic' | 'quiz' | 'result';

export default function TrainingScreen({ onExit }: TrainingScreenProps) {
  const [step, setStep] = useState<TrainingStep>('select_topic');
  const [topic, setTopic] = useState<string>('');
  const [selectedMainCategory, setSelectedMainCategory] = useState<
    string | null
  >(null);
  const [questionIndices, setQuestionIndices] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [hasAnswered, setHasAnswered] = useState(false);

  // Die Hauptkategorien für das Menü
  const mainCategories = Object.keys(ALL_QUESTIONS);

  // 1. Training starten
  const startTraining = (selectedTopic: string) => {
    const topicQs = getQuestionsForTopic(selectedTopic);
    if (!topicQs || topicQs.length === 0) return;

    const allIndices = Array.from({ length: topicQs.length }, (_, i) => i);
    // 10 zufällige Fragen ziehen (oder weniger, falls nicht genug da sind)
    const randomIndices = allIndices
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    setTopic(selectedTopic);
    setQuestionIndices(randomIndices);
    setStep('quiz');
    setCurrentIndex(0);
    setAnswers({});
    setHasAnswered(false);
  };

  const handleAnswer = (answerIdx: number) => {
    if (hasAnswered) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: answerIdx }));
    setHasAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex < questionIndices.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setHasAnswered(false);
    } else {
      setStep('result');
    }
  };

  // === RENDER: THEMENAUSWAHL (Mit Akkordeon wie im SetupScreen) ===
  if (step === 'select_topic') {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center">
        <BrainCircuit className="w-16 h-16 text-indigo-400 mt-10 mb-6" />
        <h2 className="text-3xl font-bold mb-4">Trainingsmodus</h2>
        <p className="text-slate-400 mb-8 text-center max-w-sm">
          Wähle ein Thema zum Üben. Deine Punkte werden hier nicht gespeichert.
        </p>

        <div className="w-full max-w-md space-y-3">
          {mainCategories.map((mainCat) => {
            const isExpanded = selectedMainCategory === mainCat;
            return (
              <div key={mainCat} className="flex flex-col gap-2">
                <button
                  onClick={() =>
                    setSelectedMainCategory(isExpanded ? null : mainCat)
                  }
                  className={`p-4 rounded-2xl border text-left flex items-center transition-all ${
                    isExpanded
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <Layers className="w-5 h-5 mr-4 text-indigo-400" />
                  <span className="font-bold text-lg">{mainCat}</span>
                </button>

                {isExpanded && (
                  <div className="pl-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {Object.keys(ALL_QUESTIONS[mainCat]).map((subTopic) => (
                      <button
                        key={subTopic}
                        onClick={() => startTraining(subTopic)}
                        className="w-full bg-slate-800/50 border border-slate-700 p-3 rounded-xl flex items-center hover:border-indigo-400 transition-colors"
                      >
                        <Stethoscope className="w-4 h-4 mr-3 text-slate-500" />
                        {subTopic}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={onExit}
          className="mt-12 flex items-center text-slate-400 hover:text-white"
        >
          <Home className="w-5 h-5 mr-2" /> Zurück zur Lobby
        </button>
      </div>
    );
  }

  // Hilfsvariablen für Quiz & Result
  const questions = getQuestionsForTopic(topic) as Question[];
  const currentQ = questions[questionIndices[currentIndex]];
  const selectedAnswerIdx = answers[currentIndex];

  // === RENDER: QUIZ ===
  if (step === 'quiz' && currentQ) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center">
        <div className="w-full max-w-md mt-10">
          <div className="flex justify-between items-center mb-6 text-slate-400 font-semibold">
            <span className="truncate mr-4">{topic}</span>
            <span className="whitespace-nowrap">
              Frage {currentIndex + 1} / {questionIndices.length}
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-8 leading-snug">{currentQ.q}</h2>

          <div className="space-y-4">
            {currentQ.a.map((answerText, idx) => {
              let btnClass = 'bg-slate-800 border-slate-700';
              if (hasAnswered) {
                if (idx === currentQ.correct)
                  btnClass =
                    'bg-emerald-500/20 border-emerald-500 text-emerald-400';
                else if (idx === selectedAnswerIdx)
                  btnClass = 'bg-red-500/20 border-red-500 text-red-400';
                else btnClass = 'bg-slate-800 border-slate-700 opacity-50';
              }

              return (
                <button
                  key={idx}
                  disabled={hasAnswered}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-5 rounded-2xl border-2 font-medium transition-all ${btnClass}`}
                >
                  {answerText}
                </button>
              );
            })}
          </div>

          {hasAnswered && (
            <button
              onClick={handleNext}
              className="mt-8 w-full bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-2xl font-bold text-lg flex justify-center items-center"
            >
              {currentIndex < questionIndices.length - 1
                ? 'Nächste Frage'
                : 'Zur Auswertung'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // === RENDER: AUSWERTUNG ===
  let correctCount = 0;
  questionIndices.forEach((realIdx, stepIdx) => {
    if (answers[stepIdx] === questions[realIdx].correct) correctCount++;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 pb-20 flex flex-col items-center">
      <div className="w-full max-w-md mt-10">
        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 text-center mb-8">
          <BrainCircuit className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Training beendet!</h2>
          <p className="text-slate-400 text-lg">
            Du hast {correctCount} von {questionIndices.length} richtig.
          </p>
        </div>

        <div className="space-y-6 mb-10">
          {questionIndices.map((realIdx, stepIdx) => {
            const q = questions[realIdx];
            const myAnsIdx = answers[stepIdx];
            const isCorrect = myAnsIdx === q.correct;

            return (
              <div
                key={stepIdx}
                className="bg-slate-800 p-5 rounded-2xl border border-slate-700"
              >
                <p className="font-semibold mb-3">
                  {stepIdx + 1}. {q.q}
                </p>
                <div className="flex items-start text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-emerald-400">
                    Lösung: <span className="text-white">{q.a[q.correct]}</span>
                  </span>
                </div>
                {!isCorrect && (
                  <div className="flex items-start text-sm">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-red-400">
                      Deine Wahl:{' '}
                      <span className="text-slate-300">
                        {myAnsIdx !== undefined
                          ? q.a[myAnsIdx]
                          : 'Keine Antwort'}
                      </span>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={onExit}
          className="w-full bg-slate-700 p-5 rounded-2xl font-bold flex justify-center items-center"
        >
          <Home className="w-6 h-6 mr-3" /> Zurück zur Lobby
        </button>
      </div>
    </div>
  );
}
