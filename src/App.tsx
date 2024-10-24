import styles from "./styles/App.module.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Nav } from "./nav/Nav.tsx";
import { Main } from "./main/Main.tsx";
import { About } from "./about/About.tsx";
import { Experience } from "./experience/Experience.tsx";
import { Projects } from "./projects/Projects.tsx";
import { Contact } from "./contact/Contact.tsx";

const App = () => {
  return (
    <div className={styles.App}>
      <Nav />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Nav />
    </div>
  );
};

export default App;
