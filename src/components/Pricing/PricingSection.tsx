
import React from "react";
import { Mail, Crown } from "lucide-react";
import { PricingCard } from "./PricingCard";

const TIERS = [
  {
    title: "Free",
    price: "$0",
    priceSub: "/forever",
    description: "Get started with essential sentiment insights.",
    features: [
      "Weekly newsletter with key insights",
      "Daily sentiment posts on Twitter/X",
      "Access to public sentiment feed",
      "Basic market coverage (BTC, ETH, SPY)",
      "Community support",
    ],
    icon: (
      <span className="flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
        <Mail size={32} />
      </span>
    ),
    buttonText: "Start Free",
  },
  {
    title: "Premium",
    price: "$29",
    priceSub: "/month",
    description: "Unlock advanced analytics and real-time alerts.",
    features: [
      "Real-time email alerts for custom assets",
      "Interactive dashboard with filtering",
      "Extended market coverage (500+ assets)",
      "Trustworthiness scoring",
      "Historical sentiment data",
      "API access (coming soon)",
      "Priority support",
    ],
    icon: (
      <span className="flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
        <Crown size={32} aria-hidden="true" />
      </span>
    ),
    buttonText: "Start Premium Trial",
    highlight: "Most Popular",
  },
];

export default function PricingSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-5 text-foreground leading-tight">
          <span className="block">Simple, Transparent</span>
          <span className="block text-white">Pricing</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-normal">
          Start free, upgrade anytime. No hidden fees. Cancel anytime.
        </p>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {TIERS.map((tier, idx) => (
          <PricingCard key={tier.title} {...tier} />
        ))}
      </div>
      <div className="w-full max-w-2xl mx-auto mt-16 text-center">
        <p className="text-base md:text-lg text-muted-foreground">
          <span className="font-semibold text-foreground">30-day money-back guarantee.</span> No questions asked.
        </p>
      </div>
    </section>
  );
}
