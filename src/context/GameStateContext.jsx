import { createContext, useState, useContext } from 'react';

// GameStateContext to manage the game state
const GameStateContext = createContext();

export function GameStateProvider({ children }) {
  // Define game state (e.g., level, unlocked projects)
  const [currentLevel, setCurrentLevel] = useState(1);
  const [unlockedProjects, setUnlockedProjects] = useState([]);

  // Function to unlock projects based on user progress
  const unlockProject = (projectId) => {
    setUnlockedProjects([1, 2, 3]);  // Add all the project levels here
    // setUnlockedProjects((prev) => [...prev, projectId]);
  };

  return (
    <GameStateContext.Provider value={{ currentLevel, unlockProject, unlockedProjects, setCurrentLevel }}>
      {children}
    </GameStateContext.Provider>
  );
}

export const useGameState = () => useContext(GameStateContext); // Custom hook to use the context
