import type { Metadata } from "next";
import { Clock, Check, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import FeaturedVehicles from "@/components/home/FeaturedVehicles";
import CallToAction from "@/components/home/CallToAction";
import { companyInfo, getPhoneUrl } from "@/config/company";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "İslahiye Günlük Araç Kiralama",
  description:
    "İslahiye günlük araç kiralama seçenekleriyle kısa süreli ulaşım ihtiyacınızı karşılayın. Güncel araç ve fiyat bilgisi için iletişime geçin.",
  path: "/gunluk-arac-kiralama",
});

const benefits = [
  "Geniş araç filosundan seçim yapabilirsiniz",
  "Hızlı ve kolay araç teslim süreci",
  "Tam kapsamlı sigorta dahildir",
  "Esnek alış ve iade lokasyonları",
  "Uygun günlük fiyatlar",
  "7/24 yol yardım desteği",
];

export default function DailyRentalPage() {
  return (
    <>
      <section className="py-8 md:py-12">
        <Container>
          <Breadcrumb items={[{ label: "Günlük Araç Kiralama" }]} />

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-[var(--primary)]/10 px-3 py-1.5">
                <Clock className="h-4 w-4 text-[var(--primary)]" />
                <span className="text-sm font-semibold text-[var(--primary)]">
                  Günlük Kiralama
                </span>
              </div>
              <h1 className="font-heading text-3xl font-bold text-[var(--text)] md:text-4xl">
                Günlük Araç Kiralama
              </h1>
              <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
                Kısa süreli ihtiyaçlarınız için günlük araç kiralama
                hizmetimizden yararlanın. Ekonomik, orta sınıf, SUV ve premium
                araç seçeneklerimizle her ihtiyaca uygun çözümler sunuyoruz.
              </p>

              <ul className="mt-8 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-[var(--text)]">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/araclar" variant="outline">
                  Araçları İncele
                </Button>
                <Button href={getPhoneUrl()} aria-label={`Hemen ara: ${companyInfo.displayPhone}`}>
                  <Phone className="h-4 w-4" />
                  Hemen Ara
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="mb-4 font-heading text-xl font-bold text-[var(--text)]">
                Günlük Kiralama Bilgileri
              </h2>
              <div className="space-y-4 text-sm text-[var(--muted)]">
                <div>
                  <h3 className="mb-1 font-semibold text-[var(--text)]">
                    Kiralama Süresi
                  </h3>
                  <p>Minimum 1 gün, maksimum 29 gün kiralama yapılabilir.</p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-[var(--text)]">
                    Gerekli Belgeler
                  </h3>
                  <p>Ehliyet, kimlik ve kredi kartı gerekmektedir.</p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-[var(--text)]">
                    Teslim Lokasyonları
                  </h3>
                  <p>
                    Merkez ofis, havalimanı, otogar ve şehir merkezi
                    lokasyonlarımızda araç teslim ve iade yapılabilir.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-[var(--text)]">
                    Fiyat Bilgisi
                  </h3>
                  <p>
                    Güncel fiyatlar araç modeli, kiralama süresi ve döneme göre
                    değişiklik gösterebilir. Detaylı fiyat bilgisi için bizi
                    arayınız.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FeaturedVehicles />
      <CallToAction />
    </>
  );
}
