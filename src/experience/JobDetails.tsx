import styles from "../styles/Experience.module.css";

interface JobDetailsProps {
  job: {
    role: string;
    modality: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    experiences: string[];
  };
  onClose: () => void;
}

export function JobDetails({ job, onClose }: JobDetailsProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2 className={styles.jobTitle}>{job.role}</h2>
        <p className={styles.jobInfo}>
          {job.company} - {job.location}
        </p>
        <p className={styles.jobInfo}>
          {job.modality} - {job.startDate} to {job.endDate}
        </p>
        <h3 className={styles.experienceTitle}>Experiences:</h3>
        <ul className={styles.experienceList}>
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
