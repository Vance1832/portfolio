import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-500.css";
import "@fontsource/ibm-plex-sans/latin-600.css";
import "@fontsource/ibm-plex-sans/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khant Zayar | Blue Team / SOC Analyst Path",
  description:
    "Khant Zayar's cybersecurity portfolio — network security projects, verified credentials, and a learning journey toward Blue Team and SOC analyst work. Computer Science student at Rangsit University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
