export default function Landing({ onStart }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-black mb-6">
          Side Quest 101
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 font-medium">
          Create, customize, and export stunning replica ID cards from your favorite movies and series.
        </p>
        <button 
          onClick={onStart}
          className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/10"
        >
          Begin Quest
        </button>
      </div>
    </div>
  );
}
