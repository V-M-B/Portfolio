import { ArrowUpRight, ChevronDown } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Mark, Tags } from "@/components/sections/tags";
import { isRealLink } from "@/lib/utils";
import { profile } from "@/data/profile";

type Project = (typeof profile.projects)[number];

function ProjectLinks({ project }: { project: Project }) {
  const all: { label: string; href?: string }[] = [
    { label: profile.labels.liveApp, href: "live" in project.links ? project.links.live : undefined },
    { label: profile.labels.source, href: project.links.source },
  ];
  const links = all.filter((l): l is { label: string; href: string } => isRealLink(l.href));
  if (!links.length) return null;
  return (
    <div className="flex gap-4 font-mono text-xs">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 underline-offset-4 hover:underline"
        >
          {l.label}
          <ArrowUpRight className="size-3" aria-hidden />
        </a>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title={profile.labels.projects}
      aside={
        <Badge variant="pill" className="tabular-nums">
          {profile.projects.length}
        </Badge>
      }
    >
      <div className="divide-y">
        {profile.projects.map((project) => (
          <Collapsible key={project.name} defaultOpen={"open" in project && project.open} className="px-5 py-3">
            <CollapsibleTrigger className="group flex w-full items-center gap-3 rounded-md py-1 text-left">
              <Mark>{project.mark}</Mark>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{project.name}</span>
                <span className="block font-mono text-xs text-muted-foreground">{project.subtitle}</span>
              </span>
              <ChevronDown
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-3 ml-3.5 space-y-3 border-l pb-2 pl-6">
                {"points" in project ? (
                  <ul className="list-disc space-y-1.5 pl-4 marker:text-muted-foreground">
                    {project.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.description}</p>
                )}
                <Tags items={project.tags} />
                <ProjectLinks project={project} />
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </Section>
  );
}
