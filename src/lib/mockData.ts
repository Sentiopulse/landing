import { TriangleAlert } from "lucide-react";
import { Clock4 } from 'lucide-react';
import { TrendingDown } from 'lucide-react';

export const FeatureCards = [
    {
        title: "Information Overload",
        description: "Millions of posts, tweets, and comments flood social media every minute. How do you find the signal in all that noise?",
        icon: TriangleAlert
    },
    {
        title: "Time-Intensive Analysis",
        description: "Manual sentiment analysis takes hours or days. By the time you've processed the data, the market has already moved.",
        icon: Clock4
    },
    {
        title:"Missed Opportunities",
        description: "Without real-time insights, you're always one step behind market sentiment shifts and emerging trends.",
        icon: TrendingDown
    }
]