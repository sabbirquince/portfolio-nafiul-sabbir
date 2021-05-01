import React from "react";
import styles from "./About.module.css";
import Bio from "./Bio/Bio";
import Info from "./Info/Info";
import Skillset from "./Skillset/Skillset";

const About = () => {
  return (
    <div className={styles.about}>
      <Info />
      <Skillset />
      <Bio />
    </div>
  );
};

export default About;
