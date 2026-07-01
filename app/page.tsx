import { HeroSection } from "@/components/Sections/HeroSection";
import { HowItWorksSection } from "@/components/Sections/HowItWorksSection";
import { PricingSection } from "@/components/Sections/PricingSection";
import { AboutSection } from "@/components/Sections/AboutSection";
import { AboutElisabethSection } from "@/components/Sections/AboutElisabethSection";
import { PopUpsSection } from "@/components/Sections/PopUpsSection";
import { FlowerMeaningSection } from "@/components/Sections/FlowerMeaningSection";
import { OccasionGuideSection } from "@/components/Sections/OccasionGuideSection";
import { EmailSection } from "@/components/Sections/EmailSection";
import { CorporateSection } from "@/components/Sections/CorporateSection";
import { ContactSection } from "@/components/Sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <PricingSection />
      <AboutSection />
      <AboutElisabethSection />
      <PopUpsSection />
      <FlowerMeaningSection />
      <OccasionGuideSection />
      <EmailSection />
      <CorporateSection />
      <ContactSection />
    </main>
  );
}
