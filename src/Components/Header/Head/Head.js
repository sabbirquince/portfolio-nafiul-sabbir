import React, { useEffect, useState } from "react";
import styles from "./Head.module.css";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import Intro from "../Intro/Intro";
import { useHistory } from "react-router";

const Head = ({ setActive }) => {
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

  const history = useHistory();
  const handleContact = () => {
    history.push("/contact");
    setActive(5);
  };

  return (
    <div className={styles.head}>
      <section className={styles.left}>
        <h2>Hi, I'm</h2>
        <h1>
          <Zoom cascade>Nafiul Sabbir</Zoom>
          <Zoom cascade when={state}>
            A Front-end Developer
          </Zoom>
        </h1>
        <Zoom cascade when={state2}>
          <p className={styles.paragraph}>
            I build & help creating websites and make sure the users get the
            better experience.
          </p>
        </Zoom>

        <div className={styles.btnBox}>
          <button onClick={handleContact} className={styles.btn}>
            <FontAwesomeIcon icon={faFileSignature} /> Contact Me
          </button>
        </div>
      </section>

      <section className={styles.right}>
        <Intro />
      </section>
    </div>
  );
};

export default Head;
