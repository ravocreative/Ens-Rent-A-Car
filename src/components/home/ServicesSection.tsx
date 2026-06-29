"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Hizmetlerimiz"
          subtitle="İhtiyacınıza uygun kiralama hizmetini seçin."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={service.href}
                className="group flex flex-col rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                  <service.icon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">
                  Detaylı Bilgi
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
