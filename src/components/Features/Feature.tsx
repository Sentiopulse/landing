import { FeatureCards } from "@/lib/mockData";
import ReusableFeatureCard from "./ReusableCard";
import FeatureTitleAndDescription from "./FeatureTitle";

export default function FeaturePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <FeatureTitleAndDescription />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-10">
        {FeatureCards.map((card, index) => (
          <div key={index} className="flex justify-center">
            <ReusableFeatureCard
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
