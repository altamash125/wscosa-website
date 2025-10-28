"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"

/**
 * Features Section Component
 * Displays key features with fade-in animations
 */
export function FeaturesSection() {
  const features = [
    {
      title: "Premium Materials",
      description: "We use only the finest quality wood and materials for durability.",
      icon: "🪵",
    },
    {
      title: "Expert Craftsmanship",
      description: "Our skilled artisans bring decades of experience to every project.",
      icon: "🔨",
    },
    {
      title: "Custom Design",
      description: "Tailored solutions to match your unique style and requirements.",
      icon: "✨",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl">Why Choose WSCO</h2>
          <div className="mt-2 h-1 w-16 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-8 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 text-5xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
