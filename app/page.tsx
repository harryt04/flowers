import { AboutSection } from "@/components/Sections/AboutSection";
import { ContactSection } from "@/components/Sections/ContactSection";
import { CorporateSection } from "@/components/Sections/CorporateSection";
import { EmailSection } from "@/components/Sections/EmailSection";
import { FarmersMarketSection } from "@/components/Sections/FarmersMarketSection";
import { HeroSection } from "@/components/Sections/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FarmersMarketSection />
      <EmailSection />
      <CorporateSection />
      <ContactSection />
    </main>
  );
}
