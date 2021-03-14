import React from "react";
import { Route, Redirect } from "react-router-dom";
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUserLoggedIn = localStorage.getItem("userToken");
  return (
    <Route
      {...rest}
      render={(props) =>
        isUserLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
