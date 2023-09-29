import { API, graphqlOperation } from 'aws-amplify'
import { updateMeeting, createMeeting } from '../src/graphql/mutations' // Import the generated update mutation

import awsExports from '../src/aws-exports'
Amplify.configure(awsExports)

async function updateMeetingName(id, newName) {
  try {
    const contactDetails = {
      id: id,
      title: newName,
    }

    const result = await API.graphql(
      graphqlOperation(updateMeeting, { input: contactDetails })
    )
    console.log('Contact successfully updated:', result.data.updateContact)
  } catch (error) {
    console.error('Error updating contact:', error)
  }
}

// Example usage
const contactId = 'cb750d93-9e1e-498f-bc24-95662d8f05c0'
const newName = 'State of the Real Estate Market In Portland 2'
updateMeetingName(contactId, newName)
