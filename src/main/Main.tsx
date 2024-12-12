import styles from "../styles/Main.module.css";
import { getImageUrl } from "../utils.ts";
import picture from "../../assets/photos/picture.png";
import pdffile from "../../assets/docs/CVFelipeMoreiraENG.pdf";
export function Main() {
  return (
    <section className={styles.container}>
      <img src={picture} alt={"Felipe Moreira"} className={styles.photo} />
      <div className={styles.content}>
        <p className={styles.description}>Hello, I'm</p>
        <h1 className={styles.title}>Felipe Moreira</h1>
        <p className={styles.description}>Civil Engineer</p>
        <p className={styles.description}>Junior AEC Software Engineer</p>
        <div className={styles.firstBtnLine}>
          <a
            className={styles.btnLarge}
            href={pdffile}
            download="CVFelipeMoreiraENG.pdf"
          >
            Download CV
          </a>
          <a className={styles.btnLarge} href="#contact">
            Contact Me
          </a>
        </div>
        <div className={styles.secondBtnLine}>
          <a
            className={styles.btnSmall}
            href="https://www.linkedin.com/in/felipemore96/"
          >
            <img
              src={getImageUrl("icons/main/linkedin.png")}
              className={styles.icon}
              alt="LinkedIn Profile"
            />
          </a>
          <a className={styles.btnSmall} href="https://github.com/Felipemore96">
            <img
              src={getImageUrl("icons/main/github.png")}
              className={styles.icon}
              alt="GitHub Profile"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
