import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUserTie,
  faNetworkWired,
  faNewspaper,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navigation.module.css";

const Navigation = ({ active, setActive }) => {
  return (
    <div className={styles.navigation}>
      <Link
        onClick={() => setActive(1)}
        className={active === 1 && `${styles.active}`}
        to="/"
      >
        <p>
          Home{" "}
          <span>
            <FontAwesomeIcon icon={faHouseUser} />
          </span>
        </p>
      </Link>

      <Link
        onClick={() => setActive(2)}
        className={active === 2 && `${styles.active}`}
        to="/about"
      >
        <p>
          About{" "}
          <span>
            <FontAwesomeIcon icon={faUserTie} />
          </span>
        </p>
      </Link>

      <Link
        onClick={() => setActive(3)}
        className={active === 3 && `${styles.active}`}
        to="/projects"
      >
        <p>
          Projects{" "}
          <span>
            <FontAwesomeIcon icon={faNetworkWired} />
          </span>
        </p>
      </Link>

      <Link
        onClick={() => setActive(4)}
        className={active === 4 && `${styles.active}`}
        to="/blogs"
      >
        <p>
          Blogs{" "}
          <span>
            <FontAwesomeIcon icon={faNewspaper} />
          </span>
        </p>
      </Link>

      <Link
        onClick={() => setActive(5)}
        className={active === 5 && `${styles.active}`}
        to="/contact"
      >
        <p>
          Contact{" "}
          <span>
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Navigation;
