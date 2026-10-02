import { ShimmerText } from "@/components/effects/shimmer-text";

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
        <ShimmerText as="h2" id={`${id}-title`} duration={5} className="text-[26px] leading-tight font-semibold tracking-[-0.02em]">
          {title}
        </ShimmerText>
        {aside}
      </div>
      {children}
    </section>
  );
}
