import HeroButton from "./hero-buttons";
import HeroFooter from "./hero-footer";
import HeroTitleAndDescription from "./hero-title-and-desc";
import { HeroFooterInfo } from "@/lib/mockData";

export default function HeroPage() {
  return (
    <div className="w-full my-10">
      <HeroTitleAndDescription />
      <HeroButton />
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-30 mt-10">
        {HeroFooterInfo.map((info, index) => (
          <HeroFooter key={index} title={info.title} subtitle={info.subtitle} />
        ))}
      </div>
    </div>
  );
}
