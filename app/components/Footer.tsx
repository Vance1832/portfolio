import Icon from "./Icon";

export default function Footer() {
  return <footer className="footer"><div><a className="footer-name" href="#about">Khant Zayar</a><p>Computer Science student · Rangsit University</p></div><div className="footer-socials"><a href="https://github.com/Vance1832" target="_blank" rel="noreferrer"><Icon name="github" />GitHub</a><a href="https://www.linkedin.com/in/khant-zayar/" target="_blank" rel="noreferrer"><Icon name="linkedin" />LinkedIn</a></div><p className="footer-note">Same curiosity. Stronger defense.</p></footer>;
}
