import { useState } from 'react';
import Landing from './components/Landing';
import CategorySelect from './components/CategorySelect';
import TitleGrid from './components/TitleGrid';
import CardPicker from './components/CardPicker';
import Customizer from './components/Customizer';
import titlesData from './data/titles.json';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [step, setStep] = useState('landing');
  const [category, setCategory] = useState(null);
  const [title, setTitle] = useState(null);
  const [design, setDesign] = useState(null);

  const handleStart = () => setStep('category');
  
  const handleCategory = (cat) => {
    setCategory(cat);
    setStep('grid');
  };

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
    if (step === 'category') setStep('landing');
    if (step === 'grid') setStep('category');
    if (step === 'picker') setStep('grid');
    if (step === 'customizer') {
      if (title.characters.length > 1) setStep('picker');
      else setStep('grid');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {step !== 'landing' && (
        <header className="w-full max-w-6xl mx-auto p-6 flex justify-between items-center">
          <button 
            onClick={goBack} 
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <div className="text-sm font-bold tracking-tight text-black">Prism ID</div>
        </header>
      )}

      <main className="flex-1 w-full flex flex-col">
        {step === 'landing' && <Landing onStart={handleStart} />}
        {step === 'category' && <CategorySelect onSelect={handleCategory} />}
        {step === 'grid' && (
          <TitleGrid 
            category={category} 
            titles={titlesData.filter(t => t.category === category)} 
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
