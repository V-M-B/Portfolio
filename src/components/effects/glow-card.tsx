"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

// Adapted from @ncdai/glow-card-grid (chanhdai.com): a blurred, saturated copy of each
// card's art follows the pointer, and a backdrop-filtered ring turns it into a glowing border.

export type GlowCardGridProps = React.ComponentPropsWithoutRef<"div"> & {
  cardRadius?: number;
  iconBlur?: number;
  iconSaturate?: number;
  iconBrightness?: number;
  iconScale?: number;
  iconOpacity?: number;
  borderWidth?: number;
  borderBlur?: number;
  borderSaturate?: number;
  borderBrightness?: number;
  borderContrast?: number;
};

export function GlowCardGrid({
  cardRadius = 16,
  iconBlur = 25,
  iconSaturate = 5,
  iconBrightness = 1.3,
  iconScale = 4,
  iconOpacity = 0.3,
  borderWidth = 3,
  borderBlur = 10,
  borderSaturate = 4.2,
  borderBrightness = 2.5,
  borderContrast = 2.5,
  className,
  style,
  ...props
}: GlowCardGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      const cards = gridRef.current?.querySelectorAll<HTMLElement>("[data-slot='glow-card']") ?? [];
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        card.style.setProperty("--pointer-x", x.toFixed(3));
        card.style.setProperty("--pointer-y", y.toFixed(3));
      });
    };

    document.addEventListener("pointermove", handlePointerMove);
    return () => document.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      ref={gridRef}
      className={cn("grid w-full gap-4", className)}
      style={
        {
          "--card-radius": `${cardRadius}px`,
          "--card-icon-blur": `${iconBlur}px`,
          "--card-icon-saturate": iconSaturate,
          "--card-icon-brightness": iconBrightness,
          "--card-icon-scale": iconScale,
          "--card-icon-opacity": iconOpacity,
          "--card-border-width": `${borderWidth}px`,
          "--card-border-blur": `${borderBlur}px`,
          "--card-border-saturate": borderSaturate,
          "--card-border-brightness": borderBrightness,
          "--card-border-contrast": borderContrast,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

/** `art` is the colourful element whose blurred copy produces the glow. */
export function GlowCard({
  art,
  className,
  children,
}: {
  art: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      data-slot="glow-card"
      className={cn("@container relative w-full overflow-hidden rounded-(--card-radius) ring-1 ring-border", className)}
    >
      <div className="relative flex size-full overflow-hidden rounded-(--card-radius) [clip-path:inset(0_round_var(--card-radius))]">
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 flex items-center justify-center",
            "translate-x-[calc(var(--pointer-x,-10)*50cqi)] translate-y-[calc(var(--pointer-y,-10)*50cqi)] translate-z-0 scale-(--card-icon-scale)",
            "blur-(--card-icon-blur) brightness-(--card-icon-brightness) saturate-(--card-icon-saturate)",
            "opacity-(--card-icon-opacity) will-change-[transform,filter]"
          )}
        >
          {art}
        </div>
        <div className="relative z-1 flex flex-1 flex-col">{children}</div>
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 translate-z-0 rounded-(--card-radius)",
          "border-(length:--card-border-width) border-solid border-transparent",
          "backdrop-blur-(--card-border-blur) backdrop-brightness-(--card-border-brightness) backdrop-contrast-(--card-border-contrast) backdrop-saturate-(--card-border-saturate)",
          "[clip-path:inset(0_round_var(--card-radius))]"
        )}
        style={{
          maskImage: "linear-gradient(#fff 0 100%), linear-gradient(#fff 0 100%)",
          maskOrigin: "border-box, padding-box",
          maskClip: "border-box, padding-box",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />
    </div>
  );
}
