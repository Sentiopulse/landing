import React from "react";
import StatCard from "./StatCard";
import { Mail } from "lucide-react";

const statCards = [
  { value: "24/7", label: "Market Coverage" },
  { value: "500+", label: "Assets Tracked" },
  { value: "10M+", label: "Daily Analysis" },
  { value: "99.9%", label: "Uptime" },
];

export default function StatsSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-10 md:py-16"
      style={{
        background:
          "linear-gradient(90deg, var(--custom-green) 0%, var(--custom-blue) 40%, var(--custom-purple) 90%)",
      }}
    >
      <h1 className="text-center font-bold leading-tight md:text-5xl text-3xl mb-5 text-[var(--primary-foreground)]">
        Ready to Transform Your Trading?
      </h1>
      <div className="text-center text-lg md:text-xl mb-10 font-normal max-w-2xl mx-auto text-background">
        Join thousands of traders who rely on SentioPulse for clear, actionable
        market sentiment signals.
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-14 w-full max-w-2xl">
        <button className="bg-[var(--primary-foreground)] text-[var(--primary)] rounded-lg font-semibold text-lg px-10 py-4 shadow-lg transition hover:opacity-90 w-full md:w-auto hover:cursor-pointer">
          Start Your Free Trial
          <span className="inline-block align-middle ml-2 text-xl" aria-hidden>
            &rarr;
          </span>
        </button>
        <button className="bg-[var(--primary-foreground)] text-[var(--primary)] rounded-lg font-semibold text-lg px-10 py-4 flex items-center justify-center gap-2 shadow-lg transition w-full md:w-auto hover:bg-[linear-gradient(90deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] hover:cursor-pointer">
          Get Weekly Newsletter
          <Mail className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 w-full max-w-3xl pt-4">
        {statCards.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
