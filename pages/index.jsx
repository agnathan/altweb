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

const zoomRegistrationLink = "https://us02web.zoom.us/meeting/register/tZ0sdu6trzgiEteWCpsNVTeUosePjoZg1NBe"

export const getStaticProps = async (context) => {
  const currentDateOrig = new Date()
  const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const nextWeekDate = new Date(currentDateOrig.getTime() + sevenDaysInMilliseconds);
  let currentDate = currentDateOrig.toISOString().split('T')[0]

  const nextMeetingRES = await DataStore.query(Meeting, (c) => c.and(c => [
    c.meetingDateTime.gt(currentDate),
    c.speaker.ne(null),
    c.title.ne(null),
    c.meetingDate.ne(null),
    c.meetingDateTime.ne(null),
    c.thumbnail.ne(null)
  ]), {
    sort: (s) => s.meetingDate(SortDirection.ASCENDING),
    limit: 2
  })
  // console.log(nextMeetingRES)
  const nextMeeting = JSON.parse(JSON.stringify(nextMeetingRES))
  // console.log(nextMeeting)

  const meetingsRES = await DataStore.query(Meeting, (c) => c.and(c => [
    c.meetingDate.gt(currentDate),
    c.speaker.ne(null),
    c.title.ne(null),
    c.meetingDate.ne(null),
    c.meetingDateTime.ne(null)
  ]), {
    sort: (s) => s.meetingDate(SortDirection.ASCENDING),
    limit: 5
  })

  const meetings = JSON.parse(JSON.stringify(meetingsRES))
  console.log(meetings)
  return { props: { nextMeeting, meetings } };
};

export default function Home({ nextMeeting, meetings }) {
  return (
    <PublicLayout>
      <Hero />
      <PrimaryFeatures />
      <UpcomingMeetingsBlade nextMeeting={nextMeeting} meetings={meetings} zoomRegistrationLink={zoomRegistrationLink} />
      <CallToAction />
      <SecondaryFeatures />
      <Testimonials />
    </PublicLayout>
  )
}
