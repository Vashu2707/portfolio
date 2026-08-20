import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import GithubIcon from "@/components/GithubIcon";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <SectionHeader label="Projects" title="Selected work" />
      <p className="text-neutral-500 text-sm leading-relaxed max-w-xl mb-16 sm:mb-20">
        A collection of projects I&apos;ve built — from full-stack web apps to AI-powered tools. Each one designed with clean code, modern tech, and real-world problem solving in mind.
      </p>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="group border border-white/[0.06] rounded-2xl p-5 sm:p-7 hover:border-white/15 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-5 mb-5">
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="text-[13px] text-neutral-700 font-mono mt-0.5 shrink-0">
                  {String(i).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 sm:mt-0.5 ml-[40px] sm:ml-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-[#fafafa] transition-colors duration-200"
                    aria-label={`${project.title} GitHub`}
                  >
                    <GithubIcon size={16} />
                  </a>
                )}
                {project.link && project.link !== project.github && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-[#fafafa] transition-colors duration-200"
                    aria-label={`${project.title} live`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:ml-[40px]">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-white/[0.06] text-neutral-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
