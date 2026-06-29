import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import HeroSlider from "@/components/home/HeroSlider";
import VehicleSearch from "@/components/home/VehicleSearch";
import FeaturedVehicles from "@/components/home/FeaturedVehicles";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VehicleCategories from "@/components/home/VehicleCategories";
import HowItWorks from "@/components/home/HowItWorks";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import CallToAction from "@/components/home/CallToAction";

export const metadata: Metadata = generateSEO({
  title: "İslahiye Araç Kiralama | Güvenilir Rent a Car",
  description:
    "İslahiye araç kiralama hizmetleriyle bakımlı ve konforlu araç seçeneklerini inceleyin. Güncel fiyat ve müsaitlik bilgisi için Recep Taş’ı arayın.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <VehicleSearch />
      <FeaturedVehicles />
      <WhyChooseUs />
      <VehicleCategories />
      <HowItWorks />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <FAQSection />
      <CallToAction />
    </>
  );
}
