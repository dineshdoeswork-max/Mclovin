import { forwardRef } from 'react';
import LumonFront from '../templates/LumonFront';
import LumonBack from '../templates/LumonBack';
import InGenFront from '../templates/InGenFront';
import InGenBack from '../templates/InGenBack';
import InGenVisitorFront from '../templates/InGenVisitorFront';
import McLovinFront from '../templates/McLovinFront';
import McLovinBack from '../templates/McLovinBack';
import OscorpFront from '../templates/OscorpFront';
import OscorpBack from '../templates/OscorpBack';
import FightClubFront from '../templates/fightclubfront';
import FightClubBack from '../templates/FightClubBack';
const CardPreview = forwardRef(({ template, data }, ref) => {
  
  const isPortrait = template.includes('oscorp');
  
  const cardStyle = {
    width: isPortrait ? '213px' : '338px',
    height: isPortrait ? '338px' : '213px',
    position: 'relative',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const renderTemplate = () => {
    switch (template) {
      case 'lumon-front': return <LumonFront data={data} />;
      case 'lumon-back': return <LumonBack data={data} />;
      case 'ingen-front': return <InGenFront data={data} />;
      case 'ingen-back': return <InGenBack data={data} />;
      case 'ingen-visitor-front': return <InGenVisitorFront data={data} />;
      case 'McLovinFront': return <McLovinFront data={data} />;
      case 'McLovinBack': return <McLovinBack data={data} />;
      case 'oscorp-front': return <OscorpFront data={data} />;
      case 'oscorp-back': return <OscorpBack data={data} />;
      case 'fightclub-front': return <FightClubFront data={data} />;
      case 'fightclub-back': return <FightClubBack data={data} />;
      default: return <div className="p-4">Template not found: {template}</div>;
    }
  };

  return (
    <div ref={ref} style={cardStyle} className="font-sans shadow-sm border border-gray-100">
      {renderTemplate()}
    </div>
  );
});

CardPreview.displayName = 'CardPreview';
export default CardPreview;