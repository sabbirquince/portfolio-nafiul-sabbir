import React from "react";
import Zoom from "react-reveal/Zoom";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, index }) => {
  const { picture, title, description, github, live, tech } = project;

  return (
    <Zoom>
      <div className={styles.card}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>

        <div className={styles.imgBox}>
          <img className={styles.img} src={picture} alt="" />
        </div>

        <div className={styles.description}>
          <p>{description}</p>

          <div className={styles.code}>
            <a
              target="_blank"
              rel="noreferrer"
              href={github}
              className={styles.btn}
            >
              Source Code
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={live}
              className={styles.btn}
            >
              Live Link
            </a>
          </div>
        </div>

        <div className={styles.tech}>
          {tech.map((each) => (
            <p className={styles.paragraph}>{each}</p>
          ))}
        </div>
      </div>
    </Zoom>
  );
};

export default ProjectCard;
