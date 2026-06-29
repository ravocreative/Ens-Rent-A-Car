"use client";

import { SortOption } from "@/lib/filters";

interface VehicleSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "Önerilen" },
  { value: "price-asc", label: "Fiyat (Artan)" },
  { value: "price-desc", label: "Fiyat (Azalan)" },
  { value: "newest", label: "En Yeni" },
  { value: "name", label: "İsme Göre" },
];

export default function VehicleSort({ value, onChange }: VehicleSortProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
      className="rounded-xl border border-[var(--border)] bg-white px-3 py-2.5 text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
      aria-label="Sıralama"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
