import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.FB_API_KEY,
    databaseURL: process.env.FB_DB_URL,
    projectId: process.env.FB_PROJECT_ID
  }
  console.log(process.env.FB_PROJECT_ID)
  firebase.initializeApp(config)
}

const fireDb = firebase.firestore()
export { fireDb, firebase }
