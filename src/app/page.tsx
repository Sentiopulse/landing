import Footer from "@/components/Footer/Footer";
import MeetSentioPulseSection from "@/components/MeetSentioPulse/meetSentioPulseSection";
import PricingSection from "@/components/Pricing/PricingSection";
import StatsSection from "@/components/Stats/StatsSection";
import FeatureFrontPage from "./features/page";
import HeroFrontPage from "./hero/page";



export default function HomePage(){
  return <main className="w-full">
    <HeroFrontPage/>
    <FeatureFrontPage/>
    <MeetSentioPulseSection />
    <PricingSection />
    <StatsSection />
    <Footer />
  </main>
}