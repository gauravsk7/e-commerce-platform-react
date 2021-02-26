import firebase from 'firebase'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAI_XGQZCpaN4jvodtGIEY2gV4OpmJ3eMU",
    authDomain: "crwn-db-c7329.firebaseapp.com",
    projectId: "crwn-db-c7329",
    storageBucket: "crwn-db-c7329.appspot.com",
    messagingSenderId: "1034098880567",
    appId: "1:1034098880567:web:f9b568680e670a00f5cfb2"
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase