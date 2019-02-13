import firebase from "firebase";
import app from "@firebase/app";

import "firebase/storage";

import "firebase/auth";
var config = {
  apiKey: "AIzaSyDoLs71fG35r4XmhV6Gi1v6wXvRkjrbRFU",
  authDomain: "demoapp-40529.firebaseapp.com",
  databaseURL: "https://demoapp-40529.firebaseio.com",
  projectId: "demoapp-40529",
  storageBucket: "demoapp-40529.appspot.com",
  messagingSenderId: "595325364226"
};
var fire = firebase.initializeApp(config);
const storage = firebase.storage();
//export default firebase;

export const provider = new firebase.auth.EmailAuthProvider();
export const auth = firebase.auth();
//export default fire;
export { storage, firebase as default };
