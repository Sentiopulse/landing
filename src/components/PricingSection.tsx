import React from "react";
import { Mail, Crown } from "lucide-react";
import { FaCheck } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function PricingSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-[var(--custom-card-color-two)]">
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
        <Card className="rounded-2xl border border-border bg-[var(--custom-card-color)] shadow-2xl backdrop-blur-xl p-7 flex flex-col items-center gap-5 h-[600px] w-[90%] transition duration-300 hover:shadow-[0_0_20px_rgba(33,143,88,0.5)]">
          <CardHeader className="flex flex-col items-center gap-4">
            <span className="flex h-18 w-18 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] shadow">
              <Mail size={35} className="text-background" />
            </span>
            <CardTitle className="font-bold text-4xl text-foreground text-center whitespace-nowrap">
              Free Tier
            </CardTitle>
            <p className="text-4xl font-bold text-foreground">
              $0
              <span className="text-lg text-muted-foreground">/forever</span>
            </p>
            <CardDescription className="text-md text-muted-foreground text-center whitespace-nowrap">
              Perfect for getting started with market sentiment
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-start w-full ">
            <ul className="text-md text-foreground space-y-4 text-left pl-6">
              <li className="flex items-center gap-2">
                <span className="text-[var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Weekly newsletter with key insights
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Daily sentiment posts on Twitter/X
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Access to public sentiment feed
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Basic market coverage (BTC, ETH, SPY)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Community support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <button className="bg-background text-foreground rounded-lg font-light text-lg px-10 py-4 shadow-lg transition hover:opacity-90 md:w-96 mt-6 text-center">
              Start Free
            </button>
          </CardFooter>
        </Card>

        {/* Premium Tier Card */}
        <Card className="relative rounded-2xl border border-[var(--custom-green)] bg-[var(--custom-card-color)] shadow-[0_0_20px_rgba(33,143,88,0.5)] backdrop-blur-xl p-7 flex flex-col items-center gap-5 h-[650px] w-[95%] -mt-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,var(--custom-purple)_0%,var(--custom-blue)_100%)] text-background text-xs px-3 py-1 rounded-full font-medium">
            Most Popular
          </div>
          <CardHeader className="flex flex-col items-center gap-4 relative">
            <span className="inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-blue)_0%,var(--custom-purple)_40%,var(--custom-green)_90%)] shadow mt-2">
              <Crown size={35} className="text-background" aria-hidden="true" />
            </span>
            <CardTitle className="font-bold text-4xl text-foreground text-center">
              Premium
            </CardTitle>
            <p className="text-4xl font-bold text-foreground mt-2 whitespace-nowrap">
              $29{" "}
              <span className="text-lg text-muted-foreground">/per month</span>
            </p>
            <CardDescription>
              <p className="text-lg text-muted-foreground text-center whitespace-nowrap">
                Advanced features for serious traders and investors
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-start w-full">
            <ul className="text-md text-foreground space-y-3 text-left pl-6">
              <li className="flex items-center gap-2">
                <span className="text-[var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Real-time email alerts for custom assets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Interactive dashboard with filtering
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[color:var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Extended market coverage (500+ assets)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[color:var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Trustworthiness scoring
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[color:var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Historical sentiment data
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                API access (coming soon)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--custom-green)]">
                  <FaCheck size={20} />
                </span>{" "}
                Priority support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <button className="bg-[linear-gradient(90deg,var(--custom-green)_0%,var(--custom-blue)_50%,var(--custom-purple)_100%)] text-background rounded-lg font-bold text-lg px-10 py-4 shadow-lg transition hover:opacity-90 md:w-96 mt-2 text-center">
              Start Premium Trial
            </button>
          </CardFooter>
        </Card>
      </div>

      <p className="text-lg text-muted-foreground text-center mt-16">
        All plans include our 30-day money-back guarantee. No questions asked.
      </p>
    </section>
  );
}
