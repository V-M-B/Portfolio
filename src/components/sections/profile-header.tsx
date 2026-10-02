import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

import { AvatarVideo } from "@/components/effects/avatar-video";
import { HelloWriting } from "@/components/effects/hello-writing";
import { ShimmerText } from "@/components/effects/shimmer-text";
import { profile } from "@/data/profile";

const inPublic = (file: string) => fs.existsSync(path.join(process.cwd(), "public", file));
const hasAvatar = inPublic(profile.avatar);
const hasVideo = inPublic(profile.avatarVideo);

export function ProfileHeader() {
  return (
    <div id="top">
      {/* Cover banner */}
      <div className="dot-grid relative h-[180px] border-b">
        <div className="absolute inset-x-0 top-[44%] -translate-y-1/2 px-5">
          <HelloWriting />
        </div>
        <p className="absolute right-5 bottom-3 rounded-md border bg-background px-2 py-1 font-mono text-[11px] tracking-wider text-muted-foreground">
          {profile.banner.ticket}
        </p>
      </div>

      {/* Avatar + name */}
      <div className="flex items-end gap-4 border-b px-5 pb-4">
        <div className="-mt-12 shrink-0 rounded-full border bg-background p-1 min-[600px]:-mt-14">
          {hasVideo ? (
            <AvatarVideo
              src={profile.avatarVideo}
              poster={hasAvatar ? profile.avatar : undefined}
              label={profile.name}
              className="size-[92px] rounded-full object-cover min-[600px]:size-[112px]"
            />
          ) : hasAvatar ? (
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={112}
              height={112}
              priority
              className="size-[92px] rounded-full object-cover min-[600px]:size-[112px]"
            />
          ) : (
            <div
              role="img"
              aria-label={profile.name}
              className="flex size-[92px] items-center justify-center rounded-full bg-muted font-mono text-2xl font-semibold min-[600px]:size-[112px] min-[600px]:text-3xl"
            >
              {profile.initials}
            </div>
          )}
        </div>
        <div className="min-w-0 pt-3">
          <ShimmerText as="h1" glow className="text-[32px] leading-tight font-bold tracking-[-0.025em]">
            {profile.name}
          </ShimmerText>
          <p className="font-mono text-[13px] text-muted-foreground">{profile.tagline}</p>
        </div>
      </div>
    </div>
  );
}
