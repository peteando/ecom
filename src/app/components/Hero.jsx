import React from 'react';
import Image from "next/image";

function Hero() {
  return (
    <section
    className="bg-amber-50 py-20 bg-center bg-contain bg-no-repeat"
    style={{ backgroundImage: "url('/images/peterportfolio.svg')" }}
  >
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left">
          <h1 className="text-6xl font-bold text-[#1f2941] leading-tight">
            Hey There,<br /> I'm Peter
          </h1>
          <h2 className="text-4xl mt-4 text-[#bf7e6a] leading-snug">
            I am a web developer <br /> and graphic designer
          </h2>
          <a
            href="#contact"
            className="inline-block mt-6 bg-[#1f2941] hover:bg-[#1f2941] text-white font-semibold py-3 px-6 rounded shadow-md transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Hero;
