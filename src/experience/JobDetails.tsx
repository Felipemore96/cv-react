import styles from "../styles/Experience.module.css";
import { Job } from "../class/job.ts";
import { useEffect } from "react";

interface JobDetailsProps {
  job: Job;
  onClose: () => void;
}

export function JobDetails({ job, onClose }: JobDetailsProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close job details"
        >
          ×
        </button>
        <h2 className={styles.jobTitle}>{job.role}</h2>
        <p className={styles.jobData}>
          {job.company} - {job.location}
        </p>
        <p className={styles.jobData}>
          {job.modality} - {job.startDate} to {job.endDate}
        </p>
        <h3 className={styles.jobDetails}>Experiences:</h3>
        <ul className={styles.jobDetails}>
          {job.experiences.map((experience, index) => (
            <li key={index} className={styles.experienceItem}>
              {experience}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
