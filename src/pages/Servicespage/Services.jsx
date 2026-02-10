import HeroSection from "./HeroSection"
import ServicesGrid from "./ServicesGrid"
import TrustSection from "./TrustSection"
import WashingPro from "./WashingPro"
import PricingSection from '../Servicespage/PackagesSection';
import CallToAction from "./CTASection";

export default function Services() {
  return (
    <div>
      <HeroSection />
      <ServicesGrid />
      <TrustSection />
      <WashingPro />
      <PricingSection />
      <CallToAction />
    </div>
  )
}