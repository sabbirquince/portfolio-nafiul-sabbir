import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./TemplateEmail.module.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const TemplateEmail = () => {
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setConfirm(false);
    }, 4000);
  }, [confirm]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hb3opxf",
        "template_fi0e4jr",
        e.target,
        "user_Y8lB5LIEgrOuOCnWXLZQg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setConfirm(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className={styles.form} onSubmit={sendEmail}>
      <div className={styles.top}>
        <div className={`${styles.inputField} ${styles.top__input}`}>
          <label>type your name</label>
          <input
            className={styles.input}
            placeholder="your name"
            type="text"
            name="name"
          />
        </div>

        <div className={`${styles.inputField} ${styles.top__input}`}>
          <label>type your email</label>
          <input
            className={styles.input}
            placeholder="your email"
            type="email"
            name="email"
          />
        </div>
      </div>

      <div className={styles.inputField}>
        <label>type your message</label>
        <textarea
          className={styles.textarea}
          placeholder="your message"
          type="text"
          name="message"
        />
      </div>

      <input className={styles.btn} type="submit" value="Send" />

      {confirm && (
        <Fade bottom cascade>
          <p>
            <span>
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>{" "}
            Your message has been sent successfully. I will try reach you ASAP.
            Thank you.
          </p>
        </Fade>
      )}
    </form>
  );
};

export default TemplateEmail;
