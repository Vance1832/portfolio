import type { SVGProps } from "react";

type IconName = "arrow" | "external" | "graduation" | "target" | "calendar" | "mail" | "menu" | "close" | "code" | "chevron" | "github" | "linkedin";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  external: <><path d="M14 4h6v6M10 14 20 4" /><path d="M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" /></>,
  graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6M22 9v7" /></>,
  target: <><circle cx="11" cy="13" r="8" /><circle cx="11" cy="13" r="4" /><path d="m11 13 9-9m-4 0h4v4" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 11h18" /></>,
  mail: <><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  code: <path d="m7 6-5 6 5 6m10-12 5 6-5 6M14 3l-4 18" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  github: <><path d="M9 19c-4.5 1.4-4.5-2.5-6-3m12 6v-4a3.5 3.5 0 0 0-1-2.5c3.3-.4 6.8-1.6 6.8-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4s-1.2-.4-4.2 1.5a14.4 14.4 0 0 0-7 0C5 .3 3.8.7 3.8.7a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4c0 5.7 3.5 6.9 6.8 7.3A3.5 3.5 0 0 0 8 18.5V22" transform="translate(1 0) scale(.94)" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
};

export default function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
