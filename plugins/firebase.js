import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.NUXT_ENV_FB_API_KEY,
    databaseURL: process.env.NUXT_ENV_FB_DB_URL,
    projectId: process.env.NUXT_ENV_FB_PROJECT_ID
  }
  console.log('[config]', config)
  firebase.initializeApp(config)
}

const fireDb = firebase.firestore()
export { fireDb, firebase }
