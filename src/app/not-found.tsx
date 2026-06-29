import type { Metadata } from "next";
import { Home, Phone, Car } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyInfo, getPhoneUrl } from "@/config/company";

export const metadata: Metadata = {
  title: "Aradığınız Sayfa Bulunamadı",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 font-heading text-8xl font-bold text-[var(--primary)]">
            404
          </div>
          <h1 className="mb-4 font-heading text-2xl font-bold text-[var(--text)] md:text-3xl">
            Aradığınız Sayfa Bulunamadı
          </h1>
          <p className="mb-8 text-[var(--muted)]">
            Aradığınız sayfa kaldırılmış, taşınmış veya adresi yanlış yazılmış
            olabilir.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/" variant="outline">
              <Home className="h-4 w-4" />
              Anasayfaya Dön
            </Button>
            <Button href="/araclar" variant="outline">
              <Car className="h-4 w-4" />
              Araçları İncele
            </Button>
            <Button
              href={getPhoneUrl()}
              aria-label={`Hemen ara: ${companyInfo.primaryPhone.display}`}
            >
              <Phone className="h-4 w-4" />
              Hemen Ara
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
