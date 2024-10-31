import styles from "../styles/Experience.module.css";
import skills from "../../src/data/skills.json";
import jobs from "../../src/data/jobs.json";
import { getImageUrl } from "../utils.ts";
import { JobDetails } from "./JobDetails";
import { useState } from "react";
import { Job } from "../class/job.ts";
import { Skill } from "../class/skill.ts";

export function Experience() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const closeJobDetails = () => {
    setSelectedJob(null);
  };

  return (
    <section className={styles.container} id="experience">
      <p className={styles.initialText}>Explore My</p>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.jobsList}>
        {jobs.map((jobsItem: Job, id: number) => {
          const skillImages = jobsItem.skills
            .map((jobSkill) => {
              const skillData = (skills as Skill[]).find(
                (skill) => skill.title.toLowerCase() === jobSkill.toLowerCase(),
              );
              return skillData ? getImageUrl(skillData.imageSrc) : null;
            })
            .filter((url) => url !== null); // Filter out any null values
          return (
            <div className={styles.job} key={id}>
              <div className={styles.jobLine}>
                <h3 className={styles.jobTitle}>{jobsItem.role} </h3>
                <div>
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
              <div className={styles.jobLine}>
                <p className={styles.jobData}>
                  {jobsItem.company} - {jobsItem.location}
                </p>
                <div>
                  <p className={styles.jobData}>
                    {jobsItem.modality} - {jobsItem.startDate} to{" "}
                    {jobsItem.endDate}
                  </p>
                </div>
              </div>
              <div className={styles.buttonLine}>
                <div
                  className={styles.button}
                  onClick={() => handleJobClick(jobsItem)}
                >
                  See Job Details
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {selectedJob && (
        <JobDetails job={selectedJob} onClose={closeJobDetails} />
      )}
    </section>
  );
}
