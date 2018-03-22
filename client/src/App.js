import React, { Component } from 'react';
import CharButton from './CharButton'
import Letter from './Letter'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setupCharBlock} from './actions/index'
import './App.css';

class App extends Component {
  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
    this.props.setupCharBlock()
  }

  charButtonBlock () {
    var tempButtons = this.props.alphabetBlock.map((n,i) => {
      return (
        <CharButton key={65+i} charVal={n.charVal} isGuessed={n.isGuessed}/>
      )
    })
    return tempButtons
  }

  guessWordBlock () {
    var tempWordBlock = 'NEWSPAPER'.split('').map((x,i) => {
      return <Letter key={i} charVal={x} isGuessed={false}/>
    })
    return tempWordBlock
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({wordToGuess: passwords[0]}));
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
    // wordToGuess: state.wordToGuess
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
  return bindActionCreators({setupCharBlock: setupCharBlock}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (App);
