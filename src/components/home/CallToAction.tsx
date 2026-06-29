"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyInfo, getPhoneUrl } from "@/config/company";

export default function CallToAction() {
  return (
    <section className="bg-[var(--secondary)] py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
            Aradığınız Aracı Birlikte Belirleyelim
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/70">
            Size en uygun araç, müsaitlik ve güncel fiyat bilgisi için hemen
            bizi arayın.
          </p>
          <Button
            href={getPhoneUrl()}
            size="lg"
            className="text-base"
            aria-label={`Şimdi ara: ${companyInfo.displayPhone}`}
          >
            <Phone className="h-5 w-5" />
            Şimdi Ara: {companyInfo.displayPhone}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
