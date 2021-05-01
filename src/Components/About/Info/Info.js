import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faMapSigns } from "@fortawesome/free-solid-svg-icons";
import styles from "./Info.module.css";
import Zoom from "react-reveal/Zoom";

const Info = () => {
  return (
    <Zoom cascade>
      <section className={styles.infoBox}>
        <h2>About Info</h2>

        <div className={styles.infoDetails}>
          <div className={styles.info}>
            <div className={styles.info__icon}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={styles.info__text}>
              <h4>Name</h4>
              <p>Nafiul Sabbir</p>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.info__icon}>
              <FontAwesomeIcon icon={faAt} />
            </div>
            <div className={styles.info__text}>
              <h4>Email</h4>
              <p>nafiulsabbir07@gmail.com</p>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.info__icon}>
              <FontAwesomeIcon icon={faMapSigns} />
            </div>
            <div className={styles.info__text}>
              <h4>Address</h4>
              <p>Dhaka-1000, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </Zoom>
  );
};

export default Info;
