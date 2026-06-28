export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-mono text-emerald-400 text-xs mb-3 tracking-[0.2em] uppercase">
          04 / Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-zinc-500 mb-10 leading-relaxed text-sm">
          Whether you have an internship opportunity, a project to collaborate
          on, or just want to talk tech — my inbox is open.
        </p>

        <a
          href="mailto:khant.zayar.dev@gmail.com"
          className="inline-block px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-lg transition-colors text-sm mb-10"
        >
          khant.zayar.dev@gmail.com
        </a>

        <div className="flex items-center justify-center gap-6 mt-4">
          <a
            href="https://github.com/Vance1832"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors text-sm font-mono"
          >
            GitHub
          </a>
          <span className="text-zinc-800">·</span>
          <a
            href="mailto:khant.zayar.dev@gmail.com"
            className="text-zinc-600 hover:text-zinc-300 transition-colors text-sm font-mono"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
