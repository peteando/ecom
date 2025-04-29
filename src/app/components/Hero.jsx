import React from 'react';
import Image from "next/image";

function Hero() {
  return (
    <section
    className="bg-sky-100 py-20 bg-center bg-contain bg-no-repeat"
    
  >
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left">
          <h1 className="text-6xl font-bold text-violet-950 leading-tight">
          Loans Built for Tradies. Fast, Easy, No BS.
          </h1>
          <h2 className="text-2xl mt-4 text-indigo-700 leading-snug">
          Get the wheels, tools, or home you need — without the bank runaround. We make finance simple for hardworking tradies across Australia.
          </h2>
          <a
            href="#contact"
            className="inline-block mt-6 bg-pink-500 hover:bg-[#1f2941] text-white font-semibold py-3 px-6 rounded shadow-md transition"
          >
            Request a Free Quote
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Hero;
