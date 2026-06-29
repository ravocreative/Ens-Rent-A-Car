import type { Metadata } from "next";
import { ShieldCheck, Clock, Users, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CallToAction from "@/components/home/CallToAction";
import { companyInfo } from "@/config/company";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "İslahiye Rent a Car Hakkımızda",
  description:
    "İslahiye’de güvenilir, hızlı ve müşteri odaklı araç kiralama hizmeti sunan firmamız hakkında bilgi edinin.",
  path: "/hakkimizda",
});

const values = [
  { icon: ShieldCheck, title: "Güvenilirlik", text: "Tüm araçlarımız sigortalı ve düzenli bakımlıdır." },
  { icon: Clock, title: "Hızlı Hizmet", text: "Hızlı araç teslim ve iade süreciyle zaman kazanın." },
  { icon: Users, title: "Müşteri Odaklılık", text: "Her müşterimize özel çözümler sunuyoruz." },
  { icon: Award, title: "Kalite", text: "Sektör standartlarının üzerinde hizmet kalitesi." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-8 md:py-12">
        <Container>
          <Breadcrumb items={[{ label: "Hakkımızda" }]} />

          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-3xl font-bold text-[var(--text)] md:text-4xl">
              Hakkımızda
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
              {companyInfo.aboutLong}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                  <v.icon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <h2 className="mb-2 font-heading text-lg font-bold text-[var(--text)]">
                  {v.title}
                </h2>
                <p className="text-sm text-[var(--muted)]">{v.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-neutral-800">
              <div className="flex h-full w-full items-center justify-center text-white/60">
                <div className="text-center">
                  <div className="mb-3 text-5xl font-bold font-heading text-[var(--primary)]">
                    {companyInfo.shortName}
                  </div>
                  <p className="text-sm">Profesyonel Araç Kiralama</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-[var(--text)] md:text-3xl">
                Neden {companyInfo.name}?
              </h2>
              <p className="mb-6 text-[var(--muted)] leading-relaxed">
                Geniş araç filomuz, şeffaf fiyatlandırma politikamız ve 7/24
                müşteri desteğimizle sektörde fark yaratıyoruz. Bireysel ve
                kurumsal müşterilerimize güvenilir çözümler sunmaya devam
                ediyoruz.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-[var(--surface)] p-4 text-center">
                  <div className="font-heading text-2xl font-bold text-[var(--primary)]">
                    {companyInfo.stats.experience}
                  </div>
                  <div className="text-xs text-[var(--muted)]">Yıllık Deneyim</div>
                </div>
                <div className="rounded-xl bg-[var(--surface)] p-4 text-center">
                  <div className="font-heading text-2xl font-bold text-[var(--primary)]">
                    {companyInfo.stats.vehicles}
                  </div>
                  <div className="text-xs text-[var(--muted)]">Araç</div>
                </div>
                <div className="rounded-xl bg-[var(--surface)] p-4 text-center">
                  <div className="font-heading text-2xl font-bold text-[var(--primary)]">
                    {companyInfo.stats.customers}
                  </div>
                  <div className="text-xs text-[var(--muted)]">Mutlu Müşteri</div>
                </div>
                <div className="rounded-xl bg-[var(--surface)] p-4 text-center">
                  <div className="font-heading text-2xl font-bold text-[var(--primary)]">
                    {companyInfo.stats.support}
                  </div>
                  <div className="text-xs text-[var(--muted)]">Destek</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  );
}
