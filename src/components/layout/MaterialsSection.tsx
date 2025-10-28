"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MATERIALS, ACCESSORIES } from "@/lib/constants";

export function MaterialsSection() {
  return (
    <section id="materials" className="py-12 md:py-16 w-full bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Materials & Accessories" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Types and Materials of Wood & Decorative Finishes</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {MATERIALS.map((it) => (
                <li key={it.id}>
                  <strong>{it.name}</strong>
                  {it.description ? ` — ${it.description}` : null}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Premium Accessories</h4>
            <p className="text-muted-foreground mb-3">We use a wide selection of premium wooden and decorative accessories chosen for durability, reliability, and design compatibility.</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {ACCESSORIES.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
