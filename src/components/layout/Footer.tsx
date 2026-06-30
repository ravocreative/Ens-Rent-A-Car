import Link from "next/link";
import { Phone, Mail, MapPin, Clock, User } from "lucide-react";
import Container from "@/components/ui/Container";
import { companyInfo, getPhoneUrl } from "@/config/company";
import { footerNav } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary)] text-white/80">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)] font-heading text-base font-bold text-[var(--secondary)]">
                İ
              </div>
              <div>
                <div className="font-heading text-base font-bold text-white">
                  {companyInfo.shortName}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">
                  Araç Kiralama
                </div>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-white/60">
              {companyInfo.aboutText.substring(0, 150)}...
            </p>
            <div className="flex items-center gap-3">
              <a
                href={companyInfo.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-[#25D366] hover:text-white"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Kurumsal
            </h3>
            <ul className="space-y-2.5">
              {footerNav.kurumsal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[var(--primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Araç Kategorileri
            </h3>
            <ul className="space-y-2.5">
              {footerNav.categories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[var(--primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Hizmetler
            </h3>
            <ul className="space-y-2.5">
              {footerNav.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[var(--primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <User className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{companyInfo.authorizedPerson}</span>
              </li>
              <li>
                <a
                  href={getPhoneUrl()}
                  className="flex items-start gap-2.5 text-sm transition-colors hover:text-[var(--primary)]"
                  aria-label={`Ana telefon: ${companyInfo.primaryPhone.display}`}
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  {companyInfo.primaryPhone.display}
                </a>
              </li>
              <li>
                <a
                  href={getPhoneUrl(true)}
                  className="flex items-start gap-2.5 text-sm transition-colors hover:text-[var(--primary)]"
                  aria-label={`Alternatif telefon: ${companyInfo.secondaryPhone.display}`}
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  {companyInfo.secondaryPhone.display}
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.map.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm transition-colors hover:text-[var(--primary)]"
                  aria-label="Haritada konumumuzu görüntüleyin"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{companyInfo.address.fullAddress}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{companyInfo.workingHours.summary}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. Tüm hakları
            saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/kvkk" className="hover:text-white/60 transition-colors">
              KVKK
            </Link>
            <Link
              href="/kiralama-kosullari"
              className="hover:text-white/60 transition-colors"
            >
              Kiralama Koşulları
            </Link>
          </div>
        </Container>
      </div>

      <div className="border-t border-white/10 bg-black/30">
        <Container className="py-4 pb-20 text-center text-xs text-white/50 lg:pb-4">
          Bu web sitesi{" "}
          <a
            href="https://ravocreative.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--primary)] transition-colors hover:text-white"
          >
            Ravo Creative Studio
          </a>{" "}
          tarafından hazırlanmıştır.
        </Container>
      </div>
    </footer>
  );
}

