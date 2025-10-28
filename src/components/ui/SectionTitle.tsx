// src/components/ui/SectionTitle.tsx
import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Animated section title for consistent headings
 */
export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 text-center"
    >
      {children}
    </motion.h2>
  );
}
