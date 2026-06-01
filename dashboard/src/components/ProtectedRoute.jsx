import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {

  const [loading, setLoading] =
    useState(true);

  const [authenticated,
    setAuthenticated] =
    useState(false);

  useEffect(() => {

    axios
      .get(
        "http://localhost:3002/verify",
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setAuthenticated(true);
      })
      .catch(() => {
        window.location.href =
          "http://localhost:5173/login";
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return authenticated
    ? children
    : null;
};

export default ProtectedRoute;