import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import React from "react";

interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: React.ElementType;
}

const FeatureCard = React.memo(
  ({ icon, title, description }: FeatureCardProps) => {
    const defaultTitle = title || "Default Title";
    const defaultDescription = description || "Default description for the feature card.";
    const DefaultIcon = icon;

    return (
      <Card className="p-8 hover:scale-[1.03] transition-transform duration-200 min-h-[340px] flex flex-col justify-start w-full max-w-sm mx-auto bg-[#012406]">
        <CardHeader className="flex flex-col items-start gap-4 p-0">
          <div className="flex items-center justify-center rounded-full bg-destructive/20 shadow-lg w-16 h-16 mb-3">
            {DefaultIcon &&
              React.createElement(DefaultIcon, {
                className: "text-3xl text-destructive drop-shadow-md",
              })}
          </div>
          <CardTitle className="font-bold text-2xl leading-tight mb-2">
            {defaultTitle}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base leading-relaxed">
            {defaultDescription}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;

// Unit test hints:
// - Should render with default props when no props are provided.
// - Should render with provided title, description, and icon.
// - Should not re-render when parent re-renders with same props (due to React.memo).
// - Should correctly display the icon with the specified className.

