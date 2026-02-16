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
    <main className="bg-[#050505]">
      <Hero />

      {/* Subtle transition into About */}
      <SectionDivider variant="line" spacing="none" />
      <About />

      {/* Large breathing room before content-heavy sections */}
      <SectionDivider variant="dots" spacing="lg" />
      <Tracks />

      {/* Focus on the Deadline */}
      <SectionDivider variant="gradient" spacing="lg" />
      <Countdown />

      {/* Clean break before the Curvy Road */}
      <SectionDivider variant="dots" spacing="lg" />
      <Timeline />

      {/* Final transition to Sponsors and Footer */}
      <SectionDivider variant="gradient" spacing="lg" />
      <Sponsors />

      <SectionDivider variant="line" spacing="md" />
      <Footer />
    </main>
  );
}