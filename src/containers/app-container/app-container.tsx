import React from "react";
import { WrappedComponentProps } from "react-with-firebase-auth";
import PropTypes from "prop-types";

import "./app-container.scss";

const AppContainer = (props: WrappedComponentProps): JSX.Element => {
  const { user, signOut, signInWithGoogle } = props;

  return (
    <div className="app-container">
      {user ? (
        <div>
          <p>Hello, {user.displayName}</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in.</p>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
};

AppContainer.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired
};

export default AppContainer;
