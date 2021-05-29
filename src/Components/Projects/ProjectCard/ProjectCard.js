import React from "react";
import Zoom from "react-reveal/Zoom";
import styles from "./ProjectCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
  const { picture, title, description, github, live, tech, index } = project;

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <Zoom left={index} right={!index}>
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            <span className={styles.span}>
              <a target="_blank" rel="noreferrer" href={github}>
                <FontAwesomeIcon icon={faCode} />
              </a>
            </span>
            <span className={styles.span}>
              <a target="_blank" rel="noreferrer" href={live}>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </span>
          </div>
        </Zoom>
      </div>

      <div className={styles.imgBox}>
        <img className={styles.img} src={picture} alt="" />
      </div>

      <div className={styles.description}>
        <p className={styles.text}>{description}</p>

        <div className={styles.code}>
          <a
            target="_blank"
            rel="noreferrer"
            href={github}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faCode} /> Source Code
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={live}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Link
          </a>
        </div>
      </div>

      <div className={styles.tech}>
        {tech.map((each) => (
          <p className={styles.paragraph}>{each}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
