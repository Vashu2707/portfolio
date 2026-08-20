import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
};

const highlights = [
  {
    title: "Full-Stack Development",
    description:
      "Building scalable, end-to-end web applications from concept to deployment with modern frameworks and best practices.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing responsive, intuitive, and accessible user experiences that are both beautiful and functional.",
  },
  {
    title: "Backend & Infrastructure",
    description:
      "Developing secure backend systems, RESTful APIs, databases, and cloud-ready infrastructure.",
  },
  {
    title: "AI Integration",
    description:
      "Integrating AI-powered features, intelligent automation, and data-driven experiences into applications.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader label="About" title="A bit about me" />

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
        <div>
          <p className="text-neutral-300 leading-relaxed text-base mb-6">
            I&apos;m a driven and detail-oriented Full-Stack Developer with
            expertise in JavaScript, React, and Node.js. I&apos;ve demonstrated
            the ability to design and deploy responsive, user-friendly
            applications independently from concept to production.
          </p>
          <p className="text-neutral-500 leading-relaxed text-sm">
            Passionate about leveraging technical skills and creativity to solve
            complex problems and contribute to innovative development teams.
            Currently specializing in Full-Stack & AI development based in
            Bangalore, India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors"
            >
              <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
