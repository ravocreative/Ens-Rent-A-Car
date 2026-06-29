"use client";

import { Phone } from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import { formatPrice } from "@/lib/utils";
import { companyInfo, getPhoneUrl } from "@/config/company";

interface MobileVehicleBarProps {
  vehicle: Vehicle;
}

export default function MobileVehicleBar({ vehicle }: MobileVehicleBarProps) {
  return (
    <div className="fixed bottom-14 left-0 right-0 z-30 border-t border-[var(--border)] bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-[var(--muted)]">Günlük</span>
          <div className="font-heading text-xl font-bold text-[var(--primary)]">
            {formatPrice(vehicle.dailyPrice)}
          </div>
        </div>
        <a
          href={getPhoneUrl()}
          className="flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 font-semibold text-[var(--secondary)] transition-colors hover:bg-[var(--primary-dark)]"
          aria-label={`Hemen ara: ${companyInfo.primaryPhone.display}`}
        >
          <Phone className="h-5 w-5" />
          Hemen Ara
        </a>
      </div>
    </div>
  );
}
