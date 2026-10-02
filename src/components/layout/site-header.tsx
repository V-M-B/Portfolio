import { ThemeToggle } from "@/components/effects/theme-toggle";
import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between border-x px-5">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          vmb/
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 min-[600px]:flex">
            {profile.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-2.5 py-1.5 font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
