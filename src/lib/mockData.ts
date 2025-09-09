import { Clock4, TrendingDown, TriangleAlert } from "lucide-react";

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
    title: "Missed Opportunities",
    description: "Without real-time insights, you're always one step behind market sentiment shifts and emerging trends.",
    icon: TrendingDown
  }
]


export const HeroFooterInfo = [
  {
    title: "10M+",
    subtitle: "Posts Analyzed Daily"
  }, {
    title: "<10min",
    subtitle: "Signal Latency"
  }, {
    title: "85%",
    subtitle: "Accuracy Rate"
  }
]

import { Bot, Shield, Target, Zap } from "lucide-react";

export const MeetSentioPulseCardInfo = [
  {
    title: "AI-Powered Analysis",
    description:
      "Advanced machine learning models process millions of social media posts in real-time, extracting meaningful sentiment patterns.",
    icon: Bot,
    tag: "Core AI"
  },
  {
    title: "Real-Time Processing",
    description:
      "Get market sentiment signals in under 10 minutes from post to dashboard, keeping you ahead of market movements.",
    icon: Zap,
    tag: "Speed"
  },
  {
    title: "Simple Signals",
    description:
      "Complex data distilled into three clear signals: Bullish, Neutral, or Bearish. No more guesswork or analysis paralysis.",
    icon: Target,
    tag: "Clarity"
  },
  {
    title: "Trustworthiness Score",
    description:
      "Every signal comes with a confidence score, helping you gauge the reliability of the sentiment data. Get market sentiment signals in under 10 minutes from post to dashboard, keeping you ahead of market movements.",
    icon: Shield,
    tag: "Trust"
  }
]