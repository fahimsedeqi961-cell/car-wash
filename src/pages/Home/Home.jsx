import CoreServices from "./CoreServices";
import HomeHero from "./HomeHero";
import Testimonials from "./Testimonials";
import TrustSignals from "./TrustSignals";
import Features from "./Features"


export default function Home() {
  return (
    <>
      <HomeHero />
      <CoreServices />
      <Features />
      <TrustSignals />
      <Testimonials />

    </>
  )
}