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
        about={true}
      />
      <Section
        title="EXPERIENCE"
        subtitle={dummyText}
        dark={true}
        id="section2-content"
        experience={true}
      />
      <Section
        title="EDUCATION"
        subtitle={dummyText}
        dark={false}
        id="section3-content"
        education={true}
      />
      <Section
        title="SKILLS"
        subtitle={dummyText}
        dark={true}
        id="section4-content"
      />
      <Section
        title="INTERESTS"
        subtitle={dummyText}
        dark={false}
        id="section5-content"
      />
      <Footer/>
    </div>
  );
}

export default App;
