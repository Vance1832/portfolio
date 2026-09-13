import Image from "next/image";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero panel" id="about" aria-labelledby="hero-title">
      <div className="profile-card">
        <div className="profile-image"><Image src="/profile-themed.png" alt="Khant Zayar by the sea at dusk" fill priority sizes="(max-width: 600px) 88vw, (max-width: 900px) 230px, 320px" /></div>
        <div className="profile-caption"><p className="profile-name">Khant Zayar</p><p>Computer Science student</p><p>Rangsit University · Bangkok, Thailand</p></div>
      </div>
      <div className="hero-content">
        <div className="hero-overline"><span className="eyebrow">Student / Cybersecurity / Blue Team</span><span className="hero-edition">Learning with purpose</span></div>
        <h1 id="hero-title">Building toward a career<br className="hero-break" /> in <span>cyber defense.</span></h1>
        <p className="hero-summary">A builder&apos;s curiosity. An analyst&apos;s mindset.</p>
        <p className="hero-intro">I&apos;m a third-year Computer Science student exploring how systems work, where they fail, and how to defend them.</p>
        <dl className="hero-facts">
          <div><Icon name="graduation" /><div><dt>Rangsit University</dt><dd>Computer Science</dd></div></div>
          <div><Icon name="target" /><div><dt>Career goal</dt><dd>Blue Team / SOC roles</dd></div></div>
          <div><Icon name="calendar" /><div><dt>Availability</dt><dd>Summer 2027 internships</dd></div></div>
        </dl>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Icon name="arrow" /></a><a className="button button-secondary" href="#contact"><Icon name="mail" /> Get in touch</a></div>
      </div>
    </section>
  );
}
