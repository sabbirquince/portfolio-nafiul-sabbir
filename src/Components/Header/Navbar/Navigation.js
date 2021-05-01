import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to="/">
        <p>Home</p>
      </Link>

      <Link to="/about">
        <p>About</p>
      </Link>

      <Link to="/projects">
        <p>Projects</p>
      </Link>

      <Link to="/blogs">
        <p>Blogs</p>
      </Link>

      <Link to="/contact">
        <p>Contact</p>
      </Link>
    </div>
  );
};

export default Navigation;
