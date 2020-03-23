import * as firebase from "firebase/app";
import "firebase/auth";

import { firebaseConfig } from "../config";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const authentication = (): firebase.auth.Auth => {
  const auth = firebaseApp.auth();
  auth.onAuthStateChanged(async user => {
    if (user) {
      console.log(user);
    } else {
      console.log("taco");
    }
  });

  return auth;
};

export { authentication as default, googleAuthProvider };
