import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          {" "}
          {/* This is where you define your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
          <Footer />
    </div>
  );
}

export default App;
