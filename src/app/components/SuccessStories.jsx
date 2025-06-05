import React from 'react';

export default function SuccessStories() {
  const stories = [
    {
      quote: "I got my ute funded in two days. No headaches, no paperwork nightmares!",
      name: "Dan",
      role: "Electrician from Wagga Wagga",
    },
    {
      quote: "They understood my situation as a new ABN holder. Got me approved when others said no.",
      name: "Rita",
      role: "Solo Sparkie from Brisbane",
    },
    {
      quote: "Fast, friendly, and professional. I’ve already recommended them to three mates.",
      name: "Tony",
      role: "Commercial Electrician from Geelong",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold  mb-4">Real Sparkies. Real Results.</h2>
        <p className="text-gray-600 mb-12">
          Electricians across Australia are growing their businesses with our help. Here's what they say:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md text-left">
              <p className="text-gray-800 italic mb-4">"{story.quote}"</p>
              <h3 className="text-lg font-semibold ">{story.name}</h3>
              <p className="text-sm text-gray-500">{story.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
