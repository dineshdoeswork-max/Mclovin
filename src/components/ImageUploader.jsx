import { useRef } from 'react';
import { Upload } from 'lucide-react';

export default function ImageUploader({ value, onChange }) {
  const fileInputRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onChange({ ...value, url });
    }
  };

  const updateTransform = (key, val) => {
    onChange({ ...value, [key]: parseFloat(val) });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div 
          className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border border-gray-300"
        >
          {value?.url && (
            <img 
              src={value.url} 
              className="w-full h-full object-cover" 
              style={{
                transform: `scale(${value.zoom || 1}) translate(${(value.panX || 0)}px, ${(value.panY || 0)}px)`
              }}
              alt="Preview" 
            />
          )}
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-sm font-medium py-2 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Upload size={16} /> {value?.url ? 'Change Photo' : 'Upload Photo'}
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFile} 
          accept="image/*" 
          className="hidden" 
        />
      </div>

      {value?.url && (
        <div className="flex flex-col gap-3 text-xs">
          <div className="flex items-center gap-2">
            <label className="w-12 text-gray-500">Zoom</label>
            <input 
              type="range" min="0.5" max="3" step="0.1" 
              value={value.zoom || 1} 
              onChange={(e) => updateTransform('zoom', e.target.value)}
              className="flex-1 accent-black"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="w-12 text-gray-500">Pan X</label>
            <input 
              type="range" min="-100" max="100" step="1" 
              value={value.panX || 0} 
              onChange={(e) => updateTransform('panX', e.target.value)}
              className="flex-1 accent-black"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="w-12 text-gray-500">Pan Y</label>
            <input 
              type="range" min="-100" max="100" step="1" 
              value={value.panY || 0} 
              onChange={(e) => updateTransform('panY', e.target.value)}
              className="flex-1 accent-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}
