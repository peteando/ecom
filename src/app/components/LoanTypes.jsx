import React from 'react';

export default function LoanTypes() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-violet-900">Loan Types We Offer</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Vehicle Loans */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Vehicle & Ute Loans</h3>
            <p className="text-gray-600">
              Get behind the wheel of your next workhorse — fast approvals for utes, vans, and trucks.
            </p>
          </div>

          {/* Equipment Finance */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Tool & Equipment Finance</h3>
            <p className="text-gray-600">
              Need new gear? We make it easy to finance tools, trailers, machinery and more.
            </p>
          </div>

          {/* Business Loans */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Business Loans</h3>
            <p className="text-gray-600">
              Grow your tradie business with flexible working capital loans and expansion funding.
            </p>
          </div>

          {/* Home Loans */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Home Loans for Tradies</h3>
            <p className="text-gray-600">
              Whether you’re buying your first home or upgrading, we help tradies get approved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
