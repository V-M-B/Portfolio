import { cn } from "@/lib/utils";

type ShimmerTextProps = {
  as?: "h1" | "h2" | "h3" | "span";
  id?: string;
  duration?: number;
  className?: string;
  children: React.ReactNode;
};

/** Text with a light band sliding across. Real text stays in the DOM for screen readers. */
export function ShimmerText({ as: Tag = "span", id, duration = 3.5, className, children }: ShimmerTextProps) {
  return (
    <Tag
      id={id}
      className={cn("shimmer", className)}
      style={{ "--shimmer-duration": `${duration}s` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
