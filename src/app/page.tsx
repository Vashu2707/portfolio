import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-600 mb-8">
            Full Stack Developer
          </p>
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-[0.95] mb-8">
            Vashu
            <br />
            Gupta
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-md mb-12">
            Building end-to-end web applications with a focus on clean
            architecture, responsive design, and intelligent systems.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors duration-200"
            >
              View Projects
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 border border-white/10 px-6 py-3 rounded-full hover:border-white/25 hover:text-[#fafafa] transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <div className="border-t border-white/[0.06] pt-20">
          <div className="flex items-center justify-between mb-12">
            <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-600">
              Selected Work
            </p>
            <Link
              href="/projects"
              className="text-[13px] text-neutral-500 hover:text-[#fafafa] transition-colors duration-200"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="group border border-white/[0.06] rounded-2xl p-6 hover:border-white/15 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-[15px]">{project.title}</h3>
                  <div className="flex items-center gap-2.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-[#fafafa] transition-colors duration-200"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.link && project.link !== project.github && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-[#fafafa] transition-colors duration-200"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[13px] text-neutral-500 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
