// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCTkptNQmuPU9jLLNBDmcL1HvxDyY4RMww',
  authDomain: 'temp-746ab.firebaseapp.com',
  projectId: 'temp-746ab',
  storageBucket: 'temp-746ab.appspot.com',
  messagingSenderId: '872974683874',
  appId: '1:872974683874:web:811c3188c8e589d567d8bb',
  measurementId: 'G-G01SWS9LYJ',
}


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export default db