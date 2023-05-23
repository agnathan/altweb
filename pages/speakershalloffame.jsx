import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const speakers = [
    {
        name: 'Ashish Gupta',
        title: 'Is it possible to replace your W2 income passively',
        imageUrl:
            '/images/speakers/ashish.jpg',
        videoUrl: 'https://rumble.com/v2m6d2m-is-it-possible-to-replace-your-w2-income-passively.html',
        meeting_date: 'March 3rd, 2023',
    },
    {
        name: 'Jason Hartman',
        title: 'How Inflation make Debit An Asset',
        imageUrl:
            '/images/speakers/2021-02-20_Jason-Hartman_Macroeconomics---How-Inflation-make-Debit-An-Asset.jpg',
        videoUrl: 'https://rumble.com/v2kwpii-inflation-induced-debt-destruction-with-jason-hartman.html',
        meeting_date: 'February 20, 2021',
    },
    {
        name: 'Travis Watts',
        title: 'Multifamily Investment Part 1',
        imageUrl:
            '/images/speakers/2020-02-07_Travis-Watts_Multifamily-Investment-Part-1.jpg',
        videoUrl: 'https://rumble.com/v2kwp6g-multifamily-investing-with-travis-watts-272020.html',
        meeting_date: '2020-02-07',
    },
    {
        name: 'Chandni Dhanjal',
        title: 'Mentorship in Short Term Rentals',
        imageUrl:
            '/images/speakers/chandni.webp',
        videoUrl: 'https://rumble.com/v2kt6fe-find-the-right-fit-course-for-starting-your-real-estate-journey.html',
        meeting_date: '2022-10-07',
    },
    {
        name: 'Keshav Kolur',
        title: 'Build to Rent Properties',
        imageUrl:
            '/images/speakers/Keshav-Legacy.png',
        videoUrl: 'https://rumble.com/v2kt5f8-build-to-rent-investments-with-keshav-kolur.html',
        meeting_date: '2022-10-21',
    },
    {
        name: 'Michael Hazen',
        title: 'How to deduct up to 50 of your W2 taxes Dont miss this meeting',
        imageUrl:
            '/images/speakers/michael-hazen.jpg',
        videoUrl: 'https://rumble.com/v2kt50g-how-to-deduct-up-to-50-of-your-w2-taxes-with-michael-hazon.html',
        meeting_date: '2022-09-02',
    },
    {
        name: 'Whitney Elkins-Hutten',
        title: 'Passive Investing',
        imageUrl:
            '/images/speakers/whitney.png',
        videoUrl: 'https://rumble.com/v2kt4l4-investing-in-car-washes-with-whitney-elkins-hutten.html',
        meeting_date: '2022-09-16',
    },
    {
        name: 'Jeff Love',
        title: 'Legal Protection in Real Estate Investing',
        imageUrl:
            '/images/speakers/jeff-love.jpg',
        videoUrl: 'https://rumble.com/v2kt45q-jeff-love-on-legal-protection-in-real-estate-investing.html',
        meeting_date: '2022-01-20',
    },
    {
        name: 'Antoinette Munroe',
        title: 'Fearless and Free Fi',
        imageUrl:
            '/images/speakers/anoinette-munroe.png',
        videoUrl: 'https://rumble.com/v2cjd24-fearless-and-free-fi.html',
        meeting_date: '2023-02-17',
    },
    {
        name: 'Mary Soldano',
        title: 'How to Purchase Real Estate with an SBA Loan',
        imageUrl:
            '/images/speakers/mary-soldano.png',
        videoUrl: 'https://rumble.com/v2cj5o0-how-to-purchase-real-estate-with-an-sba-loan.html',
        meeting_date: '2023-02-24',
    },
]

export default function SpeakerHallofFamePage() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Speaker Hall of Fame</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        The Alternative Investing Club invites speakers learn about real estate and alternative investing strategies every Friday.
                    </p>
                </div>
                <ul
                    title="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                >
                    {speakers.map((speaker) => (
                        <li key={speaker.name}>
                            <Link href={speaker.videoUrl}>
                                <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={speaker.imageUrl} alt="" />
                                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{speaker.name}</h3>
                                <p className="text-base leading-7 text-gray-300">{speaker.title}</p>
                                <p className="text-sm leading-6 text-gray-500">{speaker.meeting_date}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
