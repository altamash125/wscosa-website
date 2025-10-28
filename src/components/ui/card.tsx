// src/components/ui/card.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * Simple Card component for consistent UI
 */
export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-xl bg-white shadow p-6", className)}>
      {children}
    </div>
  );
}
