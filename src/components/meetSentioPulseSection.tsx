import React from "react";
import { Bot, Zap } from "lucide-react";
import { Target, Shield } from "lucide-react";

export default function MeetSentioPulseSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-20 px-4"
      style={{
        background: "var(--custom-card-color)",
      }}
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        <span className="text-foreground">Meet </span>
        <span className="text-[var(--custom-green)]">SentioPulse</span>
      </h2>
      <p className="text-xl text-muted-foreground text-center max-w-3xl mb-12 font-normal">
        Our AI engine transforms social media chaos into clear, actionable
        market intelligence
        <br className="hidden md:block" />
        you can trust.
      </p>
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="relative rounded-2xl border border-border bg-[var(--custom-card-color)] shadow-2xl backdrop-blur-xl p-7 flex items-start gap-5 transition duration-200 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] shadow">
            <Bot className="w-7 h-7 text-background" />
          </span>
          <div>
            <div className="flex items-center mb-2 gap-3">
              <h3 className="font-extrabold text-2xl text-foreground">
                AI-Powered Analysis
              </h3>
              <span className="text-xs px-3 py-1 bg-foreground/10 rounded-full border border-neutral-700 text-foreground font-medium">
                Core AI
              </span>
            </div>
            <p className="text-base text-muted-foreground max-w-md">
              Advanced machine learning models process millions of social media
              posts in real-time, extracting meaningful sentiment patterns.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative rounded-2xl border border-neutral-700 bg-[var(--custom-card-color)] shadow-2xl backdrop-blur-xl p-7 flex items-start gap-5 transition duration-200 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] shadow">
            <Zap className="w-7 h-7 text-background" />
          </span>
          <div>
            <div className="flex items-center mb-2 gap-3">
              <h3 className="font-extrabold text-2xl text-foreground">
                Real-Time Processing
              </h3>
              <span className="text-xs px-3 py-1 bg-foreground/10 rounded-full border border-border text-foreground font-medium">
                Speed
              </span>
            </div>
            <p className="text-base text-muted-foreground max-w-md">
              Get market sentiment signals in under 10 minutes from post to
              dashboard, keeping you ahead of market movements.
            </p>
          </div>
        </div>
        {/* Card 3 - Simple Signals */}
        <div className="relative rounded-2xl border border-neutral-700 bg-[var(--custom-card-color)] shadow-2xl backdrop-blur-xl p-7 flex items-start gap-5 transition duration-200 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] shadow">
            <Target className="w-7 h-7 text-background" />
          </span>
          <div>
            <div className="flex items-center mb-2 gap-3">
              <h3 className="font-extrabold text-2xl text-foreground">
                Simple Signals
              </h3>
              <span className="text-xs px-3 py-1 bg-foreground/10 rounded-full border border-border text-foreground font-medium">
                Clarity
              </span>
            </div>
            <p className="text-base text-muted-foreground max-w-md">
              Complex data distilled into three clear signals: Bullish, Neutral,
              or Bearish. No more guesswork or analysis paralysis.
            </p>
          </div>
        </div>
        {/* Card 4 - Trustworthiness Score */}
        <div className="relative rounded-2xl border border-border bg-[var(--custom-card-color)] shadow-2xl backdrop-blur-xl p-7 flex items-start gap-5 transition duration-200 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] shadow">
            <Shield className="w-7 h-7 text-background" />
          </span>
          <div>
            <div className="flex items-center mb-2 gap-3">
              <h3 className="font-extrabold text-2xl text-foreground">
                Trustworthiness Score
              </h3>
              <span className="text-xs px-3 py-1 bg-foreground/10 rounded-full border border-border text-foreground font-medium">
                Trust
              </span>
            </div>
            <p className="text-base text-muted-foreground max-w-md">
              Every signal comes with a confidence score, helping you gauge the
              reliability of the sentiment data. Get market sentiment signals in
              under 10 minutes from post to dashboard, keeping you ahead of
              market movements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
