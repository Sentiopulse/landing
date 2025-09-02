import Footer from "@/components/footer";
import StatsSection from "@/components/statsSection";
import MeetSentioPulseSection from "@/components/meetSentioPulseSection";
import HeroFrontPage from "./hero/page";
import FeatureFrontPage from "./features/page";

export default function HomePage(){
  return <main>
    <HeroFrontPage/>
    <FeatureFrontPage/>
    <MeetSentioPulseSection />
    <StatsSection />

    <Footer />
  </main>
}
