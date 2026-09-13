"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);

      const marker = window.innerHeight * 0.34;
      let current = links[0].id;
      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= marker) current = link.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <a className="brand" href="#top" aria-label="Back to top">
        <span>KZ</span> / CASE FILES
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={active === link.id ? "active" : ""}
            aria-current={active === link.id ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="resume-link"
        href="mailto:khant.zayar.dev@gmail.com?subject=Résumé%20request"
        title="Request my résumé by email"
      >
        Résumé <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
