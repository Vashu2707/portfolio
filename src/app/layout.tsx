import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vashu Gupta | Full Stack Developer",
  description: "Portfolio of Vashu Gupta — Full Stack Developer specializing in React, Node.js, and AI-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}
