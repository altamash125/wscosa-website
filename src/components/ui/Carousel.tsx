'use client';

// src/components/ui/Carousel.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface Slide {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface CarouselButton {
  label: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  loop?: boolean;
  buttons?: CarouselButton[];
}

/**
 * Reusable Carousel component with Tailwind + Framer Motion
 * Supports autoplay, swipe, arrows, indicators, and looping
 */
export function Carousel({
  slides,
  autoPlay = true,
  interval = 4000,
  showIndicators = true,
  showArrows = true,
  loop = true,
  buttons = [],
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);

  // Autoplay logic
  useEffect(() => {
    if (!autoPlay || paused) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, autoPlay, paused, interval, slides.length]);

  // Touch/swipe logic
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prevSlide();
    else if (diff < -50) nextSlide();
    touchStartX.current = null;
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative w-full h-[400px] md:h-[600px] overflow-hidden group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg md:text-2xl text-white/90 mb-6"
            >
              {slides[current].description}
            </motion.p>
            {buttons.length > 0 && (
              <div className="flex gap-4 justify-center">
                {buttons.map((btn, idx) =>
                  btn.href ? (
                    <a
                      key={idx}
                      href={btn.href}
                      className={cn("px-8 py-3 text-lg rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent", btn.className)}
                    >
                      {btn.label}
                    </a>
                  ) : (
                    <button
                      key={idx}
                      type={btn.type || "button"}
                      onClick={btn.onClick}
                      className={cn("px-8 py-3 text-lg rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent", btn.className)}
                    >
                      {btn.label}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "w-3 h-3 rounded-full border border-white bg-white/40 transition-all",
                idx === current && "bg-accent border-accent scale-110"
              )}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
