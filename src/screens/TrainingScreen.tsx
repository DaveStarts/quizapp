import { useState } from 'react';
import { ALL_QUESTIONS } from '../data/questions';
import {
  CheckCircle2,
  XCircle,
  Home,
  BrainCircuit,
  ArrowRight,
} from 'lucide-react';

interface TrainingScreenProps {
  onExit: () => void;
}

type TrainingStep = 'select_topic' | 'quiz' | 'result';

export default function TrainingScreen({ onExit }: TrainingScreenProps) {
  const [step, setStep] = useState<TrainingStep>('select_topic');
  const [topic, setTopic] = useState<string>('');
  const [questionIndices, setQuestionIndices] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Speichert den Index der angeklickten Antwort (0,1,2,3)
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [hasAnswered, setHasAnswered] = useState(false);

  const topics = Object.keys(ALL_QUESTIONS);

  // 1. Training starten und 10 zufällige Fragen ziehen
  const startTraining = (selectedTopic: string) => {
    const topicQs = ALL_QUESTIONS[selectedTopic];
    const allIndices = Array.from({ length: topicQs.length }, (_, i) => i);
    const random10 = allIndices.sort(() => Math.random() - 0.5).slice(0, 10);

    setTopic(selectedTopic);
    setQuestionIndices(random10);
    setStep('quiz');
  };

  // 2. Antwort anklicken
  const handleAnswer = (answerIdx: number) => {
    if (hasAnswered) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: answerIdx }));
    setHasAnswered(true);
  };

  // 3. Nächste Frage oder Ergebnis
  const handleNext = () => {
    if (currentIndex < 9) {
      setCurrentIndex((prev) => prev + 1);
      setHasAnswered(false);
    } else {
      setStep('result');
    }
  };

  // === RENDER: THEMENAUSWAHL ===
  if (step === 'select_topic') {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center justify-center">
        <BrainCircuit className="w-16 h-16 text-indigo-400 mb-6" />
        <h2 className="text-3xl font-bold mb-8">Trainingsmodus</h2>
        <p className="text-slate-400 mb-8 text-center max-w-sm">
          Wähle eine Kategorie zum Üben. Es gibt hierfür keine
          Ranglisten-Punkte!
        </p>

        <div className="w-full max-w-md space-y-4">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => startTraining(t)}
              className="w-full bg-slate-800 hover:bg-indigo-600 p-4 rounded-2xl font-bold text-lg transition-colors border border-slate-700 hover:border-indigo-500 text-left"
            >
              {t}
            </button>
          ))}
        </div>

        <button
          onClick={onExit}
          className="mt-8 flex items-center text-slate-400 hover:text-white"
        >
          <Home className="w-5 h-5 mr-2" /> Zurück zur Lobby
        </button>
      </div>
    );
  }

  // Hilfsvariablen für Quiz & Result
  const questions = ALL_QUESTIONS[topic];
  const currentQ = questions[questionIndices[currentIndex]];
  const selectedAnswerIdx = answers[currentIndex];
  const isCorrect = selectedAnswerIdx === currentQ?.correct;

  // === RENDER: QUIZ ===
  if (step === 'quiz') {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center">
        <div className="w-full max-w-md mt-10">
          <div className="flex justify-between items-center mb-6 text-slate-400 font-semibold">
            <span>{topic}</span>
            <span>Frage {currentIndex + 1} / 10</span>
          </div>

          <h2 className="text-2xl font-bold mb-8 leading-snug">{currentQ.q}</h2>

          <div className="space-y-4">
            {currentQ.a.map((answerText: string, idx: number) => {
              let btnClass = 'bg-slate-800 border-slate-700 hover:bg-slate-700';

              if (hasAnswered) {
                if (idx === currentQ.correct) {
                  btnClass =
                    'bg-emerald-500/20 border-emerald-500 text-emerald-400'; // Richtig
                } else if (idx === selectedAnswerIdx) {
                  btnClass = 'bg-red-500/20 border-red-500 text-red-400'; // Falsch angeklickt
                } else {
                  btnClass = 'bg-slate-800 border-slate-700 opacity-50'; // Andere
                }
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
              {currentIndex < 9 ? 'Nächste Frage' : 'Zur Auswertung'}{' '}
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
            Du hast {correctCount} von 10 richtig.
          </p>
        </div>

        <div className="space-y-6 mb-10">
          {questionIndices.map((realIdx, stepIdx) => {
            const q = questions[realIdx];
            const myAnsIdx = answers[stepIdx];
            const correctAns = myAnsIdx === q.correct;

            return (
              <div
                key={stepIdx}
                className="bg-slate-800 p-5 rounded-2xl border border-slate-700"
              >
                <p className="font-semibold mb-3">
                  {stepIdx + 1}. {q.q}
                </p>
                <div className="flex items-center text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                  <span className="text-emerald-400">
                    Lösung: <span className="text-white">{q.a[q.correct]}</span>
                  </span>
                </div>
                {!correctAns && (
                  <div className="flex items-center text-sm">
                    <XCircle className="w-4 h-4 text-red-500 mr-2" />
                    <span className="text-red-400">
                      Deine Wahl:{' '}
                      <span className="text-slate-300">
                        {myAnsIdx !== undefined ? q.a[myAnsIdx] : 'Nichts'}
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
          className="w-full bg-slate-700 hover:bg-slate-600 p-5 rounded-2xl font-bold flex justify-center items-center"
        >
          <Home className="w-6 h-6 mr-3" /> Zurück zur Lobby
        </button>
      </div>
    </div>
  );
}
