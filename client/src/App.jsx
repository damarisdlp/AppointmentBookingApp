import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Account from "./pages/Account";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
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
            element={user ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/booking"
            element={user ? <Booking /> : <Navigate to="/login" />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
