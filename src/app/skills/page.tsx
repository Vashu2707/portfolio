import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
};

const skillLevel: Record<string, number> = {
  expert: 100,
  advanced: 75,
  intermediate: 50,
  beginner: 25,
};

const categories = [
  "Programming Language",
  "Markup",
  "Styling",
  "Frontend",
  "Backend",
  "Database",
  "AI/LLM",
  "Tools",
] as const;

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader label="Skills" title="Technical toolkit" />
      <p className="text-neutral-500 text-sm leading-relaxed max-w-xl mb-16">
        Technologies and tools I work with to build modern, scalable
        applications — from frontend frameworks to AI integrations.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;
          return (
            <div key={category}>
              <h3 className="text-[11px] tracking-[0.2em] uppercase text-neutral-600 mb-5">
                {category}
              </h3>
              <div className="flex flex-col gap-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-neutral-300">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-neutral-700 uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white/40 rounded-full"
                        style={{ width: `${skillLevel[skill.level]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
