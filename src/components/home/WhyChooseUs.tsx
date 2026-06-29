"use client";

import {
  Car,
  Zap,
  BadgeCheck,
  Headphones,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Car,
    title: "Bakımlı Araç Filosu",
    description:
      "Tüm araçlarımız düzenli bakımdan geçirilir ve hijyenik şekilde teslim edilir.",
  },
  {
    icon: Zap,
    title: "Hızlı Teslimat",
    description:
      "Havalimanı, otogar ve şehir merkezi dahil hızlı araç teslim hizmeti sunuyoruz.",
  },
  {
    icon: BadgeCheck,
    title: "Şeffaf Fiyatlandırma",
    description:
      "Gizli ücret yok. Tüm fiyatlarımız açık ve net şekilde belirtilmektedir.",
  },
  {
    icon: Headphones,
    title: "7/24 İletişim Desteği",
    description:
      "Her an bize ulaşabilirsiniz. Müşteri memnuniyeti bizim için ön plandadır.",
  },
  {
    icon: Settings,
    title: "Esnek Kiralama Seçenekleri",
    description:
      "Günlük, haftalık, aylık ve uzun dönem kiralama seçenekleri mevcuttur.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Sürüş Deneyimi",
    description:
      "Tam kapsamlı sigorta ve kasko ile güvenli bir yolculuk sağlıyoruz.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--surface)] py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Neden Bizi Tercih Etmelisiniz?"
          subtitle="Araç kiralama deneyiminizi fark yaratan hizmetlerimizle bir üst seviyeye taşıyoruz."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                <feature.icon className="h-6 w-6 text-[var(--primary)]" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-[var(--text)]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
