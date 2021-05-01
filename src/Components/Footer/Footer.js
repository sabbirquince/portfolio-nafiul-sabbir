import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <p>{props.children}</p>
    </div>
  );
};

export default Footer;
