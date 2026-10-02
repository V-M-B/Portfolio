import { Code, Container, Database, Monitor, Server, Sparkles } from "lucide-react";

import { Section } from "@/components/layout/section";
import { GlowCard, GlowGrid } from "@/components/effects/glow-card";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

const ICONS = { Code, Container, Database, Monitor, Server, Sparkles } as const;

export function Stack() {
  return (
    <Section id="stack" title={profile.labels.stack}>
      <GlowGrid className="grid gap-3 px-5 py-5 min-[600px]:grid-cols-2">
        {profile.stack.map((group) => {
          const Icon = ICONS[group.icon];
          return (
            <GlowCard key={group.title} className="p-4">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-md border bg-muted">
                  <Icon className="size-4" aria-hidden />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </GlowCard>
          );
        })}
      </GlowGrid>
    </Section>
  );
}
