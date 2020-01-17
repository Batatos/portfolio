import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homecard from './components/Homecard';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Homecard />
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
