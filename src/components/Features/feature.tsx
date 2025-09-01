import { FeatureCards } from "@/lib/mockData";
import ReusableFeatureCard from "./ReusableCard";


export default function FeaturePage(){
    return <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-10">
        {FeatureCards.map((card,index)=>(
            <ReusableFeatureCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            />
        ))}
    </div>
}