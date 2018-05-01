import React, { Component } from 'react';
import './App.css';

class Letter extends Component {
  render() {
    const {isGuessed, charVal} = this.props
    return (
      <div className={isGuessed ? 'guessedLetter' : 'notGuessedLetter'}>
        {isGuessed ? charVal : ' '}</div>
    )
  }
}

export default Letter
