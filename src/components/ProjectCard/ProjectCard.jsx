import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function ProjectCard({ projectId, projectTitle, isUnlocked }) {
  return (
    <motion.div
      className={`project-card ${isUnlocked ? "unlocked" : "locked"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isUnlocked ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{projectTitle}</h3>
      {isUnlocked ? (
        <Link to={`/portfolio/${projectId}`}>View Project</Link>
      ) : (
        <button disabled>Locked</button>
      )}
    </motion.div>
  );
}

export default ProjectCard;
