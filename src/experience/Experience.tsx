import styles from "../styles/Experience.module.css";
import skills from "../../src/data/skills.json";
import jobs from "../../src/data/jobs.json";
import { getImageUrl } from "../utils.ts";

export function Experience() {
  return (
    <section className={styles.container} id="experience">
      <p className={styles.initialText}>Explore My</p>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.jobsList}>
        {jobs.map((jobsItem, id) => {
          const skillImages = jobsItem.skills
            .map((jobSkill) => {
              // Find the matching skill in skills.json
              const skillData = skills.find(
                (skill) =>
                  skill.tittle.toLowerCase() === jobSkill.toLowerCase(),
              );
              // If a match is found, return the image URL
              return skillData ? getImageUrl(skillData.imageSrc) : null;
            })
            .filter((url) => url !== null); // Filter out any null values
          return (
            <div className={styles.job} key={id}>
              <div className={styles.firstLine}>
                <div>
                  <h3 className={styles.jobTitle}>{jobsItem.role}</h3>
                </div>
                <div>
                  <p className={styles.jobData}>
                    - {jobsItem.modality} - {jobsItem.startDate} to{" "}
                    {jobsItem.endDate}
                  </p>
                </div>
              </div>
              <div className={styles.secondLine}>
                <p className={styles.jobData}>
                  {jobsItem.company} - {jobsItem.location}
                </p>
                <div className={styles.button}>
                  <p className={styles.jobData}>See Job Details</p>
                </div>
              </div>
              <div className={styles.thirdLine}>
                <div>
                  {skillImages.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      className={styles.icon}
                      alt="Skill"
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
