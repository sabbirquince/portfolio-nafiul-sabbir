import React from "react";
import styles from "./Skillset.module.css";
import Fade from "react-reveal/Fade";

const Skillset = () => {
  return (
    <div className={styles.skillset}>
      <Fade top cascade>
        <h2 className={styles.title}>My Skill Set</h2>
      </Fade>
      <div>
        <Fade top>
          <span className={styles.skill}>HTML5</span>
        </Fade>
        <Fade bottom>
          <span className={styles.skill}>CSS3</span>
        </Fade>
        <Fade top>
          <span className={styles.skill}>JavaScript</span>
        </Fade>
        <Fade bottom>
          <span className={styles.skill}>ES6</span>
        </Fade>
        <Fade top>
          <span className={styles.skill}>React.js</span>
        </Fade>
        <Fade bottom>
          <span className={styles.skill}>Bootstrap</span>
        </Fade>
        <Fade top>
          <span className={styles.skill}>React-Bootstrap</span>
        </Fade>
        <Fade bottom>
          <span className={styles.skill}>MongoDB</span>
        </Fade>
        <Fade top>
          <span className={styles.skill}>Express.js</span>
        </Fade>
        <Fade bottom>
          <span className={styles.skill}>Responsiveness</span>
        </Fade>
        <Fade top>
          <span className={styles.skill}>VS Code</span>
        </Fade>
        <Fade bottom>
          <span className={styles.skill}>Firebase</span>
        </Fade>
        <Fade top>
          <span className={styles.skill}>SASS</span>
        </Fade>
        <Fade bottom>
          <span className={styles.skill}>REST API</span>
        </Fade>
      </div>
    </div>
  );
};

export default Skillset;
