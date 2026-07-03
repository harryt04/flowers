import { HeroSection } from '@/components/Sections/HeroSection'
import { HowItWorksSection } from '@/components/Sections/HowItWorksSection'
import { EventTypesSection } from '@/components/Sections/EventTypesSection'
import { PricingSection } from '@/components/Sections/PricingSection'
import { OurStorySection } from '@/components/Sections/OurStorySection'
import { MeetSunshineSection } from '@/components/Sections/MeetSunshineSection'
import { PopUpsSection } from '@/components/Sections/PopUpsSection'
import { SeasonalMenuSection } from '@/components/Sections/SeasonalMenuSection'
import { FlowerMeaningSection } from '@/components/Sections/FlowerMeaningSection'
import { OccasionGuideSection } from '@/components/Sections/OccasionGuideSection'
import { CorporateSection } from '@/components/Sections/CorporateSection'
import { ContactSection } from '@/components/Sections/ContactSection'
import { SunshineClubSection } from '@/components/Sections/SunshineClubSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <EventTypesSection />
      <PricingSection />
      <OurStorySection />
      <MeetSunshineSection />
      <PopUpsSection />
      <SeasonalMenuSection />
      <FlowerMeaningSection />
      <OccasionGuideSection />
      <CorporateSection />
      <ContactSection />
      <SunshineClubSection />
    </main>
  )
}
