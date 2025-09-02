import { ChartColumn } from "lucide-react";

export default function HeroTitleAndDescription() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 font-sans">
      {/* Icon */}
      <div className="flex justify-center mb-10 w-full">
        <ChartColumn
          className="w-12 h-12 md:w-14 md:h-14 p-1.5 rounded-4xl text-black mx-auto"
          style={{
            background:
              "linear-gradient(135deg, var(--chart-2) 0%, var(--chart-1) 50%, var(--chart-4) 70%)",
          }}
        />
      </div>

      {/* Title and Description */}
      <div className="w-full flex flex-col items-center">
        {/* Title */}
        <h1 className="font-bold text-4xl md:text-7xl text-foreground text-center">
          Turn Market Noise Into
        </h1>
        {/* Rectangle */}
        <div className="flex justify-center mb-10 w-full">
          <div
            className="w-full max-w-2xl md:max-w-4xl h-12 md:h-16 rounded-lg mx-auto"
            style={{
              background:
                "linear-gradient(90deg, var(--chart-2) 0%, var(--chart-1) 50%, var(--chart-4) 70%)",
            }}
          />
        </div>
        {/* Description*/}
        <div className="w-full">
          <p className="text-center text-lg md:text-3xl text-muted-foreground">
            <span>
              SentioPulse uses AI to analyze millions of social media posts and
              deliver
            </span>
            <br />
            <span>
              simple, actionable market sentiment signals:{" "}
              <span className="text-chart-2">Bullish</span>, Neutral, or{" "}
              <span className="text-destructive">Bearish</span>.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
