import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductCategories from "@/components/sections/ProductCategories";
import SupplyProcess from "@/components/sections/SupplyProcess";
import DistributionNetwork from "@/components/sections/DistributionNetwork";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DoctorCTA from "@/components/sections/DoctorCTA";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AboutSection />
      <ProductCategories />
      <SupplyProcess />
      <DistributionNetwork />
      <WhyChooseUs />
      <DoctorCTA />
      <ContactSection />
    </>
  );
}
