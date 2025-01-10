import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetailsPage.scss";
import gitHubClient from "../../assets/icons/client.png";
import gitHubServer from "../../assets/icons/database.png"

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = {
    1: {
      title: "BrainFlix",
      description:
        "This project involved building a responsive video streaming platform prototype with React and a custom-built REST API. I developed the back-end API to handle CRUD operations for video data, including endpoints for retrieving video details, adding new videos, and serving static assets. On the front end, I integrated the API with React, implemented multi-page routing, and added video upload functionality with form validation. I learned how to design REST APIs, manage JSON data persistence, and connect a React app with a custom back-end for a seamless user experience. This project enhanced my understanding of full-stack development and scalable architecture.",
      imageUrl: "/public/images/BrainFlix-laptop.png",
      tech: "REACT, NODE, EXPRESS, REST APIs, SASS",
      clientUrl:
        "https://github.com/ariadnatoledo/ariadna-toledo-brainflix/tree/main/client",
      serverUrl:
        "https://github.com/ariadnatoledo/ariadna-toledo-brainflix-api/tree/main/server",
    },
    2: {
      title: "InStock",
      description: "InStock is a full-stack React application brought to life by an Agile team of developers, to deliver a mock Inventory Management System for a Fortune 500 Client. The goal is to deliver a time-sensitive, full stack application with a modern React front-end communicating with a robust Express back-end. This project was managed with a JIRA Scrum board and a design tool called Figma to deliver the style guides and mockups.",
      imageUrl: "/public/images/instock-mob.png",
      tech: "REACT, JAVASCRIPT, EXPRESS, NODE, AXIOS, MySQL, SASS",
      clientUrl: "https://github.com/ariadnatoledo/dashing-doves-instock",
      serverUrl: "https://github.com/ariadnatoledo/dashing-doves-instock-api"
    },
    3: {
      title: "Vinyl-O",
      description: "Developed a full-stack social media platform, managing the database (MySQL), server (Express), and client-side (React.js). Wrote technical documentation, resolved bugs, and troubleshoot issues to ensure the platform ran smoothly.",
      imageUrl: "/public/images/vinilo-demo.png",
      tech: "REACT, JAVASCRIPT, EXPRESS, NODE, MySQL, SOCKET.IO, BCRYPT, MULTER, SASS",
      clientUrl: "https://github.com/ariadnatoledo/ariadna-toledo-vinilo-capstone",
      serverUrl: "https://github.com/ariadnatoledo/ariadna-toledo-vinilo-capstone-api/tree/develop"

    },
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
        <img
          className="project-image"
          src={project.imageUrl}
          alt={project.title}
        />
      </div>
      <div className="project-description">
        <p>{project.description}</p>
      </div>
      <div className="project-tech">
        <p>{project.tech}</p>
      </div>
      <div className="github-wrapper">
      <div className="project-client">
        <a href={project.clientUrl}>
          <img
            src={gitHubClient}
            alt="GitHub Client"
            className="github-client-image"
          />
        </a>
      </div>
      <div className="project-server">
        <a href={project.serverUrl}>
          <img
            src={gitHubServer}
            alt="GitHub Server"
            className="github-server-image"
          />
        </a>
      </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
