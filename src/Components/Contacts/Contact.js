import React from "react";
import styles from "./Contact.module.css";
import TemplateEmail from "./TemplateEmail/TemplateEmail";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact Me</h2>
      <TemplateEmail />
    </div>
  );
};

export default Contact;
