import React from "react";
import styles from "./Head.module.css";
import Zoom from "react-reveal/Zoom";

const Head = () => {
  return (
    <div className={styles.head}>
      <h2>Hi</h2>
      <h1>
        I am
        <Zoom top cascade>
          Nafiul Sabbir
        </Zoom>
      </h1>
    </div>
  );
};

export default Head;
