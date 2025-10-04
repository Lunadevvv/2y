import React, { useState } from 'react';
import { CardCover } from './components/CardCover';
import { CardContent } from './components/CardContent';

const App: React.FC = () => {
  const [isOpening, setIsOpening] = useState(false);

  // This is triggered by CardCover's onOpen prop
  const handleStartOpening = () => {
    setIsOpening(true);
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 overflow-hidden">
      {/* The Letter (CardContent) starts below the viewport and slides in */}
      <div className={`
        absolute inset-0 transition-transform duration-[1500ms] ease-out
        ${isOpening ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <CardContent />
      </div>

      {/* The Envelope (CardCover) starts in view, then slides up and away */}
      <div className={`
        absolute inset-0 transition-all duration-[1500ms] ease-out
        ${isOpening ? '-translate-y-full scale-75 opacity-50' : 'translate-y-0 scale-100 opacity-100'}
      `}>
         <CardCover onOpen={handleStartOpening} />
      </div>
    </main>
  );
};

export default App;