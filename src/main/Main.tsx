import { useState } from "react";
import styles from "../styles/Main.module.css";
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
          <a className={styles.btnSmall}>LnI</a>
          <a className={styles.btnSmall}>GtH</a>
        </div>
      </div>
    </section>
  );
}
