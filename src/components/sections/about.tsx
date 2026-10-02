import { Section } from "@/components/layout/section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" title={profile.labels.about}>
      <ul className="space-y-3 px-5 py-4">
        {profile.about.map((line) => (
          <li key={line} className="relative pl-4 before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:rounded-full before:bg-muted-foreground/60">
            {line}
          </li>
        ))}
      </ul>
    </Section>
  );
}
