import {initializeApp} from 'firebase/app'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyDyeNxCvJvOm0Qdd7uCev8ZrYeFaeRoAt8',
    authDomain: 'todolist-cbd83.firebaseapp.com',
    projectId: 'todolist-cbd83',
    storageBucket: 'todolist-cbd83.firebasestorage.app',
    messagingSenderId: '212202573230',
    appId: '1:212202573230:web:d9d421c90c05306dd60c3f',
    datebaseURL: 'https://todolist-cbd83-default-rtdb.europe-west1.firebasedatabase.app/',
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
