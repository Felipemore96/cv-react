import { useLocation } from "react-router-dom";
export function Nav() {
  return (
    <nav>
      <a href="/">Felipe Moreira Salas, M.S.</a>
      <div>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </div>
    </nav>
  );
}
