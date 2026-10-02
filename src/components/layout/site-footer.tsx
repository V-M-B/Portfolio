import { isRealLink, prettyUrl } from "@/lib/utils";
import { profile } from "@/data/profile";

export function SiteFooter() {
  const { footer } = profile.labels;
  const { github, linkedin } = profile.socials;
  const cells = [
    { label: footer.github, value: isRealLink(github) ? prettyUrl(github) : "—", href: isRealLink(github) ? github : undefined },
    { label: footer.linkedin, value: isRealLink(linkedin) ? prettyUrl(linkedin) : "—", href: isRealLink(linkedin) ? linkedin : undefined },
    { label: footer.email, value: profile.email, href: `mailto:${profile.email}` },
    { label: footer.built, value: footer.builtValue },
  ];

  return (
    <footer className="grid grid-cols-2 min-[600px]:grid-cols-4">
      {cells.map((c, i) => (
        <div
          key={c.label}
          className={`min-w-0 px-5 py-4 ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t min-[600px]:border-t-0" : ""} ${
            i === 2 ? "min-[600px]:border-l" : ""
          }`}
        >
          <p className="font-mono text-xs text-muted-foreground">{c.label}</p>
          {c.href ? (
            <a
              href={c.href}
              {...(c.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
              className="block truncate text-sm underline-offset-4 hover:underline"
            >
              {c.value}
            </a>
          ) : (
            <p className="truncate text-sm">{c.value}</p>
          )}
        </div>
      ))}
    </footer>
  );
}
