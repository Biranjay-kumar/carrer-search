import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || user.role !== "recruiter") {
      navigate("/");
	  toast.error("You are not a recruiter")
    }
  }, [user, navigate]); // Added dependencies to the useEffect

  return <>{children}</>; // Corrected the way to render children
};

export default ProtectedRoute;
