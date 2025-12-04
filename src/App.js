import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Installationform from "./Pages/InstallationForm.jsx";
import Login from "./Pages/Login.jsx";

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Routes>
        {/* Default route – redirects to login or form based on user login */}
        <Route
          path="/"
          element={<Navigate to={user ? "/installation-form" : "/login"} replace />}
        />

        {/* Login Route */}
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/installation-form" replace />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )
          }
        />

        {/* Installation Form Route (protected) */}
        <Route
          path="/installation-form"
          element={
            user ? (
              <Installationform onLogout={handleLogout} user={user} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
