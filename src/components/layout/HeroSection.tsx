"use client";
// src/components/layout/HeroSection.tsx
import { Carousel } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import { HERO_SLIDES } from "@/lib/constants";
import { motion } from "framer-motion";

/**
 * Hero Section with Carousel, headline, subtext, and CTA
 */
export function HeroSection() {
  return (
    <section className="relative w-full">
      <Carousel
        slides={HERO_SLIDES}
        autoPlay={true}
        interval={5000}
        showIndicators={true}
        showArrows={true}
        loop={true}
      />
    </section>
  );
}
