"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { blogs } from "@/data/blogs";
import {
  ExternalLink,
  Mail,
  MapPin,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const skillLevel: Record<string, number> = {
  expert: 100,
  advanced: 75,
  intermediate: 50,
  beginner: 25,
};

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            VASHU
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileNavOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center pt-16">
          <div className="max-w-3xl">
            <p className="text-sm text-neutral-500 tracking-widest uppercase mb-6">
              Full Stack Developer
            </p>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Vashu
              <br />
              Gupta
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mb-10">
              Driven and detail-oriented Full-Stack Developer with expertise in
              JavaScript, React, and Node.js. Passionate about leveraging
              technical skills and creativity to solve complex problems and
              contribute to innovative development teams.
            </p>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                Bangalore, India
              </span>
              <span className="w-1 h-1 rounded-full bg-neutral-700" />
              <span>Open to work</span>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* About */}
        <section id="about" className="py-24">
          <h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-12">
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-neutral-300 leading-relaxed">
                Specializing in Full-Stack & AI development. I build scalable,
                end-to-end web applications from concept to deployment, design
                responsive and accessible user experiences, and develop secure
                backend systems with cloud-ready infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                "End-to-end web applications",
                "Responsive UI/UX design",
                "Secure APIs & backends",
                "AI-powered features",
              ].map((item) => (
                <div
                  key={item}
                  className="text-sm text-neutral-400 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Projects */}
        <section id="projects" className="py-24">
          <h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-12">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.link && project.link !== project.github && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors"
                        aria-label={`${project.title} live`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Skills */}
        <section id="skills" className="py-24">
          <h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-12">
            Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {(
              [
                "Programming Language",
                "Markup",
                "Styling",
                "Frontend",
                "Backend",
                "Database",
                "AI/LLM",
                "Tools",
              ] as const
            ).map((category) => {
              const categorySkills = skills.filter(
                (s) => s.category === category
              );
              if (categorySkills.length === 0) return null;
              return (
                <div key={category}>
                  <h3 className="text-xs tracking-widest uppercase text-neutral-500 mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-neutral-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-neutral-600 capitalize">
                            {skill.level}
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-bar-fill"
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
        </section>

        <div className="section-divider" />

        {/* Experience */}
        <section id="experience" className="py-24">
          <h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-12">
            Experience
          </h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-[180px_1fr] gap-4">
              <span className="text-xs text-neutral-600 mt-1">
                2023 &mdash; Present
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  B.E. Computer Science
                </h3>
                <p className="text-sm text-neutral-500 mb-3">
                  Bangalore Technological Institute
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Comprehensive undergraduate program focused on data
                  structures, algorithms, and software development.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-[180px_1fr] gap-4">
              <span className="text-xs text-neutral-600 mt-1">
                2021 &mdash; 2023
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Intermediate &mdash; Science Stream
                </h3>
                <p className="text-sm text-neutral-500 mb-3">
                  R.K. Mission School
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Higher secondary education with emphasis on Physics, Chemistry,
                  Mathematics, and Computer Science.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-[180px_1fr] gap-4">
              <span className="text-xs text-neutral-600 mt-1">
                Ongoing
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Full Stack Development
                </h3>
                <p className="text-sm text-neutral-500 mb-3">
                  Open Source Contributor & Independent Projects
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Building full-stack web applications with React, Node.js,
                  TypeScript, and various databases. Actively contributing to
                  open-source projects.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="https://drive.google.com/uc?export=download&id=1GV032I_EkhV9HIG7mSVg2UoOlHR9y50y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-5 py-2.5 transition-all duration-300"
            >
              Download Resume
              <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        <div className="section-divider" />

        {/* Blog */}
        <section id="blog" className="py-24">
          <h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-12">
            Blog
          </h2>
          <div className="flex flex-col gap-6">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <span className="text-xs text-neutral-600 shrink-0 mt-1">
                    {blog.readTime}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs text-neutral-600">{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-700" />
                  <div className="flex flex-wrap gap-1.5">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Contact */}
        <section id="contact" className="py-24">
          <h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-12">
            Contact
          </h2>
          <div className="max-w-xl">
            <p className="text-neutral-400 leading-relaxed mb-10">
              Get in touch. I&apos;m always open to discussing new projects,
              creative ideas, or opportunities to be part of something great.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:mail@vashu.in"
                className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <Mail size={16} />
                </span>
                <span className="text-sm">mail@vashu.in</span>
              </a>
              <a
                href="https://github.com/Vashu2707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <GithubIcon size={16} />
                </span>
                <span className="text-sm">github.com/Vashu2707</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vashu-gupta-3779762a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span className="text-sm">linkedin.com/in/vashu-gupta</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-600">
              &copy; {new Date().getFullYear()} Vashu Gupta
            </span>
            <span className="text-xs text-neutral-600">
              Built with Next.js & Tailwind CSS
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
