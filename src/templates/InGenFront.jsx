import { QRCodeSVG } from 'qrcode.react';

export default function InGenFront({ data }) {
  const photo = data.photo || {};
  const photoStyle = {
    transform: `scale(${photo.zoom || 1}) translate(${photo.panX || 0}px, ${photo.panY || 0}px)`,
    transformOrigin: 'center center'
  };

  return (
    <div className="w-full h-full bg-[#dfd6c6] text-black border-4 border-[#b92b27] flex flex-col relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#b92b27 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
      
      <div className="flex h-full z-10 p-3 gap-3">
        {/* Left Column - Photo */}
        <div className="w-24 flex flex-col justify-between items-center">
          <div className="w-full h-32 bg-gray-300 border-2 border-black overflow-hidden relative flex items-center justify-center text-xs text-gray-500">
            {photo.url ? (
              <img src={photo.url} alt="Profile" className="absolute w-full h-full object-cover" style={photoStyle} />
            ) : (
              <span>Photo</span>
            )}
          </div>
          <div className="mt-2 bg-white p-1 border border-black">
            <QRCodeSVG value={data.qrData || 'INGEN'} size={40} />
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="flex-1 flex flex-col">
          <div className="border-b-2 border-black pb-1 mb-2">
            <h1 className="text-xl font-black text-[#b92b27] tracking-tighter uppercase">InGen</h1>
            <p className="text-[7px] font-bold tracking-widest uppercase text-black">International Genetic Technologies, Inc.</p>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[9px] uppercase font-bold text-gray-500">Name</p>
            <p className="text-base font-bold uppercase leading-tight mb-2">{data.name || 'Employee'}</p>
            
            <p className="text-[9px] uppercase font-bold text-gray-500">Title</p>
            <p className="text-xs font-bold uppercase leading-tight mb-2">{data.title || 'Staff'}</p>
            
            <div className="mt-auto flex items-center justify-between bg-black text-[#dfd6c6] px-2 py-1">
              <span className="text-[9px] uppercase font-bold">Clearance</span>
              <span className="text-xs font-black">{data.access || 'LEVEL 1'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
