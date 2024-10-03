import { useLocation } from "react-router-dom";
export function Nav() {
  const location = useLocation();
  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/about":
        return "nav-about";
      case "/experience":
        return "nav-experience";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/about":
        return "ABOUT";
      case "/experience":
        return "EXPERIENCE";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  return (
    <header className="header">
      <h1>Felipe Moreira Salas, M.S.</h1>
      <div>About</div>
      <div>Experience</div>
      <div>Projects</div>
      <div>Contact</div>
    </header>
  );
}
