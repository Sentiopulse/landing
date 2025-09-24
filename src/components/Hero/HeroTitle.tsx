export default function HeroTitleAndDescription() {
  return (
  <div className="flex flex-col items-center justify-center w-full px-4 font-sans">
      {/* Title and Description */}
      <div className="w-full flex flex-col items-center">
        {/* Title */}
        <h1 className="font-bold text-4xl md:text-7xl text-foreground text-center">
          Turn Market Noise Into
        </h1>
        {/* Gradient Text */}
        <div className="flex justify-center mb-10 w-full">
          <div className="w-full max-w-2xl md:max-w-4xl h-12 md:h-16 py-14 mx-auto flex items-center justify-center">
            <span className="text-7xl font-bold bg-gradient-to-r from-[var(--custom-green)] via-[var(--custom-blue)] to-[var(--custom-purple)] bg-clip-text text-transparent py-1">Clear Signals</span>
          </div>
        </div>
        {/* Description*/}
        <div className="w-full">
          <p className="text-center text-lg md:text-3xl text-muted-foreground">
            <span>
              SentioPulse uses AI to analyze millions of social media posts and deliver
            </span>
            <br />
            <span>
              simple, actionable market sentiment signals: <span className="text-chart-2">Bullish</span>, Neutral, or <span className="text-destructive">Bearish</span>.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}