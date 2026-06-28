import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              {/* Offset border */}
              <div className="absolute inset-0 rounded-2xl border border-emerald-500/30 translate-x-4 translate-y-4" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                <Image
                  src="/profile.jpg"
                  alt="Khant Zayar"
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="font-mono text-emerald-400 text-xs mb-3 tracking-[0.2em] uppercase">
              01 / About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Who I Am
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
              <p>
                I&apos;m a Computer Science student at{" "}
                <span className="text-zinc-200 font-medium">Rangsit University</span>{" "}
                working toward a career in cybersecurity. That&apos;s the main focus —
                learning how systems get attacked, how defenders think, and how to
                build a security mindset from the ground up.
              </p>
              <p>
                Software development is a parallel track. I build things with{" "}
                <span className="text-zinc-200 font-medium">Next.js</span> and{" "}
                <span className="text-zinc-200 font-medium">Django</span> because
                knowing how applications are built makes you sharper at finding
                where they break.
              </p>
              <p>
                Outside of that I do game dev in Unity and computer-vision projects
                when time allows.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Cybersecurity", "SOC Analysis", "SC-900", "Next.js", "Django", "Python"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-md hover:border-zinc-600 hover:text-zinc-200 transition-colors"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-900 grid grid-cols-3 gap-4">
              {[
                { value: "6+", label: "Projects" },
                { value: "3+", label: "Years coding" },
                { value: "2", label: "Domains" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
