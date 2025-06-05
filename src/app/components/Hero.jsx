import React from 'react';
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-cyan-950 py-20 bg-center bg-contain bg-no-repeat">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          
          {/* Left Column */}
          <div className="md:w-1/2 text-left mb-10 md:mb-0">
            <h1 className="text-6xl font-bold text-white mt-40 leading-tight">
              Power Your Business With The Right Loan
            </h1>
            <h2 className="text-2xl mt-4 text-white leading-snug">
              We help electricians like you access fast, affordable finance — without the hassle.
            </h2>
            <a
              href="#contact"
              className="inline-block mt-6 bg-[#d4040a] hover:bg-[#cc0000] text-white font-semibold py-3 px-6 rounded shadow-md transition"
            >
              Request a Free Quote
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 flex justify-center">
          <img src="/images/globe.svg" alt="Description of image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
