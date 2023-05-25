import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { ScheduleBlade } from '@/components/Events'
import { PublicLayout } from '@/components/layouts/PublicLayout'

export default function Home() {
  return (
    <PublicLayout>
      <Hero />
      <PrimaryFeatures />
      <ScheduleBlade />
      <CallToAction />
      <SecondaryFeatures />``
      <Testimonials />
      {/* <Pricing />
        <Faqs /> */}
    </PublicLayout>
  )
}
