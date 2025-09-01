import React from "react";
import { Mail } from "lucide-react";

export default function StatsSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-10 md:py-16 bg-gradient-to-br from-[oklch(0.696_0.17_162.48)] via-chart-3 to-[oklch(0.627_0.265_303.9)]"
    >
      {/* Heading */}
      <h1 className="text-center font-bold text-foreground leading-tight md:text-5xl text-3xl mb-5">
        Ready to Transform Your Trading?
      </h1>
      {/* Subtitle */}
      <div className="text-center text-lg md:text-xl mb-10 font-normal text-sidebar-primary max-w-2xl mx-auto">
        Join thousands of traders who rely on SentioPulse for clear, actionable
        <br />
        market sentiment signals.
      </div>
      {/* Button Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-14 w-full max-w-2xl">
        <button
          className="bg-foreground text-background rounded-lg font-semibold text-lg px-10 py-4 shadow-lg transition hover:opacity-90 w-full md:w-auto"
        >
          Start Your Free Trial
          <span className="inline-block align-middle ml-2 text-xl" aria-hidden>
            →
          </span>
        </button>
        <button
          className="bg-foreground text-background rounded-lg font-semibold text-lg px-10 py-4 flex items-center justify-center gap-2 shadow-lg transition hover:opacity-90 w-full md:w-auto"
        >
          Get Weekly Newsletter
          <Mail className="w-5 h-5" />
        </button>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 w-full max-w-3xl pt-4">
        <div className="text-center">
          <div className="font-extrabold text-lg md:text-2xl text-foreground">24/7</div>
          <div className="mt-1 text-base text-muted-foreground">Market Coverage</div>
        </div>
        <div className="text-center">
          <div className="font-extrabold text-lg md:text-2xl text-foreground">500+</div>
          <div className="mt-1 text-base text-muted-foreground">Assets Tracked</div>
        </div>
        <div className="text-center">
          <div className="font-extrabold text-lg md:text-2xl text-foreground">10M+</div>
          <div className="mt-1 text-base text-muted-foreground">Daily Analysis</div>
        </div>
        <div className="text-center">
          <div className="font-extrabold text-lg md:text-2xl text-foreground">99.9%</div>
          <div className="mt-1 text-base text-muted-foreground">Uptime</div>
        </div>
      </div>
    </section>
  );
}
