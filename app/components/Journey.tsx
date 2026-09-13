import type { ReactNode } from "react";

type Certification = {
  name: string;
  issuer: string;
  status: "Completed" | "In progress";
  href?: string;
  icon: ReactNode;
};

const certifications: Certification[] = [
  {
    name: "Cybersecurity Professional Certificate",
    issuer: "Google",
    status: "Completed",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/94ATT5V0UXKJ",
    icon: <span className="google-mark" aria-hidden="true">G</span>,
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Harvard CS50",
    status: "Completed",
    href: "https://cs50.harvard.edu/certificates/09116a40-cca0-40d3-a353-6ed1cc5c8cfc",
    icon: <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m12 8-8 8 8 8M20 8l8 8-8 8" /></svg>,
  },
  {
    name: "Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft SC-900",
    status: "Completed",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/khantzayar-3403/8BA4778BE1F018F5?sharingId=A23EFA01638BE7C2",
    icon: <svg className="microsoft-mark" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 4h11v11H4zM17 4h11v11H17zM4 17h11v11H4zM17 17h11v11H17z" /></svg>,
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    status: "In progress",
    icon: <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 27 7v8c0 7-4.5 11.7-11 14-6.5-2.3-11-7-11-14V7l11-4Z" /><path d="M16 10v10M11 15h10" /></svg>,
  },
];

const toolkit = {
  "Security operations": ["Splunk", "Wazuh", "Security Onion", "Microsoft Sentinel"],
  "Investigation lab": ["Wireshark", "Burp Suite", "Nmap", "Kali Linux"],
  "Engineering": ["Python", "TypeScript", "React", "Next.js", "Django", "Docker", "PostgreSQL"],
};

export default function Journey() {
  return (
    <section className="section journey" id="journey" aria-labelledby="journey-title">
      <div className="section-heading">
        <span>02</span>
        <p>Journey</p>
      </div>

      <div className="journey-intro">
        <div>
          <p className="eyebrow">Current trajectory</p>
          <h2 id="journey-title">Learning in public,<br />one case at a time.</h2>
        </div>
        <p>
          A focused path from computer science fundamentals into defensive security,
          supported by hands-on labs, certifications, and systems I build myself.
        </p>
      </div>

      <div className="journey-grid">
        <article className="learning-panel">
          <p className="panel-label">Learning path / now</p>
          <div className="path-line">
            <span className="path-node complete">01</span>
            <div><p>Security foundations</p><small>Core concepts · risk · networks</small></div>
          </div>
          <div className="path-line">
            <span className="path-node active">02</span>
            <div><p>Analyst operations</p><small>SIEM · detection · incident response</small></div>
          </div>
          <div className="path-line">
            <span className="path-node">03</span>
            <div><p>Applied practice</p><small>Home labs · investigations · case notes</small></div>
          </div>
          <p className="learning-note">Currently preparing for CompTIA Security+ while expanding practical SOC workflows.</p>
        </article>

        <div className="cert-panel">
          <p className="panel-label">Verified credentials / 04</p>
          <div className="cert-list">
            {certifications.map((cert) => {
              const content = (
                <>
                  <span className="cert-icon">{cert.icon}</span>
                  <span className="cert-copy"><small>{cert.issuer}</small><strong>{cert.name}</strong></span>
                  <span className={cert.status === "Completed" ? "cert-status complete" : "cert-status pending"}>{cert.status}</span>
                  {cert.href && <span className="cert-arrow" aria-hidden="true">↗</span>}
                </>
              );

              return cert.href ? (
                <a className="cert-row" href={cert.href} target="_blank" rel="noreferrer" key={cert.name}>{content}</a>
              ) : (
                <div className="cert-row" key={cert.name}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="toolkit-panel">
        <p className="panel-label">Technical inventory</p>
        <div className="toolkit-grid">
          {Object.entries(toolkit).map(([group, tools]) => (
            <div key={group}>
              <h3>{group}</h3>
              <ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
