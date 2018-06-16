import React, { Component } from 'react';
import screenfull from 'screenfull';
import './App.css';

function requestFullscreen() {
  if (screenfull.enabled) {
    screenfull.request();
  }
}

class App extends Component {
  state = { player1: 20, player2: 20 }
  render() {
    const { player1, player2 } = this.state
    return (
      <div className="App">
        <div className="Player Player1">
          <div className="Container">
            <button className="LifeButton Minus" onClick={() => {
              requestFullscreen();
              this.setState({ player1: player1 - 1 })
            }}>
              -
          </button>
            <div className="LifeTotal">
              {player1}
            </div>
            <button className="LifeButton Plus" onClick={() => {
              requestFullscreen();
              this.setState({ player1: player1 + 1 })
            }}>
              +
          </button>
            <button className="ResetButton" onClick={() => this.setState({ player1: 20 })}>
              Reset
          </button>
          </div>
        </div>
        <div className="Player Player2">
          <div className="Container">

            <button className="LifeButton Minus" onClick={() => {
              requestFullscreen();
              this.setState({ player2: player2 - 1 })
            }}>
              -
          </button>
            <div className="LifeTotal">
              {player2}
            </div>
            <button className="LifeButton Plus" onClick={() => {
              requestFullscreen();
              this.setState({ player2: player2 + 1 })
            }}>
              +
          </button>
          </div>
        </div>
        <button className="ResetButton" onClick={() => this.setState({ player2: 20 })}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
