"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

const links = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const selected = useRef("about");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const marker = Math.min(180, window.innerHeight * 0.3);
      let next = "about";
      let nearest = -Infinity;
      for (const { id } of links) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top === undefined || top > marker) continue;
        // Projects and Journey share a row on desktop. Keep the selected link
        // when both sections occupy the same vertical position.
        if (top > nearest + 2 || (Math.abs(top - nearest) <= 2 && selected.current === id)) {
          nearest = top;
          next = id;
        }
      }
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) next = "contact";
      setActive(next);
      frame = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onHash = () => {
      const id = window.location.hash.slice(1);
      if (links.some((link) => link.id === id)) selected.current = id;
      schedule();
    };
    onHash();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", onHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    <header className="navbar">
      <a className="brand" href="#about" onClick={() => { selected.current = "about"; setOpen(false); }}>Khant Zayar<span className="brand-dot">.</span></a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
        <Icon name={open ? "close" : "menu"} /><span>{open ? "Close" : "Menu"}</span>
      </button>
      <nav id="primary-navigation" className={`nav-links${open ? " is-open" : ""}`} aria-label="Primary navigation" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-button")?.focus(); } }}>
        {links.map(({ label, id }) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={active === id ? "active" : ""} onClick={() => { selected.current = id; setActive(id); setOpen(false); }}>{label}</a>)}
        <a href="mailto:khant.zayar.dev@gmail.com?subject=R%C3%A9sum%C3%A9%20request" title="Request my résumé by email" onClick={() => setOpen(false)}>Résumé <Icon name="external" /></a>
      </nav>
      <div className="nav-context"><span className="status-dot" />Aspiring SOC Analyst<span className="nav-location">Bangkok, TH</span></div>
    </header>
  );
}
