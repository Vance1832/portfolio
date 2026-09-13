import Icon from "./Icon";

export default function Contact() {
  return (
    <section className="contact panel" id="contact" aria-labelledby="contact-title">
      <span className="contact-icon"><Icon name="mail" /></span>
      <div className="contact-copy"><p className="eyebrow">Get in touch</p><h2 id="contact-title">Let&apos;s build something that matters.</h2><p>Open to Summer 2027 internships, learning opportunities, and conversations about cybersecurity.</p></div>
      <a className="button button-secondary contact-email" href="mailto:khant.zayar.dev@gmail.com"><Icon name="mail" /><span>khant.zayar.dev@gmail.com</span><Icon name="arrow" /></a>
    </section>
  );
}
