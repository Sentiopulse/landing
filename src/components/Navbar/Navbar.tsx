import { ChartColumn } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-transparent p-8 font-sans">
      <div className="flex items-center space-x-4">
        <ChartColumn className="bg-gradient-to-br from-green-400 [0%] via-blue-500 [60%] to-purple-500 [70%] text-black w-12 h-12 p-1.5 rounded-4xl" />
        <span className="font-bold text-xl">SentioPulse</span>
      </div>
      <div className="flex space-x-8 ">
        <Link href="/features" className="text-lg text-muted-foreground hover:text-foreground">
          Features
        </Link>
        <Link href="/Pricing" className="text-lg text-muted-foreground hover:text-foreground">
          Pricing
        </Link>
        <Link href="/About" className="text-lg text-muted-foreground hover:text-foreground">
          About
        </Link>
        <Link href="Contact" className="text-lg text-muted-foreground hover:text-foreground">
          Contact
        </Link>
      </div>

      <div className="space-x-6">
        <Button className="bg-transparent text-foreground hover:bg-muted-foreground text-md">
          Sign in
        </Button>
        <Button className="font-bold bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 hover:from-green-500 hover:via-blue-600 hover:to-purple-600 text-md">
          Get Started
        </Button>
      </div>
    </nav>
  );
}
