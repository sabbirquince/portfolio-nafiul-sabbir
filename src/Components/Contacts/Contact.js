import React from "react";
import styles from "./Contact.module.css";
import TemplateEmail from "./TemplateEmail/TemplateEmail";
import Zoom from "react-reveal/Zoom";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Zoom cascade>
        <h2>Contact Me</h2>
      </Zoom>
      <TemplateEmail />
    </div>
  );
};

export default Contact;
