import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Header.module.css";
import Navigation from "./Navbar/Navigation";
import Head from "./Head/Head";

const Header = () => {
  return (
    <div className={styles.header}>
      <section className={styles.left}>
        <div className={styles.top}>
          <div className={styles.name}>
            <h1>Nafiul Sabbir</h1>
            <span>Jr. Web Developer</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.social}>
            <span>
              <a href="www.github.com">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
            <span>
              <a href="www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </span>
            <span>
              <a href="www.facebook.com">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </span>
            <span>
              <a href="www.twitter.com">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </span>
          </div>

          <div className={styles.resume}>
            <button className={styles.btn}>Download Resume</button>
          </div>
        </div>
      </section>

      <section className={styles.right}>
        <Navigation />
        <Head />
      </section>
    </div>
  );
};

export default Header;
