import { combineReducers } from 'redux';
import alphabetBlockReducer from './alphabet-block-reducer'
import guessWordReducer from './guess-word-reducer'
import originalWordToGuessReducer from './original-word-to-guess-reducer'

const allReducers = combineReducers({
  alphabetBlock: alphabetBlockReducer,
  guessWordBlock: guessWordReducer,
  originalWordToGuess: originalWordToGuessReducer
})

export default allReducers