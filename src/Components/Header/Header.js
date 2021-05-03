import React, { useState } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navbar/Navigation";
import Head from "./Head/Head";
import Intro from "./Intro/Intro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contacts/Contact";

const Header = () => {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.header}>
      <Router>
        <section className={`${styles.left} ${styles.left__collapse}`}>
          <Intro />
        </section>

        <section className={styles.right}>
          <Navigation active={active} setActive={setActive} />

          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/blogs">
              <Blogs />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route exact path="/">
              <Head setActive={setActive} />
            </Route>
          </Switch>

          <Footer>
            &copy;{new Date().getFullYear()} Nafiul Sabbir. All rights reserved.
          </Footer>
        </section>
      </Router>
    </div>
  );
};

export default Header;
