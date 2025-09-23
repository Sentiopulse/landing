import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MeetSentioPulseCardInfo } from "@/lib/mockData";

export default function AboutSectionCard() {
  return (
    <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
      {MeetSentioPulseCardInfo.map((card, idx) => {
        const Icon = card.icon;
        return (
          <Card
            key={card.title}
            className="hover:scale-[1.03] transition-transform duration-200"
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
