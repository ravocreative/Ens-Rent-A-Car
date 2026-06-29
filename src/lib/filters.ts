import { Vehicle } from "@/types/vehicle";

export interface VehicleFilters {
  kategori?: string;
  marka?: string;
  vites?: string;
  yakit?: string;
  kasaTipi?: string;
  yolcu?: string;
  minFiyat?: string;
  maxFiyat?: string;
}

export function filterVehicles(
  vehicles: Vehicle[],
  filters: VehicleFilters
): Vehicle[] {
  return vehicles.filter((v) => {
    if (!v.available) return false;
    if (filters.kategori && v.category !== filters.kategori) return false;
    if (filters.marka && v.brand !== filters.marka) return false;
    if (filters.vites && v.transmission !== filters.vites) return false;
    if (filters.yakit && v.fuel !== filters.yakit) return false;
    if (filters.kasaTipi && v.bodyType !== filters.kasaTipi) return false;
    if (filters.yolcu && v.seats < Number(filters.yolcu)) return false;
    if (filters.minFiyat && v.dailyPrice < Number(filters.minFiyat))
      return false;
    if (filters.maxFiyat && v.dailyPrice > Number(filters.maxFiyat))
      return false;
    return true;
  });
}

export type SortOption =
  | "recommended"
  | "price-asc"
  | "price-desc"
  | "newest"
  | "name";

export function sortVehicles(
  vehicles: Vehicle[],
  sort: SortOption
): Vehicle[] {
  const sorted = [...vehicles];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.dailyPrice - b.dailyPrice);
    case "price-desc":
      return sorted.sort((a, b) => b.dailyPrice - a.dailyPrice);
    case "newest":
      return sorted.sort((a, b) => b.year - a.year);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name, "tr"));
    default:
      return sorted.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }
}
