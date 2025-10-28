// src/components/layout/AboutSection.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <SectionHeader title="Who We Are" align="left" />

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-muted-foreground max-w-3xl mb-4">
              Work Shed Industrial Company (WSCO), in collaboration with PPE (Pioneer Projects Executor), has been a trusted name in the Saudi market for over 12 years, delivering excellence in custom wooden joinery and interior fit-out design. We blend traditional craftsmanship with modern innovation to create distinctive woodwork solutions that reflect quality, functionality, and style.
            </motion.p>

            <h4 className="mt-4 font-semibold text-primary">Our Mission</h4>
            <p className="text-muted-foreground mb-3">To deliver high-quality, custom joinery solutions through precise craftsmanship and innovative manufacturing, transforming spaces with tailored, durable woodwork.</p>

            <h4 className="mt-4 font-semibold text-primary">Our Vision</h4>
            <p className="text-muted-foreground mb-3">To lead the joinery industry in craftsmanship and innovation, creating exceptional, custom solutions that elevate spaces worldwide.</p>

            <h4 className="mt-4 font-semibold text-primary">Our Values</h4>
            <p className="text-muted-foreground mb-6">The WSCO name stands for integrity, trust, and excellence — values that define our work across Saudi Arabia and the GCC. We prioritize ethical business practices, employee well-being, safety, and environmental responsibility.</p>

            <div className="mt-6">
              <Button className="bg-transparent border border-primary text-primary hover:bg-primary/5">FIND MORE</Button>
            </div>
          </div>

          {/* Images stack */}
          <div className="relative w-full h-[420px] md:h-[480px] flex items-center justify-center">
            <div className="absolute right-0 top-8 w-2/3 h-[360px] md:h-[480px] rounded overflow-hidden shadow-lg">
              <Image src="/images/portfolio-4.jpg" alt="stair 1" fill className="object-cover" />
            </div>

            <div className="absolute left-0 bottom-0 w-1/2 h-[260px] md:h-[380px] rounded overflow-hidden shadow-md bg-white">
              <Image src="/images/portfolio-2.jpg" alt="stair 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
