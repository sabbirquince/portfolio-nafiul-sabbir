import React, { useEffect, useState } from "react";
import styles from "./Head.module.css";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import Intro from "../Intro/Intro";

const Head = () => {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 700);

    setTimeout(() => {
      setState2(true);
    }, 1500);
  }, []);

  return (
    <div className={styles.head}>
      <section className={styles.left}>
        <Zoom cascade>
          <h2>Hi, I'm</h2>
          <h1>
            <Zoom cascade>Nafiul Sabbir</Zoom>
            <Zoom cascade when={state}>
              A Front-end Developer
            </Zoom>
          </h1>
          <Zoom cascade when={state2}>
            <p className={styles.paragraph}>
              A web developer with a passion for building modern, responsive web
              applications. I spend considerate amount of time with new tools
              and technologies to grant better user experiences for the users.
              With over 1 year experience as a front-end developer I helped my
              community with all the crafts I have. I'm looking forward to
              enhance my ability by learning more and more.
            </p>
          </Zoom>

          <Zoom cascade when={state2}>
            <button className={styles.btn}>
              <FontAwesomeIcon icon={faFileSignature} /> Contact Me
            </button>
          </Zoom>
        </Zoom>
      </section>

      <section className={styles.right}>
        <Intro />
      </section>
    </div>
  );
};

export default Head;
