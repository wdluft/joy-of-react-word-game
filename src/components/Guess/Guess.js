import React from 'react';
import { range } from '../../utils.js';

function Guess({ guess }) {
  const splitGuess = guess.guess.split('');

  return (
    <div className='guess-results'>
      <p className='guess'>
        {range(5).map((num) => {
          return (
            <span className='cell' key={`letter-${num + 1}`}>
              {splitGuess[num]}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Guess;
