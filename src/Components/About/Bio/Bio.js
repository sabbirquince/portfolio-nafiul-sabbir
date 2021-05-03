import React from "react";
import styles from "./Bio.module.css";
import Zoom from "react-reveal/Zoom";

const Bio = () => {
  return (
    <div className={styles.bio}>
      <Zoom cascade>
        <h2>Short Bio</h2>
      </Zoom>

      <p>
        A web developer with a passion for building modern, responsive web
        applications. I spend considerate amount of time with new tools and
        technologies to grant better user experiences for the users. With over 1
        year experience as a front-end developer I helped my community with all
        the crafts I have. I'm looking forward to enhance my ability by learning
        more and more.
      </p>
    </div>
  );
};

export default Bio;
