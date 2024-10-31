import styles from "../styles/About.module.css";
import skills from "../../src/data/skills.json";
import { getImageUrl } from "../utils.ts";

export function About() {
  const sortedSkills = {
    bim: skills
      .filter((skill) => skill.type === "bim" && skill.show)
      .sort((a, b) => b.level - a.level),
    prog: skills
      .filter((skill) => skill.type === "prog" && skill.show)
      .sort((a, b) => b.level - a.level),
    lang: skills
      .filter((skill) => skill.type === "lang" && skill.show)
      .sort((a, b) => b.level - a.level),
  };

  const renderSkills = (skillsList) =>
    skillsList.map((skill, index) => (
      <li key={index} className={styles.skillLine}>
        <div className={styles.skill}>
          <img src={getImageUrl(skill.imageSrc)} className={styles.skillIcon} />
          <a
            className={styles.uniText}
            href={skill.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {skill.title}
          </a>
        </div>
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${Math.round(skill.level * 100)}%` }}
          ></div>
        </div>
      </li>
    ));

  return (
    <section className={styles.container} id="about">
      <p className={styles.initialText}>Get To Know More</p>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <div className={styles.about}>
          <div className={styles.aboutInfo}>
            <p className={styles.description}>
              Hey there! I'm Felipe, a software developer with a background in
              construction engineering. I started out managing construction
              projects but transitioned into the digital side of the industry
              while pursuing my master’s degree. These days, I'm all about
              building web applications for the AEC (Architecture, Engineering,
              and Construction) industry, where I can blend my love for
              technology and my engineering experience.
              {window.innerWidth > 600 && (
                <>
                  <br />
                  <br />
                  I’m passionate about solving tricky problems and always eager
                  to learn something new. Whether it's developing tools to make
                  workflows smoother or creating platforms for real-time
                  collaboration, I enjoy the challenge of bridging the gap
                  between traditional practices and modern solutions.
                  <br />
                  <br />
                  Thanks for stopping by! Feel free to explore my projects, and
                  don't hesitate to reach out if you want to chat or share
                  ideas.
                </>
              )}
            </p>
            <h1 className={styles.location}>
              <img
                src={getImageUrl("icons/about/pin.png")}
                className={styles.pin}
              />
              {" " + "Groningen, The Netherlands"}
            </h1>
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
        <div className={styles.mastersList}>
          <div className={styles.master}>
            <img
              src={getImageUrl("icons/about/programming.png")}
              className={styles.icon}
            />
            <h2 className={styles.masterText}>Programming Skills</h2>
            <div className={styles.uniText}>
              {renderSkills(sortedSkills.prog)}
            </div>
          </div>
          <div className={styles.master}>
            <img
              src={getImageUrl("icons/about/bimapps.png")}
              className={styles.icon}
            />
            <h2 className={styles.masterText}>BIM Skills</h2>
            <div className={styles.uniText}>
              {renderSkills(sortedSkills.bim)}
            </div>
          </div>
          <div className={styles.master}>
            <img
              src={getImageUrl("icons/about/language.png")}
              className={styles.icon}
            />
            <h2 className={styles.masterText}>Languages</h2>
            <div className={styles.uniText}>
              {renderSkills(sortedSkills.lang)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
