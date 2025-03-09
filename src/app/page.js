// app/page.js
import React from 'react';
import Hero from '../app/components/Hero.jsx'
import About from '../app/components/About'
import Work from './components/Work';
import Contact from './components/Contact';


const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      
      <Work />
      <Contact />
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;
