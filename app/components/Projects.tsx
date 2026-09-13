"use client";

import { useState } from "react";

type Category = "Security" | "Software" | "Game Dev";

const projects: Array<{
  title: string;
  category: Category;
  summary: string;
  detail: string;
  tags: string[];
  href: string;
}> = [
  {
    title: "Enterprise Network Design",
    category: "Security",
    summary: "A segmented enterprise topology designed around secure access and resilient connectivity.",
    detail: "Network architecture work exploring segmentation, routing, service availability, and the controls needed to reduce unnecessary trust between systems.",
    tags: ["Networking", "Segmentation", "Security"],
    href: "https://github.com/Vance1832/enterprise-network-design",
  },
  {
    title: "Flowbit",
    category: "Software",
    summary: "A productivity system for turning plans into focused, trackable work.",
    detail: "A full-stack application shaped around clear task flows, approachable interaction design, and maintainable product architecture.",
    tags: ["Full Stack", "Productivity", "Web"],
    href: "https://github.com/Vance1832/flowbit",
  },
  {
    title: "Rangsit Social",
    category: "Software",
    summary: "A social platform created for connection across the university community.",
    detail: "A community-oriented web application covering user interaction, content flows, and the practical engineering of a social product.",
    tags: ["Social Platform", "Full Stack", "Community"],
    href: "https://github.com/Vance1832/rangsit-social",
  },
  {
    title: "TechMobile",
    category: "Software",
    summary: "An e-commerce experience for discovering and purchasing mobile technology.",
    detail: "An end-to-end storefront project focused on catalog navigation, product presentation, and dependable commerce workflows.",
    tags: ["E-commerce", "Web", "Database"],
    href: "https://github.com/Vance1832/techmobile-ecommerce",
  },
  {
    title: "Solar System Simulation",
    category: "Software",
    summary: "An interactive visual study of orbital movement and planetary scale.",
    detail: "A graphics-driven simulation translating astronomical relationships into an explorable visual system using Processing.",
    tags: ["Processing", "Simulation", "Creative Code"],
    href: "https://github.com/Vance1832/solar-system-processing",
  },
  {
    title: "Virtual Mouse",
    category: "Software",
    summary: "A computer-vision experiment that turns hand movement into pointer control.",
    detail: "A gesture interface exploring real-time vision, landmark tracking, and the usability challenges of touch-free interaction.",
    tags: ["Python", "Computer Vision", "Interaction"],
    href: "https://github.com/Vance1832/virtual-mouse-computer-vision",
  },
  {
    title: "Whisper of Ascension",
    category: "Game Dev",
    summary: "A game-development project exploring progression, atmosphere, and player experience.",
    detail: "A supporting creative project used to practice game systems, iterative design, and the collaboration between technical and narrative decisions.",
    tags: ["Game Development", "Systems", "Design"],
    href: "https://github.com/Vance1832/Whisper-Of-Ascension",
  },
];

const filters = ["All", "Security", "Software", "Game Dev"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [openProject, setOpenProject] = useState<string | null>(null);
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <span>03</span>
        <p>Case files</p>
      </div>

      <div className="projects-top">
        <div>
          <p className="eyebrow">Selected investigations</p>
          <h2 id="projects-title">Projects, documented<br />as evidence.</h2>
        </div>
        <div className="project-filters" aria-label="Filter projects">
          {filters.map((item) => (
            <button key={item} className={filter === item ? "active" : ""} onClick={() => { setFilter(item); setOpenProject(null); }} type="button">
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="project-list">
        {visible.map((project, index) => {
          const expanded = openProject === project.title;
          return (
            <article className={expanded ? "project-row expanded" : "project-row"} key={project.title}>
              <button className="project-summary" type="button" onClick={() => setOpenProject(expanded ? null : project.title)} aria-expanded={expanded}>
                <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-main"><small>{project.category}</small><strong>{project.title}</strong><span>{project.summary}</span></span>
                <span className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</span>
                <span className="open-case">{expanded ? "Close" : "View case"} <b aria-hidden="true">{expanded ? "−" : "+"}</b></span>
              </button>
              {expanded && (
                <div className="project-detail">
                  <p>{project.detail}</p>
                  <a href={project.href} target="_blank" rel="noreferrer">View repository ↗</a>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
