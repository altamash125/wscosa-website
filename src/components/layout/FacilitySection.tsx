"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FACILITY_EQUIPMENT } from "@/lib/constants";

export function FacilitySection() {
  return (
    <section id="facility" className="py-12 md:py-16 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Facility & Equipment" align="left" />
        <p className="text-muted-foreground max-w-3xl mb-6">Our investment in advanced equipment empowers our team to deliver projects with unmatched precision and excellence.</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-none">
          {FACILITY_EQUIPMENT.map((m) => (
            <li key={m.id} className="bg-card p-4 rounded shadow-sm">
              <div className="font-medium">{m.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
