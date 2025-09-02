import { FeatureCards } from "@/lib/mockData";
import ReusableFeatureCard from "./ReusableCard";
import FeatureTitleAndDescription from "./feature-title-and-desc";

export default function FeaturePage() {
  return (
    // Title and description
    <div className="min-h-screen my-auto mx-auto p-8">
      <FeatureTitleAndDescription/>
      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-auto">
        {FeatureCards.map((card, index) => (
          <ReusableFeatureCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}
