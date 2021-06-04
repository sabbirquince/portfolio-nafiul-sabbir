import React from "react";
import styles from "./Skillset.module.css";
import Zoom from "react-reveal/Zoom";

const Skillset = () => {
  return (
    <div className={styles.skillset}>
      <Zoom cascade>
        <h2 className={styles.title}>My Skill Set</h2>
      </Zoom>
      <div>
        <span className={styles.skill}>HTML5</span>

        <span className={styles.skill}>CSS3</span>

        <span className={styles.skill}>JavaScript</span>

        <span className={styles.skill}>ES6</span>

        <span className={styles.skill}>React.js</span>

        <span className={styles.skill}>Redux</span>

        <span className={styles.skill}>Bootstrap</span>

        <span className={styles.skill}>React-Bootstrap</span>

        <span className={styles.skill}>MongoDB</span>

        <span className={styles.skill}>Node.js</span>

        <span className={styles.skill}>Express.js</span>

        <span className={styles.skill}>Responsiveness</span>

        <span className={styles.skill}>VS Code</span>

        <span className={styles.skill}>Firebase</span>

        <span className={styles.skill}>JWT Auth</span>

        <span className={styles.skill}>SASS</span>

        <span className={styles.skill}>REST API</span>
      </div>
    </div>
  );
};

export default Skillset;
