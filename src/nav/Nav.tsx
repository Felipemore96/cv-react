import { useState } from "react";
import styles from "../styles/Nav.module.css";
import { getImageUrl } from "../utils.ts";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Felipe Moreira Salas, M.S.
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("icons/nav/closeIcon.png")
              : getImageUrl("icons/nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
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
