import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../Auth/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticated) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/unauthorized',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
