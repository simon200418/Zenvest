import { Routes, Route } from "react-router-dom";

import HomePage from "./landing_page/home/HomePage";
import Login from "./landing_page/auth/Login";
import Signup from "./landing_page/auth/Signup";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

    </Routes>
  );
}

export default App;