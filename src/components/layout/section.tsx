/** Heading row with a bottom border, then content. */
export function Section({
  id,
  title,
  aside,
  children,
}: {
  id: string;
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className="flex items-center gap-3 border-b px-5 py-3">
        <h2 id={`${id}-title`} className="text-[26px] leading-tight font-semibold tracking-[-0.02em]">
          {title}
        </h2>
        {aside}
      </div>
      {children}
    </section>
  );
}
