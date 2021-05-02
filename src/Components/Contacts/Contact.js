import React from "react";
import styles from "./Contact.module.css";
import TemplateEmail from "./TemplateEmail/TemplateEmail";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact Me</h2>
      <Fade top>
        <TemplateEmail />
      </Fade>
    </div>
  );
};

export default Contact;
