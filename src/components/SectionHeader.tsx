export default function SectionHeader({
  label,
  title,
}: {
  label: string;
  title?: string;
}) {
  return (
    <div className="mb-16 sm:mb-20">
      <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 mb-4">
        {label}
      </p>
      {title && (
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {title}
        </h1>
      )}
    </div>
  );
}
