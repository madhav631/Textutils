import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    // Toggle mode between light and dark
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
    // Update body background color based on mode
    document.body.style.backgroundColor = mode === "light" ? "#192d42" : "white";
  };

  return (
    <Router>
      <Navbar title="TextUtil" about="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert="This is Alert" />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About about="About us" mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
