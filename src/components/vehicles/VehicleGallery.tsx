"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Cog } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VehicleGalleryProps {
  images: string[];
  name: string;
}

export default function VehicleGallery({ images, name }: VehicleGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set());

  const handleError = (index: number) => {
    setImgErrors((prev) => new Set(prev).add(index));
  };

  const renderImage = (index: number, fill = false, className = "") => {
    if (imgErrors.has(index)) {
      return (
        <div className={`flex items-center justify-center bg-[var(--surface)] ${fill ? "h-full w-full" : ""}`}>
          <div className="text-center">
            <Cog className="mx-auto mb-2 h-12 w-12 text-[var(--border)]" />
            <span className="text-sm text-[var(--muted)]">{name}</span>
          </div>
        </div>
      );
    }

    return (
      <Image
        src={images[index]}
        alt={`${name} - Görsel ${index + 1}`}
        fill={fill}
        className={`object-cover ${className}`}
        sizes={fill ? "(max-width: 768px) 100vw, 60vw" : undefined}
        onError={() => handleError(index)}
      />
    );
  };

  return (
    <>
      <div>
        <button
          onClick={() => setFullscreen(true)}
          className="relative block w-full overflow-hidden rounded-2xl bg-[var(--surface)]"
          aria-label="Tam ekran galeri"
        >
          <div className="aspect-[16/10]">
            {renderImage(current, true)}
          </div>
        </button>

        {images.length > 1 && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
                  index === current
                    ? "border-[var(--primary)]"
                    : "border-transparent hover:border-[var(--border)]"
                }`}
                aria-label={`Görsel ${index + 1}`}
              >
                {renderImage(index, true, "rounded-lg")}
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          >
            <button
              onClick={() => setFullscreen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Kapat"
            >
              <X className="h-6 w-6" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrent(
                      (prev) => (prev - 1 + images.length) % images.length
                    )
                  }
                  className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                  aria-label="Önceki"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() =>
                    setCurrent((prev) => (prev + 1) % images.length)
                  }
                  className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                  aria-label="Sonraki"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div className="relative h-[80vh] w-full max-w-4xl">
              {renderImage(current, true, "object-contain")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
