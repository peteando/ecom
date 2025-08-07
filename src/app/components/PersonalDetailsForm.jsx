'use client';

import React, { useState } from 'react';

export default function PersonalDetailsForm({ formData = {}, setFormData, onBack, onNext }) {
  const [details, setDetails] = useState({
    name: formData.name || '',
    email: formData.email || '',
    phone: formData.phone || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();  // Prevent page reload


  setFormData({
    ...formData,
    name: details.name,
    email: details.email,
    phone: details.phone,
  });

  onNext(); // Tell parent to move to next step
};

  return (
    <form onSubmit={handleNext} className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Your Contact Details</h2>

      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          value={details.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={details.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={details.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="px-6 py-2 border-gray-300  rounded hover:bg-gray-100"
          >
          Next
        </button>
      </div>
    </form>
  );
}
