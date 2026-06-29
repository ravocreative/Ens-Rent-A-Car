"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyInfo, getPhoneUrl } from "@/config/company";

const stats = [
  { value: companyInfo.stats.experience, label: "Yıllık Deneyim" },
  { value: companyInfo.stats.vehicles, label: "Araç" },
  { value: companyInfo.stats.customers, label: "Mutlu Müşteri" },
  { value: companyInfo.stats.support, label: "Destek" },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--surface)]">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--secondary)] to-neutral-800">
                <div className="text-center text-white/60">
                  <div className="mb-3 text-6xl font-bold font-heading text-[var(--primary)]">
                    {companyInfo.shortName}
                  </div>
                  <p className="text-sm">Profesyonel Araç Kiralama</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 hidden rounded-xl bg-[var(--primary)] px-6 py-4 shadow-lg lg:block">
              <div className="text-center">
                <span className="block font-heading text-3xl font-bold text-[var(--secondary)]">
                  {companyInfo.stats.experience}
                </span>
                <span className="text-xs font-semibold text-[var(--secondary)]/70">
                  Yıllık Deneyim
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
              Hakkımızda
            </span>
            <h2 className="mb-5 font-heading text-3xl font-bold text-[var(--text)] md:text-4xl">
              Güvenilir ve Profesyonel Araç Kiralama Hizmeti
            </h2>
            <p className="mb-6 text-[var(--muted)] leading-relaxed">
              {companyInfo.aboutText}
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-2xl font-bold text-[var(--primary)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="/hakkimizda" variant="outline">
                Hakkımızda
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={getPhoneUrl()} aria-label={`Hemen ara: ${companyInfo.displayPhone}`}>
                <Phone className="h-4 w-4" />
                Hemen Ara
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
