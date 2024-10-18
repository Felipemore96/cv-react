import styles from "../styles/Experience.module.css";
import skills from "../../src/data/skills.json";
import jobs from "../../src/data/jobs.json";

export function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h1 className={styles.title}>Experience</h1>

      <ul>
        {jobs.map((jobsItem, id) => {
          return (
            <li key={id}>
              <h3>{jobsItem.role}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
