import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
   var isAuthenticated = false;
    const token = localStorage.token;
    // console.log(token);
    if (token) {
        isAuthenticated = true;
    } else {
        isAuthenticated = false;
    }
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
