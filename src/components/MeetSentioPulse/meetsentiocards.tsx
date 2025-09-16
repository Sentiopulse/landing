import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MeetSentioPulseCardInfo } from "@/lib/mockData";

export default function MeetSentioCards() {
  return (
    <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
      {MeetSentioPulseCardInfo.map((card, idx) => {
        const Icon = card.icon;
        // For a 2-column grid, rightmost cards are those with odd index (1, 3, ...)
        const isRightCol = idx % 2 === 1;
        return (
          <Card
            key={card.title}
            className={`relative border border-border ${
              isRightCol
                ? "bg-[var(--custom-card-color-two)]"
                : "bg-[var(--custom-card-color)]"
            } shadow-2xl backdrop-blur-xl transition duration-200 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]`}
          >
            <CardHeader className="flex items-start gap-5 p-7">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] shadow">
                <Icon aria-hidden="true" className="w-7 h-7 text-background" />
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <CardTitle className="font-extrabold text-2xl text-foreground">
                    {card.title}
                  </CardTitle>
                  <span className="text-xs px-3 py-1 bg-foreground/10 rounded-full border border-border text-foreground font-medium">
                    {card.tag}
                  </span>
                </div>
                <CardDescription className="text-base text-muted-foreground max-w-md">
                  {card.description}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
