import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Vashu Gupta | Full Stack Developer",
    template: "%s | Vashu Gupta",
  },
  description:
    "Portfolio of Vashu Gupta — Full Stack Developer specializing in React, Node.js, and AI-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex flex-col antialiased">
        <Navigation />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
