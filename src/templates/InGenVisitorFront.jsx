import { QRCodeSVG } from 'qrcode.react';

export default function InGenVisitorFront({ data }) {
  return (
    <div className="w-full h-full bg-[#fdfaf5] text-black border-4 border-yellow-500 flex flex-col relative">
      <div className="absolute top-0 right-0 w-32 h-full bg-yellow-400 -skew-x-12 transform translate-x-10 opacity-20"></div>
      
      <div className="flex flex-col h-full z-10 p-4">
        <div className="flex justify-between items-start border-b-2 border-black pb-2 mb-3">
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase">InGen</h1>
            <p className="text-[8px] font-bold tracking-widest uppercase text-gray-600">Visitor Pass</p>
          </div>
          <div className="bg-white p-1 shadow-sm border border-gray-200">
             <QRCodeSVG value={data.qrData || 'VISITOR'} size={48} />
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-end pb-2">
          <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">Visitor Name</p>
          <p className="text-xl font-bold uppercase leading-tight bg-yellow-100 inline-block px-2 py-1 border border-yellow-300">{data.name || 'Guest'}</p>
          
          <div className="flex justify-between items-end mt-4">
            <div>
              <p className="text-[8px] uppercase font-bold text-gray-500">Valid Date</p>
              <p className="text-xs font-bold">{data.date || '01/01/1993'}</p>
            </div>
            <p className="text-3xl font-black text-yellow-500 opacity-50 uppercase">VIP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
