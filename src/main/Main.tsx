import { useState } from "react";
import styles from "../styles/Main.module.css";
export function Main() {
  return (
    <section className={styles.container}>
      <img src="../../assets/photos/picture.JPG" className={styles.photo} />
      <div className={styles.content}>
        <p className={styles.description}>Hello, I'm</p>
        <h1 className={styles.title}>Felipe Moreira</h1>
        <p className={styles.description}>BIM Software Developer</p>
        <div className={styles.content}>
          <a className={styles.BtnLarge}>Download CV</a>
          <a className={styles.BtnLarge}>Contact Me</a>
        </div>
        <div className={styles.content}>
          <a className={styles.BtnSmall}>LnI</a>
          <a className={styles.BtnSmall}>GtH</a>
        </div>
      </div>
    </section>
  );
}
