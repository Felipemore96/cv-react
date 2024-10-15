import styles from "../styles/About.module.css";
import { getImageUrl } from "../utils.ts";

export function About() {
  return (
    <section className={styles.container} id="about">
      <p className={styles.initialText}>Get To Know More</p>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <div className={styles.aboutList}>
          <div className={styles.aboutInfo}>
            <h1 className={styles.location}>
              <img
                src={getImageUrl("icons/about/pin.png")}
                className={styles.pin}
              />
              {" " + "Groningen, The Netherlands"}
            </h1>
            <p className={styles.description}>
              Software Developer with a strong foundation in construction
              management and expertise in Building Information Modeling (BIM). A
              proactive problem solver, quick to learn, and capable of
              innovation through web applications development. Skilled in
              TypeScript and tools such as Vue.js, React.js, Tailwind, and That
              Open Engine. Fluent in English, Spanish, and Portuguese.
            </p>
          </div>
          <div className={styles.experience}>
            <div className={styles.jobs}>
              <p className={styles.masterText}>BIM Software Developer</p>
              <p className={styles.uniText}>1+ years</p>
            </div>
            <div className={styles.jobs}>
              <p className={styles.masterText}>Construction Engineer</p>
              <p className={styles.uniText}>2+ years</p>
            </div>
          </div>
        </div>
        <div className={styles.mastersList}>
          <div className={styles.master}>
            <img
              src={getImageUrl("icons/about/bimmodel.png")}
              className={styles.icon}
            />
            <p className={styles.masterText}>Master BIM Software Developer</p>
            <p className={styles.uniText}>That Open Company</p>
          </div>
          <div className={styles.master}>
            <img
              src={getImageUrl("icons/about/bim.png")}
              className={styles.icon}
            />
            <p className={styles.masterText}>BIM A+ European Master</p>
            <p className={styles.uniText}>
              University of Ljubljana & University of Minho
            </p>
          </div>
          <div className={styles.master}>
            <img
              src={getImageUrl("icons/about/construction.png")}
              className={styles.icon}
            />
            <p className={styles.masterText}>
              Bachelor's Degree in Civil Engineering
            </p>
            <p className={styles.uniText}>Universidad de Costa Rica</p>
          </div>
        </div>
      </div>
    </section>
  );
}
