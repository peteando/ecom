'use client';

import React from 'react';

export default function GetLoanReady() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Get Loan Ready</h1>

      <p className="text-gray-700 mb-4">
        Whether you're buying a van, upgrading your tools, or looking to secure a home loan — getting loan ready means
        understanding how lenders see you, what paperwork you need, and how to present yourself in the best light.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Know Your Income</h2>
        <p className="text-gray-700">
          Sparkies often have irregular income. Lenders prefer to see 6–12 months of consistent earnings. BAS statements,
          tax returns, and business bank statements help prove your income.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Get Your Paperwork Together</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>ABN details (if self-employed)</li>
          <li>Tax returns (last 2 years if possible)</li>
          <li>Business Activity Statements (BAS)</li>
          <li>Invoices or contracts showing upcoming work</li>
          <li>Bank statements (personal + business)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Understand Your Credit Position</h2>
        <p className="text-gray-700">
          Check your credit score for free. Try to reduce credit card debt or personal loans before applying. Brokers can
          help you improve your application strength.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Talk to a Broker Early</h2>
        <p className="text-gray-700">
          The sooner you speak to a broker, the better. We’ll help you structure your application, choose the right lender,
          and avoid surprises.
        </p>
      </section>

      <div className="mt-10">
        <a
          href="/apply"
          className="inline-block bg-[#d4040a] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
        >
          Apply Now
        </a>
      </div>
    </main>
  );
}
