import {
  Cog,
  Fuel,
  Users,
  Briefcase,
  DoorOpen,
  Snowflake,
  Calendar,
  IdCard,
  Gauge,
  CreditCard,
  Check,
} from "lucide-react";
import { Vehicle } from "@/types/vehicle";

interface VehicleSpecsProps {
  vehicle: Vehicle;
}

export default function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  const specs = [
    { icon: Cog, label: "Vites", value: vehicle.transmission },
    { icon: Fuel, label: "Yakıt", value: vehicle.fuel },
    { icon: Users, label: "Yolcu Kapasitesi", value: `${vehicle.seats} Kişi` },
    { icon: Briefcase, label: "Bagaj", value: `${vehicle.luggage} Bavul` },
    { icon: DoorOpen, label: "Kapı", value: `${vehicle.doors} Kapı` },
    {
      icon: Snowflake,
      label: "Klima",
      value: vehicle.airConditioning ? "Var" : "Yok",
    },
    { icon: Calendar, label: "Minimum Yaş", value: `${vehicle.minimumAge} Yaş` },
    {
      icon: IdCard,
      label: "Min. Ehliyet Süresi",
      value: `${vehicle.licenseYear} Yıl`,
    },
    { icon: Gauge, label: "Kilometre", value: vehicle.kilometerLimit },
    { icon: CreditCard, label: "Depozito", value: vehicle.deposit },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 font-heading text-xl font-bold text-[var(--text)]">
          Teknik Özellikler
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3"
            >
              <spec.icon className="h-5 w-5 flex-shrink-0 text-[var(--primary)]" />
              <div>
                <div className="text-xs text-[var(--muted)]">{spec.label}</div>
                <div className="text-sm font-semibold text-[var(--text)]">
                  {spec.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {vehicle.features.length > 0 && (
        <div>
          <h2 className="mb-4 font-heading text-xl font-bold text-[var(--text)]">
            Araç Donanımları
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {vehicle.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-[var(--muted)]"
              >
                <Check className="h-4 w-4 flex-shrink-0 text-green-500" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
