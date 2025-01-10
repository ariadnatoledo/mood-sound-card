import React from "react";
import { useGameState } from "../../context/GameStateContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import { Link } from 'react-router-dom';

function Portfolio() {
  const { currentLevel, unlockProject, unlockedProjects } = useGameState();

  const handleLevelCompletion = () => {
    unlockProject(currentLevel);
  };

  return (
    <div className="portfolio-page">
      <h1>Game Level {currentLevel}</h1>
      <p>Click below to start the game and unlock level 1!</p>
      <Link to="/portfolio/game">Start Game</Link>

      <div className="projects">
        {[1, 2, 3, 4, 5].map((level) => (
          <ProjectCard
            key={level}
            projectId={level}
            projectTitle={`Project ${level} (Level ${level})`} // Dynamic title based on level
            isUnlocked={unlockedProjects.includes(level)}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
