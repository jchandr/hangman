import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { letterGuess, setGuessWordBlock } from './actions'
import './App.css';

class CharButton extends Component {
  handleClick(x) {
    this.props.letterGuess(x)
    this.props.setGuessWordBlock(x)
  }

  render() {
    const charCode = this.props.charVal.charCodeAt(0)-65
    const {charVal, isGuessed} = this.props.alphabetBlock[charCode]
    return (
      <button className={isGuessed ? 'guessedLetterInAlphabetsBlock' : 'notGuessedLetterInAlphabetsBlock'}
      onClick={(e) => this.handleClick(charCode)}>{charVal}</button>
    )
  }
}
function mapStateToProps(state) {
  return {
    alphabetBlock: state.alphabetBlock,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    letterGuess: letterGuess,
    setGuessWordBlock: setGuessWordBlock
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (CharButton);
