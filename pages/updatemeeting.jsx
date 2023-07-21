import {
    MeetingUpdateForm
} from '../src/ui-components';

export const getServerSideProps = async () => {

}

const UpdateMeeting = () => {
    return (
        <MeetingUpdateForm
            onSubmit={(fields) => {
                // Example function to trim all string inputs
                const updatedFields = {}
                Object.keys(fields).forEach(key => {
                    if (typeof fields[key] === 'string') {
                        updatedFields[key] = fields[key].trim()
                    } else {
                        updatedFields[key] = fields[key]
                    }
                })
                return updatedFields
            }}
        />
    )
}