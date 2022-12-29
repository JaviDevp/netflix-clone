// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYRCqxWdo9M_v5G3o0ONxZwiuFQsPj4-k",
  authDomain: "tmdb-react-89188.firebaseapp.com",
  projectId: "tmdb-react-89188",
  storageBucket: "tmdb-react-89188.appspot.com",
  messagingSenderId: "806773677828",
  appId: "1:806773677828:web:e7388c8bbf2dd6fd6ffa51"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }