import React from "react";
import styles from "./About.module.css";
import Bio from "./Bio/Bio";
import Courses from "./Courses/Courses";
import Education from "./Education/Education";
import Info from "./Info/Info";
import Skillset from "./Skillset/Skillset";

const About = () => {
  return (
    <div className={styles.about}>
      <Info />
      <Skillset />
      <Bio />
      <Courses />
      <Education />
    </div>
  );
};

export default About;
