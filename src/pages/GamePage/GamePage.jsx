import "./GamePage.scss";
import { useState, useEffect } from "react";
import { useGameState } from "../../context/GameStateContext";
import { useNavigate } from "react-router-dom";

function GamePage() {
  const { currentLevel, setCurrentLevel, unlockProject } = useGameState();
  const navigate = useNavigate(); // Used for redirection after win
  
  // Tic-Tac-Toe state
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 grid
  const [xIsNext, setXIsNext] = useState(true); // X starts
  const [winner, setWinner] = useState(null); // Store the winner
  const [isWinning, setIsWinning] = useState(false); // Flag to handle the win display
  
  // Handle clicking on squares
  const handleClick = (index) => {
    if (board[index] || winner) return; // Don't allow clicking if the spot is filled or game is over
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O'; // Place X or O on the board
    setBoard(newBoard);
    setXIsNext(!xIsNext); // Switch turns

    // Check if someone won after the move
    checkWinner(newBoard);
  };

  // Check if there's a winner
  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],            // Diagonals
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]); // Declare winner
        unlockProject(currentLevel); // Unlock the current level
        setCurrentLevel(prevLevel => prevLevel + 1); // Move to next level
        setIsWinning(true); // Set the winning state
        setTimeout(() => {
          navigate("/portfolio"); // Redirect after a brief delay
        }, 2000); // Redirect after 2 seconds for the player to see the win message
        break;
      }
    }
  };

  // Render the square
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
          ? `CONGRATULATIONS!!!! ${winner} Wins!`
          : `Next Player: ${xIsNext ? 'X' : 'O'}`}
      </h3>
      {isWinning && <h3 className="win-message">You won!</h3>} {/* Winning message */}
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="row">
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamePage;
