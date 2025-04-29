import React from 'react';

export default function Faq() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-violet-900">Frequently Asked Questions</h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Question 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Can I get a loan if I’m self-employed?</h3>
            <p className="text-gray-600">
              Absolutely. We specialise in helping self-employed tradies get the finance they need, even with low-doc options.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">What if my paperwork isn’t perfect?</h3>
            <p className="text-gray-600">
              No worries. We work with lenders who understand tradies — even if your tax returns or income docs aren’t up-to-date.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">How fast can I get approved?</h3>
            <p className="text-gray-600">
              In many cases, you can be conditionally approved within 24–48 hours after applying.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Do I need a deposit?</h3>
            <p className="text-gray-600">
              Not always. Some loans offer 100% finance depending on your situation — we’ll find the best option for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
