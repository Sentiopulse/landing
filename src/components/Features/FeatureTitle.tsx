export default function FeatureTitle() {
  return (
    <div className="flex flex-col justify-center items-center mb-14">
      <h2 className="text-6xl font-bold my-4" aria-label="The Problem with Market Sentiment Analysis">
        <span className="flex justify-center">The Problem with</span>
        <span className="text-chart-5">Market Sentiment Analysis</span>
      </h2>
      <p className="text-muted-foreground text-2xl text-center">
        <span>
          Traditional approaches to gauging market sentiment are slow,
          subjective, and often
        </span>
        <br />
        <span className="flex justify-center">miss the bigger picture.</span>
      </p>
    </div>
  );
}
