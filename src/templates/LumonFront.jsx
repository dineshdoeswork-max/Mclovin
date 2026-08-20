export default function LumonFront({ data }) {
  const photo = data.photo || {};
  const photoStyle = {
    transform: `scale(${photo.zoom || 1}) translate(${photo.panX || 0}px, ${photo.panY || 0}px)`,
    transformOrigin: 'center center'
  };

  return (
    <div className="w-full h-full bg-[#0a2342] text-white flex flex-col p-4 relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#12386a] rounded-bl-full opacity-50"></div>
      
      <div className="flex justify-between items-start z-10 h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-xl font-bold tracking-widest text-blue-100">LUMON</h1>
            <p className="text-[8px] tracking-[0.2em] text-blue-300">INDUSTRIES</p>
          </div>
          
          <div className="mb-2">
            <p className="text-[10px] text-blue-300 uppercase tracking-widest mb-1">Employee</p>
            <p className="text-lg font-bold leading-tight">{data.name || 'John Doe'}</p>
            <p className="text-xs text-blue-200 mt-1">{data.department || 'Macrodata Refinement'}</p>
          </div>
        </div>

        <div className="h-full flex flex-col justify-end items-end pb-2">
          <div className="w-24 h-32 bg-gray-200 rounded-sm overflow-hidden border-2 border-white/20 mb-2 shadow-lg flex-shrink-0 relative bg-white flex items-center justify-center text-gray-300">
            {photo.url ? (
              <img src={photo.url} alt="Profile" className="absolute w-full h-full object-cover" style={photoStyle} />
            ) : (
              <span className="text-xs">Photo</span>
            )}
          </div>
          <p className="text-[10px] font-mono text-blue-300">ID: {data.idNumber || '00-000'}</p>
        </div>
      </div>
    </div>
  );
}
