import Footer from "@/components/footer";
import StatsSection from "@/components/statsSection";
import FeaturePage from "@/components/Features/feature";
import MeetSentioPulseSection from "@/components/meetSentioPulseSection";

export default function HomePage(){
  return <main>
    
    <FeaturePage/>
    <MeetSentioPulseSection />
    <StatsSection />

    <Footer />
  </main>
}
