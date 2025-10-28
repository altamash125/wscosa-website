// src/lib/utils.ts
// Utility function for className merging
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
