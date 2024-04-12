import { DataStore, Predicates, SortDirection } from 'aws-amplify'
import { Meeting } from '../models'

export const getUpcomingMeetings = async (context) => {
  const currentDateOrig = new Date()
  const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000
  const nextWeekDate = new Date(
    currentDateOrig.getTime() + sevenDaysInMilliseconds
  )
  let currentDate = currentDateOrig.toISOString().split('T')[0]
  console.log('currentDate: ', currentDate)
  const nextMeetingRES = await DataStore.query(
    Meeting,
    (c) =>
      c.and((c) => [
        c.meetingDateTime.gt(currentDate),
        c.speaker.ne(null),
        c.title.ne(null),
        c.meetingDate.ne(null),
        c.meetingDateTime.ne(null),
        c.thumbnail.ne(null),
      ]),
    {
      sort: (s) => s.meetingDate(SortDirection.ASCENDING),
      limit: 1,
    }
  )
  const nextMeeting = JSON.parse(JSON.stringify(nextMeetingRES))
  const meetingsRES = await DataStore.query(
    Meeting,
    (c) =>
      c.and((c) => [
        c.meetingDate.gt(currentDate),
        c.speaker.ne(null),
        c.title.ne(null),
        c.meetingDate.ne(null),
        c.meetingDateTime.ne(null),
      ]),
    {
      sort: (s) => s.meetingDate(SortDirection.ASCENDING),
      limit: 5,
    }
  )

  const meetings = JSON.parse(JSON.stringify(meetingsRES))
  console.log('nextMeeting ----->', nextMeeting)
  return { props: { nextMeeting, meetings } }
}
