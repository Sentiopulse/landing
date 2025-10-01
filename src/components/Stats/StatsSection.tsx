import React from "react";
import StatCard from "./StatCard";
import { Button } from "../ui/button";
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
    >
      <h1 className="text-center font-bold leading-tight md:text-5xl text-3xl mb-5">
        Ready to Transform Your Trading?
      </h1>
      <div className="text-center text-lg md:text-xl mb-10 font-normal max-w-2xl mx-auto">
        Join thousands of traders who rely on SentioPulse for clear, actionable
        market sentiment signals.
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-14 w-full max-w-2xl">
        <Button>
          Start Your Free Trial
          <span className="inline-block align-middle ml-2 text-xl" aria-hidden>
            &rarr;
          </span>
        </Button>
        <Button>
          Get Weekly Newsletter
          <Mail className="w-5 h-5" />
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 w-full max-w-3xl pt-4">
        {statCards.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
