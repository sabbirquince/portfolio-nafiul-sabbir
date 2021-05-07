import React from "react";
import styles from "./Courses.module.css";
import Zoom from "react-reveal/Zoom";

const Courses = () => {
  return (
    <div className={styles.courses}>
      <Zoom cascade>
        <h2>Courses Attended</h2>
      </Zoom>

      <section className={styles.attended}>
        <div>
          <h4>&#8658; Programming Hero</h4>
          <article>
            <p>
              Complete Web Development <br /> with Jhankar Mahbub
            </p>
            <small>Batch 3 (2021)</small>
          </article>
        </div>

        <div>
          <h4>&#8658; Udemy</h4>
          <article>
            <p>
              Advanced CSS & SASS <br /> (A complete guideline)
            </p>
            <small>year : 2020</small>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Courses;
