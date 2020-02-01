import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Section from './components/Section';
import Navbar from './components/Navbar';
import dummyText from './DummyText';
import PersonalPara from './PersonalPara';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Section
        title="Ahed"
        lastName="Istaitih"
        city="NAZARETH - "
        email="AHED.IST@GMAIL.COM"
        paragraph={PersonalPara}
        dark={false}
        socialIcons={true}
        id="section1-content"
      />
      <Section
        title="Section 2"
        subtitle={dummyText}
        dark={true}
        id="section2-content"
      />
      <Section
        title="Section 3"
        subtitle={dummyText}
        dark={false}
        id="section3-content"
      />
      <Footer/>
    </div>
  );
}

export default App;
