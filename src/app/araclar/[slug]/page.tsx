import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import VehicleGallery from "@/components/vehicles/VehicleGallery";
import VehicleSpecs from "@/components/vehicles/VehicleSpecs";
import VehicleCallCard from "@/components/vehicles/VehicleCallCard";
import SimilarVehicles from "@/components/vehicles/SimilarVehicles";
import MobileVehicleBar from "./MobileVehicleBar";
import { vehicles, getVehicleBySlug } from "@/data/vehicles";
import { generateSEO, generateVehicleSchema, generateBreadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return {};
  return generateSEO({
    title: `${vehicle.name} Kiralama İslahiye | Günlük Fiyat Bilgisi`,
    description: `${vehicle.name} kiralama seçeneklerini, teknik özelliklerini ve araç detaylarını inceleyin. İslahiye güncel fiyat ve müsaitlik bilgisi için bizi arayın.`,
    path: `/araclar/${vehicle.slug}`,
    image: vehicle.image,
  });
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateVehicleSchema(vehicle)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Anasayfa", url: "/" },
              { name: "Araçlarımız", url: "/araclar" },
              { name: vehicle.name, url: `/araclar/${vehicle.slug}` },
            ])
          ),
        }}
      />

      <section className="py-8 md:py-12">
        <Container>
          <Breadcrumb
            items={[
              { label: "Araçlarımız", href: "/araclar" },
              { label: vehicle.name },
            ]}
          />

          <div className="mt-6 flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <VehicleGallery images={vehicle.gallery} name={vehicle.name} />

              <div className="mt-8">
                <h1 className="mb-2 font-heading text-2xl font-bold text-[var(--text)] md:text-3xl">
                  {vehicle.name}
                </h1>
                <p className="text-[var(--muted)]">
                  {vehicle.year} Model • {vehicle.bodyType} • {vehicle.category}
                </p>
              </div>

              <div className="mt-6">
                <h2 className="mb-3 font-heading text-xl font-bold text-[var(--text)]">
                  Araç Hakkında
                </h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {vehicle.description}
                </p>
              </div>

              <div className="mt-8">
                <VehicleSpecs vehicle={vehicle} />
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <h2 className="mb-3 font-heading text-lg font-bold text-[var(--text)]">
                  Kiralama Koşulları
                </h2>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li>• Minimum yaş: {vehicle.minimumAge}</li>
                  <li>• Minimum ehliyet süresi: {vehicle.licenseYear} yıl</li>
                  <li>• Günlük kilometre limiti: {vehicle.kilometerLimit}</li>
                  <li>• Depozito: {vehicle.deposit}</li>
                  <li>• Araç tam kapsamlı sigortalıdır</li>
                  <li>• Güncel fiyat ve müsaitlik için lütfen bizi arayınız</li>
                </ul>
              </div>

              <SimilarVehicles currentVehicle={vehicle} />
            </div>

            <div className="hidden w-80 flex-shrink-0 lg:block">
              <div className="sticky top-24">
                <VehicleCallCard vehicle={vehicle} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <MobileVehicleBar vehicle={vehicle} />
    </>
  );
}
