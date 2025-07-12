'use client'

import LandingFaq from '@/features/landing/components/landing-faq/landing-faq'
import LandingHowItWorks from '@/features/landing/components/landing-how-It-works/landing-how-it-works'
import LandingIntro from '@/features/landing/components/landing-intro/landing-intro'
import LandingPricing from '@/features/landing/components/landing-pricing/landing-pricing'

export default function Home() {
  return (
    <>
      <LandingIntro />
      <LandingHowItWorks />
      <LandingPricing />
      <LandingFaq />
    </>
  )
}
