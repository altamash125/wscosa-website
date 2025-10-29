// src/components/layout/ServicesSection.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { SERVICES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICONS: Record<string, ReactNode> = {
  s1: (
    // Doors
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="1.5" strokeWidth="1.5" />
      <circle cx="16" cy="12" r="0.8" fill="currentColor" />
    </svg>
  ),
  s2: (
    // Joinery Fitout (hammer)
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M2 21l7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7l3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5l7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  s3: (
    // Kitchens (utensils)
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M7 2v8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 2v8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 20h14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  s4: (
    // Wooden Cladding (layers)
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 7l9-4 9 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12l9-4 9 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  s5: (
    // Pergolas (tree icon)
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 3c1.5 0 3 1 4 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 21h16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  s6: (
    // Wooden Flooring (grid)
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="3" width="7" height="7" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" strokeWidth="1.5" />
      <rect x="14" y="14" width="7" height="7" strokeWidth="1.5" />
    </svg>
  ),
  s7: (
    // Wardrobes (closet)
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="4" y="3" width="16" height="18" rx="1" strokeWidth="1.5" />
      <path d="M9 8v8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 8v8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  s8: (
    // Furniture (chair)
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="4" y="8" width="16" height="8" strokeWidth="1.5" />
      <path d="M4 16v3" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 16v3" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  s9: (
    // Handrails (parallel lines)
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 7h18" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12h18" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  s10: (
    // Windows
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="3" width="18" height="18" strokeWidth="1.5" />
      <path d="M12 3v18" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12h18" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  s11: (
    // Closet custom works (drawer)
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="1" strokeWidth="1.5" />
      <path d="M7 10h10" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-[url('/images/carousel-2.jpg')] bg-center bg-cover">
      <div className="bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <SectionHeader
              title="We Craft What You Imagine"
              titleColor="white"
              titleLabel="Our Services"
              titleLabelColor="text-neutral-100"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SERVICES.slice(0, 6).map((s) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative bg-white rounded shadow-lg p-8 pb-20 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded bg-amber-50 text-amber-600">
                    {ICONS[s.id] ?? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7h18M3 12h18M3 17h18"></path>
                      </svg>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </div>

                {/* Hover text — non-clickable */}
                <div className="absolute bottom-8 left-8 flex items-center gap-2 text-amber-600 font-semibold">
                  {/* <span className="ml-1 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:max-w-xs group-hover:opacity-100">
                    Read more
                  </span> */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
