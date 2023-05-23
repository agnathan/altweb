import { useId } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

const zoomRegistrationLink = "https://us02web.zoom.us/meeting/register/tZEkc--uqzsiH9WjXaST7jzXzQL3XIrTIsXj"
const date = 'April 28st, 2023'

import { Container } from '@/components/Container'
import zoom from '@/images/club/alternative-investment-club-photo.webp'
import speakercollage from '@/images/club/reic-speaker-collage.webp'
import camino from '@/images/club/camino2.webp'
import speakerPhoto from '@/images/club/alternative-investment-club-photo.webp'
const features = [
  {
    name: 'Financial Education',
    summary: 'Stay on top of things with expert speakers and influencers',
    description:
      'The Alternative Investing Club Speaker meetings happen every Friday at 12pm Pacific time',
    image: speakercollage,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Personal Freedom',
    summary:
      'Join a community of like-minded investors interested in building their wealth, freedom and legacy',
    description:
      'Join with like-minded individuals who support and challenge each other to improve their businesses, personal lives, goals, and habits with weekly accountability masterminds and group investments',
    image: zoom,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'Portfolio Building',
    summary:
      'Regular opportunities to invest in Passive Income Investments',
    description:
      'Building a life changing portfolio takes more than just education and community, it also takes action. We provide our members regular opportunties to explore passive income opportunities.',
    image: camino,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

const people = [
  {
    name: 'Club Discussion',
    title: 'Member Stories and Club Discussion',
    imageUrl:
      camino,
    bio: 'This week we will be listening to club members who have had a great experience with someone in the real estate or passive investing industry. If you\'ve had a great experience with a real estate agent, property broker, lender, syndicator or contractor, email daniel@goodsamaritancaptial.com and let me know that you\'d like to be put on the agenda to share. If you would like to share about your recent investment, this week will be about discovering what other people in the club are doing and the best people that they are working with. This is a great opportunity to learn from each other. Don\'t miss out! We hope to see you there!',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]


const meetings = [
  {
    id: 1,
    date: 'May 26, 2023',
    time: '12:00 PM',
    datetime: '2023-05-26T12:00',
    name: 'Club Discussion',
    title: 'Member Stories and Club Discussion',
    imageUrl: '/images/chandni.webp',
    location: 'Zoom',
  },
  {
    id: 2,
    date: 'June 2, 2023',
    time: '12:00 PM',
    datetime: '2023-06-02T12:00',
    name: 'Jake Jackson',
    title: 'Oil & Gas Drilling Partnerships',
    imageUrl:
      '/images/jimmy.jpg',
    location: 'Zoom',
  }, {
    id: 3,
    date: 'June 9, 2023',
    time: '12:00 PM',
    datetime: '2023-06-02T12:00',
    name: 'Eric Rosenfeld',
    title: 'Trends and Lessons Learned from 17 Years of Venture Investing',
    imageUrl:
      '/images/jimmy.jpg',
    location: 'Zoom',
  }, {
    id: 4,
    date: 'June 16, 2023',
    time: '12:00 PM',
    datetime: '2023-06-16T12:00',
    name: 'Kaaren E Hall',
    title: 'Supercharging Your Retirement With Alternative Assets',
    imageUrl: '/images/sharon.jpg',
    location: 'Zoom',
  },
  // More meetings...
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function ScheduleBlade() {
  return (
    <section
      id="events"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl md:text-center mb-12">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Schedule of Speakers
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We have a great speaker every every Friday at Noon Pacific time
          </p>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/3 pr-8">
            <h2 className="font-display text-2xl tracking-tight text-slate-900 sm:text-3xl">
              Upcoming
            </h2>
            <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
              {meetings.map((meeting) => (
                <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static">
                  {/* <img src={meeting.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full" /> */}
                  <div className="flex-auto">
                    <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name} - {meeting.title}</h3>
                    <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0"></h3>
                    <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                      <div className="flex items-start space-x-3">
                        <dt className="mt-0.5">
                          <span className="sr-only">Date</span>
                          <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </dt>
                        <dd>
                          <time dateTime={meeting.datetime}>
                            {meeting.date} at {meeting.time}
                          </time>
                        </dd>
                      </div>
                      <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                        <dt className="mt-0.5">
                          <span className="sr-only">Location</span>
                          <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </dt>
                        <dd>{meeting.location}</dd>
                      </div>
                    </dl>
                  </div>
                  {/* <Menu as="div" className="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center">
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Cancel
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu> */}
                </li>
              ))}
            </ol>
          </div>
          <div className="basis-2/3">
            <h2 className="font-display text-2xl tracking-tight text-slate-900 sm:text-3xl">This Week</h2>
            <h3 className="mt-2 text-lg tracking-tight text-gray-900 sm:text-xl">Member Stories and Club Discussion</h3>
            <p className="mt-2 text-sm text-gray-500">
              <time dateTime={date}>{date}</time>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-1">

              <ul
                role="list"
                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-1"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src={speakerPhoto} alt="" />
                    <h3 className="mt-6 text-2xl font-semibold leading-8 text-gray-900 md:text-3xl">{person.name}</h3>
                    <p className="text-base leading-7 text-gray-600">{person.role}</p>
                    <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                    {/* <ul role="list" className="mt-6 flex gap-x-6">
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul> */}
                    <Link href={zoomRegistrationLink}>
                      <button
                        type="button"
                        className="flex w-full mt-8 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                      >
                        Register to Attend
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
