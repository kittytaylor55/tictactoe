import React, { Component } from "react";
import Board from "./Board";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [{ squares: Array(9).fill(null) }],
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  //handleclick takes in i, i is the number of the square you've click from 0-8.
  handleClick(i) {
    if (this.state.xIsNext) {
      this.handlePlayerMovement(i);
    } else {
      this.handleCpuMovement();
    }
    //Make it look like the computer is trying to figure things out by waiting.
    setTimeout(function () {
      document.querySelectorAll('button[class="square"]')[i].click();
    }, 200);
  }

  handlePlayerMovement(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      history: history.concat({
        squares: squares,
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  handleCpuMovement() {
    let rndMv;

    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);

    squares.forEach(function (square, sqLoop) {
      if (square === null) {
        //Roll some Dice
        let diceRoll = Math.floor(Math.random() * 2);
        console.log(diceRoll);
        if (diceRoll === 1) {
          rndMv = sqLoop;
        }
        console.log(diceRoll);
      }
      sqLoop++;
    });

    squares[rndMv] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat({
        squares: squares,
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });

    if (winner || squares[rndMv]) {
      return;
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to #" + move : "Start the Game";
      return (
        <li key={move}>
          <button
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner is " + winner;
    } else {
      status = "Next Player is " + (this.state.xIsNext ? "X" : "O");

      if (!this.state.xIsNext) {
        status = "Computer is Thinking.";
      }
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            onClick={(i) => this.handleClick(i)}
            squares={current.squares}
          />
        </div>
        <div className="game-info">
          <ul>{status}</ul>
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
