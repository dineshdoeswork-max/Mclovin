import React from "react";
import QRCode from "react-qr-code";

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
        style={{ top: '5px', left: '5px', width: '114px', height: '144px' }}
      >
        {photo.url ? (
          <img src={photo.url} alt="Profile" className="absolute w-full h-full object-cover" style={photoStyle} />
        ) : null}
      </div>

      {/* Editable QR Code Area */}
      <div 
        className="absolute z-10 bg-white p-[2px] rounded-sm flex items-center justify-center" 
        style={{ top: '15px', left: '270px', width: '45px', height: '45px' }} // Tweak top/left to place it perfectly on your template
      >
        <QRCode 
          value={data.qrData || "https://mclovin-id.vercel.app"} 
          size={41} 
          bgColor="transparent"
          fgColor="#000000"
          level="L"
        />
      </div>

      {/* Row 1: DOB and EXP */}
      <div className="absolute z-10 text-[13px] font-black uppercase" style={{ top: '68px', left: '154px' }}>
        {data.dob || '06/03/1981'}
      </div>
      <div className="absolute z-10 text-[13px] font-black uppercase" style={{ top: '68px', left: '254px' }}>
        {data.expiry || '06/03/2008'}
      </div>

      {/* Row 2: HT, WT, HAIR, EYES, SEX */}
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[24px] text-center" style={{ top: '108px', left: '121px' }}>
        {data.height || '5-10'}
      </div>
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[24px] text-center" style={{ top: '108px', left: '159px' }}>
        {data.weight || '150'}
      </div>
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[30px] text-center" style={{ top: '108px', left: '193px' }}>
        {data.hair || 'BRO'}
      </div>
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[30px] text-center" style={{ top: '108px', left: '230px' }}>
        {data.eyes || 'BRO'}
      </div>
      <div className="absolute z-10 text-[10px] font-bold uppercase w-[20px] text-center" style={{ top: '108px', left: '272px' }}>
        {data.sex || 'M'}
      </div>

      {/* Row 3: ISSUE DATE, RESTR, ENDORSE */}
      <div className="absolute z-10 text-[10px] font-bold uppercase" style={{ top: '141px', left: '124px' }}>
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