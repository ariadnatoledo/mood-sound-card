import React from "react";
import "./Portfolio.scss";
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
      <h1>Game Challenge</h1>
      <p>Click below to start the game and unlock my portfolio!</p>
      <Link to="/portfolio/game">Start Game</Link>

      <div className="projects">
        {[1].map((level) => (
          <ProjectCard
            key={level}
            projectId={level}
            projectTitle={`Projects`} 
            isUnlocked={unlockedProjects.includes(level)}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
