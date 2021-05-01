import React, { useEffect, useState } from "react";
import styles from "./Head.module.css";
import Zoom from "react-reveal/Zoom";

const Head = () => {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setState(!state);
    }, 1000);

    setTimeout(() => {
      setState2(!state2);
    }, 2000);
  }, []);

  return (
    <div className={styles.head}>
      <h2>Hi, I'm</h2>
      <h1>
        <Zoom cascade>Nafiul Sabbir</Zoom>
        <Zoom cascade when={state}>
          A Web Developer
        </Zoom>
      </h1>
      <p className={styles.paragraph}>
        <Zoom cascade when={state2}>
          A web developer with a passion for building modern, responsive web
          applications. I spend considerate amount of time with new tools and
          technologies to grant better user experiences for the users. With over
          1 year experience as a front-end developer I helped my community with
          all the crafts I have. I'm looking forward to enhance my ability by
          learning more and more.
        </Zoom>
      </p>

      <Zoom cascade when={state2}>
        <button className={styles.btn}>Contact Me</button>
      </Zoom>
    </div>
  );
};

export default Head;
