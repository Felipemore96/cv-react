import styles from "../styles/About.module.css";
import { getImageUrl } from "../utils.ts";

export function About() {
  return (
    <section className={styles.container} id="about">
      <p className={styles.initialText}>Get To Know More</p>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <div className={styles.experience}>
          <div className={styles.jobs}>
            <p className={styles.masterText}>
              Construction <br /> Engineer
            </p>
            <p className={styles.uniText}>2019 - 2022</p>
          </div>
          <div className={styles.jobs}>
            <p className={styles.masterText}>
              BIM Software <br /> Developer
            </p>
            <p className={styles.uniText}>2023 - Present</p>
          </div>
        </div>
        <div className={styles.aboutInfo}>
          <p className={styles.description}>
            Hey there! I'm Felipe, a software developer with a background in
            construction engineering. I started out managing projects in the
            real world and eventually found my way into the digital side of
            things. These days, I'm all about building web applications for the
            AEC (Architecture, Engineering, and Construction) industry, where I
            can blend my love for technology and my engineering experience.
            <br />
            <br />
            I’m passionate about solving tricky problems and always eager to
            learn something new. Whether it's developing tools to make workflows
            smoother or exploring the latest tech trends, I enjoy the challenge
            of bridging the gap between traditional practices and modern
            solutions.
            <br />
            <br />
            Thanks for stopping by! Feel free to explore my projects, and don't
            hesitate to reach out if you want to chat or share ideas.
          </p>
          <h1 className={styles.location}>
            <img
              src={getImageUrl("icons/about/pin.png")}
              className={styles.pin}
            />
            {" " + "Groningen, The Netherlands"}
          </h1>
        </div>

        {/* Relocated Experience Section */}

        {/* Skills and Languages Section */}
        <div className={styles.skillsSection}>
          <div className={styles.skillsList}>
            <h2 className={styles.skillsTitle}>Skills</h2>
            <ul className={styles.skills}>
              <li>TypeScript (Advanced)</li>
              <li>React.js (Intermediate)</li>
              <li>Vue.js (Intermediate)</li>
              <li>Tailwind (Intermediate)</li>
              <li>That Open Engine (Basic)</li>
            </ul>
          </div>
          <div className={styles.languagesList}>
            <h2 className={styles.skillsTitle}>Languages</h2>
            <ul className={styles.languages}>
              <li>English (Fluent)</li>
              <li>Spanish (Native)</li>
              <li>Portuguese (Conversational)</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
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
