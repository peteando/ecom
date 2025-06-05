import React from 'react';

export default function How() {
  const steps = [
    {
      title: "Apply in Minutes",
      description: "Fill out a quick form — no endless paperwork or hassle.",
    },
    {
      title: "Get Fast Approval",
      description: "We review your info and get you a speedy decision.",
    },
    {
      title: "Sign and Finalise",
      description: "Sign your docs easily online or over the phone.",
    },
    {
      title: "Get Funded",
      description: "Get your money fast and get back to work!",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 ">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white p-6 pt-16 rounded-lg shadow-md">
              {/* Bigger Numbered Circle */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-[#d4040a] text-white flex items-center justify-center text-3xl font-bold shadow-md z-10">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold mb-2 mt-6">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
