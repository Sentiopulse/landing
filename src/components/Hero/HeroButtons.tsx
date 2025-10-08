"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

const HeroButton: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 font-sans">
      <Button
        asChild
        size="lg"
      >
        <Link href="/signup">
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant={"secondary"}
      >
        <Link href="/demo">
          View Live Demo
          <TrendingUp className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
};

export default HeroButton;