import React from "react";
import { FaCheck } from "react-icons/fa";

interface PricingFeatureListProps {
  features: string[];
  iconClassName?: string;
  icon?: React.ReactNode;
  itemClassName?: string;
}

export function PricingFeatureList({ features, iconClassName = "text-[var(--custom-green)]", icon = <FaCheck size={20} />, itemClassName = "flex items-center gap-2" }: PricingFeatureListProps) {
  return (
    <ul className="text-md text-foreground space-y-4 text-left pl-6">
      {features.map((feature, idx) => (
        <li className={itemClassName} key={idx}>
          <span className={iconClassName}>{icon}</span> {feature}
        </li>
      ))}
    </ul>
  );
}
