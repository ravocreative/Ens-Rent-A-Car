"use client";

import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  User,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import {
  companyInfo,
  getPhoneUrl,
  getWhatsAppUrl,
  whatsappMessages,
} from "@/config/company";

export default function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      title: "Ana Telefon",
      value: companyInfo.primaryPhone.display,
      href: getPhoneUrl(),
      linkLabel: `Ara: ${companyInfo.primaryPhone.display}`,
    },
    {
      icon: Phone,
      title: "Alternatif Telefon",
      value: companyInfo.secondaryPhone.display,
      href: getPhoneUrl(true),
      linkLabel: `Ara: ${companyInfo.secondaryPhone.display}`,
    },
    {
      icon: User,
      title: "Yetkili Kişi",
      value: companyInfo.authorizedPerson,
      href: getPhoneUrl(),
      linkLabel: `Recep Taş ile iletişime geçin`,
    },
    {
      icon: MapPin,
      title: "Adres",
      value: companyInfo.address.fullAddress,
      href: companyInfo.map.mapUrl,
      linkLabel: "Haritada göster",
      external: true,
    },
  ];

  return (
    <section className="py-8 md:py-12">
      <Container>
        <Breadcrumb items={[{ label: "İletişim" }]} />

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
            Bizi Ziyaret Edin
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-[var(--text)] md:text-4xl">
            İslahiye Araç Kiralama İletişim
          </h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Güncel araç müsaitliği, fiyat bilgisi ve kiralama koşulları için
            Recep Taş ile doğrudan iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const isExternal = card.external;
            return (
              <a
                key={card.title}
                href={card.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-[var(--border)] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-lg"
                aria-label={card.linkLabel}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 transition-colors group-hover:bg-[var(--primary)]">
                  <card.icon className="h-5 w-5 text-[var(--primary)] group-hover:text-[var(--secondary)]" />
                </div>
                <h2 className="mb-1 font-heading text-sm font-bold text-[var(--text)]">
                  {card.title}
                </h2>
                <p className="text-sm text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
                  {card.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] md:text-3xl">
              İslahiye’deki Ofisimize Ulaşın
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              {companyInfo.address.fullAddress}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[var(--muted)]">
              <Clock className="h-4 w-4" />
              {companyInfo.workingHours.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href={getPhoneUrl()}
                size="lg"
                aria-label={`Hemen ara: ${companyInfo.primaryPhone.display}`}
              >
                <Phone className="h-5 w-5" />
                Hemen Ara
              </Button>
              <Button
                href={getWhatsAppUrl(whatsappMessages.general)}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile yazın"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp&apos;tan Yaz
              </Button>
              <Button
                href={companyInfo.map.directionsUrl}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yol tarifi al"
              >
                <Navigation className="h-5 w-5" />
                Yol Tarifi Al
              </Button>
            </div>

            <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                İslahiye ve çevresinde günlük, haftalık veya uzun dönem araç
                kiralama ihtiyaçlarınız için bizimle iletişime geçebilirsiniz.
                Araç müsaitliği ve güncel kiralama ücretleri seçilen tarih,
                araç grubu ve kiralama süresine göre değişebilir. Size uygun
                aracı belirlemek için{" "}
                <span className="font-semibold text-[var(--text)]">
                  Recep Taş
                </span>{" "}
                ile telefon veya WhatsApp üzerinden görüşebilirsiniz.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-md">
            <iframe
              title="İslahiye Rent a Car Konumu"
              src={companyInfo.map.embedUrl}
              className="h-[350px] w-full md:h-[520px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
