import React from "react";
import PropTypes from "prop-types";

import "./app-container.scss";
import { User } from "../../models/user";

const AppContainer = (props: Props): JSX.Element => {
  const { user, signOut, signInWithGoogle } = props;

  return (
    <div className="app-container">
      App Container
      {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
      {user ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

interface Props {
  user: User;
  signOut: () => void;
  signInWithGoogle: () => void;
}

AppContainer.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func,
  signInWithGoogle: PropTypes.func
};

export default AppContainer;
