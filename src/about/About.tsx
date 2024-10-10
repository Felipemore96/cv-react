import styles from "../styles/About.module.css";

export function About() {
  return (
    <section className={styles.container} id="about">
      <p className={styles.description}>Get To Know More</p>
      <h1 className={styles.title}>About Me</h1>
      <div>
        <ul>
          <li>Master 1</li>
          <li>Master 2</li>
          <li>Licentiate</li>
        </ul>
        <div>
          <p>Location</p>
          <div>Description</div>
          <ul>
            <li>1 year BIM S.D.</li>
            <li>2 years Construction Manager</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
