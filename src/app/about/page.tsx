import Approach from "@/components/About/Approach";
import Hero from "@/components/About/Hero";
import JoinOurMission from "@/components/About/JoinOurMission";
import Meetthefounder from "@/components/About/Meetthefounder";
import Mission from "@/components/About/Mission";
import Vision from "@/components/About/Vision";

export default function page() {
  return (
    <>
      <Hero />
      <div className="w-full max-w-6xl mx-auto">
        <Mission />
        <Vision />
        <Approach />
        <Meetthefounder />
        <JoinOurMission />
        {/* <AllStuff /> */}
      </div>
    </>
  );
}
