import React, { useRef } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const footerRef = useRef(null);
  return (
    <div className="App">
      <NavBar  footerRef={footerRef}/>
      <Banner footerRef={footerRef}/>
      <Skills />
      <Projects />
      <Footer ref={footerRef}/>
    </div>
  );
}

export default App;
