import Icon from "./Icon";

const categories = [
  { name: "Security operations · exploring", tools: ["Splunk", "Wazuh", "Security Onion", "Microsoft Sentinel"] },
  { name: "Investigation lab · exploring", tools: ["Wireshark", "Burp Suite", "Nmap", "Kali Linux"] },
  { name: "Software engineering", tools: ["Python", "TypeScript", "React", "Next.js", "Django", "Docker", "PostgreSQL", "Unity", "C#"] },
];

export default function Toolkit() {
  return <details className="toolkit panel"><summary><span className="toolkit-label"><Icon name="code" /><span>Tools I&apos;m learning &amp; building with</span></span><span className="toolkit-expand">Explore toolkit <Icon name="chevron" /></span></summary><div className="toolkit-grid">{categories.map(({ name, tools }) => <div key={name}><h3>{name}</h3><ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>)}</div></details>;
}
