import React, { Component } from 'react';
import CharButton from './CharButton'
import Letter from './Letter'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passwords: [],
    }
  }
  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  charButtonBlock () {
    var tempButtons = [...Array(26).keys()].map(n => {
        var buttonChar = String.fromCharCode(65+n)
        return (
          <CharButton key={65+n} charVal={buttonChar} isGuessed={false}/>
        )
      }
    )
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
      .then(passwords => this.setState({passwords}));
  }

  render() {
    const { passwords } = this.state;

    return (
      <div className="App">
          {passwords}
        {this.guessWordBlock()}
          <div className="alphabetButtonBlock">
            {this.charButtonBlock()}
          </div>
      </div>
    );
  }
}

export default App;
