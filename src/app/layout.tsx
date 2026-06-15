import type { Metadata } from "next";
import "./globals.css";
import SceneWrapper from "@/components/three/SceneWrapper";
import LoadingOverlay from "@/components/LoadingOverlay";
import RouteSync from "@/app/components/RouteSync";

export const metadata: Metadata = {
  title: "Vashu - PS4 Portfolio",
  description: "PlayStation 4 inspired portfolio showcasing projects, skills, and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#0a0e27' }}>
      <body
        className="antialiased min-h-screen flex flex-col overflow-hidden dark"
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: '#0a0e27' }}
      >
        {/* Route Sync */}
        <RouteSync />

        {/* Loading Overlay */}
        <LoadingOverlay />

        {/* Three.js Scene Background */}
        <SceneWrapper />

        <main className="flex-1 w-full flex flex-col items-center justify-center bg-transparent relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
