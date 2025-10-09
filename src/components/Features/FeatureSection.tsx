import { FeatureCards } from "@/lib/mockData";
import FeatureCard from "./FeatureCard";
import FeatureTitle from "./FeatureTitle";

export default function FeatureSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <FeatureTitle />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-10">
        {FeatureCards.map((card) => (
          <div key={card.id} className="flex justify-center">
            <FeatureCard
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
