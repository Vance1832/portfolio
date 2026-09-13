export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="section-heading">
        <span>04</span>
        <p>Contact</p>
      </div>

      <div className="contact-grid">
        <div>
          <p className="eyebrow"><span className="status-dot" /> Open to Summer 2027 opportunities</p>
          <h2 id="contact-title">Let&apos;s start a<br />conversation.</h2>
        </div>
        <div className="contact-details">
          <p>
            If you&apos;re building a security team, sharing a learning opportunity,
            or want to talk about one of these projects, my inbox is open.
          </p>
          <a className="email-link" href="mailto:khant.zayar.dev@gmail.com">khant.zayar.dev@gmail.com <span>↗</span></a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/khant-zayar/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/Vance1832" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
