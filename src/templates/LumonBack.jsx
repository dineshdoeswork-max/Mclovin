export default function LumonBack({ data }) {
  return (
    <div className="w-full h-full bg-white text-black p-5 flex flex-col justify-between relative border-2 border-[#0a2342]">
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#0a2342] border-b border-[#0a2342] pb-1 mb-2">Conditions of Employment</h2>
        <ul className="text-[8px] text-gray-700 space-y-1 pr-4">
          <li>1. This card is property of Lumon Industries.</li>
          <li>2. Loss of this card must be reported to security immediately.</li>
          <li>3. Access restricted to authorized severed floors only.</li>
          <li>4. Do not photograph, copy, or duplicate this credential.</li>
        </ul>
      </div>
      
      <div className="flex justify-between items-end">
        <div className="w-32 h-6 bg-black opacity-10"></div>
        <div className="text-right">
          <p className="text-[8px] text-gray-400">Return postage guaranteed</p>
          <p className="text-[8px] font-bold text-[#0a2342]">LUMON SECURITY</p>
        </div>
      </div>
    </div>
  );
}
