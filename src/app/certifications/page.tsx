import type { Metadata } from "next";
import { Award, FileText } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  const certificates = certifications.filter((c) => c.type === "certificate");
  const patents = certifications.filter((c) => c.type === "patent");

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <SectionHeader label="Certifications" title="Certificates & Patents" />

      {/* Certificates */}
      {certificates.length > 0 && (
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
            <Award size={14} className="text-neutral-600" />
            <h2 className="text-[11px] tracking-[0.25em] uppercase text-neutral-600">
              Certificates
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="border border-white/[0.06] rounded-2xl p-5 sm:p-6 hover:border-white/15 transition-all duration-300"
              >
                <h3 className="font-semibold text-[15px] mb-2">{cert.title}</h3>
                <p className="text-[13px] text-neutral-500">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Patents */}
      {patents.length > 0 && (
        <div>
          <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
            <FileText size={14} className="text-neutral-600" />
            <h2 className="text-[11px] tracking-[0.25em] uppercase text-neutral-600">
              Patents
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {patents.map((patent) => (
              <div
                key={patent.id}
                className="border border-white/[0.06] rounded-2xl p-5 sm:p-7 hover:border-white/15 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-5 mb-4">
                  <h3 className="text-lg font-semibold leading-snug max-w-2xl">
                    {patent.title}
                  </h3>
                  {patent.date && (
                    <span className="text-[11px] text-neutral-600 shrink-0 sm:mt-1">
                      {patent.date}
                    </span>
                  )}
                </div>
                <p className="text-sm text-neutral-500 mb-3">{patent.issuer}</p>
                {patent.description && (
                  <p className="text-[13px] text-neutral-400 leading-relaxed max-w-2xl">
                    {patent.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
