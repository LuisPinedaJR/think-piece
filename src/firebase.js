import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB1VO78lofWnqQx_ksGF_j0NlYxhgXwDTY',
  authDomain: 'think-piece-bfce7.firebaseapp.com',
  databaseURL: 'https://think-piece-bfce7.firebaseio.com',
  projectId: 'think-piece-bfce7',
  storageBucket: 'think-piece-bfce7.appspot.com',
  messagingSenderId: '525427342736',
  appId: '1:525427342736:web:5997d5cf28b09686df0715',
  measurementId: 'G-94BQ25LRLJ',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithRedirect(provider)
export const signOut = () => auth.signOut()

// const settings = { timestampsInSnapshots: true }
// firestore.settings({ timestampsInSnapshots: true })

window.firebase = firebase

export default firebase
