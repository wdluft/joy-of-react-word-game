import React from 'react';
import { range } from '../../utils.js';
import { checkGuess } from '../../game-helpers.js';

function Guess({ guess, answer }) {
  return (
    <div className='guess-results'>
      <p className='guess'>
        {range(5).map((num) => {
          if (guess.guess === '') {
            return <span className={`cell`} key={`letter-${num + 1}`}></span>;
          } else {
            const checkedGuess = checkGuess(guess.guess, answer);
            return (
              <span
                className={`cell ${checkedGuess[num].status}`}
                key={`letter-${num + 1}`}>
                {checkedGuess[num].letter}
              </span>
            );
          }
        })}
      </p>
    </div>
  );
}

export default Guess;
