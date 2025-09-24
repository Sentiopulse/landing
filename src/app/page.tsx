import HeroSection from "@/components/Hero/HeroSection"
import FeatureSection from "@/components/Features/FeatureSection"
import AboutSection from "@/components/MeetSentioPulse/AboutSection"
import PricingSection from "@/components/Pricing/PricingSection"
import StatsSection from "@/components/Stats/StatsSection"
import Footer from "@/components/Footer/Footer"


export default function HomePage() {
  return <main className="w-full">
    <HeroSection />
    <FeatureSection />
    <AboutSection />
    <PricingSection />
    <StatsSection />
    <Footer />
  </main>
}