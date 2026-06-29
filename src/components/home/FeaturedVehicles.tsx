"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import VehicleCard from "@/components/vehicles/VehicleCard";
import Button from "@/components/ui/Button";
import { getFeaturedVehicles } from "@/data/vehicles";
import { ArrowRight } from "lucide-react";

export default function FeaturedVehicles() {
  const vehicles = getFeaturedVehicles().slice(0, 8);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Yolculuğunuza Uygun Aracı Seçin"
          subtitle="Ekonomik sınıftan geniş aile araçlarına kadar farklı ihtiyaçlara uygun araç seçeneklerimizi inceleyin."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/araclar" variant="outline" size="lg">
            Tüm Araçları Görüntüle
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
