import Footer from "@/components/Footer/Footer";
import MeetSentioPulseSection from "@/components/MeetSentioPulse/meetSentioPulseSection";
import StatsSection from "@/components/Stats/StatsSection";
import HeroFrontPage from "./hero/page";
import PricingSection from "../components/PricingSection/PricingSection";
import FeatureFrontPage from "./features/page";


export default function HomePage() {
  return (
    <main className="w-full">
      <HeroFrontPage />
      <div id="features">
      <FeatureFrontPage/>
      </div>
      <MeetSentioPulseSection />
      <div id="pricing">
      <PricingSection />
      </div>
      <StatsSection />
      <Footer />
    </main>
  );
}
