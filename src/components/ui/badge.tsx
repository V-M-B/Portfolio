import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-mono font-medium",
  {
    variants: {
      variant: {
        chip: "h-6 rounded-md border border-border bg-muted px-2 text-xs text-muted-foreground",
        pill: "h-7 rounded-full border border-border bg-muted px-2.5 text-sm text-muted-foreground",
      },
    },
    defaultVariants: { variant: "chip" },
  }
);

function Badge({ className, variant, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
