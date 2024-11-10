import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import './App.css'; // Make sure you import the CSS file
import SignUp from "./components/SignUp";

function App() {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  // Function to toggle the visibility of the SignUp form
  const toggleSignUpForm = () => {
    setIsSignUpVisible(!isSignUpVisible);
  };

  return (
    <div className="app-container">
      {/* Pass toggleSignUpForm as prop to Header */}
      <Header onSignUpClick={toggleSignUpForm} />

      {/* Conditional rendering of the SignUp component */}
      {isSignUpVisible && <SignUp onClose={() => setIsSignUpVisible(false)} />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
