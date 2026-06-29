"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const visibleTestimonials = testimonials.slice(
    current * itemsPerPage,
    (current + 1) * itemsPerPage
  );

  return (
    <section className="bg-[var(--surface)] py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Müşterilerimiz Ne Diyor?"
          subtitle="Hizmetlerimizden yararlanan müşterilerimizin görüşleri."
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-2xl border border-[var(--border)] bg-white p-6"
              >
                <Quote className="mb-3 h-6 w-6 text-[var(--primary)]/30" />
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-[var(--primary)] text-[var(--primary)]"
                          : "text-[var(--border)]"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-[var(--border)] pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] font-heading text-sm font-bold text-[var(--secondary)]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--text)]">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-[var(--muted)]">
                      {testimonial.vehicle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + totalPages) % totalPages)
              }
              className="rounded-full bg-white p-2 shadow-sm border border-[var(--border)] hover:bg-[var(--surface)] transition-colors"
              aria-label="Önceki yorumlar"
            >
              <ChevronLeft className="h-5 w-5 text-[var(--text)]" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-[var(--primary)]"
                      : "w-2 bg-[var(--border)]"
                  }`}
                  aria-label={`Sayfa ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % totalPages)}
              className="rounded-full bg-white p-2 shadow-sm border border-[var(--border)] hover:bg-[var(--surface)] transition-colors"
              aria-label="Sonraki yorumlar"
            >
              <ChevronRight className="h-5 w-5 text-[var(--text)]" />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
