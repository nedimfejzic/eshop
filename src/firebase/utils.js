import firebase from 'firebase/app'
import 'firebase/auth'

import { firebaseConfig } from './config'

const fire = firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
export default fire;


