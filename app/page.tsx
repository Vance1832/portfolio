import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Credentials from "./components/Credentials";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import Toolkit from "./components/Toolkit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <div className="workspace-grid">
          <FeaturedProject />
          <Journey />
        </div>
        <Credentials />
        <Toolkit />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
