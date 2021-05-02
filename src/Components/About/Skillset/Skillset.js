import React from "react";
import styles from "./Skillset.module.css";
import Zoom from "react-reveal/Zoom";

const Skillset = () => {
  return (
    <Zoom cascade>
      <div className={styles.skillset}>
        <h2>My Skill Set</h2>
        <div>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>ES6</span>
          <span>React.js</span>
          <span>Bootstrap</span>
          <span>React-Bootstrap</span>
        </div>
        <div>
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>Responsiveness</span>
          <span>VS Code</span>
          <span>Firebase</span>
          <span>SASS</span>
          <span>REST API</span>
        </div>
      </div>
    </Zoom>
  );
};

export default Skillset;
