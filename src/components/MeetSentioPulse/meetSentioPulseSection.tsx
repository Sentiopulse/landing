
import MeetSentioCards from "./meetsentiocards";
import MeetSentioTitleAndSubtitle from "./meetsentiotitleandsubtitle";


export default function MeetSentioPulseSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-20 px-4"
      style={{ background: "var(--custom-card-color)" }}
    >
  <MeetSentioTitleAndSubtitle />

  <MeetSentioCards />
    </section>
  );
}
