export default function McLovinFront({ data }) {
  const photo = data.photo || {};
  const photoStyle = {
    transform: `scale(${photo.zoom || 1}) translate(${photo.panX || 0}px, ${photo.panY || 0}px)`,
    transformOrigin: 'center center'
  };

  return (
    <div className="w-full h-full relative overflow-hidden font-sans text-black">
      {/* Background Template */}
      <img 
        src="/templates/mclovin-front.png" 
        alt="McLovin Template" 
        className="absolute inset-0 w-full h-full object-fill z-0" 
      />

      {/* Photo Area */}
      <div 
        className="absolute z-10 overflow-hidden flex items-center justify-center text-xs text-gray-400 bg-transparent"
        style={{ top: '10px', left: '10px', width: '102px', height: '136px' }}
      >
        {photo.url ? (
          <img src={photo.url} alt="Profile" className="absolute w-full h-full object-cover" style={photoStyle} />
        ) : null}
      </div>

      {/* Row 1: DOB and EXP (Moved beside the labels, extra bold) */}
      <div className="absolute z-10 text-[11px] font-black uppercase" style={{ top: '69px', left: '154px' }}>
        {data.dob || '06/03/1981'}
      </div>
      <div className="absolute z-10 text-[11px] font-black uppercase" style={{ top: '69px', left: '268px' }}>
        {data.expiry || '06/03/2008'}
      </div>

      {/* Row 2: HT, WT, HAIR, EYES, SEX (Using fixed width & text-center for perfect alignment) */}
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[24px] text-center" style={{ top: '112px', left: '121px' }}>
        {data.height || '5-10'}
      </div>
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[24px] text-center" style={{ top: '112px', left: '158px' }}>
        {data.weight || '150'}
      </div>
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[30px] text-center" style={{ top: '112px', left: '198px' }}>
        {data.hair || 'BRO'}
      </div>
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[30px] text-center" style={{ top: '112px', left: '243px' }}>
        {data.eyes || 'BRO'}
      </div>
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[20px] text-center" style={{ top: '112px', left: '286px' }}>
        {data.sex || 'M'}
      </div>

      {/* Row 3: ISSUE DATE, RESTR, ENDORSE */}
      <div className="absolute z-10 text-[10px] font-bold uppercase" style={{ top: '141px', left: '121px' }}>
        {data.issueDate || '06/03/2004'}
      </div>
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[40px] text-center" style={{ top: '141px', left: '231px' }}>
        {data.restr || 'NONE'}
      </div>
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[50px] text-center" style={{ top: '141px', left: '280px' }}>
        {data.endorse || 'NONE'}
      </div>
    </div>
  );
}