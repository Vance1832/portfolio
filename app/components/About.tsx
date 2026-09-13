export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <span>01</span>
        <p>Profile</p>
      </div>

      <div className="about-grid">
        <div>
          <p className="eyebrow">About the analyst</p>
          <h2 id="about-title">
            I build to understand.<br />I investigate to improve.
          </h2>
        </div>

        <div className="about-copy">
          <p>
            I&apos;m a third-year Computer Science student at Rangsit University in Bangkok,
            building toward a career in Blue Team security and SOC analysis.
          </p>
          <p>
            My software engineering and game development work gives me a builder&apos;s view
            of the systems I want to defend: how they fit together, where they fail, and
            how clear thinking turns evidence into action.
          </p>

          <dl className="profile-facts">
            <div><dt>Primary direction</dt><dd>Blue Team / SOC Analysis</dd></div>
            <div><dt>Next objective</dt><dd>Summer 2027 Internship</dd></div>
            <div><dt>Supporting experience</dt><dd>Software Engineering · Game Development</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
