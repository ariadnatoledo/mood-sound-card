import "./GamePage.scss";
import { useState, useEffect } from "react";
import { useGameState } from "../../context/GameStateContext";
import { useNavigate } from "react-router-dom";

function GamePage() {
  const { currentLevel, setCurrentLevel, unlockProject } = useGameState();
  const navigate = useNavigate();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // Player is X
  const [winner, setWinner] = useState(null);

  // Helper function to check if a move wins
  const isWinningMove = (board, player) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    return winningCombinations.some(combo =>
      combo.every(index => board[index] === player)
    );
  };

  // Minimax algorithm for decision-making
  const minimax = (board, isMaximizing) => {
    const availableSpots = board.map((val, idx) => (val === null ? idx : null)).filter(val => val !== null);

    // Check terminal states
    if (isWinningMove(board, 'O')) return { score: 10 }; // AI wins
    if (isWinningMove(board, 'X')) return { score: -10 }; // Player wins
    if (availableSpots.length === 0) return { score: 0 }; // Draw

    let bestMove;
    if (isMaximizing) {
      let maxEval = -Infinity;
      for (const spot of availableSpots) {
        const newBoard = [...board];
        newBoard[spot] = 'O';
        const evaluation = minimax(newBoard, false).score;
        if (evaluation > maxEval) {
          maxEval = evaluation;
          bestMove = spot;
        }
      }
      return { score: maxEval, index: bestMove };
    } else {
      let minEval = Infinity;
      for (const spot of availableSpots) {
        const newBoard = [...board];
        newBoard[spot] = 'X';
        const evaluation = minimax(newBoard, true).score;
        if (evaluation < minEval) {
          minEval = evaluation;
          bestMove = spot;
        }
      }
      return { score: minEval, index: bestMove };
    }
  };

  // Handle player's move
  const handleClick = (index) => {
    if (board[index] || winner || !xIsNext) return;
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setXIsNext(false); // Switch to computer's turn

    if (isWinningMove(newBoard, 'X')) {
      setWinner('X');
    }
  };

  // Computer's move
  const computerMove = () => {
    const { index } = minimax(board, true);
    if (index !== undefined) {
      const newBoard = [...board];
      newBoard[index] = 'O';
      setBoard(newBoard);
      setXIsNext(true);

      if (isWinningMove(newBoard, 'O')) {
        setWinner('O');
      }
    }
  };

  // Automatically trigger computer's turn
  useEffect(() => {
    if (!xIsNext && !winner) {
      const timer = setTimeout(() => computerMove(), 500); // Delay for better UX
      return () => clearTimeout(timer);
    }
  }, [xIsNext, winner, board]);

  // Render a square
  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="game">
      <h2>Current Level: {currentLevel}</h2>
      <h3>
        {winner
          ? `CONGRATULATIONS! ${winner} Wins!`
          : `Next Player: ${xIsNext ? 'X (Player)' : 'O (Computer)'}`}
      </h3>
      <div className="board">
        {[0, 1, 2].map(row => (
          <div key={row} className="row">
            {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamePage;
