"use client";

import Link from "next/link";
import { Car, Gauge, Mountain, Users, Truck, Crown } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  { name: "Ekonomik", icon: Car, slug: "Ekonomik", color: "bg-green-50 text-green-600" },
  { name: "Orta Sınıf", icon: Gauge, slug: "Orta+S%C4%B1n%C4%B1f", color: "bg-blue-50 text-blue-600" },
  { name: "SUV", icon: Mountain, slug: "SUV", color: "bg-orange-50 text-orange-600" },
  { name: "Aile Araçları", icon: Users, slug: "Aile", color: "bg-purple-50 text-purple-600" },
  { name: "Ticari Araçlar", icon: Truck, slug: "Ticari", color: "bg-slate-50 text-slate-600" },
  { name: "Premium", icon: Crown, slug: "Premium", color: "bg-amber-50 text-amber-700" },
];

export default function VehicleCategories() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Araç Kategorileri"
          subtitle="İhtiyacınıza uygun araç kategorisini seçin ve araçları inceleyin."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={`/araclar?kategori=${cat.slug}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${cat.color}`}
                >
                  <cat.icon className="h-7 w-7" />
                </div>
                <span className="font-heading text-sm font-semibold text-[var(--text)]">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
