import React from "react";
import { Mail, Crown } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-[var(--custom-card-color)]">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-foreground">
        Choose Your{" "}
        <span className="text-[var(--custom-green)]">Signal Strength</span>
      </h2>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mb-12 font-normal">
        Start with our free tier and upgrade when you&apos;re ready for advanced
        features.
      </p>

      {/* Pricing Cards */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 mt-6">
        {/* Free Tier Card */}
        <div className="relative rounded-2xl border border-border bg-[var(--custom-card-color)] shadow-2xl backdrop-blur-xl p-7 flex flex-col items-center gap-5 h-[600px] w-[90%] transition duration-300 hover:shadow-[0_0_20px_rgba(33,143,88,0.5)]">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] shadow">
            <Mail className="w-7 h-7 text-background" />
          </span>
          <h3 className="font-extrabold text-3xl text-foreground">Free Tier</h3>
          <p className="text-3xl text-foreground">
            $0
            <span className="text-lg text-muted-foreground">/forever</span>
          </p>
          <p className="text-base text-muted-foreground text-center">
            Perfect for getting started with market sentiment
          </p>
          <ul className="text-sm text-foreground space-y-4 text-left pl-6">
            <li className="flex items-center gap-2">
              <span className="text-[var(--custom-purple)]">✔</span> Weekly
              newsletter with key insights
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--custom-purple)]">✔</span> Daily
              sentiment posts on Twitter/X
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--custom-purple)]">✔</span> Access to
              public sentiment feed
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--custom-purple)]">✔</span> Basic
              market coverage (BTC, ETH, SPY)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--custom-purple)]">✔</span> Community
              support
            </li>
          </ul>
          <button className="bg-background text-foreground rounded-lg font-light text-lg px-10 py-4 shadow-lg transition hover:opacity-90 w-full mt-6 text-center">
            Start Free
          </button>
        </div>

        {/* Premium Tier Card */}
        <div className="relative rounded-2xl border border-[var(--custom-green)] bg-[var(--custom-card-color)] shadow-[0_0_20px_rgba(33,143,88,0.5)] backdrop-blur-xl p-7 flex flex-col items-center gap-5 h-[650px] w-[95%] -mt-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,var(--custom-purple)_0%,var(--custom-blue)_100%)] text-background text-xs px-3 py-1 rounded-full font-medium">
            Most Popular
          </div>
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-blue)_0%,var(--custom-purple)_40%,var(--custom-green)_90%)] shadow">
            <Crown className="w-7 h-7 text-background" />
          </span>
          <h3 className="font-extrabold text-2xl text-foreground">Premium</h3>
          <p className="text-3xl text-foreground">
            $29
            <span className="text-lg text-muted-foreground">/per month</span>
          </p>
          <p className="text-base text-muted-foreground text-center">
            Advanced features for serious traders and investors
          </p>
          <ul className="text-sm text-foreground space-y-4 text-left pl-6">
            <li className="flex items-center gap-2">
              <span className="text-[var(--custom-purple)]">✔</span> Real-time
              email alerts for custom assets
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--custom-purple)]">✔</span> Interactive
              dashboard with filtering
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[color:var(--custom-purple)]">✔</span>{" "}
              Extended market coverage (500+ assets)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[color:var(--custom-purple)]">✔</span>{" "}
              Trustworthiness scoring
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[color:var(--custom-purple)]">✔</span>{" "}
              Historical sentiment data
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--custom-purple)]">✔</span> API access
              (coming soon)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--custom-purple)]">✔</span> Priority
              support
            </li>
          </ul>
          <button className="bg-[linear-gradient(90deg,var(--custom-green)_0%,var(--custom-blue)_50%,var(--custom-purple)_100%)] text-background rounded-lg font-light text-lg px-10 py-4 shadow-lg transition hover:opacity-90 w-full mt-6 text-center">
            Start Premium Trial
          </button>
        </div>
      </div>

      <p className="text-lg text-muted-foreground text-center mt-16">
        All plans include our 30-day money-back guarantee. No questions asked.
      </p>
    </section>
  );
}
