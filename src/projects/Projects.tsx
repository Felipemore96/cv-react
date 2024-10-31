import styles from "../styles/Projects.module.css";
import projects from "../../src/data/projects.json";
import { getImageUrl } from "../utils.ts";
import { Project } from "../class/project.ts";

export function Projects() {
  return (
    <section className={styles.container} id="projects">
      <p className={styles.initialText}>Browse my Recent</p>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectsList}>
        {projects.map((project: Project, index) => (
          <div key={index} className={styles.smallProject}>
            {project.photo && (
              <img
                src={getImageUrl(project.photo)}
                className={styles.projectImage}
                alt={project.name}
              />
            )}
            <div className={styles.projectDescription}>
              <p className={styles.mainText}>{project.name}</p>
              <p className={styles.subTitleText}>{project.organization}</p>
              <p className={styles.smallText}>{project.description}</p>
            </div>
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
                href={project.button1.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.button1.text}
              </a>
              <a
                className={styles.button}
                href={project.button2.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.button2.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
