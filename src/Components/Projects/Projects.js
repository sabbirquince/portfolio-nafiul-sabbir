import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import projectInfo from "./ProjectInfo.json";
import ProjectCard from "./ProjectCard/ProjectCard";
import Zoom from "react-reveal/Zoom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectInfo);
  }, []);

  return (
    <div className={styles.projects}>
      <Zoom cascade>
        <h2>Latest Projects</h2>
      </Zoom>

      <section className={styles.cardBox}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
