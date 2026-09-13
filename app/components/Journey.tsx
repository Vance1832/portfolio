import CertificateIcon from "./CertificateIcon";
import styles from "./Credentials.module.css";

const stages = [
  {
    title: "Foundations",
    status: "Completed",
    state: "complete",
    description: "A foundation in cybersecurity concepts, networking, operating systems, and the principles of defense.",
  },
  {
    title: "Security+ preparation",
    status: "In progress",
    state: "current",
    description: "Studying for CompTIA Security+ and connecting security concepts with practical exercises.",
  },
  {
    title: "SOC lab practice",
    status: "Next focus",
    state: "next",
    description: "Build practical experience in log analysis, threat detection, and incident response through lab investigations.",
  },
];

export default function Journey() {
  return (
    <section className={`panel ${styles.journey}`} id="journey" aria-labelledby="journey-title">
      <div className="panel-heading">
        <h2 className="panel-title" id="journey-title">
          <svg className={styles.headingIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 15h3v6H4zM10.5 9h3v12h-3zM17 3h3v18h-3z" fill="currentColor" /></svg>
          My learning journey
        </h2>
        <span className={`panel-meta ${styles.journeyMeta}`}>A clear path forward</span>
      </div>

      <ol className={styles.stages}>
        {stages.map((stage) => (
          <li className={`${styles.stage} ${styles[stage.state]}`} key={stage.title}>
            <span className={styles.stageMarker} aria-hidden="true">
              {stage.state === "complete" && (
                <svg viewBox="0 0 16 16" fill="none"><path d="m4 8 2.5 2.5L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              )}
            </span>
            <div className={styles.stageCopy}>
              <div className={styles.stageHeading}>
                <h3>{stage.title}</h3>
                <span className={`badge ${stage.state === "complete" ? "badge-teal" : stage.state === "current" ? "badge-amber" : ""}`}>{stage.status}</span>
              </div>
              <p>{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.currentFocus}>
        <h3>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11v1a8 8 0 1 1-8-8h1M16 4l4 0v4M20 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 12a4 4 0 1 1-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          Current focus
        </h3>
        <div className={styles.focusCard}>
          <span className={styles.focusIcon}><CertificateIcon issuer="security-plus" /></span>
          <div className={styles.focusCopy}>
            <div className={styles.stageHeading}>
              <h4>CompTIA Security+</h4>
              <span className="badge badge-amber">In progress</span>
            </div>
            <p>Building knowledge and practical skills toward certification.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
