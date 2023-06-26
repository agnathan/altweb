import Head from 'next/head'

import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Meeting } from '../src/models';

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { UpcomingMeetingsBlade } from '@/components/UpcomingMeetingsBlade'
import { PublicLayout } from '@/components/layouts/PublicLayout'

const zoomRegistrationLink = "https://us02web.zoom.us/meeting/register/tZEkc--uqzsiH9WjXaST7jzXzQL3XIrTIsXj"

export const getServerSideProps = async () => {
  let currentDateOrig = new Date()
  let currentDate = currentDateOrig.toISOString().split('T')[0]
  const meetingsRES = await DataStore.query(Meeting, (c) => c.and(c => [
    c.meetingDateTime.gt(currentDate),
    c.speaker.ne(null),
    c.title.ne(null),
    c.meetingDate.ne(null),
    // c.rumbleUrl.ne(null),
    c.thumbnail.ne(null),
  ]), {
    sort: (s) => s.meetingDate(SortDirection.ASCENDING),
    limit: 5
  })

  const meetings = JSON.parse(JSON.stringify(meetingsRES))
  return { props: { meetings } };
};

export default function Home({ meetings }) {
  return (
    <PublicLayout>
      <Hero />
      <PrimaryFeatures />
      <UpcomingMeetingsBlade meetings={meetings} zoomRegistrationLink={zoomRegistrationLink} />
      <CallToAction />
      <SecondaryFeatures />
      <Testimonials />
      {/* <Pricing />
        <Faqs /> */}
    </PublicLayout>
  )
}
