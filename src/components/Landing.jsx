import { Boxes } from "./ui/background-boxes";
import { SpotlightButton } from "./ui/button-2";

export default function Landing({ onStart }) {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      <Boxes />

      <div className="z-20 relative flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
          McLovin
        </h1>
        <p className="text-center mt-2 text-neutral-300 text-lg mb-10 max-w-md px-6 lowercase">
          your fav fake id supplier in town (better than bart)
        </p>
        
        <SpotlightButton onClick={onStart}>
          Begin Quest
        </SpotlightButton>
      </div>
    </div>
  );
}