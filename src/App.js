import jetski from './jetski.jpg';
import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <nav className='nav'>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#blog'>Blog</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <img src={jetski} className='jetSki-pic' alt='jetski'/>
        
        <p>
          SeaDoo Wake Pro.
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
      </header>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
