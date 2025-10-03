import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";

interface PricingCardProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  priceSub?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonClassName?: string;
  highlight?: string;
  cardClassName?: string;
  featureIconClassName?: string;
  featureIcon?: React.ReactNode;
  footerClassName?: string;
}

export function PricingCard({
  icon,
  title,
  price,
  priceSub,
  description,
  features,
  buttonText,
  buttonClassName = "",
  highlight,
  cardClassName = "",
  featureIconClassName = "",
  featureIcon = <FaCheck size={20} />, // default
  footerClassName = "",
}: PricingCardProps) {
  return (
    <Card className={`bg-[#012406] relative flex flex-col h-full ${cardClassName}`}> 
      {highlight && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,var(--custom-purple)_0%,var(--custom-blue)_100%)] text-background text-xs px-3 py-1 rounded-full font-medium">
          {highlight}
        </div>
      )}
  <CardHeader className="flex flex-col items-center gap-4 relative">
        <span className="flex items-center justify-center rounded-full shadow mt-2 bg-black">
          {icon}
        </span>
        <CardTitle className="font-bold text-4xl text-foreground text-center whitespace-nowrap">
          {title}
        </CardTitle>
        <p className="text-4xl font-bold text-foreground mt-2 whitespace-nowrap">
          {price}
          {priceSub && <span className="text-lg text-muted-foreground">{priceSub}</span>}
        </p>
        <CardDescription className="text-md text-muted-foreground text-center whitespace-nowrap">
          {description}
        </CardDescription>
      </CardHeader>
  <CardContent className="flex justify-start w-full">
        <ul className="text-md text-foreground space-y-4 text-left pl-6">
          {features.map((feature, idx) => (
            <li className="flex items-center gap-2" key={idx}>
              <span className={featureIconClassName}>{featureIcon}</span> {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className={`flex justify-center items-center mt-auto ${footerClassName}`}> 
        <Button className="w-full hover:scale-105 duration-300 text-lg text-white">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}
