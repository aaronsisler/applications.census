import React from "react";
import withFirebaseAuth, {
  WrappedComponentProps
} from "react-with-firebase-auth";
import AppContainer from "./containers/app-container";

import authentication, { googleAuthProvider } from "./services/authentication";

const providers = {
  googleProvider: googleAuthProvider
};

const App = (props: WrappedComponentProps) => <AppContainer {...props} />;

export default withFirebaseAuth({
  providers,
  firebaseAppAuth: authentication()
})(App);
