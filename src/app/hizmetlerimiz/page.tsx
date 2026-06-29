import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CallToAction from "@/components/home/CallToAction";
import { services } from "@/data/services";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "İslahiye Araç Kiralama Hizmetlerimiz",
  description:
    "İslahiye günlük, haftalık, aylık ve uzun dönem araç kiralama hizmetlerimizi inceleyin. Kurumsal ve bireysel kiralama çözümleri.",
  path: "/hizmetlerimiz",
});

export default function ServicesPage() {
  return (
    <>
      <section className="py-8 md:py-12">
        <Container>
          <Breadcrumb items={[{ label: "Hizmetlerimiz" }]} />

          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-3xl font-bold text-[var(--text)] md:text-4xl">
              Hizmetlerimiz
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Bireysel ve kurumsal ihtiyaçlarınıza uygun geniş hizmet
              yelpazemiz ile araç kiralama deneyiminizi kolaylaştırıyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                  <service.icon className="h-7 w-7 text-[var(--primary)]" />
                </div>
                <h2 className="mb-2 font-heading text-xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">
                  Detaylı Bilgi
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  );
}
