"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Fuel,
  Users,
  Cog,
  Briefcase,
  Snowflake,
  Phone,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Vehicle } from "@/types/vehicle";
import { formatPrice } from "@/lib/utils";
import { getPhoneUrl } from "@/config/company";
import Button from "@/components/ui/Button";

interface VehicleCardProps {
  vehicle: Vehicle;
  index?: number;
}

export default function VehicleCard({ vehicle, index = 0 }: VehicleCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <Link href={`/araclar/${vehicle.slug}`} className="relative block overflow-hidden">
          <span className="absolute left-3 top-3 z-10 rounded-lg bg-[var(--primary)] px-2.5 py-1 text-xs font-semibold text-[var(--secondary)]">
            {vehicle.category}
          </span>
          <div className="relative aspect-[16/10] bg-[var(--surface)]">
            {imgError ? (
              <div className="flex h-full w-full items-center justify-center bg-[var(--surface)]">
                <div className="text-center">
                  <Cog className="mx-auto mb-2 h-10 w-10 text-[var(--border)]" />
                  <span className="text-xs text-[var(--muted)]">
                    {vehicle.name}
                  </span>
                </div>
              </div>
            ) : (
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-4">
          <div className="mb-3">
            <Link href={`/araclar/${vehicle.slug}`}>
              <h3 className="font-heading text-lg font-bold text-[var(--text)] hover:text-[var(--primary)] transition-colors">
                {vehicle.name}
              </h3>
            </Link>
            <p className="text-xs text-[var(--muted)]">
              {vehicle.year} Model • {vehicle.bodyType}
            </p>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <Cog className="h-3.5 w-3.5" />
              {vehicle.transmission}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <Fuel className="h-3.5 w-3.5" />
              {vehicle.fuel}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <Users className="h-3.5 w-3.5" />
              {vehicle.seats} Kişi
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <Briefcase className="h-3.5 w-3.5" />
              {vehicle.luggage} Bavul
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <Snowflake className="h-3.5 w-3.5" />
              {vehicle.airConditioning ? "Klima" : "Yok"}
            </div>
          </div>

          <div className="mt-auto border-t border-[var(--border)] pt-4">
            <div className="mb-3 flex items-end justify-between">
              <div>
                {vehicle.oldPrice && (
                  <span className="text-sm text-[var(--muted)] line-through">
                    {formatPrice(vehicle.oldPrice)}
                  </span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-2xl font-bold text-[var(--primary)]">
                    {formatPrice(vehicle.dailyPrice)}
                  </span>
                  <span className="text-xs text-[var(--muted)]">/gün</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button
                href={`/araclar/${vehicle.slug}`}
                variant="outline"
                size="sm"
              >
                Detaylar
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button
                size="sm"
                href={getPhoneUrl()}
                aria-label={`${vehicle.name} için ara`}
              >
                <Phone className="h-3.5 w-3.5" />
                Ara
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
  );
}
