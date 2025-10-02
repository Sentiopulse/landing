
import AboutSectionCard from "./AboutSectionCard";
import AboutSectionTitle from "./AboutSectionTitle";


export default function AboutSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-20 px-4"
    >
      <AboutSectionTitle />
      <AboutSectionCard />
    </section>
  );
}
