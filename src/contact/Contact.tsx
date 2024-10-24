import styles from "../styles/Contact.module.css";
import { getImageUrl } from "../utils.ts";

export function Contact() {
  return (
    <footer className={styles.container} id="contact">
      <p className={styles.initialText}>Feel Free to</p>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.buttonsLine}>
        <a className={styles.button} href="mailto:felipe.moreiras796@gmail.com">
          <img
            src={getImageUrl("icons/main/mail.png")}
            className={styles.icon}
            alt="Email Address"
          />
        </a>
        <a
          className={styles.button}
          href="https://www.linkedin.com/in/felipemore96/"
        >
          <img
            src={getImageUrl("icons/main/linkedin.png")}
            className={styles.icon}
            alt="LinkedIn Profile"
          />
        </a>
      </div>
    </footer>
  );
}
