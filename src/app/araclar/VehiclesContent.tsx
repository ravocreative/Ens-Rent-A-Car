"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import VehicleGrid from "@/components/vehicles/VehicleGrid";
import VehicleFilters from "@/components/vehicles/VehicleFilters";
import VehicleSort from "@/components/vehicles/VehicleSort";
import EmptyState from "@/components/ui/EmptyState";
import { vehicles } from "@/data/vehicles";
import { locations } from "@/data/locations";
import { filterVehicles, sortVehicles, type SortOption } from "@/lib/filters";

export default function VehiclesContent() {
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("kategori") || "";
  const pickupLoc = searchParams.get("pickup") || "";
  const dropoffLoc = searchParams.get("dropoff") || "";
  const pickupDate = searchParams.get("pickupDate") || "";
  const returnDate = searchParams.get("returnDate") || "";

  const [filters, setFilters] = useState({
    kategori: initialCategory,
    marka: "",
    vites: "",
    yakit: "",
    kasaTipi: "",
    yolcu: "",
    minFiyat: "",
    maxFiyat: "",
  });

  const [sort, setSort] = useState<SortOption>("recommended");

  const filtered = useMemo(() => {
    const result = filterVehicles(vehicles, filters);
    return sortVehicles(result, sort);
  }, [filters, sort]);

  const clearFilters = () => {
    setFilters({
      kategori: "",
      marka: "",
      vites: "",
      yakit: "",
      kasaTipi: "",
      yolcu: "",
      minFiyat: "",
      maxFiyat: "",
    });
  };

  const getLocationName = (id: string) =>
    locations.find((l) => l.id === id)?.name || id;

  const hasSearchParams = pickupLoc || dropoffLoc || pickupDate || returnDate;

  return (
    <section className="py-8 md:py-12">
      <Container>
        <Breadcrumb items={[{ label: "Araçlarımız" }]} />

        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-[var(--text)] md:text-4xl">
            Araçlarımız
          </h1>
          <p className="mt-2 text-[var(--muted)]">
            İhtiyacınıza uygun aracı filtreleyin ve detaylarını inceleyin.
          </p>

          {hasSearchParams && (
            <div className="mt-3 flex flex-wrap gap-2">
              {pickupLoc && (
                <span className="rounded-lg bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text)]">
                  Alış: {getLocationName(pickupLoc)}
                </span>
              )}
              {dropoffLoc && (
                <span className="rounded-lg bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text)]">
                  Dönüş: {getLocationName(dropoffLoc)}
                </span>
              )}
              {pickupDate && (
                <span className="rounded-lg bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text)]">
                  Başlangıç: {pickupDate}
                </span>
              )}
              {returnDate && (
                <span className="rounded-lg bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text)]">
                  Bitiş: {returnDate}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-64 lg:flex-shrink-0">
            <VehicleFilters
              filters={filters}
              onChange={setFilters}
              onClear={clearFilters}
              resultCount={filtered.length}
            />
          </div>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-[var(--muted)]">
                <strong className="text-[var(--text)]">{filtered.length}</strong>{" "}
                araç bulundu
              </p>
              <VehicleSort value={sort} onChange={setSort} />
            </div>

            {filtered.length > 0 ? (
              <VehicleGrid vehicles={filtered} />
            ) : (
              <EmptyState onClearFilters={clearFilters} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
