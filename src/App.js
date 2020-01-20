import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homecard from './components/Homecard';
import Profilecard from './components/Profilecard';
import DrawerBar from './components/DrawerBar';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="container">
      <DrawerBar />
      {/* <Homecard /> */}
      <Profilecard />
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
