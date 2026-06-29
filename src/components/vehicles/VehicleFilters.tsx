"use client";

import { X, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vehicles } from "@/data/vehicles";
import Button from "@/components/ui/Button";

interface FilterState {
  kategori: string;
  marka: string;
  vites: string;
  yakit: string;
  kasaTipi: string;
  yolcu: string;
  minFiyat: string;
  maxFiyat: string;
}

interface VehicleFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onClear: () => void;
  resultCount: number;
}

const allCategories = [...new Set(vehicles.map((v) => v.category))];
const allBrands = [...new Set(vehicles.map((v) => v.brand))].sort();
const allBodyTypes = [...new Set(vehicles.map((v) => v.bodyType))].sort();

export default function VehicleFilters({
  filters,
  onChange,
  onClear,
  resultCount,
}: VehicleFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateFilter = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  const selectClass =
    "w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2.5 text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20";

  const hasActiveFilters = Object.values(filters).some((v) => v !== "");

  const filterContent = (
    <div className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
          Kategori
        </label>
        <select
          value={filters.kategori}
          onChange={(e) => updateFilter("kategori", e.target.value)}
          className={selectClass}
        >
          <option value="">Tümü</option>
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
          Marka
        </label>
        <select
          value={filters.marka}
          onChange={(e) => updateFilter("marka", e.target.value)}
          className={selectClass}
        >
          <option value="">Tümü</option>
          {allBrands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
          Vites
        </label>
        <select
          value={filters.vites}
          onChange={(e) => updateFilter("vites", e.target.value)}
          className={selectClass}
        >
          <option value="">Tümü</option>
          <option value="Manuel">Manuel</option>
          <option value="Otomatik">Otomatik</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
          Yakıt
        </label>
        <select
          value={filters.yakit}
          onChange={(e) => updateFilter("yakit", e.target.value)}
          className={selectClass}
        >
          <option value="">Tümü</option>
          <option value="Benzin">Benzin</option>
          <option value="Dizel">Dizel</option>
          <option value="Hibrit">Hibrit</option>
          <option value="Elektrik">Elektrik</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
          Kasa Tipi
        </label>
        <select
          value={filters.kasaTipi}
          onChange={(e) => updateFilter("kasaTipi", e.target.value)}
          className={selectClass}
        >
          <option value="">Tümü</option>
          {allBodyTypes.map((bt) => (
            <option key={bt} value={bt}>
              {bt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
          Min. Yolcu Kapasitesi
        </label>
        <select
          value={filters.yolcu}
          onChange={(e) => updateFilter("yolcu", e.target.value)}
          className={selectClass}
        >
          <option value="">Tümü</option>
          <option value="2">2+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
          <option value="7">7+</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
            Min. Fiyat
          </label>
          <input
            type="number"
            value={filters.minFiyat}
            onChange={(e) => updateFilter("minFiyat", e.target.value)}
            placeholder="₺"
            className={selectClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
            Max. Fiyat
          </label>
          <input
            type="number"
            value={filters.maxFiyat}
            onChange={(e) => updateFilter("maxFiyat", e.target.value)}
            placeholder="₺"
            className={selectClass}
          />
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={onClear} className="w-full">
          <X className="h-4 w-4" />
          Filtreleri Temizle
        </Button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-heading text-base font-bold text-[var(--text)]">
              Filtreler
            </h3>
            <span className="text-xs text-[var(--muted)]">
              {resultCount} araç
            </span>
          </div>
          {filterContent}
        </div>
      </div>

      {/* Mobile filter button */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--text)]"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtreler
          {hasActiveFilters && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)] text-xs text-[var(--secondary)]">
              !
            </span>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-[var(--text)]">
                  Filtreler
                </h3>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-1 text-[var(--muted)] hover:bg-[var(--surface)]"
                  aria-label="Kapat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {filterContent}
              <div className="mt-4">
                <Button
                  onClick={() => setMobileOpen(false)}
                  className="w-full"
                >
                  {resultCount} Araç Göster
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
