import React from "react";

function GameOverWinBanner({guesses}) {
  const guessNoun = guesses.length > 1 ? 'guesses' : 'guess';
  
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in 
        {' '}
        <strong>{guesses.length} {guessNoun}</strong>.
      </p>
    </div>
  );
}

export default GameOverWinBanner;
