import React from "react";
import styles from "./Head.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import Intro from "../Intro/Intro";
import { useHistory } from "react-router";

const Head = ({ setActive }) => {
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
          <span>Nafiul Sabbir</span>
          <span>A Front-end Developer</span>
        </h1>

        <p className={styles.paragraph}>
          I build & help to create websites and make sure the users get a better
          experience.
        </p>

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
