export default function FeatureTitleAndDescription() {
  return (
    <div className="flex flex-col justify-center items-center mb-14">
      <h1 className="flex flex-col justify-center items-center text-[40px] md:text-6xl font-bold my-4 text-center">
        <span className="flex justify-center">The Problem with</span>
        <span className="flex flex-col md:flex-row justify-center items-center text-chart-5">
          <span>Market Sentiment</span>
          <span className="block md:inline"> Analysis</span>
        </span>
      </h1>
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
