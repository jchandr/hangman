const alphabetBlockReducer = (state = [], action) => {
  switch (action.type) {
    case 'SETUP_CHAR_BLOCK': {
      var tempButtons = [...Array(26).keys()].map(n => {
        var buttonChar = String.fromCharCode(65+n)
        return {
          charVal: buttonChar,
          isGuessed: false
        }
      })
      return [
        ...state,
        ...tempButtons
      ]
    }
    case 'GUESSING_LETTER': {
      return [
        ...state,
        ...state[action.payload].isGuessed = true
      ]
    }
    default: {
      return state
    }
  }
}

export default alphabetBlockReducer