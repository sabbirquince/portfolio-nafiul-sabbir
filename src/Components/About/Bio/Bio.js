import React from "react";
import styles from "./Bio.module.css";
import Fade from "react-reveal/Fade";

const Bio = () => {
  return (
    <Fade top cascade>
      <div className={styles.bio}>
        <h2>Short Bio</h2>
        <p>
          A web developer with a passion for building modern, responsive web
          applications. I spend considerate amount of time with new tools and
          technologies to grant better user experiences for the users. With over
          1 year experience as a front-end developer I helped my community with
          all the crafts I have. I'm looking forward to enhance my ability by
          learning more and more.
        </p>
      </div>
    </Fade>
  );
};

export default Bio;
