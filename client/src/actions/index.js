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

export const setGuessWordBlock = (guessedLetter) => {
  console.log('displaying guessed letter', guessedLetter)
  return {
    type: 'SET_GUESS_WORD_BLOCK',
    payload: guessedLetter
  }
}

export const setupGuessWordBlock = word => {
  return {
    type: 'SETUP_GUESS_WORD_BLOCK',
    payload: word
  }
}

export const setOriginalWordToGuess = (word) => {
  return {
    type: 'SET_ORIGINAL_WORD',
    payload: word
  }
}
