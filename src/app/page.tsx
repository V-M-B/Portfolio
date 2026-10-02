import { Hatch } from "@/components/layout/hatch";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Overview } from "@/components/sections/overview";
import { ProfileHeader } from "@/components/sections/profile-header";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";

const SECTIONS = [Overview, About, Stack, Experience, Projects, Education, Contact];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto min-h-screen max-w-3xl overflow-x-clip border-x">
        <ProfileHeader />
        {SECTIONS.map((S, i) => (
          <div key={i}>
            <Hatch />
            <S />
          </div>
        ))}
        <Hatch />
        <SiteFooter />
      </main>
    </>
  );
}
