import { ChartColumn } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex items-center justify-between bg-transparent backdrop-blur-md border-b shadow-lg px-6 z-50 w-full">
      <div className="flex items-center space-x-6 md:space-x-4">
        <ChartColumn
          className="w-6 h-6 md:w-12 md:h-12 p-1.5 rounded-4xl text-white mx-auto"/>
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
        <Button variant={"secondary"}>
          Sign in
        </Button>
        <Button>

          Get Started
        </Button>
      </div>
    </nav>
  );
}
