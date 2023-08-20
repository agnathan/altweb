// NextJS Components change
import Link from 'next/link'
import Image from 'next/image'

// Images 
import ashish from '../src/images/speaker/ashish.jpg'
import jason from '../src/images/speaker/jasonhartman.jpg'

// Application Components
import { Container } from '@/components/Container'
import { PublicLayout } from '@/components/layouts/PublicLayout'

// AWS Imports
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Meeting } from '@/models'

export const getStaticProps = async () => {
    let currentDate = new Date()
    currentDate = currentDate.toISOString().split('T')[0]
    // console.log(currentDate)
    const meetingsRES = await DataStore.query(Meeting, (c) => c.and(c => [
        c.meetingDate.le(currentDate),
        c.speaker.ne(null),
        c.title.ne(null),
        c.meetingDate.ne(null),
        c.rumbleUrl.ne(null),
        c.photo.ne(null),
    ]), {
        sort: (s) => s.meetingDate(SortDirection.DESCENDING),
    })

    const meetings = JSON.parse(JSON.stringify(meetingsRES))
    return { props: { meetings } };
};


export default function SpeakerHallofFamePage({ meetings }) {
    return (
        <PublicLayout>
            <Container className="pb-16 text-left">
                <div className="mx-auto max-w-3xl lg:mx-0">
                    <h2 className="font-display text-3xl tracking-tight text-grey-900 sm:text-4xl md:text-5xl">
                        Speaker Hall of Fame
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        The Alternative Investing Club invites speakers learn about real estate and alternative investing strategies every Friday.
                    </p>
                </div>
                <ul
                    title="list"
                    className="mx-auto mt-20 grid gap-x-8 gap-y-14 mx-0 max-w-none grid-cols-4"
                // className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                >
                    {meetings.map((meeting) => (
                        <li key={meeting.speaker}>
                            <Link href={meeting.rumbleUrl}>
                                <Image className="aspect-[14/13] w-full rounded-2xl object-cover" width="400" height="400" src={meeting.photo} alt="" />
                                <h3 className="mt-6 text-2xl font-semibold leading-8 tracking-tight text-gray-900">{meeting.speaker}</h3>
                                <p className="text-base leading-7 text-gray-300">{meeting.title}</p>
                                <p className="text-sm leading-6 text-gray-500">{meeting.meetingDate}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </PublicLayout>
    )
}
