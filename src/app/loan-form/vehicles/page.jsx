'use client';

import { useState } from 'react';

export default function VehicleLoanForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    abn: '',
    amount: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted form:', formData);
    alert('Thanks! A broker will be in touch shortly.');
    // TODO: send formData to backend or email service
  };

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Vehicle & Ute Loan Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input type="text" name="name" required onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input type="tel" name="phone" required onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input type="email" name="email" required onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Business Name (optional)</label>
          <input type="text" name="businessName" onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">ABN (optional)</label>
          <input type="text" name="abn" onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Loan Amount Needed</label>
          <input type="number" name="amount" required onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Vehicle details or purpose <span className="text-gray-500">(optional)</span>
          </label>
          <textarea name="description" rows="3" onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
          Submit Application
        </button>
      </form>
    </main>
  );
}
