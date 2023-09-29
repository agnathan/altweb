/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMeeting = /* GraphQL */ `
  query GetMeeting($id: ID!) {
    getMeeting(id: $id) {
      id
      meetingDate
      speaker
      title
      description
      photo
      videoUrl
      thumbnail
      youtubeUrl
      rumbleUrl
      meetingDateTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMeetings = /* GraphQL */ `
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
        photo
        videoUrl
        thumbnail
        youtubeUrl
        rumbleUrl
        meetingDateTime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMeetings = /* GraphQL */ `
  query SyncMeetings(
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMeetings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        meetingDate
        speaker
        title
        description
        photo
        videoUrl
        thumbnail
        youtubeUrl
        rumbleUrl
        meetingDateTime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
