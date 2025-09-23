import Footer from "@/components/Footer/Footer";
import AboutSection from "@/components/MeetSentioPulse/AboutSection";
import PricingSection from "@/components/PricingSection";
import MeetSentioPulseSection from "@/components/MeetSentioPulse/meetSentioPulseSection";
import PricingSection from "@/components/Pricing/PricingSection";
import StatsSection from "@/components/Stats/StatsSection";
import FeatureSection from "@/components/Features/FeatureSection";
import HeroFrontPage from "./hero/page";



export default function HomePage() {
  return <main className="w-full">
    <HeroFrontPage/>
    <FeatureFrontPage/>
    <AboutSection />
    <PricingSection />
    <StatsSection />
    <Footer />
  </main>
}