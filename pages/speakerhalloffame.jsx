// NextJS Components change
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { BarsArrowUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

// Application Components
import { Container } from '@/components/Container'
import { PublicLayout } from '@/components/layouts/PublicLayout'

// AWS Imports
import { DataStore, Predicates, SortDirection } from 'aws-amplify'
import { Meeting } from '@/models'

const categories = [
    { id: 1, name: 'All Categories' },
    { id: 2, name: 'Single Family Homes' },
    { id: 3, name: 'Syndications' },
    { id: 4, name: 'Short Term Rentals' },
    { id: 5, name: 'Mortgages' },
    { id: 6, name: 'Mobile Home Parks' },
    { id: 7, name: 'Raising Capital' },
    { id: 8, name: 'California Updates' },
    { id: 9, name: 'Oregon Updates' },
    { id: 10, name: 'Arizona Updates' },
    { id: 11, name: 'Cash Flow' },
    // More users...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const getStaticProps = async () => {
    let currentDate = new Date()
    currentDate = currentDate.toISOString().split('T')[0]
    // console.log(currentDate)
    const meetingsRES = await DataStore.query(
        Meeting,
        (c) =>
            c.and((c) => [
                c.meetingDate.le(currentDate),
                c.speaker.ne(null),
                c.title.ne(null),
                c.meetingDate.ne(null),
                c.rumbleUrl.ne(null),
                c.photo.ne(null),
            ]),
        {
            sort: (s) => s.meetingDate(SortDirection.DESCENDING),
        }
    )

    const meetings = JSON.parse(JSON.stringify(meetingsRES))
    return { props: { meetings } }
}

export default function SpeakerHallofFamePage({ meetings }) {
    const [query, setQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(null)

    const filteredCategories =
        query === ''
            ? categories
            : categories.filter((category) => {
                return category.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <PublicLayout>
            <Container className="pb-16 text-left">
                <div className="mx-auto max-w-5xl my-8 lg:mx-0">
                    <h2 className="text-grey-900 font-display text-7xl tracking-tight sm:text-4xl md:text-5xl">
                        Speaker Hall of Fame
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        The Alternative Investing Club invites speakers learn about real
                        estate and alternative investing strategies every Friday.
                    </p>
                    {/* <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Job Postings</h3>
                        <div className="mt-3 sm:ml-4 sm:mt-0">
                            <label htmlFor="mobile-search-candidate" className="sr-only">
                                Search
                            </label>
                            <label htmlFor="desktop-search-candidate" className="sr-only">
                                Search
                            </label>
                            <div className="flex rounded-md shadow-sm">
                                <div className="relative flex-grow focus-within:z-10">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="text"
                                        name="mobile-search-candidate"
                                        id="mobile-search-candidate"
                                        className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden"
                                        placeholder="Search"
                                    />
                                    <input
                                        type="text"
                                        name="desktop-search-candidate"
                                        id="desktop-search-candidate"
                                        className="hidden w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:block"
                                        placeholder="Search candidates"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    <BarsArrowUpIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    Sort
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div> */}
                    {/* <Combobox as="div" value={selectedCategory} onChange={setSelectedCategory} defaultValue={categories[0]}>
                        <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Filter by Category</Combobox.Label>
                        <div className="relative mt-2">
                            <Combobox.Input
                                className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(event) => setQuery(event.target.value)}
                                displayValue={(category) => category?.name}
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Combobox.Button>

                            {filteredCategories.length > 0 && (
                                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredCategories.map((category) => (
                                        <Combobox.Option
                                            key={category.id}
                                            value={category}
                                            className={({ active }) =>
                                                classNames(
                                                    'relative cursor-default select-none py-2 pl-3 pr-9',
                                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                                )
                                            }
                                        >
                                            {({ active, selected }) => (
                                                <>
                                                    <span className={classNames('block truncate', selected && 'font-semibold')}>{category.name}</span>

                                                    {selected && (
                                                        <span
                                                            className={classNames(
                                                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                active ? 'text-white' : 'text-indigo-600'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))}
                                </Combobox.Options>
                            )}
                        </div>
                    </Combobox> */}
                </div>
                <ul
                    title="list"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                // className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                >
                    {meetings.map((meeting) => (
                        <li key={meeting.speaker}>
                            <Link href={meeting.rumbleUrl}>
                                <Image
                                    className="aspect-[14/13] w-full rounded-2xl object-cover"
                                    width="400"
                                    height="400"
                                    src={meeting.photo}
                                    alt=""
                                />
                                <h3 className="mt-6 text-2xl font-semibold leading-8 tracking-tight text-gray-900">
                                    {meeting.speaker}
                                </h3>
                                <p className="text-base leading-7 text-gray-300">
                                    {meeting.title}
                                </p>
                                <p className="text-sm leading-6 text-gray-500">
                                    {meeting.meetingDate}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </PublicLayout>
    )
}
