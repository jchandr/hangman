const originalWordToGuessReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORIGINAL_WORD': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default originalWordToGuessReducer