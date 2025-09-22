import Footer from "@/components/Footer/Footer";
import MeetSentioPulseSection from "@/components/MeetSentioPulse/meetSentioPulseSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/Stats/StatsSection";
import FeatureSection from "@/components/Features/FeatureSection";
import HeroFrontPage from "./hero/page";



export default function HomePage() {
  return <main className="w-full">
    <HeroFrontPage />
    <FeatureSection />
    <MeetSentioPulseSection />
    <PricingSection />
    <StatsSection />
    <Footer />
  </main>
}