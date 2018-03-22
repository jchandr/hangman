export const setupCharBlock = () => {
  console.log('setting up char block');
  return {
    type: 'SETUP_CHAR_BLOCK'
  }
};

export const letterGuess = (guessedLetter) => {
  console.log('guessing letter ', guessedLetter)
  return {
    type: 'GUESSING_LETTER',
    payload: guessedLetter
  }
}