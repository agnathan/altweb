import { CallToAction } from '@/components/CallToAction'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { UpcomingMeetingsBlade } from '@/components/UpcomingMeetingsBlade'
import { PublicLayout } from '@/components/layouts/PublicLayout'
import { getUpcomingMeetings } from '@/queries/upcomingMeetings';

const zoomRegistrationLink = "https://us02web.zoom.us/meeting/register/tZ0sdu6trzgiEteWCpsNVTeUosePjoZg1NBe"

export const getStaticProps = async (context) => getUpcomingMeetings(context)

export default function Home({ nextMeeting, meetings }) {
  return (
    <PublicLayout>
      <Hero />
      <PrimaryFeatures />
      <UpcomingMeetingsBlade nextMeeting={nextMeeting} meetings={meetings} zoomRegistrationLink={zoomRegistrationLink} />
      {/* <CallToAction /> */}
      <SecondaryFeatures />
      <Testimonials />
    </PublicLayout>
  )
}
