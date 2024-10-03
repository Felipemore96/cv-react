import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Nav } from "./nav/Nav.tsx";
import { Main } from "./main/Main.tsx";
import { About } from "./about/About.tsx";
import { Experience } from "./experience/Experience.tsx";
import { Projects } from "./projects/Projects.tsx";
import { Contact } from "./contact/Contact.tsx";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
