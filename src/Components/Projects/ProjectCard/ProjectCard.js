import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import styles from "./ProjectCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project, index }) => {
  const { picture, title, description, github, live, tech } = project;

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <div>
          <Zoom cascade>
            <h3>{title}</h3>
          </Zoom>
        </div>
        <div>
          <Zoom cascade>
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
          </Zoom>
        </div>
      </div>

      <div className={styles.imgBox}>
        <Fade cascade>
          <img className={styles.img} src={picture} alt="" />
        </Fade>
      </div>

      <div className={styles.description}>
        <p className={styles.text}>
          <Zoom cascade>{description}</Zoom>
        </p>

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
