import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Intro.module.css";
import FileSaver from "file-saver";
import Footer from "../../Footer/Footer";
import Fade from "react-reveal/Fade";

const Intro = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resources/Resume(Nafiul-Sabbir).pdf",
      "MyResume.pdf"
    );
  };

  const [state, setState] = useState(false);
  setTimeout(() => {
    setState(true);
  }, 800);

  return (
    <>
      <Fade top cascade>
        <div className={styles.top}>
          <div className={styles.name}>
            <h1>Nafiul Sabbir</h1>
            <span>Jr. Web Developer</span>
          </div>
        </div>
      </Fade>

      <div className={styles.bottom}>
        <Fade top cascade when={state}>
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
        </Fade>

        <div className={styles.resume}>
          <Fade top cascade when={state}>
            <button className={styles.btn} onClick={saveFile}>
              <FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume
            </button>
          </Fade>
        </div>
      </div>

      <div className={styles.footer__collapse}>
        <Footer>
          &copy; {new Date().getFullYear()} built by Nafiul Sabbir.
        </Footer>
      </div>
    </>
  );
};

export default Intro;
