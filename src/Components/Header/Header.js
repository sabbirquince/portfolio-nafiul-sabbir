import React from "react";
import styles from "./Header.module.css";
import Navigation from "./Navbar/Navigation";
import Head from "./Head/Head";
import Bounce from "react-reveal/Bounce";
import Intro from "./Intro/Intro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contacts/Contact";

const Header = () => {
  return (
    <div className={styles.header}>
      <Router>
        <section className={`${styles.left} ${styles.left__collapse}`}>
          <Intro />
        </section>

        <section className={styles.right}>
          <Navigation />

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
              <Head />
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
