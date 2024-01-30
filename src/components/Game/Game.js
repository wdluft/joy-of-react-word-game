import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function addGuess(guess) {
    const newGuess = { guess, id: Math.random() };
    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <PreviousGuesses guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
