import styles from "../styles/Projects.module.css";
import projects from "../../src/data/projects.json";
import { getImageUrl } from "../utils.ts";

export function Projects() {
  return (
    <section className={styles.container} id="projects">
      <p className={styles.initialText}>Browse my Recent</p>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.smallProject}>
            <div className={styles.projectDescription}>
              <p className={styles.mainText}>{project.name}</p>
              <p className={styles.smallText}>{project.organization}</p>
              <p className={styles.smallText}>{project.description}</p>
            </div>
            {project.photo && (
              <img
                src={getImageUrl(project.photo)}
                className={styles.projectImage}
                alt={project.name}
              />
            )}
            <div className={styles.iconsLine}>
              {project.skills.map((skill, skillIndex) => (
                <img
                  key={skillIndex}
                  src={getImageUrl(`icons/skills/${skill.toLowerCase()}.png`)}
                  className={styles.icon}
                  alt={skill}
                />
              ))}
            </div>
            <div className={styles.buttonsLine}>
              <a
                className={styles.button}
                href={project.button1[0].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.button1[0].text}
              </a>
              <a
                className={styles.button}
                href={project.button2[0].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.button2[0].text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
