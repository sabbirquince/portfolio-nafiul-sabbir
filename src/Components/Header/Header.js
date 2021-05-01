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

const Header = () => {
  return (
    <div className={styles.header}>
      <Router>
        <section className={styles.left}>
          <Intro />
        </section>

        <section className={styles.right}>
          <Bounce top>
            <Navigation />
          </Bounce>

          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/blogs">
              <h1>blogs</h1>
            </Route>

            <Route path="/contact">
              <h1>contact</h1>
            </Route>

            <Route exact path="/">
              <Head />
            </Route>
          </Switch>

          <Bounce bottom>
            <Footer>
              &copy;{new Date().getFullYear()} Nafiul Sabbir. All rights
              reserved.
            </Footer>
          </Bounce>
        </section>
      </Router>
    </div>
  );
};

export default Header;
