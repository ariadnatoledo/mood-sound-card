import "./GamePage.scss";
import { useState, useEffect, useCallback, useRef } from "react";
import { useGameState } from "../../context/GameStateContext";
import { useNavigate } from "react-router-dom";

function GamePage() {
  const { currentLevel, setCurrentLevel, unlockProject } = useGameState();
  const navigate = useNavigate();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // Player is X
  const [winner, setWinner] = useState(null);
  const hasUnlockedProject = useRef(false);

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
  
    // Only set winner if the player wins
    if (isWinningMove(newBoard, 'X') && !winner) {
      setWinner('X');
    }
  };

  // Computer's move
  const computerMove = useCallback(() => {
    const availableSpots = board
      .map((val, idx) => (val === null ? idx : null))
      .filter(val => val !== null);

    // Decide if the computer should play strategically or randomly
    const playRandom = Math.random() < 0.3; // 30% chance to play randomly

    let moveIndex;

    if (playRandom) {
      // Choose a random move
      moveIndex = availableSpots[Math.floor(Math.random() * availableSpots.length)];
    } else {
      // Use minimax for a strategic move
      const { index } = minimax(board, true);
      moveIndex = index;
    }

    if (moveIndex !== undefined) {
      const newBoard = [...board];
      newBoard[moveIndex] = 'O';
      setBoard(newBoard);
      setXIsNext(true);

      if (isWinningMove(newBoard, 'O')) {
        setWinner('O');
      }
    }
  }, [board]);

  // Automatically trigger computer's turn
  useEffect(() => {
    if (!xIsNext && !winner) {
      const timer = setTimeout(() => computerMove(), 500); // Delay for better UX
      return () => clearTimeout(timer);
    }
  }, [xIsNext, winner, board, computerMove]);

  // Unlock the project and navigate to the projects section (only once when player wins)
  useEffect(() => {
    if (winner === 'X' && !hasUnlockedProject.current) {
      hasUnlockedProject.current = true;
      unlockProject(1); // Unlock level 1 after the player wins
      setTimeout(() => {
        navigate('/portfolio'); // Navigate to the projects page after a brief delay
      }, 1500); // Added delay for smooth UX
    }
  }, [winner, unlockProject, navigate]);

  // Render a square
  const renderSquare = (index) => (
    <button key={index} className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="game">
      <h3 className="game-winner">
        {winner
          ? `CONGRATULATIONS! ${winner} Wins!`
          : `Next Player: ${xIsNext ? 'X (Player)' : 'O (Computer)'}`}
      </h3>
      <div className="board">
        {[0, 1, 2].map(row => (
          <div key={`row-${row}`} className="row">
            {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamePage;

