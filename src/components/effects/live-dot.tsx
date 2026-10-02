import { cn } from "@/lib/utils";

/** Green status dot with a heartbeat pulse (static under reduced motion). */
export function LiveDot({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("live-dot relative inline-flex size-2.5 shrink-0", className)}>
      <span className="live-dot-ring absolute inset-0 rounded-full bg-live" />
      <span className="live-dot-core relative inline-flex size-full rounded-full bg-live" />
    </span>
  );
}
