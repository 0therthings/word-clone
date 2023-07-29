import React from 'react';


function GuessForm({handleSubmitGuess, gameStatus}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleSubmit = function(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert('Please enter exactly 5 characters. ⭐');
      return;
    }

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  };

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        minLength={5} 
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input" 
        type="text" 
        disabled={gameStatus !== 'running'}
        value={tentativeGuess}
        onChange={event => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessForm;
