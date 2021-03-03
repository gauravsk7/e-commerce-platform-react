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

export const createUserProfileDocument = async(userAuth, additionalData) =>{   //API calls should be asynchronous
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log(additionalData)

        } catch(error){
            console.log("Error creating user", error.message)
        }
    }
    return userRef

}

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase