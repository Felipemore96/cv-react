import { useState } from "react";
import styles from "../styles/Main.module.css";
import { getImageUrl } from "../utils.ts";
export function Main() {
  return (
    <section className={styles.container}>
      <img src="../../assets/photos/picture.png" className={styles.photo} />
      <div className={styles.content}>
        <p className={styles.description}>Hello, I'm</p>
        <h1 className={styles.title}>Felipe Moreira</h1>
        <p className={styles.description}>BIM Software Developer</p>
        <div className={styles.firstBtnLine}>
          <a className={styles.btnLarge}>Download CV</a>
          <a className={styles.btnLarge}>Contact Me</a>
        </div>
        <div className={styles.secondBtnLine}>
          <a
            className={styles.btnSmall}
            href="https://www.linkedin.com/in/felipemoreiras796/"
          >
            <img
              src={getImageUrl("icons/main/linkedin.png")}
              className={styles.icon}
              alt="LinkeIn Profile"
            />
          </a>
          <a className={styles.btnSmall} href="https://github.com/Felipemore96">
            <img
              src={getImageUrl("icons/main/github.png")}
              className={styles.icon}
              alt="LinkeIn Profile"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
