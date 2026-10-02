type Span = { start: string; end: string | null };

/** Distinct months across all roles (overlaps count once), as years with one decimal. */
export function yearsOfExperience(roles: readonly Span[], now = new Date()) {
  const months = new Set<number>();
  for (const r of roles) {
    const [sy, sm] = r.start.split("-").map(Number);
    const [ey, em] = r.end ? r.end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
    for (let m = sy * 12 + sm; m <= ey * 12 + em; m++) months.add(m);
  }
  return (months.size / 12).toFixed(1).replace(/\.0$/, "");
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatMonth(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** "2025–26" style short range used on compact rows. */
export function shortRange(start: string, end: string | null) {
  const sy = start.slice(0, 4);
  if (!end) return `${sy}–`;
  const ey = end.slice(0, 4);
  return sy === ey ? sy : `${sy}–${ey.slice(2)}`;
}
