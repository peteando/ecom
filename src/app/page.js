// app/page.js
import React from 'react';
import Hero from '../components/Hero.jsx';
import Categories from '../components/Categories.jsx';

import BestSellers from '../components/Bestsellers.jsx';
import BestSellers2 from '@/components/Bestsellers2.jsx';
import Brands from '../components/Brands.jsx';




const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories/>
      
      <BestSellers/>
      <BestSellers2/>
      <Brands/>
      
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;
