import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessList from '../GuessList';
import GuessForm from '../GuessForm';
import GameOverWinBanner from '../GameOverWinBanner';
import GameOverLoseBanner from '../GameOverLoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);
  // const [gameOver, setGameOver] = React.useState({over: false, win: false});

  function handleSubmitGuess(tentativeGuess) {

    const newGuesses = [...guesses, tentativeGuess];
    setGuesses(newGuesses);

    if(tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    }
    else if(newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

  }
  
  return (
    <>
      {gameStatus === 'won' && 
        <GameOverWinBanner 
          guesses={guesses}
        />
      }
      {gameStatus === 'lost' && 
        <GameOverLoseBanner 
          answer={answer}
        />
      }
      <GuessList
        guesses={guesses}
        answer={answer}
      />
      <GuessForm
        guesses={guesses}
        setGuesses={setGuesses}
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
