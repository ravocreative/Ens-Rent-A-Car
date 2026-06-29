import { SearchX } from "lucide-react";
import Button from "./Button";
import { getPhoneUrl } from "@/config/company";
import { companyInfo } from "@/config/company";
import { Phone } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  onClearFilters?: () => void;
}

export default function EmptyState({
  title = "Araç bulunamadı",
  description = "Aradığınız kriterlere uygun araç bulunamadı.",
  onClearFilters,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <SearchX className="mb-6 h-16 w-16 text-[var(--border)]" />
      <h3 className="mb-2 text-xl font-bold font-heading text-[var(--text)]">
        {title}
      </h3>
      <p className="mb-8 text-[var(--muted)] max-w-md">{description}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {onClearFilters && (
          <Button variant="outline" onClick={onClearFilters}>
            Filtreleri Temizle
          </Button>
        )}
        <Button href={getPhoneUrl()} aria-label={`Bizi arayın: ${companyInfo.displayPhone}`}>
          <Phone className="h-4 w-4" />
          Bizi Arayın
        </Button>
      </div>
    </div>
  );
}
