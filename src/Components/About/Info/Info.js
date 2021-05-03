import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faMapSigns } from "@fortawesome/free-solid-svg-icons";
import styles from "./Info.module.css";
import Zoom from "react-reveal/Zoom";

const Info = () => {
  return (
    <section className={styles.infoBox}>
      <Zoom cascade>
        <h2>About Info</h2>
      </Zoom>

      <div className={styles.infoDetails}>
        <div className={styles.info}>
          <Zoom cascade>
            <div className={styles.info__icon}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={styles.info__text}>
              <h4>Name</h4>
              <p>Nafiul Sabbir</p>
            </div>
          </Zoom>
        </div>

        <div className={styles.info}>
          <Zoom cascade>
            <div className={styles.info__icon}>
              <FontAwesomeIcon icon={faAt} />
            </div>
            <div className={styles.info__text}>
              <h4>Email</h4>
              <p>nafiulsabbir07@gmail.com</p>
            </div>
          </Zoom>
        </div>

        <div className={styles.info}>
          <Zoom cascade>
            <div className={styles.info__icon}>
              <FontAwesomeIcon icon={faMapSigns} />
            </div>
            <div className={styles.info__text}>
              <h4>Address</h4>
              <p>Dhaka-1000, Bangladesh</p>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Info;
