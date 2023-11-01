import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Account from "./pages/Account";
import mockUsers from "./mockData";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (authenticatedUser) => {
    setUser(authenticatedUser);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/home");
  };

  const handleUpdateUser = (editedUser) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...editedUser,
    }));
  };

  return (
    <>
      <Header user={user} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/login"
            element={
              user ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/booking"
            element={
              user ? (
                <Booking user={user} onUpdateUser={handleUpdateUser} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/account"
            element={
              user ? (
                <Account user={user} onUpdateUser={handleUpdateUser} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
