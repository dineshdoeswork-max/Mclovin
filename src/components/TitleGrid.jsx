export default function TitleGrid({ category, titles, onSelect }) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">{category}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {titles.map((title) => (
          <button 
            key={title.id}
            onClick={() => onSelect(title)}
            className="group flex flex-col items-start text-left"
          >
            <div className="w-full aspect-[2/3] rounded-xl overflow-hidden bg-gray-200 mb-4 shadow-sm group-hover:shadow-lg transition-all relative">
              <img 
                src={title.poster} 
                alt={title.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-semibold text-lg text-black">{title.title}</span>
            <span className="text-sm text-gray-500">{title.characters.length} Design(s)</span>
          </button>
        ))}
      </div>
    </div>
  );
}
