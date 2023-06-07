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
const date = 'April 28st, 2023'

// const meetings = [
//   {
//     id: 1,
//     date: 'May 26, 2023',
//     time: '12:00 PM',
//     datetime: '2023-05-26T12:00',
//     name: 'Club Discussion',
//     title: 'Member Stories and Club Discussion',
//     imageUrl: '/images/chandni.webp',
//     location: 'Zoom',
//   },
//   {
//     id: 2,
//     date: 'June 2, 2023',
//     time: '12:00 PM',
//     datetime: '2023-06-02T12:00',
//     name: 'Jake Jackson',
//     title: 'Oil & Gas Drilling Partnerships',
//     imageUrl:
//       '/images/jimmy.jpg',
//     location: 'Zoom',
//   }, {
//     id: 3,
//     date: 'June 9, 2023',
//     time: '12:00 PM',
//     datetime: '2023-06-02T12:00',
//     name: 'Eric Rosenfeld',
//     title: 'Trends and Lessons Learned from 17 Years of Venture Investing',
//     imageUrl:
//       '/images/jimmy.jpg',
//     location: 'Zoom',
//   }, {
//     id: 4,
//     date: 'June 16, 2023',
//     time: '12:00 PM',
//     datetime: '2023-06-16T12:00',
//     name: 'Kaaren E Hall',
//     title: 'Supercharging Your Retirement With Alternative Assets',
//     imageUrl: '/images/sharon.jpg',
//     location: 'Zoom',
//   },
//   // More meetings...
// ]

export const getServerSideProps = async () => {
  let currentDateOrig = new Date()
  let currentDate = currentDateOrig.toISOString().split('T')[0]
  const meetingsRES = await DataStore.query(Meeting, (c) => c.and(c => [
    c.meetingDateTime.gt(currentDate),
    // c.speaker.ne(null),
    // c.title.ne(null),
    // c.meetingDate.ne(null),
    // c.rumbleUrl.ne(null),
    // c.photo.ne(null),
  ]), {
    sort: (s) => s.meetingDate(SortDirection.ASCENDING),
    limit: 5
  })

  const meetings = JSON.parse(JSON.stringify(meetingsRES))
  return { props: { meetings } };
};

export default function Home({ meetings }) {
  console.log(meetings)
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
