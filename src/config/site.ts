export const siteConfig = {
  name: "İslahiye Rent a Car",
  shortName: "İslahiye Rent a Car",

  domain: "https://www.siteadresi.com",

  // Alias for backward compatibility with older imports
  get url() {
    return this.domain;
  },

  locale: "tr_TR",
  language: "tr",

  city: "Gaziantep",
  district: "İslahiye",
  country: "Türkiye",

  defaultTitle:
    "İslahiye Araç Kiralama | İslahiye Rent a Car",

  titleTemplate: "%s | İslahiye Rent a Car",

  defaultDescription:
    "İslahiye araç kiralama hizmetleri. Ekonomik, konforlu ve bakımlı kiralık araç seçenekleri için Recep Taş ile iletişime geçin.",

  // Alias kept for backward compatibility
  get description() {
    return this.defaultDescription;
  },

  keywords: [
    "İslahiye araç kiralama",
    "İslahiye rent a car",
    "İslahiye kiralık araç",
    "Gaziantep İslahiye araç kiralama",
    "İslahiye oto kiralama",
    "İslahiye günlük araç kiralama",
    "İslahiye haftalık araç kiralama",
    "İslahiye aylık araç kiralama",
    "İslahiye uzun dönem araç kiralama",
    "İslahiye uygun araç kiralama",
    "İslahiye ekonomik araç kiralama",
  ],

  openGraphImage: "/images/og/islahiye-rent-a-car.jpg",

  social: {
    instagram: "",
    facebook: "",
  },

  // Google Search Console doğrulama kodu eklendiğinde buraya yazılır.
  verification: {
    google: "",
  },
};
