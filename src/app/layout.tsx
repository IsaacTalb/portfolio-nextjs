import "./globals.css"; // ✅ import CSS once here
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaac Talb — Full-Stack & AI",
  description: "Portfolio • Web & Hosting • Content • AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
