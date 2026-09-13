import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khant Zayar | Blue Team / SOC Analyst Path",
  description:
    "The security case files of Khant Zayar — a computer science student building toward Blue Team and SOC analyst work.",
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
