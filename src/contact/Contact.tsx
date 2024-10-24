import styles from "../styles/Contact.module.css";
import { getImageUrl } from "../utils.ts";

export function Contact() {
  return (
    <footer className={styles.container} id="contact">
      <p className={styles.initialText}>Get In Touch</p>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.buttonsLine}>
        <a className={styles.button} href="mailto:felipe.moreiras796@gmail.com">
          <img
            src={getImageUrl("icons/main/mail.png")}
            className={styles.icon}
            alt="LinkeIn Profile"
          />
        </a>
        <a
          className={styles.button}
          href="https://www.linkedin.com/in/felipemoreiras796/"
        >
          <img
            src={getImageUrl("icons/main/linkedin.png")}
            className={styles.icon}
            alt="LinkeIn Profile"
          />
        </a>
        <a className={styles.button} href="https://github.com/Felipemore96">
          <img
            src={getImageUrl("icons/main/github.png")}
            className={styles.icon}
            alt="LinkeIn Profile"
          />
        </a>
      </div>
    </footer>
  );
}
