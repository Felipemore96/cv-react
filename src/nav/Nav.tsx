import { useLocation } from "react-router-dom";
import styles from "../styles/Nav.module.css";
export function Nav() {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Felipe Moreira Salas, M.S.
      </a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
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
        </ul>
      </div>
    </nav>
  );
}
