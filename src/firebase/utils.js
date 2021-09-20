import firebase from 'firebase/app'
import 'firebase/auth'

import { firebaseConfig } from './config'

const fire = firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
export const firestore = fire.firestore();



const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
















export default fire;

