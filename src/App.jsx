// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <div className="landing-page">
          <header>
            <div className="container">
              <a href="#" className="logo">
                Your <b>Website</b>
              </a>
              <ul className="links">
                <li>
                  <Link to="/">Landing Page</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>Get Started</li>
              </ul>
            </div>
          </header>
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
