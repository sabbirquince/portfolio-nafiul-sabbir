import React from "react";
import Zoom from "react-reveal/Zoom";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <div className={styles.education}>
      <Zoom cascade>
        <h2>Education History</h2>
      </Zoom>
      <div className={styles.pursue}>
        <h4>&#8658; Jahangirnagar University</h4>
        <p>Bachelor of Social Science</p>
        <p>Public Administration (2019-2023)</p>
      </div>
    </div>
  );
};

export default Education;
