import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ path, ...props }) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuth === "true");
  }, []);
  

  return isAuthenticated ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/signin" replace state={{ from: path }} />
  );
}

export default ProtectedRoute;
