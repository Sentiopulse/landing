import React from "react";
import { Mail, Crown } from "lucide-react";
import { PricingCard } from "./PricingCard";

export default function PricingSection() {
  // Features for each tier
  const freeFeatures = [
    "Weekly newsletter with key insights",
    "Daily sentiment posts on Twitter/X",
    "Access to public sentiment feed",
    "Basic market coverage (BTC, ETH, SPY)",
    "Community support",
  ];
  const premiumFeatures = [
    "Real-time email alerts for custom assets",
    "Interactive dashboard with filtering",
    "Extended market coverage (500+ assets)",
    "Trustworthiness scoring",
    "Historical sentiment data",
    "API access (coming soon)",
    "Priority support",
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-[var(--custom-card-color-two)]">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-foreground">
        Choose Your{" "}
        <span className="text-[var(--custom-green)]">Signal Strength</span>
      </h2>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mb-12 font-normal">
        Start with our free tier and upgrade when you&apos;re ready for advanced features.
      </p>

      {/* Pricing Cards */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 mt-6">
        <PricingCard
          icon={
            <span className="flex h-18 w-18 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] shadow">
              <Mail size={35} className="text-background" />
            </span>
          }
          title="Free Tier"
          price="$0"
          priceSub="/forever"
          description="Perfect for getting started with market sentiment"
          features={freeFeatures}
          buttonText="Start Free"
          cardClassName="rounded-2xl border border-border bg-[var(--custom-card-color)] shadow-2xl backdrop-blur-xl p-7 flex flex-col items-center gap-5 h-[600px] w-[90%] transition duration-300 hover:shadow-[0_0_20px_rgba(33,143,88,0.5)]"
          buttonClassName="bg-background text-foreground rounded-lg font-light text-lg px-10 py-4 shadow-lg transition hover:opacity-90 md:w-96 mt-6 text-center"
        />

        <PricingCard
          icon={
            <span className="inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-blue)_0%,var(--custom-purple)_40%,var(--custom-green)_90%)] shadow mt-2">
              <Crown size={35} className="text-background" aria-hidden="true" />
            </span>
          }
          title="Premium"
          price="$29"
          priceSub="/per month"
          description="Advanced features for serious traders and investors"
          features={premiumFeatures}
          buttonText="Start Premium Trial"
          highlight="Most Popular"
          cardClassName="relative rounded-2xl border border-[var(--custom-green)] bg-[var(--custom-card-color)] shadow-[0_0_20px_rgba(33,143,88,0.5)] backdrop-blur-xl p-7 flex flex-col items-center gap-5 h-[650px] w-[95%] -mt-6"
          buttonClassName="bg-[linear-gradient(90deg,var(--custom-green)_0%,var(--custom-blue)_50%,var(--custom-purple)_100%)] text-background rounded-lg font-bold text-lg px-10 py-4 shadow-lg transition hover:opacity-90 md:w-96 mt-2 text-center"
        />
      </div>

      <p className="text-lg text-muted-foreground text-center mt-16">
        All plans include our 30-day money-back guarantee. No questions asked.
      </p>
    </section>
  );
}
