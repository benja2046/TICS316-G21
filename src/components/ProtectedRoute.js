import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      element={loggedIn ? <Component /> : <Navigate to="/" replace />}
    />
  );
};

export default ProtectedRoute;
