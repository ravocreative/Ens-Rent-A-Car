"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Sıkça Sorulan Sorular"
          subtitle="Araç kiralama ile ilgili merak edilen soruların yanıtları."
        />
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
