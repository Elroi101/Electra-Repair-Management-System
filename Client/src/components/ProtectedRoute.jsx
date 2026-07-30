import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const [authStatus, setAuthStatus] = useState("checking"); // "checking" | "authed" | "unauthed"

  useEffect(() => {
    axios
      .get(`${API_URL}/me`, { withCredentials: true })
      .then(() => setAuthStatus("authed"))
      .catch(() => setAuthStatus("unauthed"));
  }, []);

  if (authStatus === "checking") {
    return <p className="text-center py-12 font-sans text-sm text-[#8a817cff]">Checking session...</p>;
  }

  return authStatus === "authed" ? children : <Navigate to="/SignIn" replace />;
};

export default ProtectedRoute;
