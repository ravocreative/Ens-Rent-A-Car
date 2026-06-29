import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "İslahiye Araç Kiralama İletişim | Recep Taş",
  description:
    "İslahiye araç kiralama için Recep Taş ile iletişime geçin. Telefon: 0537 257 85 56. Adres: Pınarbaşı, Atalay Erdoğan Caddesi No:5.",
  path: "/iletisim",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
