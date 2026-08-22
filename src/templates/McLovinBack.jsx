export default function McLovinBack() {
  return (
    <div className="w-full h-full relative bg-white overflow-hidden">
      {/* Background Template */}
      <img 
        src="/templates/mclovin-back.png" 
        alt="McLovin Back Template" 
        className="absolute inset-0 w-full h-full object-fill z-0" 
      />
      
      {/* 
        The back of the McLovin ID doesn't actually have any user-editable fields 
        that need to change per person. The image itself provides all the necessary 
        barcodes, restrictions, and island graphics! 
      */}
    </div>
  );
}