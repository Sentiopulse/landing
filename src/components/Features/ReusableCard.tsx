import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import React from "react";

type ReusableFeatureCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function ReusableFeatureCard({
  icon,
  title,
  description,
}: ReusableFeatureCardProps) {
  return (
    <div className="w-full max-w-sm h-64 flex">
      <Card className="bg-[#1a1f2e] border border-foreground/10 rounded-xl p-6 sm:p-3 flex-1 flex flex-col sm:hover:shadow-[0_0_24px_0_rgba(34,197,94,0.2)]">
        <CardHeader className="flex flex-col items-start space-y-4 p-0">
          <div className="flex items-center justify-center rounded-full bg-red-500/10 backdrop-blur-md w-12 h-12">
            {icon &&
              React.createElement(icon, {
                className: "text-2xl text-destructive",
              })}
          </div>
          <CardTitle className="font-bold text-xl text-white leading-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
