import { Amplify, DataStore } from 'aws-amplify';
import { Meeting } from '../src/models'

Amplify.configure({
    "aws_project_region": "us-west-2",
    "aws_appsync_graphqlEndpoint": "https://4fa3ihax7bb6jfzbbql5hyfi7y.appsync-api.us-west-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-west-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-ane4la3a2ncinaejj327q4om7y"
});

async function updatePost(id, newTitle) {
    const original = await DataStore.query(Post, id);

    const updatedPost = await DataStore.save(
        Post.copyOf(original, updated => {
            updated.title = newTitle
        })
    );
}

const getData = async () => {
    const meetings = await DataStore.query(Meeting, "20c1b266-75de-4e79-97c1-c61da82efc14");
    console.log(meetings)
}

getData()