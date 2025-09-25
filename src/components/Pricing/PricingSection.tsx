
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
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--custom-green)] via-[var(--custom-blue)] to-[var(--custom-purple)] shadow-lg">
        <Mail size={32} className="text-background" />
      </span>
    ),
    buttonText: "Start Free",
    cardClassName:
      "rounded-3xl border border-border bg-[var(--custom-card-color)] shadow-xl backdrop-blur-xl p-8 flex flex-col items-center gap-6 min-h-[500px] w-full transition duration-300 hover:shadow-[0_0_24px_rgba(33,143,88,0.15)]",
    buttonClassName:
      "bg-background text-foreground rounded-lg font-medium text-base px-8 py-3 shadow-md transition hover:opacity-90 w-full mt-6",
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
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--custom-blue)] via-[var(--custom-purple)] to-[var(--custom-green)] shadow-lg">
        <Crown size={32} className="text-background" aria-hidden="true" />
      </span>
    ),
    buttonText: "Start Premium Trial",
    highlight: "Most Popular",
    cardClassName:
      "relative rounded-3xl border-2 border-[var(--custom-green)] bg-[var(--custom-card-color)] shadow-[0_0_32px_rgba(33,143,88,0.15)] backdrop-blur-xl p-8 flex flex-col items-center gap-6 min-h-[520px] w-full md:-mt-6",
    buttonClassName:
      "bg-gradient-to-r from-[var(--custom-green)] via-[var(--custom-blue)] to-[var(--custom-purple)] text-background rounded-lg font-bold text-base px-8 py-3 shadow-md transition hover:opacity-90 w-full mt-4",
  },
];

export default function PricingSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-[var(--custom-card-color-two)]">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-5 text-foreground leading-tight">
          <span className="block">Simple, Transparent</span>
          <span className="block text-[var(--custom-green)]">Pricing</span>
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
