import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isRightAnswer, setIsRightAnswer] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);

  function addGuess(guess) {
    const newGuess = { guess, id: Math.random() };
    const newGuesses = [...guesses, newGuess];
    const guessCount = guesses.length + 1;

    if (guess === answer && guessCount <= 6) {
      setIsRightAnswer(true);
      setGameOver(true);
    } else if (guess !== answer && guessCount === 6) {
      setGameOver(true);
      console.log('this ran');
    }

    setGuesses(newGuesses);
  }

  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} gameOver={gameOver} />
      {gameOver && (
        <Banner
          isRightAnswer={isRightAnswer}
          guesses={guesses}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
