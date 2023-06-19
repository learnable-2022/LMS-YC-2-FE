import React, {useState} from "react";
import styles from './ticTacToeGame.module.css'




function TicTacToeGame() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    

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
    
        return null;
      };



      const renderSquare = (index) => {
        return (
          <button
            className={styles.square}
            onClick={() => handleClick(index)}
          >
            {board[index]}
          </button>
        );
      };
    


      let status;
      if (winner) {
        status = `Winner: ${winner}`;
      } else {
        status = `Next player: ${currentPlayer}`;
      }
    




  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.status}>{status}</div>
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
  )
}

export default TicTacToeGame
