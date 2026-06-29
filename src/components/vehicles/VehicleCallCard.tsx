"use client";

import {
  Phone,
  Cog,
  Fuel,
  Users,
  Briefcase,
  Snowflake,
  Calendar,
  IdCard,
  Gauge,
  CreditCard,
  Info,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Vehicle } from "@/types/vehicle";
import { formatPrice } from "@/lib/utils";
import {
  companyInfo,
  getPhoneUrl,
  getWhatsAppUrl,
  whatsappMessages,
} from "@/config/company";

interface VehicleCallCardProps {
  vehicle: Vehicle;
}

export default function VehicleCallCard({ vehicle }: VehicleCallCardProps) {
  const whatsappMessage = whatsappMessages.vehicle(vehicle.name);

  const quickSpecs = [
    { icon: Cog, value: vehicle.transmission },
    { icon: Fuel, value: vehicle.fuel },
    { icon: Users, value: `${vehicle.seats} Kişi` },
    { icon: Briefcase, value: `${vehicle.luggage} Bavul` },
    { icon: Snowflake, value: vehicle.airConditioning ? "Klima" : "Yok" },
    { icon: Calendar, value: `Min. ${vehicle.minimumAge} Yaş` },
    { icon: IdCard, value: `Min. ${vehicle.licenseYear} Yıl Ehliyet` },
    { icon: Gauge, value: vehicle.kilometerLimit },
    { icon: CreditCard, value: vehicle.deposit },
  ];

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
      <span className="mb-1 inline-block rounded-lg bg-[var(--primary)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--primary)]">
        {vehicle.category}
      </span>
      <h2 className="mb-1 font-heading text-xl font-bold text-[var(--text)]">
        {vehicle.name}
      </h2>
      <p className="mb-4 text-xs text-[var(--muted)]">
        {vehicle.year} Model • {vehicle.bodyType}
      </p>

      <div className="mb-4 border-b border-[var(--border)] pb-4">
        {vehicle.oldPrice && (
          <span className="text-sm text-[var(--muted)] line-through">
            {formatPrice(vehicle.oldPrice)}
          </span>
        )}
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-3xl font-bold text-[var(--primary)]">
            {formatPrice(vehicle.dailyPrice)}
          </span>
          <span className="text-sm text-[var(--muted)]">/gün</span>
        </div>
        <p className="mt-1 text-xs text-[var(--muted)]">
          Fiyatlar seçilen tarihe göre değişebilir.
        </p>
      </div>

      <div className="mb-5 space-y-2.5">
        {quickSpecs.map((spec, i) => (
          <div key={i} className="flex items-center gap-2.5 text-sm">
            <spec.icon className="h-4 w-4 flex-shrink-0 text-[var(--muted)]" />
            <span className="text-[var(--text)]">{spec.value}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2.5">
        <Button
          href={getPhoneUrl()}
          size="lg"
          className="w-full text-base"
          aria-label={`${vehicle.name} için ana hat: ${companyInfo.primaryPhone.display}`}
        >
          <Phone className="h-5 w-5" />
          Araç İçin Bilgi Al
        </Button>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <a
            href={getPhoneUrl()}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] py-2 text-[var(--text)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <Phone className="h-3.5 w-3.5" />
            {companyInfo.primaryPhone.display}
          </a>
          <a
            href={getPhoneUrl(true)}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] py-2 text-[var(--text)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <Phone className="h-3.5 w-3.5" />
            {companyInfo.secondaryPhone.display}
          </a>
        </div>

        <Button
          href={getWhatsAppUrl(whatsappMessage)}
          variant="whatsapp"
          size="lg"
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp'tan sor"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp&apos;tan Sor
        </Button>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-xl bg-[var(--surface)] p-3">
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--muted)]" />
        <p className="text-xs leading-relaxed text-[var(--muted)]">
          Bu buton rezervasyon oluşturmaz. Güncel müsaitlik ve fiyat bilgisi
          için firmamızla görüşebilirsiniz.
        </p>
      </div>
    </div>
  );
}
