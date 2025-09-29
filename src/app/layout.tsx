import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SentioPulse | AI-Powered Analytics Platform",
  description: "SentioPulse is an advanced analytics platform leveraging AI to deliver actionable insights, real-time data visualization, and seamless integration for modern businesses.",
  keywords: [
    "AI analytics",
    "data visualization",
    "business intelligence",
    "real-time insights",
    "SentioPulse",
    "dashboard",
    "machine learning",
    "SaaS platform"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
