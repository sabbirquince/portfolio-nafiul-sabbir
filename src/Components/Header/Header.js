import React, { useState, Suspense } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navbar/Navigation";
import Head from "./Head/Head";
import Intro from "./Intro/Intro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
// import About from "../About/About";
// import Projects from "../Projects/Projects";
// import Blogs from "../Blogs/Blogs";
// import Contact from "../Contacts/Contact";
const About = React.lazy(() => import("../About/About"));
const Projects = React.lazy(() => import("../Projects/Projects"));
const Blogs = React.lazy(() => import("../Blogs/Blogs"));
const Contact = React.lazy(() => import("../Contacts/Contact"));

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
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            </Route>

            <Route path="/projects">
              <Suspense fallback={<div>Loading...</div>}>
                <Projects />
              </Suspense>
            </Route>

            <Route path="/blogs">
              <Suspense fallback={<div>Loading...</div>}>
                <Blogs />
              </Suspense>
            </Route>

            <Route path="/contact">
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
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
