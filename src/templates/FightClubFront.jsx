export default function FightClubFront({ data }) {
  const photo = data.photo || {};
  
  const photoStyle = {
    transform: `scaleX(-1) scale(${photo.zoom || 1}) translate(${photo.panX || 0}px, ${photo.panY || 0}px)`,
    transformOrigin: 'center center',
    objectPosition: 'center 30%',
    filter: 'grayscale(100%) contrast(120%) brightness(105%)',
    mixBlendMode: 'multiply',
    opacity: 0.85 
  };

  return (
    <div className="w-full h-full relative overflow-hidden text-black">
      {/* Background Template */}
      <img 
        src="/templates/fightclub-front.png" 
        alt="Fight Club Template" 
        className="absolute inset-0 w-full h-full object-fill z-0" 
      />

      {/* Photo Frame */}
      <div 
        className="absolute z-10 overflow-hidden"
        style={{ top: '30px', left: '20px', width: '99px', height: '88px' }}
      >
        {photo.url ? (
          <img 
            src={photo.url} 
            alt="Profile" 
            className="absolute z-10 w-full h-full object-cover" 
            style={photoStyle} 
          />
        ) : null}
      </div>

      {/* Employee Name */}
      <div 
        className="absolute z-10 flex items-center"
        style={{ top: '51px', left: '158px', width: '150px', height: '20px' }}
      >
        <span 
          className="uppercase whitespace-nowrap"
          style={{ 
            fontFamily: '"Special Elite", monospace',
            fontSize: '13px', 
            lineHeight: '1',
            color: 'rgba(44, 44, 44, 0.92)',
            letterSpacing: '0.5px',
            textShadow: '0px 0px 1px rgba(44, 44, 44, 0.5)', 
            mixBlendMode: 'multiply' 
          }}
        >
          {data.name || 'MC LOVIN'}
        </span>
      </div>

      {/* Age Field - Positioned down on the 4th line */}
      <div 
        className="absolute z-10 flex items-center"
        style={{ top: '134px', left: '185px', width: '50px', height: '20px' }}
      >
        <span 
          className="uppercase whitespace-nowrap"
          style={{ 
            fontFamily: '"Special Elite", monospace',
            fontSize: '14px', 
            lineHeight: '1',
            color: 'rgba(44, 44, 44, 0.92)',
            letterSpacing: '0.5px',
            textShadow: '0px 0px 1px rgba(44, 44, 44, 0.5)', 
            mixBlendMode: 'multiply' 
          }}
        >
          {data.age || '29'}
        </span>
      </div>
    </div>
  );
}