import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Education",
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
    period: "2019-2021",
    title: "High School — Science Stream",
    org: "Holy Cross School",
    description:
      "Secondary education with a focus on foundational concepts in Science and Mathematics.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <SectionHeader label="Education" title="Education & background" />

      <div className="relative">
        {timeline.map((item, i) => (
          <div key={i} className="relative pl-8 sm:pl-10 pb-12 last:pb-0">
            {/* Timeline line */}
            {i < timeline.length - 1 && (
              <div className="absolute left-[3px] top-3 bottom-0 w-px bg-white/[0.06]" />
            )}

            {/* Timeline dot */}
            <div
              className={`absolute left-0 top-2 w-[7px] h-[7px] rounded-full -translate-x-[3px] ${
                i === 0 ? "bg-[#fafafa]" : "bg-neutral-700"
              }`}
            />

            <span className="text-[11px] text-neutral-700 tracking-wider uppercase block mb-3">
              {item.period}
            </span>
            <h3 className="text-lg font-semibold mb-1.5">{item.title}</h3>
            <p className="text-sm text-neutral-500 mb-3">{item.org}</p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.06]">
        <a
          href="https://drive.google.com/uc?export=download&id=1GV032I_EkhV9HIG7mSVg2UoOlHR9y50y"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-[#fafafa] border border-white/10 hover:border-white/25 rounded-full px-6 py-3 transition-all duration-200"
        >
          Download Resume
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  );
}
