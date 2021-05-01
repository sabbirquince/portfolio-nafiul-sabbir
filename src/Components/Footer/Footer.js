import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        &copy;{new Date().getFullYear()} Nafiul Sabbir. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
