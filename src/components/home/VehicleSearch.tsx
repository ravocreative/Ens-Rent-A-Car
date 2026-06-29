"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, CalendarDays, Clock, Search } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { locations } from "@/data/locations";
import { dateToInputValue } from "@/lib/utils";

const timeSlots = Array.from({ length: 29 }, (_, i) => {
  const hour = Math.floor(i / 2) + 8;
  const minute = i % 2 === 0 ? "00" : "30";
  return `${String(hour).padStart(2, "0")}:${minute}`;
});

export default function VehicleSearch() {
  const router = useRouter();
  const today = dateToInputValue(new Date());
  const tomorrow = dateToInputValue(
    new Date(Date.now() + 86400000)
  );

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState(today);
  const [returnDate, setReturnDate] = useState(tomorrow);
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnTime, setReturnTime] = useState("10:00");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!pickup) newErrors.pickup = "Alış lokasyonu seçiniz";
    if (!dropoff) newErrors.dropoff = "Dönüş lokasyonu seçiniz";
    if (!pickupDate) newErrors.pickupDate = "Alış tarihi seçiniz";
    if (!returnDate) newErrors.returnDate = "Dönüş tarihi seçiniz";

    if (pickupDate && pickupDate < today) {
      newErrors.pickupDate = "Geçmiş tarih seçilemez";
    }
    if (returnDate && pickupDate && returnDate < pickupDate) {
      newErrors.returnDate = "Dönüş tarihi alış tarihinden önce olamaz";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const params = new URLSearchParams({
      pickup,
      dropoff,
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
    });
    router.push(`/araclar?${params.toString()}`);
  };

  const selectClass =
    "w-full appearance-none rounded-xl border border-[var(--border)] bg-white px-4 py-3 pl-10 text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors";

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 pl-10 text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-20 -mt-14 md:-mt-16"
    >
      <Container>
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-xl md:p-6"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 lg:gap-3">
            <div className="lg:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
                Alış Lokasyonu
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Lokasyon seçin</option>
                  {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}
                    </option>
                  ))}
                </select>
              </div>
              {errors.pickup && (
                <p className="mt-1 text-xs text-red-500">{errors.pickup}</p>
              )}
            </div>

            <div className="lg:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
                Alış Tarihi
              </label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
                <input
                  type="date"
                  value={pickupDate}
                  min={today}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className={inputClass}
                />
              </div>
              {errors.pickupDate && (
                <p className="mt-1 text-xs text-red-500">{errors.pickupDate}</p>
              )}
            </div>

            <div className="lg:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
                Alış Saati
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className={selectClass}
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="lg:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
                Dönüş Lokasyonu
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
                <select
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Lokasyon seçin</option>
                  {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}
                    </option>
                  ))}
                </select>
              </div>
              {errors.dropoff && (
                <p className="mt-1 text-xs text-red-500">{errors.dropoff}</p>
              )}
            </div>

            <div className="lg:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
                Dönüş Tarihi
              </label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
                <input
                  type="date"
                  value={returnDate}
                  min={pickupDate || today}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className={inputClass}
                />
              </div>
              {errors.returnDate && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.returnDate}
                </p>
              )}
            </div>

            <div className="lg:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
                Dönüş Saati
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
                <select
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  className={selectClass}
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-end lg:col-span-1">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 font-semibold text-[var(--secondary)] transition-colors hover:bg-[var(--primary-dark)]"
              >
                <Search className="h-4 w-4" />
                Araçları Listele
              </button>
            </div>
          </div>
        </form>
      </Container>
    </motion.section>
  );
}
