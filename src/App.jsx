import { useState } from 'react';
import Landing from './components/Landing';
import TitleGrid from './components/TitleGrid';
import CardPicker from './components/CardPicker';
import Customizer from './components/Customizer';
import titlesData from './data/titles.json';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [step, setStep] = useState('landing');
  const [title, setTitle] = useState(null);
  const [design, setDesign] = useState(null);

  const handleStart = () => setStep('grid'); 

  const handleTitle = (selectedTitle) => {
    setTitle(selectedTitle);
    if (selectedTitle.characters.length > 1) {
      setStep('picker');
    } else {
      setDesign(selectedTitle.characters[0]);
      setStep('customizer');
    }
  };

  const handleDesign = (selectedDesign) => {
    setDesign(selectedDesign);
    setStep('customizer');
  };

  const goBack = () => {
    if (step === 'grid') setStep('landing');
    if (step === 'picker') setStep('grid');
    if (step === 'customizer') {
      if (title.characters.length > 1) setStep('picker');
      else setStep('grid');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-900 selection:bg-blue-500/30">
      {step !== 'landing' && (
        <header className="w-full max-w-6xl mx-auto p-6 flex justify-between items-center z-10">
          <button 
            onClick={goBack} 
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <div className="text-sm font-bold tracking-tight text-white">Sidequest</div>
        </header>
      )}

      <main className="flex-1 w-full flex flex-col">
        {step === 'landing' && <Landing onStart={handleStart} />}
        {step === 'grid' && (
          <TitleGrid 
            titles={titlesData}
            onSelect={handleTitle} 
          />
        )}
        {step === 'picker' && <CardPicker title={title} onSelect={handleDesign} />}
        {step === 'customizer' && <Customizer design={design} />}
      </main>
    </div>
  );
}

export default App;