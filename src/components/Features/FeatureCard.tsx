import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import React from "react";

type ReusableFeatureCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: ReusableFeatureCardProps) {
  return (
    <Card className="p-8 hover:scale-[1.03] transition-transform duration-200 min-h-[340px] flex flex-col justify-start w-full max-w-sm mx-auto">
      <CardHeader className="flex flex-col items-start gap-4 p-0">
        <div className="flex items-center justify-center rounded-full bg-destructive/20 shadow-lg w-16 h-16 mb-3">
          {icon &&
            React.createElement(icon, {
              className: "text-3xl text-destructive drop-shadow-md",
            })}
        </div>
        <CardTitle className="font-bold text-2xl leading-tight mb-2">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
