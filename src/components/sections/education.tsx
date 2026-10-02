import { Section } from "@/components/layout/section";
import { profile } from "@/data/profile";

export function Education() {
  return (
    <Section id="education" title={profile.labels.education}>
      <div className="divide-y">
        {profile.education.map((e) => (
          <article key={e.school} className="px-5 py-4">
            <h3 className="text-base font-semibold">{e.school}</h3>
            <p className="text-sm">{e.degree}</p>
            <p className="mt-0.5 flex flex-wrap gap-x-2 font-mono text-xs text-muted-foreground">
              <span>{e.period}</span>
              <span aria-hidden>·</span>
              <span>{e.score}</span>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
