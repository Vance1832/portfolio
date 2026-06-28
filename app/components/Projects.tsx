const projects = [
  {
    num: "01",
    name: "Flowbit",
    description:
      "Number-based ledger and settlement management system. Users top up a wallet and submit number records; staff approve deposits and withdrawals; owners manage result periods, settlements, and the company reserve.",
    tags: ["Next.js", "Django", "PostgreSQL", "DRF"],
    github: "https://github.com/Vance1832/flowbit",
    demo: null,
  },
  {
    num: "02",
    name: "Rangsit Social",
    description:
      "Campus social media platform for Rangsit University. Full auth and onboarding flow, feed with posts, comments, likes, and follows, plus Cloudinary media uploads for profiles and posts.",
    tags: ["Next.js", "React", "MySQL", "Cloudinary"],
    github: "https://github.com/Vance1832/rangsit-social",
    demo: null,
  },
  {
    num: "03",
    name: "TechMobile",
    description:
      "Responsive e-commerce store for Apple & Samsung devices (Thailand, ฿). Built with vanilla JS — no frameworks. Features a full product catalogue, live search, cart, wishlist, multi-step checkout, and demo auth.",
    tags: ["HTML", "CSS", "JavaScript", "localStorage"],
    github: "https://github.com/Vance1832/techmobile-ecommerce",
    demo: "https://vance1832.github.io/techmobile-ecommerce/",
  },
  {
    num: "04",
    name: "Solar System Simulation",
    description:
      "Interactive 3D solar system built with Processing P3D for a Computer Graphics final. Includes glowing sun, realistic orbit speeds, Saturn rings, asteroid belt, comets, click-to-select planet info, and a cinematic camera mode.",
    tags: ["Processing", "P3D", "Computer Graphics", "Java"],
    github: "https://github.com/Vance1832/solar-system-processing",
    demo: null,
  },
  {
    num: "05",
    name: "Virtual Mouse",
    description:
      "AI virtual mouse controlled entirely by webcam and hand gestures. Supports cursor movement, left/right/double click, scrolling, volume control, and app launching — no physical mouse needed.",
    tags: ["Python", "OpenCV", "cvzone", "Computer Vision"],
    github: "https://github.com/Vance1832/virtual-mouse-computer-vision",
    demo: null,
  },
  {
    num: "06",
    name: "Enterprise Network Design",
    description:
      "Enterprise network implementation in Cisco Packet Tracer: VLAN segmentation, inter-VLAN routing, DHCP, DNS, port security, trunk configuration, and full traceroute verification.",
    tags: ["Cisco", "Packet Tracer", "Networking", "Security"],
    github: "https://github.com/Vance1832/enterprise-network-design",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-emerald-400 text-xs mb-3 tracking-[0.2em] uppercase text-center">
          03 / Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center tracking-tight">
          Things I&apos;ve Built
        </h2>
        <p className="text-zinc-500 text-center mb-14 max-w-md mx-auto text-sm leading-relaxed">
          A mix of web applications, security tools, and side projects across different domains.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col hover:border-zinc-700 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              {/* subtle top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-5">
                <span className="font-mono text-xs text-zinc-600">{p.num}</span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-300 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>

              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {p.name}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-5">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 bg-zinc-800 text-zinc-500 rounded border border-zinc-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Vance1832"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 font-mono text-sm transition-colors border border-zinc-800 hover:border-zinc-600 px-4 py-2 rounded-lg"
          >
            View all on GitHub
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
