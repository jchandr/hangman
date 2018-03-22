import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './App.css';
import { letterGuess } from './actions'

class CharButton extends Component {

  componentDidMount(){
  }

  handleClick(x) {
    this.props.letterGuess(x)
    this.render()
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

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
  return bindActionCreators({letterGuess: letterGuess}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (CharButton);
