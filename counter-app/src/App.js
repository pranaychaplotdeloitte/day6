// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import AboutUs from './Pages/ContactUs'; // Ensure this is the correct path
import Random from './Pages/Random';
import Counter from './Pages/Counter';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/random" element={<Random />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};

export default App;
