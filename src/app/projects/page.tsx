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
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        label="Projects"
        title="Selected work"
      />
      <p className="text-neutral-500 text-sm leading-relaxed max-w-xl mb-16">
        A collection of projects I&apos;ve built — from full-stack web apps to
        AI-powered tools. Each one designed with clean code, modern tech, and
        real-world problem solving in mind.
      </p>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="group border border-white/5 rounded-xl p-6 hover:border-white/15 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <span className="text-xs text-neutral-700 font-mono mt-1 shrink-0">
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
              <div className="flex items-center gap-3 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-white transition-colors"
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
                    className="text-neutral-600 hover:text-white transition-colors"
                    aria-label={`${project.title} live`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 ml-10">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-white/5 text-neutral-500"
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
