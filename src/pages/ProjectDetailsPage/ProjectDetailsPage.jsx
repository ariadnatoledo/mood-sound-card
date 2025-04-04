import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetailsPage.scss";
import gitHubClient from "../../assets/icons/client.png";
import gitHubServer from "../../assets/icons/database.png";

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = {
    1: {
      title: "BrainFlix",
      description:
        "This project involved building a responsive video streaming platform prototype with React and a custom-built REST API. I developed the back-end API to handle CRUD operations for video data, including endpoints for retrieving video details, adding new videos, and serving static assets. On the front end, I integrated the API with React, implemented multi-page routing, and added video upload functionality with form validation. I learned how to design REST APIs, manage JSON data persistence, and connect a React app with a custom back-end for a seamless user experience. This project enhanced my understanding of full-stack development and scalable architecture.",
      imageUrl: "/images/BrainFlix-laptop.png",
      tech: "REACT, NODE, EXPRESS, REST APIs, SASS",
      clientUrl:
        "https://github.com/ariadnatoledo/ariadna-toledo-brainflix/tree/main/client",
      serverUrl:
        "https://github.com/ariadnatoledo/ariadna-toledo-brainflix-api/tree/main/server",
    },
    2: {
      title: "InStock",
      description:
        "InStock is a full-stack React application brought to life by an Agile team of developers, to deliver a mock Inventory Management System for a Fortune 500 Client. The goal is to deliver a time-sensitive, full stack application with a modern React front-end communicating with a robust Express back-end. This project was managed with a JIRA Scrum board and a design tool called Figma to deliver the style guides and mockups.",
      imageUrl: "/images/instock-mob.png",
      tech: "REACT, JAVASCRIPT, EXPRESS, NODE, AXIOS, MySQL, SASS",
      clientUrl: "https://github.com/ariadnatoledo/dashing-doves-instock",
      serverUrl: "https://github.com/ariadnatoledo/dashing-doves-instock-api",
    },
    3: {
      title: "Vinyl-O",
      description:
        "Developed a full-stack social media platform, managing the database (MySQL), server (Express), and client-side (React.js). Wrote technical documentation, resolved bugs, and troubleshoot issues to ensure the platform ran smoothly.",
      imageUrl: "/images/vinilo-mobs.png",
      tech: "REACT, JAVASCRIPT, EXPRESS, NODE, MySQL, SOCKET.IO, BCRYPT, MULTER, SASS",
      clientUrl:
        "https://github.com/ariadnatoledo/ariadna-toledo-vinilo-capstone",
      serverUrl:
        "https://github.com/ariadnatoledo/ariadna-toledo-vinilo-capstone-api/tree/develop",
    },
    4: {
      title: "Unité virtuelle de soins *IN CONSTRUCTION*",
      description:
        "Developed the React-based front-end and back end website for a virtual reality training platform for healthcare professionals, ensuring responsiveness and performance optimization. Translated CSS to Tailwind v3 and migrated the tablet version of the game to Tailwind v4, enhancing scalability and maintainability. Deployed the platform with CI/CD pipelines, streamlining development and ensuring continuous deliver. Designed and prototyped the web interface using Figma and HTML, delivering user-friendly and visually consistent experiences. Diagnosed and resolved bugs while scaling infrastructure, boosting application performance and reliability. Refactored the iPad version of the VR game, improving the editor and enhancing the overall user experience.",
      imageUrl: "/images/v2-staging.jpg",
      tech: "NEXT.JS, TAILWIND, SUPABASE",
      clientUrl: "#",
      serverUrl: "#",
    },
    5: {
      title: "SimpleEQ *IN CONSTRUCTION*",
      description:
        "Developed my first simple EQ plugin with C++ and JUCE with simplest spectrum of human hearable frequencies, 20 hz to 20,000 Hz.",
      imageUrl: "/images/simpleeq-2.jpeg",
      tech: "C++, JUCE, Xcode",
      clientUrl: "#",
      serverUrl: "#",
    },
    6: {
      title:
        "Soundtrack for the short documentary SHIRINGA, Fashion Regenerating Amazonia, now streaming on WaterBear Network",
      description:
        "The short film follows the Awajún people of the Peruvian Amazon who work with caxacoristudio to create a bio-leather that supports their community, defends against deforestation, and offers the fashion industry a much needed alternative to the harmful animal-derived leather and plastic materials currently being used. Directed and produced by Emma Hakansson and featuring designer Mozhdeh Matin. We invite you to watch, be inspired, and then learn more about this material.",
      imageUrl: "/images/shiringa.jpeg",
      tech: "Ableton, Pro Tools",
      clientUrl: "#",
      serverUrl: "#",
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
