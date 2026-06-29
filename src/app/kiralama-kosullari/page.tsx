import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CallToAction from "@/components/home/CallToAction";
import { companyInfo } from "@/config/company";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "İslahiye Araç Kiralama Koşulları",
  description:
    "İslahiye araç kiralama yaş sınırı, ehliyet süresi, depozito, kilometre ve teslimat koşulları hakkında bilgi alın.",
  path: "/kiralama-kosullari",
});

const sections = [
  {
    title: "Genel Kiralama Koşulları",
    items: [
      "Kiralama işlemi için geçerli bir ehliyet, kimlik belgesi ve kredi kartı gerekmektedir.",
      "Ekonomik araçlarda minimum yaş sınırı 21, diğer kategorilerde 23-25 arasındadır.",
      "Ehliyet süresinin en az 1 yıl (premium araçlarda 3 yıl) olması gerekmektedir.",
      "Kiralama süresince araç tam kapsamlı kasko ve zorunlu trafik sigortası ile teslim edilir.",
    ],
  },
  {
    title: "Ücretlendirme",
    items: [
      "Kiralama ücretlerine KDV, kasko ve zorunlu trafik sigortası dahildir.",
      "Yakıt ücreti kiralama fiyatına dahil değildir. Araç dolu depo teslim edilir ve dolu depo iade beklenir.",
      "HGS/OGS geçiş ücretleri kiracıya aittir.",
      "Ek sürücü talebi ayrıca ücretlendirilir.",
      "Güncel fiyat bilgisi için firmamızı arayınız.",
    ],
  },
  {
    title: "Kilometre Kullanımı",
    items: [
      "Standart kiralamalarda günlük 300 km kilometre limiti uygulanır.",
      "Limit üzeri kullanımlarda km başına ek ücret uygulanabilir.",
      "Uzun dönem kiralamalarda özel kilometre paketleri sunulmaktadır.",
    ],
  },
  {
    title: "Depozito",
    items: [
      "Araç teslimi sırasında kredi kartından araç kategorisine göre belirlenen tutarda depozito provizyon alınır.",
      "Depozito tutarı araç hasarsız ve sözleşme koşullarına uygun olarak iade edildiğinde serbest bırakılır.",
      "Depozito tutarları araç kategorisine göre 2.000 ₺ ile 7.500 ₺ arasında değişmektedir.",
    ],
  },
  {
    title: "Araç Teslim ve İade",
    items: [
      "Araç, sözleşmede belirtilen tarih ve saatte belirtilen lokasyondan teslim alınır.",
      "Farklı lokasyonda araç iade etmek mümkündür; ek ücret uygulanabilir.",
      "Geç iade durumunda ek gün ücreti yansıtılır.",
      "Araç teslim alındığı gibi temiz ve hasarsız olarak iade edilmelidir.",
    ],
  },
  {
    title: "Sigorta ve Hasar",
    items: [
      "Tüm araçlar kasko ve zorunlu trafik sigortası ile teslim edilir.",
      "Kiracının kusurlu olduğu hasarlarda muafiyet tutarı kiracıya aittir.",
      "Ek koruma paketleri talep edilebilir.",
      "Kaza durumunda derhal firmamız ve gerekli resmi kurumlar bilgilendirilmelidir.",
    ],
  },
];

export default function RentalConditionsPage() {
  return (
    <>
      <section className="py-8 md:py-12">
        <Container>
          <Breadcrumb items={[{ label: "Kiralama Koşulları" }]} />

          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-3xl font-bold text-[var(--text)] md:text-4xl">
              Kiralama Koşulları
            </h1>
            <p className="mt-4 text-[var(--muted)]">
              Araç kiralama sürecinde bilmeniz gereken koşullar ve kurallar
              aşağıda detaylı olarak açıklanmıştır.
            </p>
          </div>

          <div className="mt-10 max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-4 font-heading text-xl font-bold text-[var(--text)]">
                  {section.title}
                </h2>
                <ul className="space-y-2.5">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[var(--muted)] leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  );
}
