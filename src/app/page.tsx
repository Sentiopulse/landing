import Footer from "@/components/Footer/Footer";
import MeetSentioPulseSection from "@/components/MeetSentioPulse/meetSentioPulseSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/Stats/StatsSection";
import FeatureFrontPage from "./features/page";
import HeroSection from "@/components/Hero/HeroSection";


export default function HomePage() {
  return <main className="w-full">
    <HeroSection />
    <FeatureFrontPage />
    <MeetSentioPulseSection />
    <PricingSection />
    <StatsSection />
    <Footer />
  </main>
}