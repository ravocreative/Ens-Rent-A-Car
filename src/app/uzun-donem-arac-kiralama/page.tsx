import type { Metadata } from "next";
import { CalendarRange, Check, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import CallToAction from "@/components/home/CallToAction";
import { companyInfo, getPhoneUrl } from "@/config/company";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "İslahiye Uzun Dönem Araç Kiralama",
  description:
    "İslahiye uzun dönem ve aylık araç kiralama çözümlerini inceleyin. Bireysel ve kurumsal kiralama seçenekleri için bilgi alın.",
  path: "/uzun-donem-arac-kiralama",
});

const advantages = [
  "3 ay ve üzeri özel fiyat avantajları",
  "Bakım ve servis masrafları dahil",
  "Kasko ve sigorta dahildir",
  "Araç değişim imkanı",
  "Esnek ödeme seçenekleri",
  "Kurumsal müşterilere özel çözümler",
  "Filo yönetimi desteği",
  "7/24 yol yardım hizmeti",
];

export default function LongTermRentalPage() {
  return (
    <>
      <section className="py-8 md:py-12">
        <Container>
          <Breadcrumb items={[{ label: "Uzun Dönem Araç Kiralama" }]} />

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-[var(--primary)]/10 px-3 py-1.5">
                <CalendarRange className="h-4 w-4 text-[var(--primary)]" />
                <span className="text-sm font-semibold text-[var(--primary)]">
                  Uzun Dönem
                </span>
              </div>
              <h1 className="font-heading text-3xl font-bold text-[var(--text)] md:text-4xl">
                Uzun Dönem Araç Kiralama
              </h1>
              <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
                3 ay ve üzeri kiralama dönemleri için avantajlı fiyatlar ve
                esnek koşullar sunuyoruz. Bireysel ve kurumsal
                müşterilerimize özel uzun dönem kiralama çözümlerimizden
                yararlanın.
              </p>

              <ul className="mt-8 space-y-3">
                {advantages.map((adv) => (
                  <li key={adv} className="flex items-center gap-3 text-[var(--text)]">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">{adv}</span>
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

            <div className="space-y-6">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h2 className="mb-4 font-heading text-xl font-bold text-[var(--text)]">
                  Uzun Dönem Kiralama Avantajları
                </h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Uzun dönem araç kiralama, özellikle araç sahibi olmanın
                  getirdiği bakım, sigorta, vergi ve amortisman gibi
                  masraflardan kurtulmak isteyen bireysel ve kurumsal
                  müşteriler için ideal bir çözümdür. Aylık sabit ödeme ile
                  bütçenizi daha kolay yönetebilirsiniz.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h2 className="mb-4 font-heading text-xl font-bold text-[var(--text)]">
                  Kimler İçin Uygun?
                </h2>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li>• Şirket araç ihtiyacı olan kurumsal firmalar</li>
                  <li>• Uzun süreli iş seyahatlerinde olan profesyoneller</li>
                  <li>• Araç sahibi olmadan araç kullanmak isteyenler</li>
                  <li>• Belirli bir proje süresi boyunca araç ihtiyacı olanlar</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[var(--primary)] bg-[var(--primary)]/5 p-6">
                <h2 className="mb-2 font-heading text-lg font-bold text-[var(--text)]">
                  Fiyat Bilgisi İçin Arayın
                </h2>
                <p className="mb-4 text-sm text-[var(--muted)]">
                  Uzun dönem kiralama fiyatları araç modeline, kiralama süresine
                  ve kilometre kullanımına göre kişiye özel belirlenmektedir.
                </p>
                <Button href={getPhoneUrl()} aria-label={`Ara: ${companyInfo.displayPhone}`}>
                  <Phone className="h-4 w-4" />
                  {companyInfo.displayPhone}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  );
}
