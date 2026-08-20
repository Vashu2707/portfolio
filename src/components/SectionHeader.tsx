export default function SectionHeader({
  label,
  title,
}: {
  label: string;
  title?: string;
}) {
  return (
    <div className="mb-16">
      <p className="text-xs tracking-[0.25em] uppercase text-neutral-600 mb-3">
        {label}
      </p>
      {title && (
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {title}
        </h1>
      )}
    </div>
  );
}
