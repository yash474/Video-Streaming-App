import React from 'react';
import { Routes, Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {

    
  return (

    !user ? children : <Navigate to={loggedInPath} replace={true} />
    // <Routes
    //   {...rest}
    //   render={() => {
    //     if (!user) {
    //         console.log("object")
    //       return children;
    //     }

    //     if (user) {
    //       return (
    //         <Navigate
    //           to={{
    //             pathname: loggedInPath,
    //           }}
    //         />
    //       );
    //     }

    //     return null;
    //   }}
    // />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Routes
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Navigate
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}