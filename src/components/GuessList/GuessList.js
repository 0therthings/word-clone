import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import Guess from '../Guess';

function GuessList({guesses, answer}) {

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess 
          guess={guesses[num]}
          answer={answer}
          key={num}
        />
      ))}
    </div>
  );
}

export default GuessList;
