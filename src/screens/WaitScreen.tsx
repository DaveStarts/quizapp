import { ArrowLeft, Clock } from 'lucide-react';

interface Props {
  opponent: string;
  topic: string;
  onBack: () => void;
}

const TOPIC_ICONS: Record<string, string> = {
  Geschichte: '🏛',
  Musik: '🎵',
  Sport: '⚽',
  Geografie: '🌍',
  Film: '🎬',
  Wissenschaft: '🔬',
  Kunst: '🎨',
  Natur: '🌿',
};

export default function WaitScreen({ opponent, topic, onBack }: Props) {
  const topicIcon = TOPIC_ICONS[topic] ?? '❓';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Back Button */}
      <div className="px-5 pt-14">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center active:scale-95 transition-transform"
        >
          <ArrowLeft size={18} className="text-slate-300" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Animated Icon */}
        <div className="relative mb-8">
          {/* Outer ring animation */}
          <div
            className="absolute inset-0 rounded-full bg-amber-400/10 animate-ping"
            style={{ animationDuration: '2s' }}
          />
          <div
            className="absolute inset-2 rounded-full bg-amber-400/10 animate-ping"
            style={{ animationDuration: '2s', animationDelay: '0.4s' }}
          />
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center relative z-10">
            <Clock size={48} className="text-amber-400" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-white font-black text-2xl mb-3 leading-tight">
          Herausforderung gesendet!
        </h1>
        <p className="text-slate-400 text-base mb-8 max-w-xs">
          Warten auf Antwort von{' '}
          <span className="text-white font-semibold">{opponent}</span>...
        </p>

        {/* Game Summary Card */}
        <div className="w-full max-w-xs bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 mb-10">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">
            Spieldetails
          </p>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-1.5 shadow-lg shadow-orange-500/20">
                <span className="text-slate-900 font-black text-xs">ICH</span>
              </div>
              <p className="text-slate-300 text-sm font-semibold">Du</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="text-slate-500 font-black text-xs uppercase tracking-widest">
                VS
              </div>
              <div className="text-2xl">{topicIcon}</div>
              <div className="text-slate-400 text-xs font-medium">{topic}</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-1.5">
                <span className="text-slate-300 font-black text-xs">
                  {opponent.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <p className="text-slate-300 text-sm font-semibold">{opponent}</p>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-1.5 mb-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-amber-400 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* Back to Lobby */}
      <div className="px-5 pb-10">
        <button
          onClick={onBack}
          className="w-full bg-slate-800 border border-slate-700 hover:bg-slate-700 active:scale-95 text-slate-300 font-semibold text-base rounded-2xl py-4 transition-all duration-150"
        >
          Zurück zur Lobby
        </button>
      </div>
    </div>
  );
}
