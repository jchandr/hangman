import { combineReducers } from 'redux';
import alphabetBlockReducer from './alphabet-block-reducer'
// import wordToGuessReducer from './word-to-guess-reducer'

const allReducers = combineReducers({
  alphabetBlock: alphabetBlockReducer,
  // wordToGuess: wordToGuessReducer,
})

export default allReducers