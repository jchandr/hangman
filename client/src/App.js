import React, { Component } from 'react';
import CharButton from './CharButton'
import Letter from './Letter'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setupCharBlock, setOriginalWordToGuess, setupGuessWordBlock} from './actions/index'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.getPasswords();
    this.props.setupCharBlock()
  }

  charButtonBlock () {
    const tempButtons = this.props.alphabetBlock.map((n,i) => {
      return (
        <CharButton key={65+i} charVal={n.charVal} isGuessed={n.isGuessed}/>
      )
    })
    return tempButtons
  }

  guessWordBlock () {
    const tempWordBlock = this.props.guessWordBlock.map((x, i) => {
      return <Letter key={i} charVal={x.charVal} isGuessed={x.isGuessed}/>
    })
    return tempWordBlock
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(wordToGuess => {
        this.props.setOriginalWordToGuess(wordToGuess)
        this.props.setupGuessWordBlock(this.props.originalWordToGuess)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="guessWord">
          {this.guessWordBlock()}
        </div>
        <div className="alphabetButtonBlock">
          {this.charButtonBlock()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    alphabetBlock: state.alphabetBlock,
    originalWordToGuess: state.originalWordToGuess,
    guessWordBlock: state.guessWordBlock
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    setupCharBlock: setupCharBlock,
    setOriginalWordToGuess: setOriginalWordToGuess,
    setupGuessWordBlock: setupGuessWordBlock
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (App);
