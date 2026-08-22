export default function FightClubBack() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Background Template */}
      <img 
        src="/templates/fightclub-back.png" 
        alt="Fight Club Back Template" 
        className="absolute inset-0 w-full h-full object-fill z-0" 
      />
      {/* The back of the ID requires no editable fields based on the prop */}
    </div>
  );
}