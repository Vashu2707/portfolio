"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // Optionally, persist dark mode preference
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) {
      setDarkMode(stored === "true");
    } else {
      setDarkMode(true); // default to dark mode
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDarkMode((d) => !d)}
      className="ml-4 px-4 py-2 rounded-lg border border-gray-400 bg-white/70 dark:bg-gray-800 dark:text-white font-bold text-base shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors theme-toggle-btn"
      style={{ fontSize: "1rem" }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
