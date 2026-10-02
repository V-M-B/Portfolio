import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** A link is usable once its TODO placeholder has been replaced. */
export function isRealLink(href: string | undefined): href is string {
  return !!href && !href.startsWith("TODO");
}

export function prettyUrl(href: string) {
  return href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
