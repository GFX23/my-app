import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import { Navbar } from "../../_components/Navigation/Navbar";

export const metadata: Metadata = {
  title: "Welcome to GFX23's personal website",
  description: "Made with Next.js 14, TailwindCSS and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-secondary-8 text-secondary-05">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
