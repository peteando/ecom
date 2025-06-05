import React from 'react';

export default function Faq() {
  const faqs = [
    {
      question: "How fast can I get approved?",
      answer: "In many cases, approvals happen within 24–48 hours, depending on your documents.",
    },
    {
      question: "Do I need a full business history?",
      answer: "Nope. We work with new ABNs and sole traders all the time.",
    },
    {
      question: "What can I use the loan for?",
      answer: "Tools, utes, invoices, personal use — pretty much anything legal and sensible.",
    },
    {
      question: "Will applying affect my credit score?",
      answer: "No. Initial checks are “soft” and won’t impact your credit.",
    },
    {
      question: "Can I talk to someone before applying?",
      answer: "Absolutely. We’re happy to chat and walk you through your options.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold  mb-6 text-center">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center mb-12">
          Got questions? We've got answers. Here’s what sparkies ask us most.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold  mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
