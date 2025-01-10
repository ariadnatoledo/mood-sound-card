import React from 'react';
import { useParams } from 'react-router-dom';
import "./ProjectDetailsPage.scss";

function ProjectDetailsPage() {
  const { id } = useParams(); 
  const project = {
    1: { title: "BrainFlix", description: "Detailed description of Project 1", imageUrl: "/path/to/image1.jpg" },
    2: { title: "InStock", description: "Detailed description of Project 2", imageUrl: "/path/to/image2.jpg" },
    3: { title: "Vinyl-O", description: "Detailed description of Project 3", imageUrl: "/path/to/image3.jpg" }
  }[id]; 

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  return (
    <div className="project-details-card">
      <div className="project-details-header">
        <h1 className="project-title">{project.title}</h1>
      </div>
      <div className="project-image-container">
        <img className="project-image" src={project.imageUrl} alt={project.title} />
      </div>
      <div className="project-description">
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
