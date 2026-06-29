export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Anasayfa", href: "/" },
  {
    label: "Kurumsal",
    href: "#",
    children: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
    ],
  },
  { label: "Araçlarımız", href: "/araclar" },
  {
    label: "Hizmetler",
    href: "#",
    children: [
      { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
      { label: "Günlük Araç Kiralama", href: "/gunluk-arac-kiralama" },
      { label: "Uzun Dönem Araç Kiralama", href: "/uzun-donem-arac-kiralama" },
    ],
  },
  { label: "Kiralama Koşulları", href: "/kiralama-kosullari" },
  { label: "İletişim", href: "/iletisim" },
];

export const footerNav = {
  kurumsal: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { label: "Kiralama Koşulları", href: "/kiralama-kosullari" },
    { label: "KVKK", href: "/kvkk" },
    { label: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" },
    { label: "İletişim", href: "/iletisim" },
  ],
  categories: [
    { label: "Ekonomik", href: "/araclar?kategori=Ekonomik" },
    { label: "Orta Sınıf", href: "/araclar?kategori=Orta+S%C4%B1n%C4%B1f" },
    { label: "SUV", href: "/araclar?kategori=SUV" },
    { label: "Aile Araçları", href: "/araclar?kategori=Aile" },
    { label: "Ticari", href: "/araclar?kategori=Ticari" },
    { label: "Premium", href: "/araclar?kategori=Premium" },
  ],
  services: [
    { label: "Günlük Kiralama", href: "/gunluk-arac-kiralama" },
    { label: "Uzun Dönem Kiralama", href: "/uzun-donem-arac-kiralama" },
    { label: "Kurumsal Kiralama", href: "/hizmetlerimiz" },
  ],
};
