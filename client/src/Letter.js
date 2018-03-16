import React, { Component } from 'react';
import './App.css';

class Letter extends Component {
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
  }

  render() {
    const {isGuessed, charVal} = this.state
    return (
      <div className={isGuessed ? 'guessedLetter' : 'notGuessedLetter'}>
        {isGuessed ? charVal : ' '}</div>
    )
  }
}

export default Letter
