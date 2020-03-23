import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import AppContainer from "./containers/app-container";

import authentication, { googleAuthProvider } from "./services/authentication";

const providers = {
  googleProvider: googleAuthProvider
};

const App = (props: any) => <AppContainer {...props} />; // eslint-disable-line

export default withFirebaseAuth({
  providers,
  firebaseAppAuth: authentication()
})(App);
