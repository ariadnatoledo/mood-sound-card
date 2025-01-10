import { motion } from "framer-motion";
import "./ProjectCard.scss";

function ProjectCard({ projectId, projectTitle, isUnlocked }) {
  return (
    <motion.div
      className={`project-card ${isUnlocked ? "project-card--unlocked" : "project-card--locked"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isUnlocked ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="project-card__title">{projectTitle}</h3>
      {isUnlocked ? (
        <button className="project-card__button">View Project</button>
      ) : (
        <button className="project-card__button" disabled>
          Locked
        </button>
      )}
    </motion.div>
  );
}

export default ProjectCard;
