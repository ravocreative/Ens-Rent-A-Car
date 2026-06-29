import { Suspense } from "react";
import type { Metadata } from "next";
import VehiclesContent from "./VehiclesContent";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "İslahiye Kiralık Araçlar ve Güncel Araç Filosu",
  description:
    "İslahiye’de kiralayabileceğiniz ekonomik, otomatik, manuel, aile ve ticari araç seçeneklerini inceleyin. Müsaitlik bilgisi için hemen arayın.",
  path: "/araclar",
});

export default function VehiclesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--border)] border-t-[var(--primary)]" />
        </div>
      }
    >
      <VehiclesContent />
    </Suspense>
  );
}
