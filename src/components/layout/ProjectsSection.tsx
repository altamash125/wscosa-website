// src/components/layout/ProjectsSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import Link from "next/link";
import { SectionHeader } from "../ui/SectionHeader";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div>
            <SectionHeader
              titleLabel="Recent Projects"
              title="We Provide you the Quality Work"
              align="left"
              titleColor="text-primary"
            />
          </div>

          <div>
            <Link
              href="/"
              className="inline-block bg-amber-600 text-white px-4 py-2 rounded font-semibold hover:bg-amber-700 transition"
            >
              All Project
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {PROJECTS.slice(0, 6).map((p) => (
            <div key={p.id} className="group block overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative h-80 md:h-96"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* bottom overlay on hover */}
                <div className="p-4 absolute left-0 right-0 bottom-0 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/95 px-6 py-4 flex flex-col items-center">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <div className="mt-1 text-amber-600 text-sm">
                      Joinary Project
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
