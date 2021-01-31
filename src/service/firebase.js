import firebase from "firebase";

import { firebaseConfig } from "../secret";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
