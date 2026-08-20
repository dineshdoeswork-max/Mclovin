export default function CardPicker({ title, onSelect }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-4xl mx-auto w-full animate-fade-in">
      <h2 className="text-3xl font-bold mb-4">{title.title}</h2>
      <p className="text-gray-500 mb-12">Select an ID variant</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {title.characters.map((char, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(char)}
            className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-black hover:shadow-md transition-all text-left flex flex-col items-start"
          >
            <span className="text-xl font-semibold mb-2">{char.name}</span>
            <span className="text-sm text-gray-400">Template: {char.frontTemplate}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
