import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Section from './components/Section';
import Navbar from './components/Navbar';
import dummyText from './DummyText';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Section
        title="Section 1"
        subtitle={dummyText}
        dark={false}
        id="section1"
      />
      {/* <Section
        title="Section 2"
        subtitle={dummyText}
        dark={true}
        id="section2"
      />
      <Section
        title="Section 3"
        subtitle={dummyText}
        dark={false}
        id="section3"
      /> */}
      <Footer/>
    </div>
  );
}

export default App;
