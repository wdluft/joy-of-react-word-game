import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuess('');
  }

  return (
    <form class='guess-input-wrapper' onSubmit={handleSubmit}>
      <label for='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        maxLength={5}
        minLength={5}
      />
    </form>
  );
}

export default GuessInput;
