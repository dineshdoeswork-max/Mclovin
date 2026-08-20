export default function InGenBack({ data }) {
  return (
    <div className="w-full h-full bg-[#dfd6c6] text-black p-4 flex flex-col justify-between border-4 border-gray-800">
      <div className="flex gap-2 mb-2">
        <div className="w-full h-8 bg-black rounded-sm"></div>
      </div>
      
      <div className="flex-1">
        <h2 className="text-xs font-black uppercase text-[#b92b27] mb-1">Security Notice</h2>
        <p className="text-[8px] text-gray-800 font-medium leading-relaxed text-justify">
          This identification card is strictly non-transferable and remains the exclusive property of International Genetic Technologies, Inc. It must be surrendered upon termination of employment or upon request by InGen Security Personnel. 
          <br/><br/>
          Unauthorized access to restricted zones at Isla Nublar or Site B is a federal offense. If found, drop in any US mailbox. Postage paid by InGen Corp, Palo Alto, CA.
        </p>
      </div>

      <div className="flex justify-between items-center border-t-2 border-black pt-1">
        <p className="text-[8px] font-mono font-bold">SYS_CODE: {data.qrData || '000-000'}</p>
        <p className="text-[8px] font-black uppercase text-gray-500">IF FOUND CALL 1-800-555-DINO</p>
      </div>
    </div>
  );
}
