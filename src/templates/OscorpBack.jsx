import { QRCodeSVG } from 'qrcode.react';

export default function OscorpBack({ data }) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Background Template */}
      <img 
        src="/templates/oscorp-back.png" 
        alt="Oscorp Back Template" 
        className="absolute inset-0 w-full h-full object-fill z-0" 
      />

      {/* QR Code Mask & Overlay - Expanded width/height so original QR doesn't peek out */}
      <div 
        className="absolute z-10 bg-white flex items-center justify-center p-1"
        style={{ top: '180px', left: '94px', width: '76px', height: '76px' }}
      >
        <QRCodeSVG 
          value={data.qrData || 'https://www.oscorpindustries.com'} 
          size={66} 
          level="M" 
          fgColor="#000000"
        />
      </div>
    </div>
  );
}