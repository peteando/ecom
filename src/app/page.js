// app/page.js
import React from 'react';
import Hero from '../app/components/Hero.jsx'
import How from './components/How';
import LoanTypes from './components/LoanTypes.jsx';
import Trust from './components/Trust.jsx';
import SuccessStories from './components/SuccessStories.jsx';
import Faq from './components/Faq.jsx';
import Cta from './components/Cta.jsx';
import LeadCapture from './components/LeadCapture.jsx';



const HomePage = () => {
  return (
    <div>
      <Hero />
      <How/>
      <LoanTypes/>
      <Trust/>
      <SuccessStories/>
      <Faq/>
      <Cta/>
      <LeadCapture/>
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;
