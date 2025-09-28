import HeroButton from "./HeroButtons";
import HeroFooter from "./HeroFooter";
import HeroTitleAndDescription from "./HeroTitle";
import { HeroFooterInfo } from "@/lib/mockData";

export default function HeroSection() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/herosection.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0 backdrop-blur-md"></div>
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen pt-24">
        <HeroTitleAndDescription />
        <HeroButton />
        <div className="w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center gap-12 md:gap-20 mt-10">
          {HeroFooterInfo.map((info, index) => (
            <HeroFooter
              key={index}
              title={info.title}
              subtitle={info.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
