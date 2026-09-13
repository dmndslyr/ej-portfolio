import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edriene Jay Cabanela | Computer Engineer",
  description:
    "Portfolio of Edriene Jay Cabanela — Computer Engineer specializing in software, systems, cloud, and connected technology.",
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