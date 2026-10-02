import { Badge } from "@/components/ui/badge";

export function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t}>
          <Badge>{t}</Badge>
        </li>
      ))}
    </ul>
  );
}

export function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className="flex size-7 shrink-0 items-center justify-center rounded-md border bg-muted font-mono text-[11px] font-semibold"
    >
      {children}
    </span>
  );
}
