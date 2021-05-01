import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <p>Home</p>
      <p>About</p>
      <p>Projects</p>
      <p>Blogs</p>
      <p>Contact</p>
    </div>
  );
};

export default Navigation;
