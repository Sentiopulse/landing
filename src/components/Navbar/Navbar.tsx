import { ChartColumn } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between bg-transparent font-sans border-b shadow-lg mb-6 px-6">
      <div className="flex items-center space-x-6 md:space-x-4">
        <ChartColumn
          className="w-6 h-6 md:w-12 md:h-12 p-1.5 rounded-4xl text-background mx-auto"
          style={{
              background:
                "linear-gradient(90deg, var(--custom-green) 0%, var(--custom-blue) 40%, var(--custom-purple) 90%)",
            }}/>
        <span className="font-bold text-xl">SentioPulse</span>
      </div>
      <div className="flex space-x-10 md:space-x-8 space-y-6 mt-6">
        <Link
          href="/features"
          className="text-lg text-muted-foreground hover:text-foreground"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="text-lg text-muted-foreground hover:text-foreground"
        >
          Pricing
        </Link>
        <Link
          href="/about"
          className="text-lg text-muted-foreground hover:text-foreground"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-lg text-muted-foreground hover:text-foreground"
        >
          Contact
        </Link>
      </div>

      <div className="space-x-6">
        <Button className="bg-transparent text-foreground hover:bg-muted-foreground text-base">
          Sign in
        </Button>
        <Button className="text-lg bg-[linear-gradient(135deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] hover:opacity-90">
          Get Started
        </Button>
      </div>
    </nav>
  );
}
