import { Amplify, DataStore, API, graphqlOperation } from 'aws-amplify'
import { initSchema } from '@aws-amplify/datastore'

const awsmobile = {
  aws_project_region: 'us-west-2',
  aws_appsync_graphqlEndpoint:
    'https://4fa3ihax7bb6jfzbbql5hyfi7y.appsync-api.us-west-2.amazonaws.com/graphql',
  aws_appsync_region: 'us-west-2',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-ane4la3a2ncinaejj327q4om7y',
}

Amplify.configure(awsmobile)

const schema = {
  models: {
    Meeting: {
      name: 'Meeting',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        meetingDate: {
          name: 'meetingDate',
          isArray: false,
          type: 'AWSDate',
          isRequired: false,
          attributes: [],
        },
        speaker: {
          name: 'speaker',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        title: {
          name: 'title',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        description: {
          name: 'description',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        photo: {
          name: 'photo',
          isArray: false,
          type: 'AWSURL',
          isRequired: false,
          attributes: [],
        },
        videoUrl: {
          name: 'videoUrl',
          isArray: false,
          type: 'AWSURL',
          isRequired: false,
          attributes: [],
        },
        thumbnail: {
          name: 'thumbnail',
          isArray: false,
          type: 'AWSURL',
          isRequired: false,
          attributes: [],
        },
        youtubeUrl: {
          name: 'youtubeUrl',
          isArray: false,
          type: 'AWSURL',
          isRequired: false,
          attributes: [],
        },
        rumbleUrl: {
          name: 'rumbleUrl',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        meetingDateTime: {
          name: 'meetingDateTime',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Meetings',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  codegenVersion: '3.4.4',
  version: 'c74328001986a85a2fadb596d44731b1',
}
const { Meeting } = initSchema(schema)
const createMeeting = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
      id
      meetingDate
      speaker
      title
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`

const updateMeeting = /* GraphQL */ `
  mutation UpdateMeeting(
    $input: UpdateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    updateMeeting(input: $input, condition: $condition) {
      id
      meetingDate
      speaker
      title
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`

const listMeetings = /* GraphQL */ `
  query ListMeetings(
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        meetingDate
        speaker
        title
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`

const getMeeting = /* GraphQL */ `
  query GetMeeting($id: ID!) {
    getMeeting(id: $id) {
      id
      meetingDate
      speaker
      title
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`

async function myCreateMeeting() {
  try {
    const meetingDetails = {
      meetingDate: '2019-08-27',
      speaker: 'Clark Kent',
      title: 'Why I fly',
    }

    // const result = await API.graphql(
    //   graph qlOperation(updateMeeting, { input: meetingDetails })
    // )

    const result = await API.graphql({
      query: createMeeting,
      variables: { input: meetingDetails },
    })
    console.log(result)

    console.log('Contact successfully updated:', result.data.createMeeting)
  } catch (error) {
    console.error('Error updating contact:', error)
  }
}
async function updateMeetingName(id, description) {
  try {
    const meetingDetails = {
      id: id,
      description: description,
    }

    // const result = await API.graphql(
    //   graphqlOperation(updateMeeting, { input: meetingDetails })
    // )

    const result = await API.graphql({
      query: updateMeeting,
      variables: { input: meetingDetails },
    })
    console.log(result)

    console.log('Contact successfully updated:', result.data.updateMeeting)
  } catch (error) {
    console.error('Error updating contact:', error)
  }
}

async function myListMeetings() {
  try {
    const result = await API.graphql(graphqlOperation(listMeetings))
    console.log(result.data.listMeetings.items)
  } catch (error) {
    console.error('Error updating contact:', error)
  }
}

async function myGetMeeting(id) {
  try {
    const meetingDetails = {
      id: id,
    }

    const result = await API.graphql(
      graphqlOperation(getMeeting, meetingDetails)
    )
    console.log('Contact successfully updated:', result)
  } catch (error) {
    console.error('Error updating contact:', error)
  }
}

async function myCreateMeetingDatasource() {
  const result = await DataStore.save(
    new Meeting({
      date: '2019-07-01',
      speaker: 'Lex Luthor',
      title: 'Krpytonite Shines Bright in the Darkest Hour',
    })
  )
  console.log(result)
}

async function updateMeetingDataSource(id, newTitle) {
  try {
    let i = 0
    const meetings = await DataStore.query(Meeting)
    // console.log(
    // 'Posts retrieved successfully!',
    // JSON.stringify(meetings, null, 2)
    meetings.forEach(async (meeting) => {
      const original = await DataStore.query(Meeting, meeting.id)
      i = i + 1
      console.log(
        i,
        ': ',
        original.meetingDate,
        ':',
        original.title,
        ': ',
        original.id,
        ': ',
        original.meetingDateTime
      )
      const updatedPost = DataStore.save(
        Meeting.copyOf(original, (updated) => {
          updated.meetingDateTime = new Date(original.meetingDate).toISOString()
        })
      )
    })
    // )
  } catch (error) {
    console.log('Error retrieving posts', error)
  }

  // console.log(updatedPost)
}

// myCreateMeeting()

// const meetingId = '6e882ed3-eef9-44cd-8a4d-920d42408009'myC
// myGetMeeting(meetingId)

// Example usage
// const meetingId = '6e882ed3-eef9-44cd-8a4d-920d42408009'
// const description = 'Electric Booguloo 2'
// updateMeetingName(meetingId, description)
// myCreateMeetingDatasource()

const lexId = 'f27bd3a1-2b51-4106-916e-dffaec541a68'
updateMeetingDataSource(lexId, 'Krpytonite Shines Bright in the Darkest Hour')
