import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MeetSentioPulseCardInfo } from "@/lib/mockData";
import { Badge } from "../ui/badge";

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
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 shadow-inner border border-white/20">
                <Icon aria-hidden="true" className="w-7 h-7 text-white" />
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <CardTitle className="font-extrabold text-2xl text-foreground">
                    {card.title}
                  </CardTitle>
                  <Badge variant={"outline"}>
                    {card.tag}
                  </Badge>
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
