const categories = [
  {
    name: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    name: "Backend",
    skills: ["Django", "Django REST Framework", "Python", "Node.js", "PostgreSQL"],
  },
  {
    name: "Cybersecurity",
    skills: ["Network Security", "Penetration Testing", "CTF", "Wireshark", "Linux"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "Unity", "OpenCV", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-emerald-400 text-xs mb-3 tracking-[0.2em] uppercase text-center">
          02 / Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
          What I Work With
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 rounded-xl overflow-hidden border border-zinc-800">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-zinc-950 p-6 hover:bg-zinc-900 transition-colors"
            >
              <h3 className="font-semibold text-white mb-4 text-sm tracking-wide">{cat.name}</h3>
              <ul className="space-y-2">
                {cat.skills.map((s) => (
                  <li key={s} className="text-sm text-zinc-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
