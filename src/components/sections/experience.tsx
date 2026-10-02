import { ChevronDown } from "lucide-react";

import { Section } from "@/components/layout/section";
import { YearsBadge } from "@/components/effects/years-badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Mark, Tags } from "@/components/sections/tags";
import { formatMonth, shortRange } from "@/lib/experience";
import { profile, type Role } from "@/data/profile";

function LiveDot({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
      <span className="size-2 rounded-full bg-live" aria-hidden />
      {label}
    </span>
  );
}

/** Role title, meta line, bullets and chips, indented under the company row. */
function RoleDetail({ role, className = "" }: { role: Role; className?: string }) {
  const dates = `${formatMonth(role.start)} – ${role.end ? formatMonth(role.end) : profile.labels.present}`;
  const meta = [role.type, dates, role.location].filter(Boolean);
  return (
    <div className={`ml-3.5 space-y-3 border-l pl-6 ${className}`}>
      <div>
        <h4 className="font-medium">{role.role}</h4>
        <p className="flex flex-wrap gap-x-2 font-mono text-xs text-muted-foreground">
          {meta.map((m, i) => (
            <span key={m}>
              {i > 0 && (
                <span aria-hidden className="mr-2">
                  ·
                </span>
              )}
              {m}
            </span>
          ))}
        </p>
      </div>
      {role.points && (
        <ul className="list-disc space-y-1.5 pl-4 marker:text-muted-foreground">
          {role.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
      {role.tags && <Tags items={role.tags} />}
    </div>
  );
}

function FullRole({ role }: { role: Role }) {
  return (
    <article className="px-5 py-5">
      <div className="flex items-center gap-3">
        <Mark>{role.mark}</Mark>
        <h3 className="text-[17px] font-semibold">{role.company}</h3>
        {!role.end && <LiveDot label={profile.labels.current} />}
      </div>
      <RoleDetail role={role} className="mt-3" />
    </article>
  );
}

function CompactRole({ role }: { role: Role }) {
  return (
    <Collapsible className="px-5 py-3">
      <CollapsibleTrigger className="group flex w-full items-center gap-3 rounded-md text-left">
        <Mark>{role.mark}</Mark>
        <span className="min-w-0 flex-1 text-sm">
          <strong className="font-semibold">{role.company}</strong>
          <span className="text-muted-foreground">, {role.summary}</span>
        </span>
        <span className="font-mono text-xs text-muted-foreground">{shortRange(role.start, role.end)}</span>
        <ChevronDown
          aria-hidden
          className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <RoleDetail role={role} className="mt-3 mb-2" />
      </CollapsibleContent>
    </Collapsible>
  );
}

export function Experience() {
  return (
    <Section id="experience" title={profile.labels.experience} aside={<YearsBadge />}>
      <div className="divide-y">
        {profile.experience.map((role) =>
          role.compact ? <CompactRole key={role.company} role={role} /> : <FullRole key={role.company} role={role} />
        )}
      </div>
    </Section>
  );
}
