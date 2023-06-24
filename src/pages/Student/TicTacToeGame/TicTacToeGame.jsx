import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from './ticTacToeGame.module.css';

function TicTacToeGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (currentPlayer === 'O' && !winner) {
      makeComputerMove();
    }
  }, [currentPlayer, winner]);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);

    const newWinner = calculateWinner(newBoard);
    setWinner(newWinner);
  };

  const makeComputerMove = () => {
    const availableSquares = board.reduce((acc, value, index) => {
      if (!value) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (availableSquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableSquares.length);
      handleClick(availableSquares[randomIndex]);
    }
  };

  const calculateWinner = (squares) => {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    if (!squares.includes(null)) {
      return 'draw';
    }

    return null;
  };

  const handlePlayAgain = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  const renderSquare = (index) => {
    return (
      <button
        className={styles.square}
        onClick={() => handleClick(index)}
        disabled={board[index] !== null || winner !== null || currentPlayer === 'O'}
      >
        {board[index]}
      </button>
    );
  };

  let status;
  if (winner === 'draw') {
    status = <div className={styles.status}>It's a draw!</div>;
  } else if (winner) {
    status = <div className={styles.status}>{`Winner: ${winner}`}</div>;
  } else {
    status = <div className={styles.status}>{`Next player: ${currentPlayer}`}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.gameContent}>
          {status}
          <div className={styles.row}>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className={styles.row}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className={styles.row}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {winner === 'draw' || winner ? (
          <button className={styles.playAgainButton} onClick={handlePlayAgain}>Play Again</button>
        ) : null}
      </div>
      
      <NavLink to = "/student/dashboard" className = {styles.dashboard} >Dashboard</NavLink>
    </div>
  );
}

export default TicTacToeGame;
