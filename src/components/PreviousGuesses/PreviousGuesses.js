import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils.js';

function PreviousGuesses({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return (
          <Guess
            key={`guess-${num}`}
            guess={
              guesses[num] ? guesses[num] : { guess: '', id: Math.random() }
            }
            answer={answer}
          />
        );
      })}
    </div>
  );
}

export default PreviousGuesses;
