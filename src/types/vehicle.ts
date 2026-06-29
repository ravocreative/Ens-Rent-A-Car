export type VehicleCategory =
  | "Ekonomik"
  | "Orta Sınıf"
  | "SUV"
  | "Aile"
  | "Ticari"
  | "Premium";

export type Transmission = "Manuel" | "Otomatik";

export type FuelType = "Benzin" | "Dizel" | "Hibrit" | "Elektrik";

export interface Vehicle {
  id: number;
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: VehicleCategory;
  transmission: Transmission;
  fuel: FuelType;
  bodyType: string;
  seats: number;
  luggage: number;
  doors: number;
  airConditioning: boolean;
  minimumAge: number;
  licenseYear: number;
  deposit: string;
  kilometerLimit: string;
  dailyPrice: number;
  oldPrice?: number;
  featured: boolean;
  available: boolean;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  features: string[];
}
