import React from "react";
import { Mail, Crown } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-black">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
        Choose Your <span className="text-green-500">Signal Strength</span>
      </h2>
      <p className="text-lg text-neutral-400 text-center max-w-3xl mb-12 font-normal">
        Start with our free tier and upgrade when you&apos;re ready for advanced
        features.
      </p>

      {/* Pricing Cards */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 mt-6">
        {/* Free Tier Card */}
        <div className="relative rounded-2xl border border-neutral-700 bg-black/40 shadow-2xl backdrop-blur-xl p-7 flex flex-col items-center gap-5 h-[600px] w-[90%] transition duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]">
          <span
            className="inline-flex h-14 w-14 items-center justify-center rounded-full
                           bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 shadow"
          >
            <Mail className="w-7 h-7 text-white" />
          </span>
          <h3 className="font-extrabold text-3xl text-white">Free Tier</h3>
          <p className="text-3xl text-white">
            $0
            <span className="text-lg text-gray-400">/forever</span>
          </p>
          <p className="text-base text-gray-400 text-center">
            Perfect for getting started with market sentiment
          </p>
          <ul className="text-sm text-white space-y-4 text-left pl-6">
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Weekly newsletter with key
              insights
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Daily sentiment posts on
              Twitter/X
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Access to public sentiment
              feed
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Basic market coverage
              (BTC, ETH, SPY)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Community support
            </li>
          </ul>
          <button className="bg-gray-800 text-black rounded-lg font-light text-lg px-10 py-4 shadow-lg transition hover:opacity-90 w-full mt-6 text-center">
            Start Free
          </button>
        </div>

        {/* Premium Tier Card */}
        <div className="relative rounded-2xl border border-green-500 bg-black/40 shadow-[0_0_20px_rgba(0,255,0,0.5)] backdrop-blur-xl p-7 flex flex-col items-center gap-5 h-[650px] w-[95%] -mt-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Most Popular
          </div>
          <span
            className="inline-flex h-14 w-14 items-center justify-center rounded-full
                           bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 shadow"
          >
            <Crown className="w-7 h-7 text-white" />
          </span>
          <h3 className="font-extrabold text-2xl text-white">Premium</h3>
          <p className="text-3xl text-white">
            $29
            <span className="text-lg text-gray-400">/per month</span>
          </p>
          <p className="text-base text-neutral-300 text-center">
            Advanced features for serious traders and investors
          </p>
          <ul className="text-sm text-white space-y-4 text-left pl-6">
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Real-time email alerts for
              custom assets
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Interactive dashboard with
              filtering
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Extended market coverage
              (500+ assets)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Trustworthiness scoring
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Historical sentiment data
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> API access (coming soon)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✔</span> Priority support
            </li>
          </ul>
          <button className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-black rounded-lg font-light text-lg px-10 py-4 shadow-lg transition hover:opacity-90 w-full mt-6 text-center">
            Start Premium Trial
          </button>
        </div>
      </div>

      <p className="text-lg text-gray-400 text-center mt-16">
        All plans include our 30-day money-back guarantee. No questions asked.
      </p>
    </section>
  );
}
