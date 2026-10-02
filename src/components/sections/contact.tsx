import { Download, Mail } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" title={profile.labels.contact}>
      <div className="space-y-4 px-5 py-5">
        <p>{profile.contactLine}</p>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail aria-hidden />
              {profile.labels.emailMe}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={profile.resume} download>
              <Download aria-hidden />
              {profile.labels.downloadResume}
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
