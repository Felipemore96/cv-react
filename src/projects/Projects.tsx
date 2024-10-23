import styles from "../styles/Projects.module.css";
import { getImageUrl } from "../utils.ts";

export function Projects() {
  return (
    <section className={styles.container} id="projects">
      <p className={styles.initialText}>Browse my Recent</p>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectsList}>
        <div className={styles.smallProject}>
          <p className={styles.smallText}>
            Master BIM Software Developer's Challenge
          </p>
          <p className={styles.mainText}>
            Web-based Application to Manage BIM Projects
          </p>
          <p className={styles.smallText}>
            Developed a comprehensive web application to manage projects and
            teams using React components and a Firebase database. Integrated an
            IFC viewer using the That Open Engine library to interact with
            building models and project data in realtime.
          </p>
          <img
            src={getImageUrl("icons/about/bimmodel.png")}
            className={styles.projectImage}
          />
          <div></div>
        </div>
      </div>
    </section>
  );
}
