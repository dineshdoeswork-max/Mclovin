import { useState, useRef, useEffect } from 'react';
import CardPreview from './CardPreview';
import ExportButtons from './ExportButtons';
import ImageUploader from './ImageUploader';
import { FlipHorizontal } from 'lucide-react';

export default function Customizer({ design }) {
  const [formData, setFormData] = useState({});
  const [showBackMobile, setShowBackMobile] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    const initialData = {};
    design.editableFields.forEach(field => {
      if (field.type === 'image') {
        initialData[field.key] = { url: field.default, zoom: 1, panX: 0, panY: 0 };
      } else {
        initialData[field.key] = field.default;
      }
    });
    setFormData(initialData);
  }, [design]);

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-12 animate-fade-in">
      {/* Editor Panel */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold">{design.name}</h2>
          <p className="text-gray-500 text-sm mt-1">Customize your credentials</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-5">
          {design.editableFields.map(field => (
            <div key={field.key} className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {field.label}
              </label>
              {field.type === 'image' ? (
                <ImageUploader 
                  value={formData[field.key]} 
                  onChange={(val) => handleChange(field.key, val)} 
                />
              ) : (
                <input
                  type="text"
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              )}
            </div>
          ))}

          {/* --- NEW QR CODE INPUT HERE --- */}
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              QR Code Link
            </label>
            <input
              type="text"
              name="qrData"
              placeholder="https://your-link.com"
              value={formData.qrData || ""}
              onChange={(e) => handleChange('qrData', e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>

        </div>

        <ExportButtons frontRef={frontRef} backRef={backRef} fileName={design.name} />
      </div>

      {/* Preview Panel */}
      <div className="w-full lg:w-2/3 flex flex-col items-center bg-gray-200/50 rounded-3xl p-8 relative overflow-hidden">
        <div className="lg:hidden w-full flex justify-end mb-4">
          <button 
            onClick={() => setShowBackMobile(!showBackMobile)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium border border-gray-200"
          >
            <FlipHorizontal size={16} /> Flip Card
          </button>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 items-center justify-center w-full min-h-[500px]">
          {/* Front Card */}
          <div className={`${showBackMobile ? 'hidden' : 'block'} lg:block transition-all`}>
            <p className="text-center text-sm font-medium text-gray-400 mb-4 uppercase tracking-widest">Front</p>
            <div className="shadow-2xl rounded-[12px] overflow-hidden bg-white">
               <CardPreview ref={frontRef} template={design.frontTemplate} data={formData} />
            </div>
          </div>
          
          {/* Back Card */}
          <div className={`${!showBackMobile ? 'hidden' : 'block'} lg:block transition-all`}>
            <p className="text-center text-sm font-medium text-gray-400 mb-4 uppercase tracking-widest">Back</p>
            <div className="shadow-2xl rounded-[12px] overflow-hidden bg-white">
               <CardPreview ref={backRef} template={design.backTemplate} data={formData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}