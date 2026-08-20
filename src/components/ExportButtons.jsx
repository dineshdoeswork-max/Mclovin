import { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Download, FileText, Loader2 } from 'lucide-react';

export default function ExportButtons({ frontRef, backRef, fileName }) {
  const [isExporting, setIsExporting] = useState(false);

  const exportImage = async (ref, side) => {
    if (!ref.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(ref.current, { scale: 3, useCORS: true, backgroundColor: '#ffffff' });
      const link = document.createElement('a');
      link.download = `${fileName.replace(/\s+/g, '-').toLowerCase()}-${side}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error(err);
    }
    setIsExporting(false);
  };

  const exportPDF = async () => {
    if (!frontRef.current || !backRef.current) return;
    setIsExporting(true);
    try {
      const opts = { scale: 3, useCORS: true, backgroundColor: '#ffffff' };
      const frontCanvas = await html2canvas(frontRef.current, opts);
      const backCanvas = await html2canvas(backRef.current, opts);
      
      const frontImg = frontCanvas.toDataURL('image/png');
      const backImg = backCanvas.toDataURL('image/png');

      // CR80 Card Size: 85.6mm x 53.98mm
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: [85.6, 53.98] });
      pdf.addImage(frontImg, 'PNG', 0, 0, 85.6, 53.98);
      pdf.addPage([85.6, 53.98], 'landscape');
      pdf.addImage(backImg, 'PNG', 0, 0, 85.6, 53.98);
      
      pdf.save(`${fileName.replace(/\s+/g, '-').toLowerCase()}-print.pdf`);
    } catch (err) {
      console.error(err);
    }
    setIsExporting(false);
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-black mb-1">Export Options</h3>
      <button 
        onClick={() => exportImage(frontRef, 'front')}
        disabled={isExporting}
        className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-900 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium disabled:opacity-50"
      >
        <Download size={16} /> Download Front (PNG)
      </button>
      <button 
        onClick={() => exportImage(backRef, 'back')}
        disabled={isExporting}
        className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-900 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium disabled:opacity-50"
      >
        <Download size={16} /> Download Back (PNG)
      </button>
      <button 
        onClick={exportPDF}
        disabled={isExporting}
        className="w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium disabled:opacity-50 mt-2 shadow-md"
      >
        {isExporting ? <Loader2 size={16} className="animate-spin" /> : <FileText size={16} />} 
        Download Print PDF
      </button>
      <p className="text-[10px] text-center text-gray-400 mt-1">PDF includes both sides sized exactly 85.6mm × 54mm.</p>
    </div>
  );
}
