import React from 'react';

function Banner({ isRightAnswer, guesses, answer }) {
  if (isRightAnswer) {
    return (
      <div className={`banner happy`}>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    );
  } else {
    return (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
