import { Code, Container, Database, Monitor, Server, Sparkles } from "lucide-react";

import { Section } from "@/components/layout/section";
import { GlowCard, GlowCardGrid } from "@/components/effects/glow-card";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

const ICONS = { Code, Container, Database, Monitor, Server, Sparkles } as const;

function IconOrb({ icon, colors }: { icon: keyof typeof ICONS; colors: readonly [string, string] }) {
  const Icon = ICONS[icon];
  return (
    <span
      className="flex size-14 items-center justify-center rounded-full text-white shadow-sm"
      style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
    >
      <Icon className="size-6" aria-hidden />
    </span>
  );
}

export function Stack() {
  return (
    <Section id="stack" title={profile.labels.stack}>
      <GlowCardGrid className="px-5 py-5 min-[600px]:grid-cols-2">
        {profile.stack.map((group) => (
          <GlowCard key={group.title} art={<IconOrb icon={group.icon} colors={group.colors} />}>
            <div className="flex flex-col items-center gap-3 px-4 py-6 text-center">
              <IconOrb icon={group.icon} colors={group.colors} />
              <h3 className="text-base font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap justify-center gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge className="bg-background/60 backdrop-blur-sm">{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </GlowCard>
        ))}
      </GlowCardGrid>
    </Section>
  );
}
