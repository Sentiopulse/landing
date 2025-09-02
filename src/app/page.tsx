import Footer from "@/components/footer";
import StatsSection from "@/components/Stats/StatsSection";
import MeetSentioPulseSection from "@/components/meetSentioPulseSection";
import HeroFrontPage from "./hero/page";
import FeatureFrontPage from "./features/page";

export default function HomePage(){
  return <main className="w-full">
    <HeroFrontPage/>
    <FeatureFrontPage/>
    <MeetSentioPulseSection />
    <StatsSection />

    <Footer />
  </main>
}
