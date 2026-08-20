import GithubIcon from "./GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} Vashu Gupta
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Vashu2707"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/vashu-gupta-3779762a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:mail@vashu.in"
            className="text-neutral-600 hover:text-white transition-colors"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
