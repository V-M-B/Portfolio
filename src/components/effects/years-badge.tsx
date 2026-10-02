"use client";

import { useSyncExternalStore } from "react";

import { Badge } from "@/components/ui/badge";
import { yearsOfExperience } from "@/lib/experience";
import { profile } from "@/data/profile";

const noop = () => () => {};
const buildTimeYears = yearsOfExperience(profile.experience);

/** Server renders the build-time value; the browser recomputes so the number stays current. */
export function useYears() {
  return useSyncExternalStore(noop, () => yearsOfExperience(profile.experience), () => buildTimeYears);
}

export function YearsBadge() {
  const years = useYears();
  return (
    <Badge variant="pill" className="tabular-nums">
      {years} {profile.labels.yearsSuffix}
    </Badge>
  );
}

export function YearsText() {
  const years = useYears();
  return <>{profile.labels.experienceLine(years)}</>;
}
