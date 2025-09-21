"use client";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export default function HeroButton() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 font-sans">
      <Button
        asChild
        size="lg"
        className="text-lg bg-gradient-to-r from-[var(--custom-green)] via-[var(--custom-blue)] to-[var(--custom-purple)] text-white hover:scale-105 hover:shadow-lg transition-transform duration-200"
      >
        <Link href="/signup">
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </Button>
      <Button
        asChild
        size="lg"
        className="text-lg bg-background text-foreground hover:scale-105 hover:shadow-lg hover:bg-accent hover:text-accent-foreground transition-transform duration-200"
      >
        <Link href="/demo">
          View Live Demo
          <TrendingUp className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}