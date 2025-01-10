import React from "react";
import "./Portfolio.scss";
import { useGameState } from "../../context/GameStateContext";
import { Link, useNavigate } from "react-router-dom"; 
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";

function Portfolio() {
  const { currentLevel, unlockProject, unlockedProjects } = useGameState();
  const navigate = useNavigate(); 

  const handleLevelCompletion = () => {
    unlockProject(currentLevel);
    if (currentLevel === 1) {
      navigate(`/portfolio/1`); 
    }
  };

  const projects = [
    { id: 1, title: "BrainFlix", description: "Description of Project 1" },
    { id: 2, title: "InStock", description: "Description of Project 2" },
    { id: 3, title: "Vinyl-O", description: "Description of Project 3" }
  ];

  const handleProjectClick = (projectId) => {
    // Check if the project is unlocked
    if (unlockedProjects.includes(projectId)) {
      navigate(`/portfolio/${projectId}`);
    } else {
      // Display the alert if the project is locked
      alert("Seems like you haven't challenged my Tic Tac Toe AI game!");
    }
  };

  return (
    <div className="portfolio-page">
      <h1 className="portfolio-page__title">Game Challenge</h1>
      <p className="portfolio-page__description">Click below to start the game and unlock my portfolio!</p>
      <Link to="/portfolio/game" className="portfolio-page__start-button">Start Game</Link>

      <div className="portfolio-page__projects">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="portfolio-page__project-card-container"
            onClick={() => handleProjectClick(project.id)}
          >
            <ProjectCard
              projectId={project.id}
              projectTitle={project.title}
              projectDescription={project.description}
              isUnlocked={unlockedProjects.includes(project.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;


