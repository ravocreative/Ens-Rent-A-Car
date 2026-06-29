import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/home/CallToAction";
import { faqs } from "@/data/faq";
import { generateSEO, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "İslahiye Araç Kiralama Sıkça Sorulan Sorular",
  description:
    "İslahiye araç kiralama belgeleri, yaş sınırı, depozito, kilometre ve teslimat seçenekleri hakkında merak edilen soruları inceleyin.",
  path: "/sikca-sorulan-sorular",
});

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      <section className="py-8 md:py-12">
        <Container>
          <Breadcrumb items={[{ label: "Sıkça Sorulan Sorular" }]} />

          <div className="mt-6 max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl font-bold text-[var(--text)] md:text-4xl">
              Sıkça Sorulan Sorular
            </h1>
            <p className="mt-4 text-[var(--muted)]">
              Araç kiralama süreciyle ilgili en çok sorulan soruların
              yanıtlarını aşağıda bulabilirsiniz.
            </p>
          </div>

          <div className="mt-10 mx-auto max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  );
}
