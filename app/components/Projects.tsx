"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Projects.module.css";

const otherProjects = [
  { title: "Rangsit Social", summary: "A social platform for the university community.", category: "Software engineering", href: "https://github.com/Vance1832/rangsit-social" },
  { title: "TechMobile", summary: "A mobile technology e-commerce application.", category: "Software engineering", href: "https://github.com/Vance1832/techmobile-ecommerce" },
  { title: "Solar System Simulation", summary: "An interactive planetary simulation built with Processing.", category: "Creative coding", href: "https://github.com/Vance1832/solar-system-processing" },
  { title: "Virtual Mouse", summary: "A computer vision experiment in touch-free pointer control.", category: "Computer vision", href: "https://github.com/Vance1832/virtual-mouse-computer-vision" },
];

function FlowbitArchitecture() {
  return (
    <div className={styles.flowbitVisual} aria-label="Flowbit application architecture: Next.js web client, Django API, and PostgreSQL database">
      <div className={styles.flowbitBrand}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 9 5v10l-9 5-9-5V7Zm0 0v10m-9-5 9 5 9-5m-9 5v10" /></svg>Flowbit</div>
      <div className={styles.architectureStack}><span><b>Next.js</b><small>Web client</small></span><i aria-hidden="true">↓</i><span><b>Django</b><small>REST API</small></span><i aria-hidden="true">↓</i><span><b>PostgreSQL</b><small>Data layer</small></span></div>
      <small className={styles.visualCaption}>Application architecture</small>
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`panel ${styles.beyond}`} id="more-projects" aria-labelledby="beyond-title">
      <div className="panel-heading">
        <h2 className="panel-title" id="beyond-title"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5v9l-9 5-9-5V8Zm0 0v19M3 8l9 5 9-5" /></svg>Beyond security</h2>
        <span className="panel-meta">Other projects that fuel my curiosity</span>
      </div>
      <div className={styles.projectCards}>
        <article className={styles.projectCard}>
          <FlowbitArchitecture />
          <div className={styles.cardCopy}><h3>Flowbit</h3><span className={styles.softwareBadge}>Software engineering</span><p>A wallet and settlement platform with role-based workflows, transaction approvals, and an audit trail.</p><a href="https://github.com/Vance1832/flowbit" target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a></div>
        </article>
        <article className={styles.projectCard}>
          <figure className={styles.gameVisual}><Image src="/projects/whisper-of-ascension.png" alt="Whisper of Ascension project artwork: a ghost in a haunted cemetery" width={836} height={651} sizes="(max-width: 560px) 100vw, (max-width: 1000px) 40vw, 260px" /><figcaption>Original project artwork</figcaption></figure>
          <div className={styles.cardCopy}><h3>Whisper of Ascension</h3><span className={styles.gameBadge}>Game development</span><p>A Unity mystery game where a lost ghost collects memory shards and solves a case to ascend.</p><a href="https://github.com/Vance1832/Whisper-Of-Ascension" target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a></div>
        </article>
      </div>
      <div className={styles.moreBar}><span>More experiments in software and interaction.</span><button type="button" aria-expanded={expanded} aria-controls="additional-projects" onClick={() => setExpanded(!expanded)}>{expanded ? "Show less" : "View all projects"}<span aria-hidden="true">{expanded ? "−" : "+"}</span></button></div>
      {expanded && <div className={styles.additionalProjects} id="additional-projects">{otherProjects.map((project) => <a key={project.title} href={project.href} target="_blank" rel="noreferrer"><span className={styles.additionalCategory}>{project.category}</span><h3>{project.title}<span aria-hidden="true">↗</span></h3><p>{project.summary}</p></a>)}</div>}
    </section>
  );
}
