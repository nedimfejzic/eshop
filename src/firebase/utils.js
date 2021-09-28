import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { firebaseConfig } from './config'
const fire = firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
export const firestore = fire.firestore();

/////////////////////////    google sign in

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

//////////////////              handling user

export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const { uid } = userAuth;
    const userRef =  await firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();


    if (!snapshot.exists) {
        const {email } = userAuth;
        const timestamp = new Date();
        const userRoles = ['user'];

        try {
            await userRef.set({
                email,
                userRoles,
                createdDate: timestamp,
                ...additionalData
            })

        } catch (err) {
            console.log(err)
        }
    }

    return userRef;
}





export default fire;

