import React, { Component } from 'react';
import './App.css';

class CharButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charVal: this.props.charVal,
      isGuessed: this.props.isGuessed
    }
  }

  componentDidMount(){
  }

  handleClick() {
    this.setState({isGuessed: true})
  }

  render() {
    const {charVal, isGuessed} = this.state
    return (
      <button className={isGuessed ? 'guessedLetterInAlphabetsBlock' : 'notGuessedLetterInAlphabetsBlock'}
      onClick={(e) => this.handleClick()}>{charVal}</button>
    )
  }
}

export default CharButton
