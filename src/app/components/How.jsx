import React from 'react';

export default function How() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-violet-900">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-5xl font-bold text-violet-700 mb-4">1</div>
            <h3 className="text-2xl font-semibold mb-2">Apply in Minutes</h3>
            <p className="text-gray-600">
              Fill out a quick form — no endless paperwork or hassle.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-5xl font-bold text-violet-700 mb-4">2</div>
            <h3 className="text-2xl font-semibold mb-2">Get Fast Approval</h3>
            <p className="text-gray-600">
              We review your info and get you a speedy decision.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-5xl font-bold text-violet-700 mb-4">3</div>
            <h3 className="text-2xl font-semibold mb-2">Sign and Finalise</h3>
            <p className="text-gray-600">
              Sign your docs easily online or over the phone.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-5xl font-bold text-violet-700 mb-4">4</div>
            <h3 className="text-2xl font-semibold mb-2">Get Funded</h3>
            <p className="text-gray-600">
              Get your money fast and get back to work!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
