import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { companyInfo } from "@/config/company";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
}

export function generateSEO({
  title,
  description,
  path = "",
  noIndex = false,
  image,
}: SEOProps): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : siteConfig.defaultTitle;
  const desc = description || siteConfig.defaultDescription;
  const url = `${siteConfig.domain}${path}`;
  const ogImage = image || siteConfig.openGraphImage;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "İslahiye araç kiralama",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}

export function generateAutoRentalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: companyInfo.name,
    url: siteConfig.domain,
    image: `${siteConfig.domain}${siteConfig.openGraphImage}`,
    telephone: [companyInfo.primaryPhone.raw, companyInfo.secondaryPhone.raw],
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.district,
      addressRegion: companyInfo.address.city,
      postalCode: companyInfo.address.postalCode,
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "City", name: "İslahiye" },
      { "@type": "AdministrativeArea", name: "Gaziantep" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyInfo.primaryPhone.raw,
        contactType: "customer service",
        availableLanguage: ["Turkish"],
      },
      {
        "@type": "ContactPoint",
        telephone: companyInfo.secondaryPhone.raw,
        contactType: "customer service",
        availableLanguage: ["Turkish"],
      },
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/images/logo.png`,
    telephone: [companyInfo.primaryPhone.raw, companyInfo.secondaryPhone.raw],
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.district,
      addressRegion: companyInfo.address.city,
      postalCode: companyInfo.address.postalCode,
      addressCountry: "TR",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
    },
  };
}

// Backward compat alias
export const generateLocalBusinessSchema = generateAutoRentalSchema;

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.url}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateVehicleSchema(vehicle: {
  name: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  transmission: string;
  seats: number;
  bodyType?: string;
  image: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: vehicle.name,
    description: vehicle.description,
    brand: { "@type": "Brand", name: vehicle.brand },
    model: vehicle.model,
    vehicleModelDate: String(vehicle.year),
    fuelType: vehicle.fuel,
    vehicleTransmission: vehicle.transmission,
    seatingCapacity: vehicle.seats,
    bodyType: vehicle.bodyType,
    image: `${siteConfig.domain}${vehicle.image}`,
  };
}
