"use client";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export default function HeroButton() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 font-sans">
      <Link href="/signup">
        <Button
          className="text-lg bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 text-white hover:scale-105 hover:shadow-lg transition-transform duration-200"
          size="lg"
        >
          Start Free Trial{" "}
          <span>
            <ArrowRight />
          </span>
        </Button>
      </Link>
      <Link href="/demo">
        <Button className="text-lg bg-background text-foreground hover:scale-105 hover:shadow-lg hover:bg-black transition-transform duration-200" size="lg">
          View Live Demo{" "}
          <span>
            <TrendingUp />
          </span>
        </Button>
      </Link>
    </div>
  );
}