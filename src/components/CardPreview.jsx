import { forwardRef } from 'react';
import LumonFront from '../templates/LumonFront';
import LumonBack from '../templates/LumonBack';
import InGenFront from '../templates/InGenFront';
import InGenBack from '../templates/InGenBack';
import InGenVisitorFront from '../templates/InGenVisitorFront';

const CardPreview = forwardRef(({ template, data }, ref) => {
  // CR80 Dimensions in pixels at ~96dpi (scaled proportionally)
  // Standard width: 338px, height: 213px
  const cardStyle = {
    width: '338px',
    height: '213px',
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
      default: return <div className="p-4">Template not found: {template}</div>;
    }
  };

  return (
    <div ref={ref} style={cardStyle} className="font-sans">
      {renderTemplate()}
    </div>
  );
});

CardPreview.displayName = 'CardPreview';
export default CardPreview;
