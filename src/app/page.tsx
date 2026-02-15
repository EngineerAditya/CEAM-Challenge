import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import SectionDivider from "@/components/ui/SectionDivider";
import Tracks from "@/components/ui/Tracks";
import Countdown from "@/components/ui/Countdown";
import Timeline from "@/components/ui/Timeline";
import Sponsors from "@/components/ui/Sponsors";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider variant="gradient" />
      <About />
      <SectionDivider variant="dots" />
      <Tracks />
      <SectionDivider variant="gradient" />
      <Countdown />
      <SectionDivider variant="dots" />
      <Timeline />
      <SectionDivider variant="gradient" />
      <Sponsors />
      <SectionDivider variant="line" />
      <Footer />
    </main>
  );
}
