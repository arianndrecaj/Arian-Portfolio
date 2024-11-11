import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css"; // Import your global CSS

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  // Toggle dark mode state
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  // Apply dark mode to the body when the theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode"); // Add dark mode class to body
    } else {
      document.body.classList.remove("dark-mode"); // Remove dark mode class
    }
  }, [isDarkMode]);

  return (
    <div>
      {/* Pass dark mode state to Header and About */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Centralized sections for one-page layout */}
      <main>
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode}/>
      </main>
    </div>
  );
}

export default App;
