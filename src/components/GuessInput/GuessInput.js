import React from 'react';

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
    addGuess(guess);
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        maxLength={5}
        // minLength={5}
        pattern='[a-zA-Z]{5}'
      />
    </form>
  );
}

export default GuessInput;
