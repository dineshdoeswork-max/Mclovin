import { Boxes } from "./ui/background-boxes";

export default function Landing({ onStart }) {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      {/* This creates a radial gradient mask so the edges fade into darkness */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      {/* The Animated Grid Background */}
      <Boxes />

      {/* Foreground Content */}
      <div className="z-20 relative flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
          McLovin
        </h1>
        <p className="text-center mt-2 text-neutral-300 text-lg mb-10 max-w-md px-6 lowercase">
          your fav fake id supplier in town (better than bart)
        </p>
        
        <button 
          onClick={onStart}
          className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(125,211,252,0.3)] active:scale-95"
        >
          Begin Quest
        </button>
      </div>
    </div>
  );
}