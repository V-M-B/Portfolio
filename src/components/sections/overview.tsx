import { BriefcaseBusiness, GraduationCap, Mail, MapPin } from "lucide-react";

import { Section } from "@/components/layout/section";
import { LiveDot } from "@/components/effects/live-dot";
import { YearsText } from "@/components/effects/years-badge";
import { profile } from "@/data/profile";

function Row({
  icon: Icon,
  className,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <li className={`flex items-center gap-3 ${className ?? ""}`}>
      <span className="flex size-7 shrink-0 items-center justify-center rounded-md border bg-muted">
        <Icon className="size-3.5 text-muted-foreground" aria-hidden />
      </span>
      <span className="min-w-0">{children}</span>
    </li>
  );
}

export function Overview() {
  return (
    <Section id="overview" title={profile.labels.overview}>
      <ul className="grid gap-3 px-5 py-4 min-[600px]:grid-cols-2">
        <Row icon={BriefcaseBusiness} className="min-[600px]:col-span-2">
          {profile.role} <span className="text-muted-foreground">@</span>
          {profile.company} <span className="text-muted-foreground"><YearsText /></span>
        </Row>
        <Row icon={MapPin}>{profile.location}</Row>
        <Row icon={Mail}>
          <a href={`mailto:${profile.email}`} className="underline-offset-4 hover:underline">
            {profile.email}
          </a>
        </Row>
        <Row icon={GraduationCap}>{profile.degreeLine}</Row>
        <li className="flex items-center gap-3">
          <span className="flex size-7 shrink-0 items-center justify-center">
            <LiveDot />
          </span>
          <span>{profile.openTo}</span>
        </li>
      </ul>
    </Section>
  );
}
