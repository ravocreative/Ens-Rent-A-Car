"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { getPhoneUrl } from "@/config/company";

const slides = [
  {
    title: "Yolculuğunuz İçin Doğru Araç Burada",
    subtitle:
      "Bakımlı araç filomuz, hızlı teslimat seçeneklerimiz ve uygun fiyat avantajlarımızla yolculuğunuzu güvenle planlayın.",
    cta1: { label: "Araçları İncele", href: "/araclar" },
    cta2: { label: "Hemen Ara", href: "phone" },
    image: "/images/hero/hero-1.jpg",
  },
  {
    title: "Günlük ve Uzun Dönem Araç Kiralama",
    subtitle:
      "İhtiyacınıza uygun ekonomik, konforlu ve geniş araç seçeneklerini keşfedin.",
    cta1: { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    cta2: { label: "Hemen Ara", href: "phone" },
    image: "/images/hero/hero-2.jpg",
  },
  {
    title: "Güvenli, Hızlı ve Kolay Araç Kiralama",
    subtitle:
      "Size en uygun aracı seçin, detaylarını inceleyin ve tek dokunuşla bizi arayın.",
    cta1: { label: "Araçları İncele", href: "/araclar" },
    cta2: { label: "Hemen Ara", href: "phone" },
    image: "/images/hero/hero-3.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-[var(--secondary)] md:h-[720px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex h-full items-center"
        >
          <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-5 text-base text-white/80 sm:text-lg md:text-xl max-w-xl"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Button href={slide.cta1.href} size="lg">
                  {slide.cta1.label}
                </Button>
                <Button
                  href={getPhoneUrl()}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-[var(--secondary)]"
                  aria-label="Hemen ara"
                >
                  <Phone className="h-5 w-5" />
                  {slide.cta2.label}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Önceki slayt"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Sonraki slayt"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-[var(--primary)]"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
