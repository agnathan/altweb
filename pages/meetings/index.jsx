import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Meeting } from '../../src/models';

export const getServerSideProps = async () => {
    const meetingsRES = await DataStore.query(Meeting);
    console.log(meetingsRES)
    const meetings = JSON.parse(JSON.stringify(meetingsRES))
    return { props: { meetings } };
}

const MeetingsListPage = ({ meetings }) => {
    console.log(meetings)
    return (<>
        <h1>MeetingsListPage</h1>
        <div className="px-4 sm:px-6 lg:px-8">

            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        index
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        meetingDate
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        meetingDateTime
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Title
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Speaker
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        description
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        photo
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        videoUrl
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        rumbleUrl
                                    </th>

                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {meetings.map((meeting, index) => (
                                    <tr key={meeting.id}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{index}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{meeting.meetingDate}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{meeting.meetingDateTime}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{meeting.title}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{meeting.speaker}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{meeting.description == "" || meeting.description == null ? <p>X</p> : <p>&#10004;</p>}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{meeting.photo == "" || meeting.photo == null ? <p>X</p> : <p>&#10004;</p>}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{meeting.videoUrl == "" || meeting.videoUrl == null ? <p>X</p> : <p>&#10004;</p>}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{meeting.rumbleUrl == "" || meeting.rumbleUrl == null ? <p>X</p> : <p>&#10004;</p>}</td>


                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">, {meeting.title}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default MeetingsListPage