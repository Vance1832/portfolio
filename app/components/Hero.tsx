import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Available for Summer 2027</p>
        <p className="case-id">CASE FILE / KZ-001</p>
        <h1 id="hero-title">Khant<br />Zayar.</h1>
        <p className="hero-role">Blue Team / SOC Analyst Path</p>
        <p className="hero-summary">
          Computer Science student investigating threats, building secure systems,
          and documenting every step of the journey.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Open case files <span>↓</span></a>
          <a className="button button-quiet" href="mailto:khant.zayar.dev@gmail.com?subject=Résumé%20request">Request résumé ↗</a>
        </div>
      </div>

      <figure className="portrait-card">
        <div className="portrait-corner portrait-corner-top" aria-hidden="true" />
        <Image
          src="/profile-themed.png"
          alt="Khant Zayar standing by the sea at blue hour"
          fill
          priority
          sizes="(max-width: 800px) 88vw, 42vw"
        />
        <div className="portrait-scan" aria-hidden="true" />
        <figcaption>
          <span>SUBJECT / KZ</span>
          <span>BANGKOK, TH</span>
        </figcaption>
      </figure>
    </section>
  );
}
