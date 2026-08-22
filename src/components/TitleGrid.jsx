import { CoverflowCarousel } from "./ui/coverflow-carousel";

export default function TitleGrid({ titles, onSelect }) {
  
  const slides = titles.map(title => ({
    src: title.poster,
    alt: title.title,
    title: title.title,
    subtitle: `${title.characters.length} Design${title.characters.length !== 1 ? 's' : ''} Available`,
    originalData: title 
  }));

  return (
    <div className="w-full max-w-6xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Choose Your ID</h2>
        <p className="text-gray-500 mt-2">Swipe to browse universes, tap to select.</p>
      </div>
      
      {/* 
        The Coverflow Carousel! 
        We pass in our mapped slides, turn on the caption/navigation, and pass down the onSelect function 
      */}
      <CoverflowCarousel 
        slides={slides} 
        showCaption={true} 
        showNavigation={true}
        onSelect={onSelect}
      />
    </div>
  );
}