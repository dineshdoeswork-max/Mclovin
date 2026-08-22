export default function OscorpFront({ data }) {
  const photo = data.photo || {};
  
  // Combines the user's pan/zoom state with your preferred 40% center baseline
  const photoStyle = {
    transform: `scale(${photo.zoom || 1}) translate(${photo.panX || 0}px, ${photo.panY || 0}px)`,
    transformOrigin: 'center center',
    objectPosition: 'center 40%'
  };

  return (
    <div className="w-full h-full relative overflow-hidden text-black font-serif">
      {/* Background Template */}
      <img 
        src="/templates/oscorp-front.png" 
        alt="Oscorp Template" 
        className="absolute inset-0 w-full h-full object-fill z-0" 
      />

      {/* Photo Frame */}
      <div 
        className="absolute z-10 overflow-hidden bg-transparent"
        style={{ top: '128px',  height: '133px', left: '55px', width: '106px' }}
      >
        {photo.url ? (
          <img 
            src={photo.url} 
            alt="Profile" 
            className="absolute w-full h-full object-cover" 
            style={photoStyle} 
          />
        ) : null}
      </div>

      {/* Employee Name */}
      <div 
        className="absolute z-10 flex justify-center w-full"
        style={{ top: '275px', left: '0' }}
      >
        <span 
          className="font-bold text-center tracking-wide"
          style={{ fontSize: '12px', lineHeight: '1', fontFamily: '"Bodoni Moda", serif' }}
        >
          {data.name || 'Richard Parker'}
        </span>
      </div>
    </div>
  );
}