import React from "react";
import styles from "./Header.module.css";
import Navigation from "./Navbar/Navigation";
import Head from "./Head/Head";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Intro from "./Intro/Intro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";

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
              <h1>projects</h1>
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
            <Footer />
          </Bounce>
        </section>
      </Router>
    </div>
  );
};

export default Header;
