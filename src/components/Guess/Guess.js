import React from "react";

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const scoredGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span 
          className={`cell ${ guess ? scoredGuess[num].status : '' }`}
          key={num}
        >
          {guess ? scoredGuess[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
