import React from 'react';

export default function Cta() {
  return (
    <section className="py-16 bg-[#d4040a]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
        <p className="text-lg text-violet-100 mb-8">
          Fast approvals, flexible options, and real support for Aussie tradies.
        </p>

        <a
          href="#contact" // <-- you can change this to your form section ID
          className="inline-block bg-white text-violet-900 font-semibold py-4 px-8 rounded-full shadow-md hover:bg-violet-100 transition"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}
