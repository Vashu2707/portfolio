import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Experience",
};

const timeline = [
  {
    period: "2023 — Present",
    title: "B.E. Computer Science",
    org: "Bangalore Technological Institute",
    description:
      "Comprehensive undergraduate program focused on data structures, algorithms, and software development.",
  },
  {
    period: "2021 — 2023",
    title: "Intermediate — Science Stream",
    org: "R.K. Mission School",
    description:
      "Higher secondary education with emphasis on Physics, Chemistry, Mathematics, and Computer Science.",
  },
  {
    period: "Ongoing",
    title: "Full Stack Development",
    org: "Open Source Contributor & Independent Projects",
    description:
      "Building full-stack web applications with React, Node.js, TypeScript, and various databases. Actively contributing to open-source projects.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader label="Experience" title="Education & work" />

      <div className="space-y-0">
        {timeline.map((item, i) => (
          <div key={i} className="group relative pl-8 pb-12 last:pb-0">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-last:bg-transparent" />

            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 -translate-x-[3px] group-first:bg-white" />

            <span className="text-[11px] text-neutral-700 tracking-wider uppercase block mb-3">
              {item.period}
            </span>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-neutral-500 mb-3">{item.org}</p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-white/5">
        <a
          href="https://drive.google.com/uc?export=download&id=1GV032I_EkhV9HIG7mSVg2UoOlHR9y50y"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white border border-white/10 hover:border-white/25 rounded-full px-5 py-2.5 transition-all duration-300"
        >
          Download Resume
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
