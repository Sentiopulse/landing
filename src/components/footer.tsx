import React from "react";
import { Twitter, Linkedin, Mail, Github } from "lucide-react";

const socialLinks = [
  { href: "#", label: "Twitter", icon: <Twitter className="h-5 w-5 text-background" strokeWidth={2} /> },
  { href: "#", label: "LinkedIn", icon: <Linkedin className="h-5 w-5 text-background" strokeWidth={2} /> },
  { href: "#", label: "GitHub", icon: <Github className="h-5 w-5 text-background" strokeWidth={2} /> },
  { href: "#", label: "Email", icon: <Mail className="h-5 w-5 text-background" strokeWidth={2} /> },
];

const menu = [
  { heading: "Product", items: ["Features", "Pricing", "API Docs", "Roadmap"] },
  { heading: "Company", items: ["About", "Blog", "Careers", "Contact"] },
  { heading: "Support", items: ["Help Center", "Privacy Policy", "Terms of Service", "Security"] },
];

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background border-t border-border py-14 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-4">
        {/* Logo + brand */}
        <div className="md:col-span-2 flex flex-col mb-8">
          <div className="flex items-center mb-4">
            {/* Gradient circle + bar chart logo */}
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-chart-2 via-chart-3 to-chart-1 mr-2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" fill="#232b2f" opacity="0.52"/>
                <rect x="7" y="8.5" width="2" height="7" rx="1.1" fill="#fff"/>
                <rect x="11" y="6" width="2" height="9.5" rx="1.1" fill="#fff"/>
                <rect x="15" y="10" width="2" height="5.5" rx="1.1" fill="#fff"/>
              </svg>
            </span>
            <span className="font-bold text-2xl tracking-wide text-background">SentioPulse</span>
          </div>
          <p className="text-muted-foreground text-base mb-4">
            AI-powered market sentiment analysis <br /> platform for crypto and stock markets.
          </p>
          <div className="flex gap-6 mt-6">
            {socialLinks.map(({href, label, icon}) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full bg-muted-foreground p-2 hover:bg-chart-2 transition block"
                style={{
                  boxShadow: '0 2px 6px 0 rgba(20,25,42,.09)'
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        {/* Menu */}
        {menu.map(({heading, items}) => (
          <div key={heading} className="mb-8">
            <h5 className="font-semibold mb-3 text-background">{heading}</h5>
            <ul className="space-y-2 text-base">
              {items.map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-background transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="max-w-7xl mx-auto border-t border-border mt-9 mb-2" style={{ borderWidth: "0.5px" }}/>
      {/* Copyright and bottom */}
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center px-4 pt-2 text-sm text-muted-foreground">
        <span>© 2024 SentioPulse. All rights reserved.</span>
        <span className="mt-2 md:mt-0">Built with AI • Powered by sentiment</span>
      </div>
    </footer>
  );
}
