import React, { Component } from 'react'
import Board from './Board';
import { Link } from 'react-router-dom';

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            xIsNext: this.props.xSelected,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
    handle_click(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculate_winner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    render() {
        console.log(this.props.xSelected);

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculate_winner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? "Go to # " + move : 'start the game';
            return (
                <li key={move}>
                    <button onClick={() => { this.jumpTo(move) }}>
                        {desc}
                    </button>
                </li>
            )
        });
        let status;
        if (winner) {
            status = "winner is " + winner;
        }
        else {
            status = "Next Player is " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handle_click(i)} squares={current.squares} />
                </div>
                <div className="game-info">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="text-danger">{status}</h6>
                            <Link to="/Select" class="btn btn-outline-info mt-3">Reset</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game

function calculate_winner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a]
        }
    }
    return null;
}
