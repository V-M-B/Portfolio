"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

/** Grid that writes the cursor position into every card so the glow flows across neighbours. */
export function GlowGrid({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const cards = () => Array.from(ref.current?.querySelectorAll<HTMLElement>(".glow-card") ?? []);

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={(e) =>
        cards().forEach((c) => {
          const r = c.getBoundingClientRect();
          c.style.setProperty("--x", `${e.clientX - r.left}px`);
          c.style.setProperty("--y", `${e.clientY - r.top}px`);
        })
      }
      onPointerLeave={() =>
        cards().forEach((c) => {
          c.style.setProperty("--x", "-500px");
          c.style.setProperty("--y", "-500px");
        })
      }
    >
      {children}
    </div>
  );
}

export function GlowCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("glow-card", className)}>{children}</div>;
}
