import styles from "./Projects.module.css";

function Device({ x, y, kind = "desktop" }: { x: number; y: number; kind?: "desktop" | "server" }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke="#345978" strokeWidth="1.7" fill="none">
      {kind === "server" ? (
        <>
          <rect width="24" height="37" rx="3" fill="#d9eaf3" />
          <path d="M4 8h16M4 15h16M4 22h16" />
          <circle cx="6" cy="30" r="1.6" fill="#27ac9c" stroke="none" />
        </>
      ) : (
        <>
          <rect width="32" height="23" rx="2" fill="#d9eaf3" />
          <path d="M2 19h28M16 23v7M7 30h18" />
        </>
      )}
    </g>
  );
}

function NetworkDiagram() {
  return (
    <svg className={styles.topology} viewBox="0 0 620 358" role="img" aria-labelledby="topology-title topology-description">
      <title id="topology-title">Enterprise network lab overview</title>
      <desc id="topology-description">A simplified illustration of the project concepts: inter-VLAN routing, trunk links, VLAN segmentation, DHCP and DNS services, and switch port security. It is not the original Packet Tracer topology.</desc>
      <defs>
        <pattern id="network-grid" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.7" fill="#94adc0" opacity="0.27" /></pattern>
        <linearGradient id="network-paper" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f3f8fb" /><stop offset="1" stopColor="#e3eef4" /></linearGradient>
      </defs>
      <rect width="620" height="358" rx="10" fill="url(#network-paper)" />
      <rect width="620" height="358" rx="10" fill="url(#network-grid)" />
      <text x="24" y="30" fontSize="11" fontWeight="600" fill="#587289" letterSpacing="1.2">PACKET TRACER LAB</text>
      <g stroke="#416b89" strokeWidth="1.8" fill="none" strokeLinejoin="round">
        <path d="M310 106v35M310 185v35H120v24M310 220v24M310 220h190v24" />
        <path d="M351 161h113V106" strokeDasharray="5 4" />
      </g>
      <g>
        <rect x="258" y="49" width="104" height="57" rx="8" fill="#ffffff" stroke="#88a8bf" />
        <circle cx="310" cy="72" r="13" fill="#d7e9f2" stroke="#487897" strokeWidth="1.4" />
        <path d="m304 68-4 4 4 4m12-8 4 4-4 4m-12-4h16" stroke="#345978" strokeWidth="1.6" fill="none" />
        <text x="310" y="97" textAnchor="middle" fontSize="12" fontWeight="600" fill="#25455f">Inter-VLAN routing</text>
      </g>
      <g>
        <rect x="411" y="45" width="110" height="61" rx="8" fill="#e0eee9" stroke="#8fbdb1" strokeDasharray="4 3" />
        <Device x={423} y={56} kind="server" />
        <text x="479" y="69" textAnchor="middle" fontSize="12" fontWeight="600" fill="#25455f">DHCP</text>
        <text x="479" y="87" textAnchor="middle" fontSize="12" fontWeight="600" fill="#25455f">DNS</text>
      </g>
      <g>
        <rect x="269" y="141" width="82" height="44" rx="6" fill="#345f7d" stroke="#264965" />
        {[0, 1, 2, 3, 4, 5].map((port) => <rect key={port} x={279 + port * 10} y="154" width="6" height="7" rx="1" fill="#c9e4ef" />)}
        <circle cx="338" cy="174" r="2" fill="#5ce4c7" />
        <text x="251" y="163" textAnchor="end" fontSize="12" fontWeight="600" fill="#25455f">Switching</text>
        <text x="324" y="211" fontSize="10" fill="#587289">Trunk links</text>
      </g>
      <g>
        <rect x="42" y="244" width="156" height="89" rx="7" fill="#dcecf7" stroke="#91bad5" />
        <rect x="232" y="244" width="156" height="89" rx="7" fill="#e1eeea" stroke="#91bfb0" />
        <rect x="422" y="244" width="156" height="89" rx="7" fill="#e7e5f4" stroke="#aaa5cd" />
        <text x="120" y="265" textAnchor="middle" fontSize="12" fontWeight="600" fill="#25455f">VLAN segment A</text>
        <text x="310" y="265" textAnchor="middle" fontSize="12" fontWeight="600" fill="#25455f">VLAN segment B</text>
        <text x="500" y="265" textAnchor="middle" fontSize="12" fontWeight="600" fill="#25455f">VLAN segment C</text>
        <Device x={74} y={282} /><Device x={135} y={282} />
        <Device x={264} y={282} /><Device x={325} y={282} />
        <Device x={454} y={282} /><Device x={515} y={282} />
      </g>
      <g transform="translate(41 113)">
        <rect width="135" height="66" rx="7" fill="#ffffff" fillOpacity="0.85" stroke="#b9cdd9" />
        <path d="m13 14 7-3 7 3v8c0 5-7 8-7 8s-7-3-7-8zm4 6 3 3 4-5" fill="none" stroke="#33877c" strokeWidth="1.6" />
        <text x="36" y="22" fontSize="11" fontWeight="600" fill="#25455f">Port security</text>
        <text x="13" y="49" fontSize="10" fill="#587289">Control access at the edge</text>
      </g>
    </svg>
  );
}

export default function FeaturedProject() {
  return (
    <section className={`panel ${styles.featured}`} id="projects" aria-labelledby="featured-title">
      <div className="panel-heading">
        <h2 className="panel-title" id="featured-title"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7V5a1 1 0 0 1 1-1h5l3 3h8a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Zm0 3h18" /></svg>Featured work</h2>
        <span className="panel-meta">Security through practice</span>
      </div>
      <div className={styles.featuredBody}>
        <div className={styles.featuredIntro}>
          <div><h3>Enterprise Network Design</h3><p>A segmented enterprise network with routing, shared services, and access controls.</p></div>
          <a className={`button button-secondary ${styles.projectButton}`} href="https://github.com/Vance1832/enterprise-network-design" target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.tags}><span>VLAN segmentation</span><span>Inter-VLAN routing</span><span>Port security</span></div>
        <figure className={styles.networkFigure}>
          <NetworkDiagram />
          <div className={styles.mobileTopology} role="img" aria-label="Simplified network lab: inter-VLAN routing connects three VLAN segments through trunked switching, with DHCP, DNS, and port security.">
            <span className={styles.mobileDiagramLabel}>PACKET TRACER LAB</span>
            <div className={styles.mobileRouter}>Inter-VLAN routing</div>
            <span className={styles.mobileConnector} aria-hidden="true" />
            <div className={styles.mobileSwitch}><svg viewBox="0 0 52 28" aria-hidden="true"><rect x="1" y="1" width="50" height="26" rx="4" /><path d="M7 10h5v5H7zm9 0h5v5h-5zm9 0h5v5h-5zm9 0h5v5h-5z" /><circle cx="43" cy="21" r="1" /></svg>Switching &amp; trunk links</div>
            <div className={styles.mobileVlans}><span>VLAN A<small>Segment</small></span><span>VLAN B<small>Segment</small></span><span>VLAN C<small>Segment</small></span></div>
            <div className={styles.mobileServices}><span>DHCP &amp; DNS</span><span>Port security</span></div>
          </div>
          <figcaption><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7" /><path d="M10 9v5m0-9v1" /></svg>Simplified lab overview, based on the documented project features.</figcaption>
        </figure>
        <div className={styles.evidence}><span><i aria-hidden="true" />Cisco Packet Tracer</span><a href="https://github.com/Vance1832/enterprise-network-design/blob/main/Enterprise_Network_Design_and_Implementation.docx" target="_blank" rel="noreferrer">Implementation report <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  );
}
