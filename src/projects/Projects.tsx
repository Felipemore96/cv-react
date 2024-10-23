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
          <div className={styles.iconsLine}>
            <img
              src={getImageUrl("icons/skills/react.png")}
              className={styles.icon}
            />{" "}
            <img
              src={getImageUrl("icons/skills/thatopenengine.png")}
              className={styles.icon}
            />{" "}
            <img
              src={getImageUrl("icons/skills/three.png")}
              className={styles.icon}
            />
            <img
              src={getImageUrl("icons/skills/typescript.png")}
              className={styles.icon}
            />{" "}
            <img
              src={getImageUrl("icons/skills/html.png")}
              className={styles.icon}
            />{" "}
          </div>
          <div className={styles.buttonsLine}>
            <div className={styles.button}>
              <p className={styles.smallText}>GitHub Repo</p>
            </div>
            <div className={styles.button}>
              <p className={styles.smallText}>LinkedIn Demo</p>
            </div>
          </div>
        </div>
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
          <div className={styles.iconsLine}>
            <img
              src={getImageUrl("icons/skills/react.png")}
              className={styles.icon}
            />{" "}
            <img
              src={getImageUrl("icons/skills/thatopenengine.png")}
              className={styles.icon}
            />{" "}
            <img
              src={getImageUrl("icons/skills/three.png")}
              className={styles.icon}
            />
            <img
              src={getImageUrl("icons/skills/typescript.png")}
              className={styles.icon}
            />{" "}
            <img
              src={getImageUrl("icons/skills/html.png")}
              className={styles.icon}
            />{" "}
          </div>
          <div className={styles.buttonsLine}>
            <div className={styles.button}>
              <p className={styles.smallText}>GitHub Repo</p>
            </div>
            <div className={styles.button}>
              <p className={styles.smallText}>LinkedIn Demo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
