import { Film, Tv } from 'lucide-react';

export default function CategorySelect({ onSelect }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-5xl mx-auto w-full animate-fade-in">
      <h2 className="text-3xl font-bold mb-12">Choose a Universe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <button 
          onClick={() => onSelect('Movies')}
          className="group relative h-64 md:h-96 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Film size={48} className="mb-4 text-black group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold">Movies</span>
        </button>
        
        <button 
          onClick={() => onSelect('Series')}
          className="group relative h-64 md:h-96 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Tv size={48} className="mb-4 text-black group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold">Series</span>
        </button>
      </div>
    </div>
  );
}
