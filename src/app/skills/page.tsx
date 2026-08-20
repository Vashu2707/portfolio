import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
};

const categories = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Cloud & DevOps",
  "Tools",
] as const;

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <SectionHeader label="Skills" title="Technical toolkit" />
      <p className="text-neutral-500 text-sm leading-relaxed max-w-xl mb-16 sm:mb-20">
        Technologies and tools I work with to build modern, scalable applications — from frontend frameworks to cloud infrastructure.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;
          return (
            <div key={category}>
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-neutral-600 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-[13px] px-3.5 py-1.5 rounded-full border border-white/[0.06] text-neutral-300 hover:border-white/15 hover:text-[#fafafa] transition-all duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
