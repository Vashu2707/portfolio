import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader label="Blog" title="Writing" />
      <p className="text-neutral-500 text-sm leading-relaxed max-w-xl mb-16">
        Thoughts on web development, design patterns, and building with modern
        frameworks.
      </p>

      <div className="flex flex-col gap-4">
        {blogs.map((blog, i) => (
          <article
            key={blog.id}
            className="group border border-white/5 rounded-xl p-6 hover:border-white/15 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-start gap-4">
                <span className="text-xs text-neutral-700 font-mono mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-neutral-600 shrink-0 mt-1">
                {blog.readTime}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 ml-10 mt-4">
              <span className="text-[11px] text-neutral-600">{blog.date}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-800" />
              <div className="flex flex-wrap gap-1.5">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-white/5 text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
