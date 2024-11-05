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

  const skillsLookup = (skills as Skill[]).reduce(
    (lookup, skill) => {
      lookup[skill.title.toLowerCase()] = skill;
      return lookup;
    },
    {} as Record<string, Skill>,
  );

  return (
    <section className={styles.container} id="experience">
      <p className={styles.initialText}>Explore My</p>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.jobsList}>
        {jobs.map((jobsItem: Job, id: number) => (
          <div className={styles.job} key={id}>
            <div className={styles.jobLine}>
              <h3 className={styles.jobTitle}>{jobsItem.role} </h3>
              <div>
                {jobsItem.skills.map((jobSkill, index) => {
                  const skillData = skillsLookup[jobSkill.toLowerCase()];
                  if (!skillData) return null; // Skip if skill not found

                  return (
                    <a
                      key={index}
                      href={skillData.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={skillData.title} // Show skill name on hover
                    >
                      <img
                        src={getImageUrl(skillData.imageSrc)}
                        className={styles.icon}
                        alt={skillData.title}
                      />
                    </a>
                  );
                })}
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
        ))}
      </div>
      {selectedJob && (
        <JobDetails job={selectedJob} onClose={closeJobDetails} />
      )}
    </section>
  );
}
