"use client";

import { vehicles } from "@/data/vehicles";
import { Vehicle } from "@/types/vehicle";
import VehicleCard from "./VehicleCard";
import SectionHeading from "@/components/ui/SectionHeading";

interface SimilarVehiclesProps {
  currentVehicle: Vehicle;
}

export default function SimilarVehicles({
  currentVehicle,
}: SimilarVehiclesProps) {
  const similar = vehicles
    .filter(
      (v) =>
        v.id !== currentVehicle.id &&
        v.available &&
        v.category === currentVehicle.category
    )
    .slice(0, 3);

  if (similar.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <SectionHeading
        title="Benzer Araçlar"
        subtitle="Bu araca benzer diğer seçeneklerimiz."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {similar.map((vehicle, index) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
        ))}
      </div>
    </section>
  );
}
