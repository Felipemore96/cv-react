import styles from "../styles/About.module.css";

export function About() {
  return (
    <section className={styles.container} id="about">
      <p className={styles.description}>Get To Know More</p>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <div className={styles.mastersList}>
          <div className={styles.master}>
            <p className={styles.masterText}>Master BIM Software Developer</p>
            <p className={styles.uniText}>That Open Company</p>
          </div>
          <div className={styles.master}>
            <p className={styles.masterText}>BIM A+ European Master</p>
            <p className={styles.uniText}>
              University of Ljubljana & University of Minho
            </p>
          </div>
          <div className={styles.master}>
            <p className={styles.masterText}>
              Bachelor's Degree in Civil Engineering
            </p>
            <p className={styles.uniText}>Universidad de Costa Rica</p>
          </div>
        </div>
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
