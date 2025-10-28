"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  slides: Array<{
    id: string
    image: string
    title?: string
    description?: string
  }>
  autoPlay?: boolean
  interval?: number
  showIndicators?: boolean
  showArrows?: boolean
  loop?: boolean
}

/**
 * Reusable Carousel Component
 * Features: Auto-play, touch gestures, arrow navigation, pagination dots
 * Built with Tailwind CSS and Framer Motion for smooth animations
 */
export function Carousel({
  slides,
  autoPlay = true,
  interval = 4000,
  showIndicators = true,
  showArrows = true,
  loop = true,
}: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-play logic
  useEffect(() => {
    if (!autoPlay || isHovered) return

    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (loop) return (prev + 1) % slides.length
        return prev < slides.length - 1 ? prev + 1 : prev
      })
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, isHovered, loop, slides.length])

  const goToSlide = (index: number) => {
    if (loop) {
      setCurrent(index % slides.length)
    } else {
      setCurrent(Math.max(0, Math.min(index, slides.length - 1)))
    }
  }

  const nextSlide = () => {
    goToSlide(current + 1)
  }

  const prevSlide = () => {
    goToSlide(current - 1)
  }

  const handleDragStart = (e: React.MouseEvent) => {
    setDragStart(e.clientX)
  }

  const handleDragEnd = (e: React.MouseEvent) => {
    const dragEnd = e.clientX
    const diff = dragStart - dragEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-lg bg-muted"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
    >
      {/* Slides */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].image || "/placeholder.svg"}
              alt={slides[current].title || `Slide ${current + 1}`}
              className="h-full w-full object-cover"
            />
            {/* Overlay with text */}
            {(slides[current].title || slides[current].description) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-center"
                >
                  {slides[current].title && (
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                      {slides[current].title}
                    </h2>
                  )}
                  {slides[current].description && (
                    <p className="text-lg text-white/90 md:text-xl">{slides[current].description}</p>
                  )}
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow Navigation */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 transition-all hover:bg-white/40"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 transition-all hover:bg-white/40"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === current ? "w-8 bg-accent" : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
