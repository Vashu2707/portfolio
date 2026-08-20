import type { Metadata } from "next";
import { Mail } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import GithubIcon from "@/components/GithubIcon";

export const metadata: Metadata = {
  title: "Contact",
};

const contactLinks = [
  {
    label: "mail@vashu.in",
    href: "mailto:mail@vashu.in",
    icon: <Mail size={16} />,
  },
  {
    label: "github.com/Vashu2707",
    href: "https://github.com/Vashu2707",
    icon: <GithubIcon size={16} />,
    external: true,
  },
  {
    label: "linkedin.com/in/vashu-gupta",
    href: "https://www.linkedin.com/in/vashu-gupta-3779762a7/",
    icon: (
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
    ),
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <SectionHeader label="Contact" title="Let&apos;s connect" />
      <p className="text-neutral-400 leading-relaxed max-w-lg mb-16 sm:mb-20">
        I&apos;m always open to discussing new projects, creative ideas, or
        opportunities to be part of something great. Feel free to reach out.
      </p>

      <div className="flex flex-col gap-3 max-w-md">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 border border-white/[0.06] rounded-2xl p-4 sm:p-5 hover:border-white/15 transition-all duration-300"
          >
            <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 group-hover:border-white/25 group-hover:text-[#fafafa] transition-all duration-300 shrink-0">
              {link.icon}
            </span>
            <span className="text-[14px] sm:text-[15px] text-neutral-400 group-hover:text-[#fafafa] transition-colors duration-200">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
