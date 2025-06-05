import React from 'react';

export default function Trust() {
  return (
    <section className="py-16 bg-cyan-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">Why Sparkies Trust Us</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Trust Point 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Fast Approvals</h3>
            <p className="text-gray-600">
              No long waits — we move quickly so you can get back to business.
            </p>
          </div>

          {/* Trust Point 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Low Doc Options</h3>
            <p className="text-gray-600">
              Self-employed? No dramas. We offer flexible low-doc and no-doc loan options.
            </p>
          </div>

          {/* Trust Point 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Real Aussie Support</h3>
            <p className="text-gray-600">
              Talk to real people who get tradies — no confusing banking jargon here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
