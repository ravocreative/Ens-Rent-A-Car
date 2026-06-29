"use client";

import { MapPin, Car, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: MapPin,
    step: "1",
    title: "Lokasyon ve Tarih Seçin",
    description:
      "Aracı almak ve teslim etmek istediğiniz lokasyonu ve tarihleri belirleyin.",
  },
  {
    icon: Car,
    step: "2",
    title: "Aracınızı İnceleyin",
    description:
      "İhtiyacınıza uygun aracı seçin, detaylarını ve özelliklerini inceleyin.",
  },
  {
    icon: Phone,
    step: "3",
    title: "Bizi Arayın ve Bilgi Alın",
    description:
      "Güncel fiyat ve müsaitlik bilgisi için bizi doğrudan arayın.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[var(--surface)] py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Nasıl Çalışır?"
          subtitle="Üç kolay adımda aracınıza ulaşın."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)]">
                <step.icon className="h-7 w-7 text-[var(--secondary)]" />
              </div>
              <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
                Adım {step.step}
              </span>
              <h3 className="mb-2 font-heading text-xl font-bold text-[var(--text)]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
