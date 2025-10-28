// src/components/ui/SectionHeader.tsx
"use client";
import { motion } from "framer-motion";

export function SectionHeader({
    title,
    titleLabel,
    align = "center",
    subtitle,
    titleColor,
    titleLabelColor
}: {
    title: string;
    titleLabel?: string;
    align?: "left" | "center" | "right";
    subtitle?: string;
    titleColor?: string;
    titleLabelColor?: string;
}) {
    const alignClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";
    const borderAlignClass = align === "left" ? "ml-0" : align === "right" ? "ml-auto mr-0" : "mx-auto";

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`mb-8 ${alignClass}`}>
            {/* Title label */}
            <p className={`mb-2 text-sm tracking-widest uppercase ${titleLabelColor}`}>{titleLabel}</p>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${titleColor}`}>{title}</h2>
            {subtitle && <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>}
            <div className={`mt-2 h-1 w-16 bg-accent rounded-full ${borderAlignClass}`} />
        </motion.div>
    );
}
