export default function MeetSentioTitleAndSubtitle() {
	return (
		<>
			<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
				<span className="text-foreground">Meet </span>
				<span className="text-[var(--custom-green)]">SentioPulse</span>
			</h2>
			<p className="text-xl text-muted-foreground text-center max-w-3xl mb-12 font-normal">
				Our AI engine transforms social media chaos into clear, actionable
				market intelligence
				<br className="hidden md:block" />
				you can trust.
			</p>
		</>
	);
}
