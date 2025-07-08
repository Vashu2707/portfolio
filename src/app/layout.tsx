import type { Metadata } from "next";
import "./globals.css";
import DarkModeToggle from "../components/DarkModeToggle";

export const metadata: Metadata = {
  title: "Vashu.in",
  description: "Portfolio of Vashu Gupta - Full Stack Developer, Projects, Skills, Education, and Socials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen flex flex-col"
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Arial, Helvetica, sans-serif' }}
      >
        <header
          className="w-full py-8 px-4 text-background text-center flex-shrink-0 font-extrabold tracking-wide relative z-10 flex items-center justify-between dark:bg-[#222831]"
          style={{ background: 'rgba(167, 193, 168, 0.85)', fontWeight: 'bold', fontSize: '2.5rem', fontFamily: 'Arial, Helvetica, sans-serif', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', backdropFilter: 'blur(8px)', borderBottomLeftRadius: '1.5rem', borderBottomRightRadius: '1.5rem' }}
        >
          <span className="drop-shadow-lg">Vashu Gupta</span>
          <DarkModeToggle />
        </header>
        <main className="flex-1 w-full flex flex-col items-center justify-center bg-background">
          {children}
        </main>
        <footer
          className="w-full py-6 px-4 text-primary text-center text-base flex-shrink-0 relative z-10 dark:bg-[#222831]"
          style={{ background: 'rgba(167, 193, 168, 0.85)', boxShadow: '0 -8px 32px 0 rgba(31, 38, 135, 0.10)', backdropFilter: 'blur(8px)', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem', fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          <span className="font-semibold">Contact:</span> <a href="mailto:mail@vashu.in" className="underline hover:text-accent font-bold transition-colors duration-200">mail@vashu.in</a>
        </footer>
      </body>
    </html>
  );
}
