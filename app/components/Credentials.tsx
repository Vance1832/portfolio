import CertificateIcon from "./CertificateIcon";
import styles from "./Credentials.module.css";

const credentials = [
  {
    issuer: "google" as const,
    organization: "Google",
    name: "Cybersecurity Professional Certificate",
    description: "Security foundations, practical analyst workflows, and tools for protecting systems.",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/94ATT5V0UXKJ",
  },
  {
    issuer: "cs50" as const,
    organization: "Harvard CS50",
    name: "Introduction to Cybersecurity",
    description: "Securing accounts, data, systems, and software through core cybersecurity principles.",
    href: "https://cs50.harvard.edu/certificates/09116a40-cca0-40d3-a353-6ed1cc5c8cfc",
  },
  {
    issuer: "microsoft" as const,
    organization: "Microsoft · SC-900",
    name: "Security, Compliance, and Identity Fundamentals",
    description: "Foundations of Microsoft security, compliance, and identity solutions.",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/khantzayar-3403/8BA4778BE1F018F5?sharingId=A23EFA01638BE7C2",
  },
];

export default function Credentials() {
  return (
    <section className={`panel ${styles.credentials}`} aria-labelledby="credentials-title">
      <div className="panel-heading">
        <h2 className="panel-title" id="credentials-title">
          <svg className={styles.headingIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m12 3 7 3v6c0 4-3.2 7-7 9-3.8-2-7-5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="m9 11 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Credentials
        </h2>
        <span className="panel-meta">Completed &amp; verifiable</span>
      </div>

      <div className={styles.credentialGrid}>
        {credentials.map((credential) => (
          <article className={styles.credentialCard} key={credential.issuer}>
            <span className={styles.credentialIcon}><CertificateIcon issuer={credential.issuer} /></span>
            <div className={styles.credentialBody}>
              <p className={styles.issuer}>{credential.organization}</p>
              <h3>{credential.name}</h3>
              <span className="badge badge-teal">Completed</span>
              <p className={styles.credentialDescription}>{credential.description}</p>
              <a className={styles.verifyLink} href={credential.href} target="_blank" rel="noreferrer">
                View credential <span aria-hidden="true">↗</span>
                <span className={styles.srOnly}> — {credential.organization}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
